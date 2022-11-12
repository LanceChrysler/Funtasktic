import React from 'react';
import './pages.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="LogInPage">
      <div className="Body">
        <div className="NavBar">
            <div className="Navigations">
              <div className="Logo" onClick={()=>  navigate(-1)}>
                <img src={require("../images/funtasktic_logo.png")} alt="Funtasktic Logo"/>
              </div>
              <button type="button" onClick={()=>  navigate(-1)}>Sign Up</button>
            </div>
        </div>
        <div className="Container">
            <div className="LogIn">
                <h1>Log In</h1>
                <div className="InputContainer">
                    <form className="LogInForm">
                        <label>Username or Email</label>
                        <input type="text" placeholder="Username or Email"/>
                        <label>Password</label>
                        <input type="password" placeholder="Password"/>
                    </form>
                    <button type="submit"  onClick={()=>  navigate("/u")}>Log In</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
