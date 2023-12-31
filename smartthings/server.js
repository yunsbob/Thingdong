require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const encodeUrl = require("encodeurl");
const SSE = require("express-sse");
const FileContextStore = require("@smartthings/file-context-store");
const SmartApp = require("@smartthings/smartapp");
const { stat } = require("fs");

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
let globalSSE;
const smartApp = new SmartApp()
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
      globalSSE = sse;
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
        globalSSE = sse;
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
        globalSSE = sse;
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
      globalSSE = sse;
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
  .subscribedEventHandler("switchHandler", async (ctx, event) => {
    console.log("switch change");
    if (event.componentId === "main") {
      const locationId = ctx.locationId;
      const sse = userSSEStreams.get(locationId);
      globalSSE = sse;
      console.log(55, globalSSE);
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

server.use(cors());

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

server.post("/smart", async (req, res) => {
  req.url = req.originalUrl;
  smartApp.handleHttpCallback(req, res);
});

/**
 * 메인(기기 전체 리스트 + 상태 + 카테고리)
 */
server.get("/smart", async (req, res) => {
  const ctx = await smartApp.withContext(req.headers.installedappid);
  try {
    const deviceList = await ctx.api.devices.list();
    const ops = deviceList
      .filter((it) => it.components[0].categories[0].name != "Charger")
      .map(async (it) => {
        const health = await ctx.api.devices
          .getHealth(it.deviceId)
          .then((state) => {
            return state.state;
          });
        return ctx.api.devices.getStatus(it.deviceId).then((state) => {
          let humidityStatus = "";
          let temperatureStatus = "";
          let levelStatus = "";
          let hueStatus = "";
          let saturationStatus = "";
          let status = health;
          let imgUrl = "";
          if (state.components.main) {
            if (Object.keys(state.components.main).includes("switch")) {
              status = state.components.main.switch.switch.value;
            }
            if (
              Object.keys(state.components.main).includes(
                "relativeHumidityMeasurement"
              )
            ) {
              humidityStatus =
                state.components.main.relativeHumidityMeasurement.humidity
                  .value;
              temperatureStatus =
                state.components.main.temperatureMeasurement.temperature.value;
              imgUrl =
                "https://thingdong.com/resources/png/things/smartThings-sensor.png";
            }
            if (Object.keys(state.components.main).includes("windowShade")) {
              status = state.components.main.windowShade.windowShade.value;
              imgUrl =
                "https://thingdong.com/resources/png/things/smartThings-curtain.png";
            }

            if (Object.keys(state.components.main).includes("switchLevel")) {
              levelStatus = state.components.main.switchLevel.level.value;
            }
            if (Object.keys(state.components.main).includes("colorControl")) {
              hueStatus = state.components.main.colorControl.hue.value;
              saturationStatus =
                state.components.main.colorControl.saturation.value;
              imgUrl =
                "https://thingdong.com/resources/png/things/smartThings-light.png";
            }
            if (it.components[0].categories[0].name == "Switch") {
              imgUrl =
                "https://thingdong.com/resources/png/things/smartThings-switch.png";
            }
            if (it.components[0].categories[0].name == "SmartPlug") {
              imgUrl =
                "https://thingdong.com/resources/png/things/smartThings-plug.png";
            }
          }
          if (it.components[0].categories[0].name == "Hub") {
            imgUrl =
              "https://thingdong.com/resources/png/things/smartThings-station.png";
          }
          const lightStatus = {
            h: hueStatus,
            s: saturationStatus,
            l: levelStatus,
          };
          return {
            // main: state.components,
            deviceId: it.deviceId,
            category: it.components[0].categories[0].name,
            label: it.label,
            status: status.toUpperCase(),
            ownerId: it.ownerId,
            temperature: temperatureStatus,
            humidity: humidityStatus,
            hsl: lightStatus,
            img: imgUrl,
          };
        });
      });

    // Wait for all those queries to complete
    const devices = await Promise.all(ops);

    // Respond to the request
    res.send({
      installedAppId: req.headers.installedAppId,
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
 * Handles OAuth redirect
 */
server.get("/smart/oauth/callback", async (req, res, next) => {
  try {
    // Store the SmartApp context including access and refresh tokens. Returns a context object for use in making
    // API calls to SmartThings
    const ctx = await smartApp.handleOAuthCallback(req);

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
    const url = `https://thingdong.com/oauth/redirect?authToken=${ctx.authToken}&installedAppId=${ctx.installedAppId}`;
    res.redirect(url);
  } catch (error) {
    next(error);
  }
});

/**
 * Executes a device command from the web page
 */
server.post("/smart/command/:deviceId", async (req, res, next) => {
  try {
    const ctx = await smartApp.withContext(req.headers.installedappid);
    await ctx.api.devices.executeCommands(
      req.params.deviceId,
      req.body.commands
    );
    res.send();
  } catch (error) {
    next(error);
  }
});

server.get("/smart/events", (req, res) => {
  // const ctx = smartApp.withContext(req.headers.installedappid);
  // const userSSE = userSSEStreams.get(ctx.api.config.locationId);
  const userSSE = globalSSE;
  console.log(66, userSSE);
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
