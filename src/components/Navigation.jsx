import React, { useState } from "react";
import { Link } from "react-router-dom";

import CozyGamblerIcon from "../assets/crown (1).png";
import DiceIcon from "../assets/dice-3-svgrepo-com.svg";
import ProfileIcon from "../assets/profile-image-1349-svgrepo-com.svg";
import SettingsIcon from "../assets/settings-svgrepo-com.svg";
import TieIcon from "../assets/tie-svgrepo-com.svg";
import PlaneThatHitTheTowerIcon from "../assets/airplane-svgrepo-com.svg";

import "../styles/navigation.css";
import "../styles/container.css";

/**
 * Just empty for now but dont worry,  as the user logs it will not be empty anymore ✨👌
 * @returns navigation element
 */
const NavigationBar = () => {
    return (
        <nav className="side-bar-container large">
            <div className="necessity-container">

                <img src={CozyGamblerIcon} id="crown-logo"/>

                <div id="home-page-button">
                    <img src={DiceIcon} alt="home page icon"/>
                    <span>Home</span>
                </div>

                <div id="profile-page-button">
                    <img src={ProfileIcon} alt="profile page icon"/>
                    <span>Profile</span>
                </div>
            </div>

            <div className="support-container">

                <div id="settings-page-button">
                    <img src={SettingsIcon} alt="settings page icon"/>
                    <span>Settings</span>
                </div>

                <div id="support-page-button">
                    <img src={TieIcon} alt="support page icon"/>
                    <span>Support</span>
                </div>

                <div id="logout-button">
                    <img src={PlaneThatHitTheTowerIcon} alt="logout page icon"/>
                    <span>Log out</span>
                </div>

            </div>
        </nav>
    )
}

export default NavigationBar;