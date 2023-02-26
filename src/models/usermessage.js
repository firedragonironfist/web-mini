const { text } = require("express")
const mongoose = require("mongoose")
const validator = require("validator")


const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minLength:3
    },
    lastname:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    password:{
        type:String,
        required:true,
        minLength:3
    },
    mobile:{
        type:Number,
        required:true,
        min:10
    },
    dob:{
        type:Date,
        required:true
    }
})

//we need a collection
const User = mongoose.model("User",userSchema)

module.exports = User