import React from 'react';
import BackgroundImage from '../images/background_1.png';
import './pages.css';

export default function landing_or_signup() {
  return (
    <div>
        <div className="Body" 
            style={{
                display: "flex", 
                flexDirection: "column", 
                height: "100vh", 
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${BackgroundImage})`
            }}
        >
            <div className="NavBar" 
                style={{
                    display: "flex", 
                    justifyContent: "space-between",
                    backgroundColor: "#11111150"
                }}
            >
                <h2>Insert Logo Here</h2>
                <button style={{width: "20vh", margin: 15, color: "white", borderRadius: 10, backgroundColor: "#B67EB7", borderWidth: 0, fontSize: 20, fontWeight: "bold"}}>Log In</button>
            </div>
            <div className="Container" 
                style={{
                    display: "flex", 
                    flexFlow: "row wrap", 
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginTop: "10px",
                    marginBottom: "10px",
                    marginLeft: "30px",
                    marginRight: "30px",
                    height: "100%"
                }}
            >
                <div className="LandingMessage" 
                    style={{
                        textAlign: "left",
                        color: "white"
                    }}
                >
                    <h1>
                        Experience a fun way of<br/>
                        completing tasks.
                    </h1>
                    <p>
                        Set your goals, work, and gain exciting rewards<br/>
                        throughout the process.
                    </p>
                </div>
                <div className="SignUp"
                    style={{
                        color: "white"
                    }}
                >
                    <h1>Sign Up</h1>
                    <div className="InputContainer"
                        style={{
                            backgroundColor: "#11111150",
                            width: "40vh",
                            borderRadius: 20,
                            padding: 20
                        }}
                    >
                        <form className="SignUpForm">
                            <input type="text" placeholder="Username"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <input type="password" placeholder="Confirm Passsword"/>
                            <button type="submit">Sign Up</button>
                        </form>
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
