const express = require("express");
const {createTask, getPost} = require("../controller/task.js");
const verifyUser = require("../middleware/verifyUser.js");

const taskRoutes = express.Router();


taskRoutes.post('/createTask', verifyUser, createTask);
taskRoutes.get('/getpost', verifyUser, getPost)


module.exports = taskRoutes;