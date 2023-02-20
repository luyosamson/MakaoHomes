import React from "react";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-icons/fa";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Properties from "./components/property/Property";
import About from "./components/about/About";
import AddProperty from "./components/add/AddProperty";
import Checkout from "./components/checkout/CheckOut";
import Forgot from "./components/forgot/Forgot";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";





function App() {

  const [token, setToken] = useState("")
  const [user, setUser] = useState(null)
  
  useEffect((() => {
    setToken(localStorage.getItem("jwt"))
  }), [token])

  useEffect((() => {

    let t=localStorage.getItem("jwt")
 
 
     fetch("https://makao-homes.onrender.com/api/v1/profile", {
       method: "GET",
       headers: {
         "Authorization": "Bearer " + t
       }
     })
       .then(res => {
         if (res.ok) {
           res.json().then(setUser)
         } else {
           res.json().then(console.log)
         }
       })
   }), [token])

  

  return (
    <>
    <Navbar />
   <BrowserRouter>
   
     <Routes>
       
       <Route path="/" element={<Home />} />
       <Route path="/properties" element={<Properties />} />
       <Route path="/about" element={<About />} />
       <Route path="/sellwithus" element={<AddProperty/>} />
       <Route path="/checkout" element={<Checkout/>} />
       <Route path="/forgot" element={<Forgot/>} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/contact" element={<Contact />} />
       

       
       </Routes>
       </BrowserRouter>
     
       <Footer />
    
   </>
  );
}

export default App;
