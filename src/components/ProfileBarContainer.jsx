import React, { useState } from "react";

import QuestionableGamblersIcon from '../assets/user-question-svgrepo-com.svg';

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
            <div className="account-container"></div>
        </nav>
    )
}

export default ProfileBarContainer;