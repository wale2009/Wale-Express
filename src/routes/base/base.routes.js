const express = require("express");
const route = express.Router();
const {
  httpGetAPPAbout,
  httpGetAPPBase,
} = require("../../controllers/base.controllers")
const { router } = require("../../../app");
route.get("/", httpGetAPPBase);
route.get("/about", httpGetAPPAbout);

module.exports = route;