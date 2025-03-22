const express = require("express");
const {createTask} = require("../controller/task.js");
const authenticated = require("../authentication/autehMiddlw.js");

const taskRoutes = express.Router();


taskRoutes.post('/createTask', authenticated, createTask);


module.exports = taskRoutes;