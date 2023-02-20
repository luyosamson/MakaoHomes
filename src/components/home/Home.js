import React from 'react'
import Hero from "../landing/Hero";
import Good from "../hands/Good";
import Featured from "../featured/Featured";
import You from "../you/You";
import Testimonial from "../testimony/Testimonial";


const Home = () => {
  return (
    <>
        <Hero />
        <Good />
        <Featured/>
        <You />
        <Testimonial />
    </>
  )
}

export default Home