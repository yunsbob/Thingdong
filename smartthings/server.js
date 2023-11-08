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
const contextStore = new FileContextStore("data");
const userSSEStreams = new Map();
const apiApp = new SmartApp()
  .appId(appId)
  .clientId(clientId)
  .clientSecret(clientSecret)
  .contextStore(contextStore)
  .redirectUri(redirectUri)
//   .enableEventLogging(2)
  .subscribedEventHandler("switchLevelHandler", async (ctx, event) => {
    // 밝기 조절
    console.log("switchLevel change");
    if (event.componentId === "main") {
      const locationId = ctx.locationId;
      const sse = userSSEStreams.get(locationId);
      if (sse && event.locationId == ctx.locationId) {
        try {
          sse.send({
            event: event,
            deviceId: event.deviceId,
            switchState: event.value,
          });
        } catch (e) {
          console.log(e.message);
        }
        console.log(
          `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
        );
      }
    }
  })
  .subscribedEventHandler("temperatureHandler", async (ctx, event) => {
    // 온도 조절
    console.log("temperature change");
    if (event.componentId === "main") {
      if (event.value >= 30) {
        const locationId = ctx.locationId;
        const sse = userSSEStreams.get(locationId);
        if (sse && event.locationId == ctx.locationId) {
          try {
            sse.send({
              event: event,
              deviceId: event.deviceId,
              switchState: event.value,
            });
          } catch (e) {
            console.log(e.message);
          }
          console.log(
            `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
          );
        }
      }
    }
  })
  .subscribedEventHandler("humidityHandler", async (ctx, event) => {
    // 습도 조절
    console.log("humidity change");

    if (event.componentId === "main") {
      if (event.value >= 65) {
        const locationId = ctx.locationId;
        const sse = userSSEStreams.get(locationId);
        if (sse && event.locationId == ctx.locationId) {
          try {
            sse.send({
              event: event,
              deviceId: event.deviceId,
              switchState: event.value,
            });
          } catch (e) {
            console.log(e.message);
          }
          console.log(
            `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
          );
        }
      }
    }
  })
  .subscribedEventHandler("colorHandler", async (ctx, event) => {
    // 색상 조절
    console.log("color change");
    if (event.componentId === "main") {
      const locationId = ctx.locationId;
      const sse = userSSEStreams.get(locationId);
      if (sse && event.locationId == ctx.locationId) {
        try {
          sse.send({
            event: event,
            deviceId: event.deviceId,
            switchState: event.value,
          });
        } catch (e) {
          console.log(e.message);
        }
        console.log(
          `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
        );
      }
    }
    console.log("color change");
    console.log(
      `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
    );
  })
  .subscribedEventHandler("switchHandler", async (ctx, event) => {
    // 스위치 온오프
    console.log("switch change");
    if (event.componentId === "main") {
      //   const ctx2 = await apiApp.withContext(ctx.installedAppId);
      const locationId = ctx.locationId;
      const sse = userSSEStreams.get(locationId);
      if (sse && event.locationId == ctx.locationId) {
        try {
          sse.send({
            event: event,
            deviceId: event.deviceId,
            switchState: event.value,
          });
        } catch (e) {
          console.log(e.message);
        }
        console.log(
          `EVENT ${event.deviceId} ${event.componentId}.${event.capability}.${event.attribute}: ${event.value}`
        );
      }
    }
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
  res.flush = function () {};
  next();
});

server.post("/", async (req, res) => {
  apiApp.handleHttpCallback(req, res);
});

/*
 * Main web page. Shows link to SmartThings if not authenticated and list of switch devices afterwards
 */
server.get("/", async (req, res) => {
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
    // 스위치만
    // const deviceList = await ctx.api.devices.list({ capability: "switch" });
    // 전체 기기
    const deviceList = await ctx.api.devices.list();
    const ops = deviceList.map((it) => {
      return (
        ctx.api.devices
          .getStatus(it.deviceId)
          // .getCapabilityStatus(it.deviceId, "main", "switch")
          .then((state) => {
            return {
              // event: it,
              deviceId: it.deviceId,
              ownerId: it.ownerId,
              label: it.label,
              // switchState: state.switch.value,
            };
          })
      );
    });

    // Wait for all those queries to complete
    const devices = await Promise.all(ops);

    // Respond to the request
    res.send({
      installedAppId: data.installedAppId,
      locationId: ctx.api.config.locationId,
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
    const sse = new SSE();

    userSSEStreams.set(ctx.locationId, sse);
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
    await ctx.api.subscriptions.subscribeToCapability(
      "switchLevel",
      "*",
      "switchLevelHandler"
    );
    // Redirect back to the main page
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});
server.get("/events", (req, res) => {
  const ctx = req.session.smartThings;
  const userSSE = userSSEStreams.get(ctx.locationId);

  // If the user has a specific SSE stream, use it; otherwise, use the default SSE stream
  if (userSSE) {
    userSSE.init(req, res);
  } else {
    sse.init(req, res);
  }
});

server.use(bodyParser.json());

server.listen(port);
console.log(
  `\nTarget URL -- Copy this value into the targetUrl field of you app creation request:\n${serverUrl}\n`
);
