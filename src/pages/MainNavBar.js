import React from 'react';
import './pages.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function MainNavBar() {
  const navigate = useNavigate();

  return (
    <nav className="MainNavBar">
        <div className="Navigations">
            <div className="Links">
                <div className="Logo">
                    <Link to="/u">
                        <img src={require("../images/funtasktic_logo.png")} alt="Funtasktic Logo"/>
                    </Link>
                </div>
                <Link className="Tabs" to="profile">Profile</Link>
                <Link className="Tabs" to="task">Task</Link>
                <Link className="Tabs" to="calendar">Calendar</Link>
                <Link className="Tabs" to="friends">Friends</Link>
                <Link className="Tabs" to="modals">Modals</Link>
            </div>
            <button type="button" onClick={()=>  navigate("/")}>Log Out</button>
        </div>
    </nav>
  )
}

// Remove Modals Link on final app
