import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";

import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa' ;
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {


    // const navigate = useNavigate ()

    // const navigateToSignup = () => {
    //   navigate("/signup")
    // }

    const handleClick = () => setClick(!click)
    const [click, setClick] = useState(false)

    

    return (
        <>
            <div className="navbar">
                <div className="container">
                    <h1><span><BsFillHouseFill/>Makao</span>Homes</h1>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/properties">Properties</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/sellwithus">Sell With Us</a></li>
                        <li><a href="/signup" ><button className="btn" >Sign Up</button></a></li>
                        
                    </ul>

                    

                    <div className="hamburger" onClick={handleClick}>
                        {click ? (<FaRegTimesCircle className="icon" />) : (<HiOutlineMenuAlt4 className="icon" />)}
                        
                    </div>

                </div>

            </div>
            
        </>
    )
}

export default Navbar;