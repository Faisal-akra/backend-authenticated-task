const express = require("express");
const userDB = require("./config/connect");
const userRoutes = require("./routes/user.js");
const app = express();
const dotenv = require("dotenv");


const taskRoutes = require("./routes/task.js");


dotenv.config();

app.use(express.json());

userDB();

app.use('/tasks', taskRoutes)
app.use("/users", userRoutes);
const port = "http://localhost:7000";
app.listen(7000, () => {
  console.log(port);
});
