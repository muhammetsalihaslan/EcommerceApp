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

ALL PROCESS

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















