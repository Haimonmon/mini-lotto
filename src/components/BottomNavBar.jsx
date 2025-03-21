import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/container.css";
import "../styles/navigation.css";
import DiceIcon from "../assets/dice-3-svgrepo-com.svg";
import ProfileIcon from "../assets/profile-image-1349-svgrepo-com.svg";
import PlaneThatHitTheTowerIcon from "../assets/airplane-svgrepo-com.svg";



/**
 * Just empty for now but dont worry,  as the user logs it will not be empty anymore ✨👌
 * @returns navigation element
 */
const BottomNavigation = () => {
    const location = useLocation();

    return (
        <nav className="bottom-nav-bar-container small">
            <div className="bottom-container">           
                <Link 
                    to="/home" 
                    className={location.pathname === "/home" ? "active" : ""}
                >
                    <div id="home-page-button">
                        <img src={DiceIcon} alt="home page icon"/>
                        <span>Home</span>
                    </div>
                </Link>
                          
                <Link 
                    to="/profile" 
                    className={location.pathname === "/profile" ? "active" : ""}
                >
                    <div id="profile-page-button">
                        <img src={ProfileIcon} alt="profile page icon"/>
                        <span>Profile</span>
                    </div>
                </Link>            
                
                <div id="logout-button">
                    <img src={PlaneThatHitTheTowerIcon} alt="logout page icon"/>
                    <span>Log out</span>
                </div>
            </div>
        </nav>
    );
};

export default BottomNavigation;


