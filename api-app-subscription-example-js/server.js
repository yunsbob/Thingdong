require("dotenv").config();
const path = require("path");
const express = require("express");
const cookieSession = require("cookie-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const encodeUrl = require("encodeurl");
const baseUrl = "https://api.smartthing.com";
const SSE = require("express-sse");
const FileContextStore = require("@smartthings/file-context-store");
const SmartApp = require("@smartthings/smartapp");

const port = process.env.PORT || 3000;
const appId = process.env.APP_ID;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const serverUrl = process.env.SERVER_URL;
const apiUrl = process.env.API_URL || "https://api.smartthings.com";
const redirectUri = `${serverUrl}/oauth/callback`;
const scope = encodeUrl("r:locations:* r:devices:* x:devices:*");

/*
 * Server-sent events. Used to update the status of devices on the web page from subscribed events
 */
const sse = new SSE();

/**
 * Stores access tokens and other properties for calling the SmartThings API. This implementation is a simple flat file
 * store that is for demo purposes not appropriate for production systems. Other context stores exist, including
 * DynamoDB and Firebase.
 */
const contextStore = new FileContextStore("data");

/*
 * The SmartApp. Provides an API for making REST calls to the SmartThings platform and
 * handles calls from the platform for subscribed events as well as the initial app registration challenge.
 */
const apiApp = new SmartApp()
  .appId(appId)
  .clientId(clientId)
  .clientSecret(clientSecret)
  .contextStore(contextStore)
  .redirectUri(redirectUri)
  .enableEventLogging(2)
  .subscribedEventHandler("temperatureHandler", async (ctx, event) => {
    console.log("temperatureHandler change");
    if (event.value >= 30) {
      console.log(
        `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
      );
      sse.send({
        event: event,
        deviceId: event.deviceId,
        switchState: event.value,
      });
    }
  })
  .subscribedEventHandler("humidityHandler", async (ctx, event) => {
    console.log("humidityHandler change");
    if (event.value >= 60) {
      console.log(
        `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
      );
      sse.send({
        event: event,
        deviceId: event.deviceId,
        switchState: event.value,
      });
    }
  })
  .subscribedEventHandler("colorHandler", async (ctx, event) => {
    console.log("color change");
    console.log(
      `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
    );
  })
  .subscribedEventHandler("switchHandler", async (ctx, event) => {
    // console.log(777, event.deviceId)
    // console.log(888, ctx)
    /* Device event handler. Current implementation only supports main component switches */
    if (event.componentId === "main") {
      try {
        sse.send({
          event: event,
          deviceId: event.deviceId,
          switchState: event.value,
        });
      } catch (e) {
        console.log(e.message);
      }
    }
    console.log(
      `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
    );
  });

/*
 * Webserver setup
 */
const server = express();
server.set("views", path.join(__dirname, "views"));
server.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);
server.set("view engine", "ejs");
server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "public")));

// Needed to avoid flush error with express-sse and newer versions of Node
server.use(function (req, res, next) {
  res.flush = function () {
    /* Do nothing */
  };
  next();
});

/*
 * Handles calls to the SmartApp from SmartThings, i.e. registration challenges and device events
 */
server.post("/", async (req, res) => {
  apiApp.handleHttpCallback(req, res);
});

/*
 * Main web page. Shows link to SmartThings if not authenticated and list of switch devices afterwards
 */
server.get("/", async (req, res) => {
  console.log(req.session);
  if (req.session.smartThings) {
    // Cookie found, display page with list of devices
    // 되어있으면 장치 정보 불러옴
    const data = req.session.smartThings;
    res.render("devices", {
      data: data,
      installedAppId: data.installedAppId,
      locationName: data.locationName,
    });
  } else {
    // No context cookie. Display link to authenticate with SmartThings
    // 로그인 안 되어있으면 로그인 시킴
    res.render("index", {
      url: `${apiUrl}/oauth/authorize?client_id=${clientId}&scope=${scope}&response_type=code&redirect_uri=${redirectUri}`,
    });
  }
});

/**
 * Returns view model data for the devices page
 */
server.get("/viewData", async (req, res) => {
  const data = req.session.smartThings;

  // Read the context from DynamoDB so that API calls can be made
  const ctx = await apiApp.withContext(data.installedAppId);
  try {
    // Get the list of switch devices, which doesn't include the state of the switch
    const deviceList = await ctx.api.devices.list({ capability: "switch" });
    // Query for the state of each one
    // console
    const ops = deviceList.map((it) => {
      return ctx.api.devices
        .getCapabilityStatus(it.deviceId, "main", "switch")
        .then((state) => {
          return {
            // event: it,
            deviceId: it.deviceId,
            ownerId: it.ownerId,
            label: it.label,
            switchState: state.switch.value,
          };
        });
    });

    // Wait for all those queries to complete
    const devices = await Promise.all(ops);

    // Respond to the request
    res.send({
      errorMessage:
        devices.length > 0 ? "" : "No switch devices found in location",
      devices: devices.sort((a, b) => {
        return a.label === b.label ? 0 : a.label > b.label ? 1 : -1;
      }),
    });
  } catch (error) {
    res.send({
      errorMessage: `${error.message || error}`,
      devices: [],
    });
  }
});

/*
 * Logout. Uninstalls app and clears context cookie
 */
server.get("/logout", async function (req, res) {
  try {
    // Read the context from DynamoDB so that API calls can be made
    const ctx = await apiApp.withContext(
      req.session.smartThings.installedAppId
    );

    // Delete the installed app instance from SmartThings
    await ctx.api.installedApps.delete();
  } catch (error) {
    console.error("Error logging out", error.message);
  }
  // Delete the session data
  req.session = null;
  res.redirect("/");
});

/*
 * Handles OAuth redirect
 */
server.get("/oauth/callback", async (req, res, next) => {
  try {
    // Store the SmartApp context including access and refresh tokens. Returns a context object for use in making
    // API calls to SmartThings
    const ctx = await apiApp.handleOAuthCallback(req);

    // Get the location name (for display on the web page)
    const location = await ctx.api.locations.get(ctx.locationId);

    // Set the cookie with the context, including the location ID and name
    req.session.smartThings = {
      locationId: ctx.locationId,
      locationName: location.name,
      installedAppId: ctx.installedAppId,
    };

    // Remove any existing subscriptions and unsubscribe to device switch events
    await ctx.api.subscriptions.delete();
    await ctx.api.subscriptions.subscribeToCapability(
      "colorControl",
      "*",
      "colorHandler"
    );
    await ctx.api.subscriptions.subscribeToCapability(
      "switch",
      "switch",
      "switchHandler"
    );
    await ctx.api.subscriptions.subscribeToCapability(
      "temperatureMeasurement",
      "*",
      "temperatureHandler"
    );
    await ctx.api.subscriptions.subscribeToCapability(
      "relativeHumidityMeasurement",
      "*",
      "humidityHandler"
    );

    // Redirect back to the main page
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

/**
 * Executes a device command from the web page
 */
// server.post("/command/:deviceId", async (req, res, next) => {
//   try {
//     // Read the context from DynamoDB so that API calls can be made
//     const ctx = await apiApp.withContext(
//       req.session.smartThings.installedAppId
//     );

//     // Execute the device command
//     await ctx.api.devices.executeCommands(
//       req.params.deviceId,
//       req.body.commands
//     );
//     res.send({});
//   } catch (error) {
//     next(error);
//   }
// });

/**
 * Executes a command for all devices
 */
// server.post("/commands", async (req, res) => {
//   console.log(JSON.stringify(req.body.commands, null, 2));
//   // Read the context from DynamoDB so that API calls can be made
//   const ctx = await apiApp.withContext(req.session.smartThings.installedAppId);

//   const devices = await ctx.api.devices.list({ capability: "switch" });
//   const ops = [];
//   for (const device of devices) {
//     ops.push(
//       ctx.api.devices.executeCommands(device.deviceId, req.body.commands)
//     );
//   }
//   await Promise.all(ops);

//   res.send({});
// });

/**
 * Handle SSE connection from the web page
 */
server.get("/events", sse.init);

server.use(bodyParser.json());

// handle all incoming requests to our app
// server.post("/", function (req, resp, err) {
//   let evt = req.body;
//   let lifecycle = evt.lifecycle;
//   let res = null;

//   switch (lifecycle) {
//     case "CONFIGURE":
//       res = handleConfig(evt.configurationData);
//       resp.json({ statusCode: 200, configurationData: res });
//       break;
//     case "INSTALL":
//       handleInstall(evt.installData.installedApp, evt.installData.authToken);
//       resp.json({ statusCode: 200, installData: {} });
//       break;

//     // handle other lifecycles...

//     default:
//       console.log(`lifecycle ${lifecycle} not supported`);
//   }
// });

function handleConfig(configData) {
  if (!configData.config) {
    throw new Error("No config section set in request.");
  }
  let config = {};
  const phase = configData.phase;
  const pageId = configData.pageId;
  const settings = configData.config;
  switch (phase) {
    case "INITIALIZE":
      config.initialize = createConfigInitializeSetting();
      break;
    case "PAGE":
      config.page = createConfigPage(pageId, settings);
      break;
    default:
      throw new Error(`Unsupported config phase: ${phase}`);
      break;
  }
  return config;
}

function createConfigInitializeSetting() {
  return {
    name: "Your app name",
    description: "Some app description",
    id: "app",
    permissions: ["r:devices"], // Need permission to read all devices
    firstPageId: "1",
  };
}

/**
 * Creates a simple one page configuration screen where the user can
 * select a contact sensor device, and we will request read access to this
 * device.
 */
function createConfigPage(pageId, currentConfig) {
  if (pageId !== "1") {
    throw new Error(`Unsupported page name: ${pageId}`);
  }

  return {
    // some page info for other configuration needed
  };
}

/**
 * Once the user has selected the device and agreed to the requested
 * permissions, our app will create a subscription for the "open" value
 * of the "contact" attribute for the contact sensor.
 */
function handleInstall(installedApp, authToken) {
  let deviceConfig = installedApp.config.contactSensor[0].deviceConfig;
  createSubscription(deviceConfig);
}

function createSubscription(deviceConfig, authToken) {
  const path = `/installedapps/${installedApp.installedAppId}/subscriptions`;

  let subRequest = {
    sourceType: "CAPABILITY",
    capability: {
      locationId: "76fa4215-f9f5-4532-897e-5207db0da124",
      capability: "contactSensor",
      attribute: "contact",
      value: "*",
      stateChangeOnly: true,
      subscriptionName: "all_contacts_sub",
    },
  };

  request.post(
    {
      url: `${baseUrl}${path}`,
      json: true,
      body: subRequest,
      headers: {
        Authorization: "Bearer " + authToken,
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("subscription created");
      } else {
        console.log("failed to created subscriptions");
        console.log(error);
      }
    }
  );
}

/**
 * If the user has updated their configuration, for example they may
 * have selected a different contact sensor, we need to delete the
 * old subscriptions and create a new subscription.
 */
function handleUpdate(installedApp, authToken) {
  // no need to handle capability subscriptions in update.
}

/**
 * Start the HTTP server and log URLs. Use the "open" URL for starting the OAuth process. Use the "callback"
 * URL in the API app definition using the SmartThings Developer Workspace.
 */
server.listen(port);
console.log(
  `\nTarget URL -- Copy this value into the targetUrl field of you app creation request:\n${serverUrl}\n`
);
console.log(
  `Redirect URI -- Copy this value into redirectUris field of your app creation request:\n${redirectUri}\n`
);
console.log(
  `Website URL -- Visit this URL in your browser to log into SmartThings and connect your account:\n${serverUrl}`
);
