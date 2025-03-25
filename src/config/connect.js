const mongosse = require("mongoose");


const userDB = async () => {
  try {
   await mongosse.connect(process.env.MONGO_DB); 
    console.log("mongoose is connected");
  } catch (error) {
    console.log("error", error);
  }
};


module.exports =  userDB ;
