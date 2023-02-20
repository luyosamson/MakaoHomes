
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

import "./Login.css"

function Login(props) {
  // form input controls
  const [values, setValues] = useState({
    username: "",
    password: "",
  });


  // const userdetails = props.userdetails;
  // const setUserdetails = props.setUserdetails;


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://makao-homes.onrender.com/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
    
      .then((res) => res.json())
      .then((data) => {

        setValues({
          username: "",
          password: "",
        })

        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          const role = data.user.role;
          if (role === "Seller") {
            navigate("/sellwithus");
            localStorage.setItem("Seller", JSON.stringify(data))
          } else if (role === "Client") {
            navigate("/");
            localStorage.setItem("Client", JSON.stringify(data))
          }
        } else {
          console.log(data.errors);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  const navigate = useNavigate()
  const navigateToSignUp = () => {
    navigate('/signup');
  };

  // navigation toreset password
  const navigateToResetPassword = () => {
    navigate("/forgot")
  }

    return (

      <div className="Auth-form-container">

        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <div><hr /></div>
            <h3 className="Auth-form-title">WELCOME BACK, PLEASE LOGIN</h3>
            <div><hr /></div>

            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={navigateToSignUp}>
                Create Account
              </span>
            </div>

            <div className="form-group mt-3">
              <label>username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
                name="username"
                value={values.username}
                onChange={(e) => setValues({ ...values, username: e.target.value })}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
                required
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-info" style={{margin: "auto"}}>
                Login
              </button>
            </div>

            <div className="text-center">
                Forgot Password?{" "}
                <span className="link-primary" onClick={navigateToResetPassword}>
                  Reset Here
                </span>
            </div>

            <div><hr />
            </div>

            <div className="text-center">
              <button className="btn btn-info" onClick={navigateToSignUp}>
                Register to view houses
              </button>

              <button className="btn btn-info" onClick={navigateToSignUp}>
                Register to list houses
              </button>

            </div>
          </div>
        </form>
      </div>
    )
}
export default Login