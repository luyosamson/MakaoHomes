import React from "react";
import { useNavigate } from "react-router-dom";

import './Featured.css';
import img1 from '../../assets/residential.jpg'
import img2 from '../../assets/commercial.jpg'
import img3 from '../../assets/offices.jpg'


 
const Featured = () => {

  const navigate = useNavigate ()

  const navigateToProperty = () => {
    navigate ("/properties")
  }

  const navigateToCheckOut = () => {
    navigate ("/checkout")
  }

  



   return (
       <div className="place">
           <h1>Find your next place to live</h1>
           <h3>Featured Properties</h3>
           <div>
               <p><span className="prop"></span></p>
               <p>Residential</p>
               <p>Commercial</p>
               <p>Offices</p>
           </div>
           <div className="apat">
              
                   <div className="col-md-3 mb-4">
                               <div className="card h-100 text-center p-4">
                                   <img
                                       src={img1}
                                       className="card-img-top"
                                       alt="property"
                                       height="250px"
                                   />
                                   <div className="card-body">
                                       <h5 className="card-title mb-0">
                                           AX CAPITAL Estate
                                       </h5>
                   <p className="card-text lead ">$10000</p>
                   <p className="card-text lead">Mombasa</p>
                   <p className="card-text lead">Residential </p>
                  
                                       <button className="btn btn-outline-dark" onClick={navigateToCheckOut}>
                                           Purchase Now
                                       </button>
                                   </div>
                               </div>
                           </div>
 
                           <div className="col-md-3 mb-4">
                               <div className="card h-100 text-center p-4">
                                   <img
                                       src={img2}
                                       className="card-img-top"
                                       alt="property"
                                       height="250px"
                                   />
                                   <div className="card-body">
                                       <h5 className="card-title mb-0">
                                       Espace Real Estate
                                       </h5>
                   <p className="card-text lead ">$15000</p>
                   <p className="card-text lead">Nairobi</p>
                   <p className="card-text lead">Villas</p>
                  
                                       <button className="btn btn-outline-dark" onClick={navigateToCheckOut}>
                                           Purchase Now
                                       </button>
                                   </div>
                               </div>
                           </div>
 
                           <div className="col-md-3 mb-4">
                               <div className="card h-100 text-center p-4">
                                   <img
                                       src={img3}
                                       className="card-img-top"
                                       alt="property"
                                       height="250px"
                                   />
                                   <div className="card-body">
                                       <h5 className="card-title mb-0">
                                           D and B proprties
                                       </h5>
                   <p className="card-text lead ">$7000</p>
                   <p className="card-text lead">Kikuyu</p>
                   <p className="card-text lead">Villas</p>
                  
                                       <button className="btn btn-outline-dark" onClick={navigateToCheckOut}>
                                           Purchase Now
                                       </button>
                                   </div>
                               </div>
                           </div>
 
           </div>
           <button className="btn" onClick={navigateToProperty}>View Properties</button>
       </div>
   )
}
 
 
 
 
 
export default Featured;