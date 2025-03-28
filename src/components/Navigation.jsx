import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CozyGamblerIcon from "../assets/crown (1).png";
import DiceIcon from "../assets/dice-3-svgrepo-com.svg";
import ProfileIcon from "../assets/profile-image-1349-svgrepo-com.svg";
import PlaneThatHitTheTowerIcon from "../assets/airplane-svgrepo-com.svg";

import "../styles/navigation.css";
import "../styles/container.css";

/**
 * Just empty for now but dont worry,  as the user logs it will not be empty anymore ✨👌
 * @returns navigation element
 */
const NavigationBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("token");
        navigate("/sign-in");
    };
    return (
        <nav className="side-bar-container large">
            <div className="necessity-container">

                <img src={CozyGamblerIcon} id="crown-logo"/>

                <Link to="/home">
                    <div id="home-page-button">
                        <img src={DiceIcon} alt="home page icon"/>
                        <span>Home</span>
                    </div>
                </Link>
              
                <Link to="/profile">
                    <div id="profile-page-button">
                        <img src={ProfileIcon} alt="profile page icon"/>
                        <span>Profile</span>
                    </div>
                </Link>
               
            </div>
            <div className="support-container">
                <div id="logout-button" onClick={handleLogout}>
                    <img src={PlaneThatHitTheTowerIcon} alt="logout page icon"/>
                    <span>Log out</span>
                </div>
            </div>
        </nav>
    )
}

{/* <Link to="/sign-up" className="link">Sign up</Link> */}

export default NavigationBar;