import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

 
const Properties = () => {
   const [data, setData] = useState([]);
   const [filter, setFilter] = useState(data);
   const [loading, setLoading] = useState(false);
//    const [properties, setProperties] = useState([])
 
//    let componentMounted = true;

   const navigate = useNavigate ()

  const navigateToCheckOut = () => {
    navigate ("/checkout")
  }
 
   useEffect(() => {
       setLoading(true);
 
       fetch("https://makao-homes.onrender.com/properties")
           .then((res) => res.json())
           .then((data) => {
               console.log(data);
               setData(data);
               setLoading(false);
           });
   }, []);
 
   const Loading = () => {
       return <>Loading....</>;
   };

 
   const filterProperty = (cat) => {
       const updatedList = data.filter((x) => x.category === cat);
       setFilter(updatedList);
   };
 
   const ShowProperties = () => {
       return (
           <>
               <div className="buttons d-flex justify-content-center mn-5 pb-5">
                   <buttons
                       className="btn btn-outline-dark me-3"
                       onClick={() => setFilter(data)}
                   >
                       All
                   </buttons>
 
                   <buttons
                       className="btn btn-outline-dark me-3"
                       onClick={() => filterProperty("location")}
                   >
                   <div className="form-group mt-3">
                    <label for="Location">Choose a Location:</label>
                       <select name="location">
                       <option value="Nairobi">Nairobi</option>
                       <option value="Kikuyu">Kikuyu</option>
                       <option value="Mombasa">Mombasa</option>
                       <option value="Kisumu">Kisumu</option>
                       </select>
                   </div>
                   </buttons>
 
                  
                   <buttons
                       className="btn btn-outline-dark me-3"
                       onClick={() => filterProperty("property_type")}
                   >
                        <div className="form-group mt-3">
                           <label for="Property Type">Choose property type:</label>
                       <select name="property_type">
                       <option value="villas">Villas</option>
                       <option value="Apartment">Apartment</option>
                       <option value="Townhouses">Townhouses</option>
                       <option value="Penthouses">Penthouses</option>
                       <option value="Residential plot">Residential Plot</option>
                       <option value="Residential floor">Residential Floor</option>
                       <option value="Residential building">Residential Building</option>
                       </select>
                   </div>
                   </buttons>
               </div>
               {filter.map((property) => {
                   return (
                       <>
                           <div className="col-md-3 mb-4">
                               <div className="card h-100 text-center p-4" key={property.id}>
                                   <img
                                       src={property.image_url}
                                       className="card-img-top"
                                       alt={property.name}
                                       height="250px"
                                   />
                                   <div className="card-body">
                                       <h5 className="card-title mb-0">
                                           {property.name.substring(0, 12)}
                                       </h5>
                                       <p className="card-text lead fw-bold">${property.price}</p>
                                       <p className="card-text lead">{property.location}</p>
                                       <p className="card-text lead">{property.property_type}</p>
                                       <button className="btn btn-outline-dark"  onClick={navigateToCheckOut}>
                                           Purchase Now
                                       </button>
                                   </div>
                               </div>
                           </div>
                       </>
                   );
               })}
           </>
       );
   };
   return (
       <div>
           <div className="container my-5 py-5">
               <div className="row">
                   <div className="col-12 mb-5">
                       <h1 className="display-6 fw-bolder text-center">Latest Properties</h1>
                   </div>
               </div>
               <div className="row justify-content-center">
                   {loading ? <Loading /> : <ShowProperties />}
               </div>
           </div>
       </div>
   );
};

export default Properties;