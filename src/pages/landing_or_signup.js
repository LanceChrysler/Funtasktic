import React from 'react';
import './pages.css';
import {useNavigate} from 'react-router-dom';

export default function Landing_or_signup(props) {
  const navigate = useNavigate();

  return (
    <div className="LandingPage">
        <div className="Body">
            <nav className="NavBar">
                <h2>Insert Logo Here</h2>
                <button type="button" onClick={()=>  navigate("/login")}>Log In</button>
            </nav>
            <div className="Container">
                <div className="LandingMessage">
                    <h1>
                        Experience a fun way of<br/>
                        completing tasks.
                    </h1>
                    <p>
                        Set your goals, work, and gain exciting rewards<br/>
                        throughout the process.
                    </p>
                </div>
                <div className="SignUp">
                    <h1>Sign Up</h1>
                    <div className="InputContainer">
                        <form className="SignUpForm">
                            <input type="text" placeholder="Username"/>
                            <input type="text" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <input type="password" placeholder="Confirm Passsword"/>
                        </form>
                        <button type="submit">Sign Up</button>
                    </div>
                    <p>
                        By creating this account, you agree to our<br/>
                        <a href="">Privacy Policy & Terms of Service</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
