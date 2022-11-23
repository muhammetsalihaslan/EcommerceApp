const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
       userId : { type:String, required:true},
       products:[
        { 
            productId:{
                type:String,
            },
            quantity:{
                type:Number, 
                default:1,
            },
        },
       ],
       amount:{ type:Number, required:true},
       address:{ type:Object, required:true}, //Object mean is all the type of 
       status:{ type:String, default:"pending" } //pending mean is changeable
    },
    
    { timestamps:true}
    
    );


    module.exports = mongoose.model("Order", OrderSchema);