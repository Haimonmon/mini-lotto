import React, { useState } from "react";

import QuestionableGamblersIcon from '../assets/user-question-svgrepo-com.svg';
import ProfilePicture from '../assets/0c42be6660f5afc7cf6e7e32c43496ca.jpg';
import NotificationIcon from '../assets/notification.png';

const ProfileBarContainer = () => {
    return (
        <nav className="profile-bar-container">
            <div className="gamblers-hub-container">
                  <div className="online-gamblers">
                    <div className="icon-container">
                      <img src={QuestionableGamblersIcon} alt=""/>
                    </div>
                    <div className="hambler-container">
                      <span>Gamblers</span>
                    </div>
                    <div className="num-online-container">
                      <span>3</span>
                    </div>
                    <div className="online-icon-container">
                      <div className="circle-lmao"></div>
                    </div>
                  </div>
                </div>

            <div className="account-container">
                  <div class="profile-picture-container">
                    <img src={ProfilePicture} alt=""/>
                  </div>
                  <div class="profile-name-container">
                    <span id="profile-gambler-username">Mr Nikas</span>
                    <span id="profile-gambler-title">God Gambler</span>
                  </div>
                  <div class="profile-notification-container">
                    <img src={NotificationIcon} alt=""/>
                  </div>
            </div>
        </nav>
    )
}

export default ProfileBarContainer;