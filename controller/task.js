const { taskModel } = require("../Models/taskModel");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

   const newTask =  await taskModel.create({ title, description });

res.json({
  msg: "task is created succesfully",
  id: newTask._id,
  title: newTask.title
})
  } catch (error) {
    console.log("erroe", error);
    res.json({
      msg: "task is not created",
    });
  }
};




// const createTask = async (req, res) => {
//   const { title } = req.body;
//   const newTask = await taskModel.create({
//     title: title,
//   });
//   if (newTask) {
//     res.status(201).json({
//       message: 'Task created successfully',
//       _id: newTask._id,
//       title: newTask.title,
//     });
//   } else {
//     res.status(400).json({ message: "task didn't created or added!" });
//   }
// };
module.exports = { createTask };
