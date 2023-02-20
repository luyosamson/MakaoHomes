import React,{useState} from 'react'
import './AddProperty.css'



function AddProperty() {
  const [propertyData,setPropertyData]=useState({
    name:'',
    location:'',
    price:'',
    image_url:'',
    description:'',
    property_type:''
    })

    function handleUpdateInput(e){
      setPropertyData(propertyData => ({...propertyData, [e.target.id]: e.target.value}))
    }

    function handleFormSubmit(e) {

      alert('Property posted successfully');

      e.preventDefault()
      e.target.reset();
      console.log(propertyData)
      const seller_id = JSON.parse(localStorage.getItem("data") || false)?.id
      let t=localStorage.getItem("jwt")

      fetch('https://makao-homes.onrender.com/properties',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization": "Bearer " + t
        },

        body:JSON.stringify({...propertyData, seller_id: seller_id})
      })

      .then((r)=>r.json())
      
      .then((newData)=>{
        console.log(newData)
        setPropertyData({
        name:"",
        location:'',
        price:'',
        image_url:'',
        description:'',
        property_type:''})
      })
  }
  


return (

  <div>
    <div className='addProperty'>
      <h3 id='sellTitle'>Sell With Us</h3>


  <form onSubmit={handleFormSubmit}>
          <label>Property Name</label><input type="text" id='name' value={propertyData.name} onChange={handleUpdateInput}/>
          <label>Location</label><input type="text" id='location' value={propertyData.location} onChange={handleUpdateInput}/>
          <label>Price</label><input type="number" id='price' value={propertyData.price} onChange={handleUpdateInput} />
          <label>Image URL</label><input type="text" id='image_url' value={propertyData.image_url} onChange={handleUpdateInput} />

          <div className='propType'>
              <label>Property type</label><select id='property_type' value={propertyData.property_type} onChange={handleUpdateInput}>
                <option>Penthouse</option>
                <option>Residential Building</option>
                <option>Residential Plot</option>
                <option>Apartment</option>
                <option>Townhouse</option>
                <option>Residential floor</option>
                <option>Villas</option>
              </select>
          </div>
          
          <label className='desc'>Description</label><textarea input="true" id='description' value={propertyData.description} onChange={handleUpdateInput}></textarea>
          <button type='submit'>ADD PROPERTY</button>
    </form>
    </div>
  </div>
)
}
export default AddProperty