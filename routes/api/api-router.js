"use strict";

const express = require("express");

const users = require("./users");

const router = express.Router();

router.use("/users", users.router);

module.exports = {router};