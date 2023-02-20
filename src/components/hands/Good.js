import React from "react";
import './Good.css'
import img from '../../assets/goodhands.jpg'

const Good = () => {
    return(
        <div className="good">
        <h1 className="are">You are in good hands</h1>
                <div className="text-good">
                
                    <p>“There is nothing more important than a good, safe, secure home.” “Home is a place you grow up wanting to leave, and grow old wanting to get back to.” “There's no place like home.” “Where we love is home- home that our feet may leave, but not our hearts.”</p>
                    <img src={img} alt="" />
                </div>
        </div>
    )
}

export default Good;