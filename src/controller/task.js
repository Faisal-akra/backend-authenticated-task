const { taskModel } = require("../Models/taskModel");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

   const newTask =  await taskModel.create({ title, description, user: req.user.id });

res.json({
  msg: "task is created succesfully",
  user: req.user.id,
  title: newTask.title,
  description: newTask.description
})
  } catch (error) {
    console.log("erroe", error);
    res.json({
      msg: "task is not created",
    });
  }
};





const getPost = async (req, res) => {

  try {
    if(!req.user.id) {
      res.json({
        msg: "userid is required"
      })
    }
     
  const allPpost = await taskModel.find({
   user: req.user.id
  }).populate({
    path: "user"
  })
  
  res.json({
    msg: "all-post",
    data: allPpost
  }) 
  } catch (error) {
    console.log('error', error);
  }
  }


module.exports = { createTask, getPost };
