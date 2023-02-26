const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

// creating a database 
mongoose.connect("mongodb://localhost:27017/Signup",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful");
}).catch((error)=>{
    console.log(error);
})