import React, { useState, useEffect, useRef } from "react";
import useSocket from "../hooks/useSocket";

import QuestionableGamblersIcon from '../assets/user-question-svgrepo-com.svg';
import ProfilePicture from '../assets/0c42be6660f5afc7cf6e7e32c43496ca.jpg';
import NotificationIcon from '../assets/notification.png';
import logoIcon from '../assets/crown (1).png';

const ProfileBarContainer = () => {
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [username, setUsername] = useState("");
    const { isConnected, socket } = useSocket();

    useEffect(() => {
      const storedUsername = sessionStorage.getItem("username");

      if (storedUsername !== "Guest") {
        setUsername(storedUsername);
      }

  
      if (!isConnected) return;

      socket.onAny((event, data) => {
        console.log(`📡 Received event: ${event}`, data);
      });

      socket.on("online_users", (users) => {
          console.log("👥 Total Online Users:", users);
          setOnlineUsers(users);
      });
  
      return () => {
          socket.off("online_users");
      };
    }, []);

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
                      <span>{onlineUsers.length}</span>
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
                    <span id="profile-gambler-username">{username || "Guest"}</span>
                    <span id="profile-gambler-title">God Gambler</span>
                    <img className="pfp-logo" src={logoIcon} alt=""></img>
                  </div>
                  <div class="profile-notification-container">
                    <img src={NotificationIcon} alt=""/>
                  </div>
            </div>
        </nav>
    )
}

export default ProfileBarContainer;