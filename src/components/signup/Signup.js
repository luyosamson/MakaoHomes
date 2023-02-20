import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Signup.css"
function Signup(props){
    // form input controls
  const [state, setState] = useState({
    name:"",
    username:"",
    password: "",
    role: ""
  });

  // post request to backend
  const userdetails = props.userdetails;
  const setUserdetails = props.setUserdetails;

  function handleSubmit(evt) {

    alert('Account created successfully');
    evt.preventDefault();
    evt.target.reset();

    fetch('https://makao-homes.onrender.com/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(state)
    })

      .then(res => res.json())
      .then(data => {
        
        setUserdetails([
          ...userdetails,
          data
        ]);

        setState({
          name:"",
          username:"",
          password: "",
          role: ""
        })
      })
  }

  const handleChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };


  const navigate = useNavigate();
  const navigateToSignIn = () =>{
    navigate("/login")
  }





    return (

        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>

            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Create Account</h3>

              <div className="form-group mt-3">

                <label>Name</label>

                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Your Name"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group mt-3">
                <label>Username</label>

                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Your Username"
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label for="Role">Choose a role:</label>
                <select value={state.role} name="role"  onChange={handleChange}>
                <option>Seller</option>
                <option>Client</option>
                </select>
              </div>

              <div className="form-group mt-3">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  name="password"
                  minLength={8}
                  value={state.password}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="d-grid gap-2 mt-3">

                <button type="submit" className="btn btn-info" style={{margin: "auto"}}>
                  Create Account
                </button>

              </div>


                <div className="text-center">
                  Already registered?{" "}

                  <span className="link-primary" onClick={navigateToSignIn}>
                    Login
                  </span>

                </div>


            </div>
          </form>
        </div>
    )
}
export default Signup