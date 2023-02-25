import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../pagination/Pagination";

 
const Properties = () => {
   const [data, setData] = useState([]);
   const [filter, setFilter] = useState(data);
   const [loading, setLoading] = useState(false);

   const [currentPage, setCurrentPage] = useState(1);
   const [propertiesPerPage, setPropertiesPerPage] = useState(8);

   //Filtering states
   const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
 





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

const filteredData = filter.length === 0 ? data : filter;
const indexOfLastProperty = currentPage * propertiesPerPage;
const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
const currentProperties = filteredData.slice(
  indexOfFirstProperty,
  indexOfLastProperty
);


 
   const Loading = () => {
       return <>Loading....</>;
   };

;


//Filtering function

    const filterProperty = () => {
  let updatedList = data;

  if (location !== "") {
    updatedList = updatedList.filter((x) => x.location === location);
  }

  if (propertyType !== "") {
    updatedList = updatedList.filter(
      (x) => x.property_type === propertyType
    );
  }

  setFilter(updatedList);
};



 
   const ShowProperties = () => {
       return (
           <>
               <div className="buttons d-flex justify-content-center mn-5 pb-5">
  <button
    className="btn btn-outline-dark me-3"
    onClick={() => {
      setLocation("");
      setPropertyType("");
      setFilter(data);
    }}
  >
    All
  </button>

  <div className="form-group mt-3 me-3">
    <label htmlFor="location">Choose a Location:</label>
    <select
      name="location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    >
      <option value="">All</option>
      <option value="Nairobi">Nairobi</option>
      <option value="Kikuyu">Kikuyu</option>
      <option value="Mombasa">Mombasa</option>
      <option value="Kisumu">Kisumu</option>
    </select>
  </div>

  <div className="form-group mt-3">
    <label htmlFor="property_type">Choose Property Type:</label>
    <select
      name="property_type"
      value={propertyType}
      onChange={(e) => setPropertyType(e.target.value)}
    >
      <option value="">All</option>
      <option value="villas">Villas</option>
      <option value="Apartment">Apartment</option>
      <option value="Townhouses">Townhouses</option>
      <option value="Penthouses">Penthouses</option>
      <option value="Residential plot">Residential Plot</option>
      <option value="Residential floor">Residential Floor</option>
      <option value="Residential building">Residential Building</option>
    </select>
  </div>



  <button className="btn btn-outline-dark" onClick={filterProperty}>
    Filter
  </button>
</div>

               {currentProperties.map((property) => {
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
                  <Pagination 
        totalPosts={data.length}
        postPerPage={propertiesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setPostperpage={setPropertiesPerPage}
        
        />
           </div>
       </div>
   );
};

export default Properties;