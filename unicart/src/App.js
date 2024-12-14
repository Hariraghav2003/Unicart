import Home from "./Homepage/Home.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Productdetails from "./Product/Productdetails.js";
import Backpack from "./Product/Backpack.js";
import Allproduct from "./Product/Allproduct.js";
import Cart from "./cart/Cart.js";
import { useState } from "react";
import * as React from 'react';
import Signin from "./Signin.js";
import Signup from "./Signup.js";



function App() {

  const [cart, setCart] = useState({});



  
  return (
    <div>
    

    <Router>
   
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/backpack" element={<Backpack/>} />
        <Route path="/product" element={<Allproduct/>}/>
        <Route path="/product-details/:id" element={<Productdetails />} />
        <Route path="/cart/:id" element={<Cart cart ={cart} setCart ={setCart}/>} />
      </Routes>
    </Router>

    
    </div>
  );
}

export default App;
