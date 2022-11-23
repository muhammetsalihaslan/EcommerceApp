const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
       username: { type:String, required:true, unique:true},
       email: { type:String, required:true, unique:true}, 
       password: { type:String, required:true}, 
       isAdmin:{
        type:Boolean,
        default:false,
       }

    },{ timestamps:true}// that tells Mongoose to automatically manage createdAt and updatedAt properties on your documents. create and uptade is about timing 
    
    );


    module.exports = mongoose.model("User", UserSchema);





//!models folder created for mongoose and file under this folder is for schema and definition 