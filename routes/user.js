const express = require('express');
const { register, login, allUsers } = require('../controller/user');


const routes = express.Router();


routes.post('/register', register);
routes.post("/login", login);
routes.get('/allUsers', allUsers)


module.exports = routes;

