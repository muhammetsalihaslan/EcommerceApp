# EcommerceApp
Ecommerce app made with react node.js redux stripe jwt--MERN STACK

******1********************************

Firstly we add react router dom library in our project about client side 
  CODE:: yarn add react-router-dom 
and after that import 
   code:: import { BrowserRouter, Routes, Route } from "react-router-dom"; for cover our page and component 


///////to avoid going to login and register if we logged in ///////
  code: 
    create user:: const user = true; //after const of app.js 
    {user ? <Home /> : <Login />}  



       *************Filter color and size****************
    
firstly we have to get category name(woman coat and jaens) use useLocation for it 

useLocation::This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.

//const cat = location.pathname.split("/")[2]; its a definition of cat split / and take 2. element to shows us cat

we use useState hook for the value of color and size part and saparated each otjer use name property for spesification and for the every change use an onChange event 

How do we value::

take and value with const
   const value = e.target.value;
and in filter take all value ( if you have 2 value you should use spreed operator to get them together)
     setFilters({
      ...filters,
      [e.target.name]: value,
    });


















