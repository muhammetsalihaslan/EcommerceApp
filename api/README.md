# e-commerce rest-api

İts a Node.js e-commerce app rest api with mongo db

if we get an api user we should look at import side and forget any slender and punctuation

localhost:5000/api/auth/register(auth is main file register is determined title its follow each other )

we have to  encript all of our pasword in this tutorial we are gonna use cryptoJs for this use code: yarn add crypto-js // const CryptoJS = require("crypto-js"); its a import part 


password is to much importand we can send every information but password in auth part using this 

code:  const { password, ...others} =user;
       res.status(200).json(others);


but when we use the above code, mongo gives us everything, we need to use user._doc to prevent this.

we want to more secure and we are gonna use JWT
what is jwt: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.  install code: yarn add jsonwebtoken  import and use

next() is about jwt

we have to import User.js for delete update put and other staff in user.js

user.js part is comunicate and have to act in postman part 

in this tutorial always has 3 part and i comunicated this 3 part each other to work 

get user stats show us statistic of enter user 


we get assets name in modules and create function in routers, which is sent in postman, all routers have to import in index.js

if we get 500s problem in post man we could look at all const truly send or not 

//   app.get("/api/test", () => {
//     console.log('test is successfull')
//   })  //!create roots so i am creating rest api we are gonna use some endpoints  but here its not a good idea to write /api/test we sould to create routes folder


verifyTokenAndAdmin: its about who can react this data and use can change data 

WHAT AM I LEARNİNG

models: we have create our postman parts schema in models part all model have to export and also mongoose have to import in models js

routers:

 //! which is created instead of user.js best practise is this 

get/post/put saparated using in routers part 

verifyaToken is shows us limits of user and admin somewhere only admin manage which is named verifytokenandAdmin in some place both of them manage 

async/await/trycatch is much important to build structure of rest api 

İ am using cors so what is cors::Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

if we want to more than one type we shuold use Array

///*********ALL PROCESS*********///

we have to install npm dependencies
 code: npm init -y
 
install all library which is we need
 code: yarn add express mongoose dotenv nodemon 

 express: Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes

 mongoose:Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

 dotenv:DotEnv is a lightweight npm package that automatically loads environment variables from a .env file into the process.env object
   To use DotEnv, first install it using the command: npm i dotenv. Then in your app, require and configure the package like this: require('dotenv').config().

nodemon:Nodemon will monitor for any changes in your source and automatically restart your server. Perfect for development.


how am i work my application for inside of index in node.js

code: node index.js

**in order not to write node index.js repeatedly "nodemon index.js" should writen inte start part of the scripts section in package.json. after that only thing we  should write "yarn start" for only one time and after all rewirite our application otomatically update itself

//CREATE EXPRESS SERVER

firstly import an express library 
  code: const express = require('express');
secondly use express function 
  code: const app = express();
to run this application:
  code: app.listen(5000, () =>{
       console.log("Backend server is running")
  });  (optional: 5000 / Backend server is running)


//HOW WE CAN CONNECT OUR MONGO SERVER 

import our library
  const mongoose = require("mongoose")
how we gonna use this library 
   mongoose.connect("here we paste our mongo  connect side ").then(() => console.log("DB connection is succesful")).catch((err) => {console.log(err)}); // then catch part is a kind of control part to see if there is a connection or not.


//DOTENV

import 
  const dotenv = require('dotenv');
use 
  dotenv.config();

//CREATE ROUTES 

All routes have to take import express and export itself


firstly import express routers
   const router = require("express").Router();


(req ,res) => req come from client side res come from server side

export router user
   module.export = router

to use this routes we should import in index.js 
  const userRoute = require('./routes/user')

use imported routes in index.js
  app.use("/api/users", userRoute);


req.body.password => this body is what we are passing to server if there is password we use this code


we use postman to test the user side 

to usable json we nned to write code in index.js
  app.use(express.json()); 


inside our aplication with - models -  we use mongo db to application dynamic 

//MODELS

import mongoose 
create schema 
export schema 

{ timestamps:true}// that tells Mongoose to automatically manage createdAt and updatedAt properties on your documents. create and uptade is about timing  


//WHY ARE WE CREATE AUTH ROUTES 

Because we want to more secure and best practise we have to create auth for login and register intead of  inside of user.js 


register and login => POST method 

           ********REGİSTER*********

use post method 

models part related models is USER schema 

use save() method for save user

use async function to save new user to say if there is a new user save and if taje a any error get an error 
  
   res.status(201).json(savedUser); succesful respond  client  will see 

   res.status(500).json(err) error respond  client side will see

*****************************

//we have to import and use in index.js for the auth working 

import side
 const authRoute = require('./routes/auth');

use side 
  app.use("/api/auth", authRoute) ;  this is our url how it gonna write 


***************************

              *******CRYPTOJS**********

// we have never ever show our password in mongo db side we have to cover with  cryptojs   https://cryptojs.gitbook.io/docs/  we use Ciphers part and AES 

how we add cryptojs to our project 
  
  code: yarn add crypto-js 

import cryptojs
 
  const CryptoJS = require("crypto-js");

use cryptojs
  
   pasword side req.body.password and with interested part in .env

CryptoJS.AES.encrypt("Message", "Secret Passphrase"); REGİSTER PART USE

CryptoJS.AES.decrypt(encrypted, "Secret Passphrase"); LOGİN PART USE

toString() code is only way to save our password in mongo db 


             *******LOGIN*************

We find to user which is create in register part and we use findOne() method for user which is mongodb method

The findOne() method finds and returns one document that matches the given selection criteria. If multiple documents satisfy the given query expression, then this method will return the first document according to the natural order which reflects the order of documents on the disk.

!user && res.status(401).json("Wrong credentials!") if user not right take - wrong credential - error

toString(CryptoJS.enc.Utf8); to use another caracter we need to use inside of parantheses of tostring

we dont want to show our password anywhere so we need to use spread operator to choose what we want to show in our postman and other areas

_doc = our mongo db store our document in _doc side so we need to use user._doc

const { password, ...others} = user._doc;  its a spread operator we say remove the password inside the others


                 ********JASON WEB TOKEN*************


JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

add our project 
  code: yarn add jsonwebtoken
import 
  const jwt = require('jsonwebtoken0');

isAdmin ::  means if isadmin is true admin user can create delete etc.. things whatever admin want

use:
 
const accessToken = jwt.sign({ 
              id:user._id,   //equal to user id
              isAdmin:user.isAdmin,  //equal to user isAdmin 
           }, 
           process.env.JWT_SEC,
           { expiresIn:"365d"}
           );

{ expiresIn:"365d"} it must be "d" timeline d mean is day and we 

 res.status(200).json({...others, accessToken}); :: We used the spread operator because we wanted to get rid of the others in my schema.

we delete update with spesific id and isadmin is important here 


******************************

 auth is register and login part 

 user.js is uptade get delete gel all user side 


******************************


                 *********user.js part**********

//update 

we should check password of user and encrypto again because user password may have changed 

 if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

After tahat ofcourse we codeded async's trycatch 

mongo db findByIdAndUpdate() function is suitable for update part 

send information our user ::  $set: req.body its not gonna return you updated user to prevent that we have to use 

{ new: true }

when we use token in Headers part of postman we have to use Bearer world in front of token 

Why do we write bearer token?
Because it's in the relevant standards documents. The general scheme is that you first state the type of token ("Bearer" in this case) and then the token itself. There are other authentication schemes too and they use different type keywords

when we use Bearer we should use split first in verifyToken side
  
   code:const token = authHeader.split(" ")[1]; split and use token for token usage in  postman 

in this part user can update but order and product part only admin can update  in this we use verifytokenandadmin


//DELETE////////////////////////////////

use verifytokenandauthorization for admin and other can delete 

using mongo db findByIdAndDelete method for 

req.params.id == its a id way to delete our what we want 


//GET METHOD////////////////////////////////

Use get method and verifytokenandadmin for only admin can get 
we gonna use findbyid method for mongo db 
we find other 

for get user 

we should create new register and change isadmin to true in mongobd and we have to login with new register in postman and than we get user with this new login's token 

in this tutorial most important part is take a true token and verify dont forget 



//GET ALL USER////////////////////////////////

fetch all users

get and verfytokenandadmin 

find() methor for mongo db 


we can get an limited res in get all user we should add new code for what we want to do

we create const for all new add 

for limited query respond

const query = req.query.new

const users = query 
? await User.find().sort({_id:-1}).limit(5) 
: await User.find();

mean :: if there is a query respond 5 limited user if is not its gonna return all user sort({_id:-1}) method for the last 5 user beginnşng with last one and go on 


//GET USER STATS///////////////////////////



verifytokenandadmin for stats

**stats is gonna return us total number of user per mounth**

$sum :1 every register here 

we use mongo db aggregate method 

 const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); last year today

             *********verifyaToken.js********


its about authority  user and admin side we can give what will be the level of authority 

const authHeader = req.headers.token; => its a posman side we write token in Headers part to change update delete what ever we want 

next() ::The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. Middleware functions can perform the following tasks: Execute any code. Make changes to the request and the response objects.

  if(req.user.id === req.params.id || req.user.isAdmin) :: if an id equals to user.id and user isadmin 

//verifytokenanadmin

only isadmin should be checked 



             ***************what is params***************


 The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}.



              ***************PRODUCT PART*****************


use peroduct model and import 

import and use inside of index.js 

its almost same with user part but some verify and post put part may be different

//CREATE///////////////////////////////

only admim can create any product

create const for the new product 

post method in the postman 

//UPDATE///////////////////////////////

Differant between user part is we just about product side

//GET ALL PRODUCT////////////////////


We are gonna have two query

const qNew = req.query.new  // 
const qCategory = req.query.category


 


















