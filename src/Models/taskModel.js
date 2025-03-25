const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    default: false
  },

user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "users",

}
















  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "users",
  // }
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
