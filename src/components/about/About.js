import React from "react";
import "./About.css";

function About() {
  return (
    <>
    <div>
          <div className="about-1">
            <h1> ABOUT US </h1>
            <h1>Welcome To Makao Homes</h1>
          </div>
      <div id="about-2">
      <div className="content-box-lg">
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <i className="fa fa-book"></i>
                      <h3>MISSION</h3>
                        <hr></hr>
                        <p>Makao Homes is a Professional Real Estate Platform. Here we will provide you with opportunities and services, which you will like very much. We're dedicated to providing you the best, with a focus on dependability and accountability . We're working to turn our passion for Real Estate into a booming online website. </p>
                      </div>
                      
                  </div>
                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <i className="fa fa-globe"></i>
                      <h3>VISION</h3>
                      <hr></hr>
                      <p>To impress existing and potential clients through our real estate services with the intent that all who come into contact with us are pleased and proud to recommend us to their families, their friends and their colleagues without hesitation. To be the leading real estate agents, consistently delivering superior service and returns to our clients.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-item text-center">
                      <i className="fa fa-pencil"></i>
                      <h3>ACHIEVEMENTS</h3>
                      <hr></hr>
                      <p>We as Makao Homes have managed to breaking milestones in listing and selling properties. A revolution in real estate, empowering real estate professionals.As an independent brokerage, we are dedicated in providing you with excellent, professional, honest and responsible service. </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
 </>
  );
}

export default About;