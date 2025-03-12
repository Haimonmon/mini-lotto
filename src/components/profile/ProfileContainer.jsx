import React, { useState } from "react";

import "../../styles/profile.css";

import DefaultProfileImage from '../../assets/0c42be6660f5afc7cf6e7e32c43496ca.jpg';
import CoinIcon from '../../assets/coin (1).png';
import CloverIcon from '../../assets/clover.png';
import DiamondIcon from '../../assets/diamond.png';

const ProfileContainer = () => {
    return (
        <div class="profile-container">
            <div class="gambler-name-container">
            <div class="profile-image">
                <img src={DefaultProfileImage} alt=""/>
            </div>
            <div class="gambler-name">
                <span id="gambler-name">Mr Nikas</span>
                <span id="gambler-title">Gambler</span>
                <span id="gambler-joined-date">Joined Dec 20, 2021</span>
            </div>
            </div>
            <hr/>
            <div class="gambler-achievements-container">
            <div class="bets-container">
                <img src={CoinIcon} alt="gambler bets icon"/>
                <hr/>
                <span>Bets</span>
            </div>
            <div class="luck-container">
                <img src={CloverIcon} alt="gambler luck icon"/>
                <hr/>
                <span>Lucky</span>
            </div>
            <div class="jackpots-container">
                <img src={DiamondIcon} alt="gambler jackpots icon"/>
                <hr/>
                <span>Jackpots</span>
            </div>
            </div>
        </div>
    )
}

export default ProfileContainer;