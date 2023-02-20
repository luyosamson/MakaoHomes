import React from "react";
import { useNavigate } from "react-router-dom";

import './Hero.css'


const Hero = () => {

    const navigate = useNavigate ()

    const navigateToAbout = () => {
      navigate ("/about")
    }
    return(
        <div className="hero">
            <div className="content">
                <h1>Makao Homes</h1>
                <p>"Home is the starting place of love, hope and dreams."</p>

                <button className="btn1" onClick={navigateToAbout}>Explore More</button>
            </div>

        </div>
    )
}

export default Hero;