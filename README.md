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

*********How do we value color and size ::

we use uselocation to show exactly where we are

  code:  const cat = location.pathname.split("/")[2];

to get value from color and size using useState for the first action;

whenever we changed color  and size to update the state we use onChange event 

how to recognize color and size is selected to prevent this we use name property in color and size html part 

and final part  to show what we select and update value 
const handleFilters = (e) => {
    const value = e.target.value;  //
    setFilters({
      ...filters,  // filter spread for all our value inside of same curly bracket
      [e.target.name]: value,  // value is which we created 
    });
  };



//SORT METHOD::




















