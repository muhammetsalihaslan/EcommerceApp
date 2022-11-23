const express = require('express'); //its a import a exprees library 
const app = express();
const mongoose = require('mongoose'); //its a import mongoose library
const dotenv = require('dotenv');// its a import dotenv 
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
const stripeRoute = require("./routes/stripe");

dotenv.config(); //configuration is nedden othervise i cant useit

mongoose.connect(process.env.MONGO_URL).then(() => console.log('DBconnection Succesfull')).catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());  //if we donst write this kod our postman doesnt work with json file
app.use("/api/auth", authRoute) ;
app.use("/api/users", userRoute); //whenever we go to api/user our application will use userRoute (code mean)
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!")
});

