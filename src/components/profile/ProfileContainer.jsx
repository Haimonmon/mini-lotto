import React, { useState, useEffect, createContext } from "react";

import "../../styles/profile.css";

import DefaultProfileImage from '../../assets/0c42be6660f5afc7cf6e7e32c43496ca.jpg';
import CoinIcon from '../../assets/coin (1).png';
import CloverIcon from '../../assets/clover.png';
import DiamondIcon from '../../assets/diamond.png';

import { getProfile } from "../../api/ProfileApi";

export const ProfileContext = createContext(null);
const ProfileContainer = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await getProfile();
                console.log('migga', response.data)
                
                if (response.data.success) {
                    setProfile(response.data);
                } else {
                    throw new Error(response.data.message || "Error fetching profile");
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!profile) {
        return <div>Loading profile...</div>;
    }
    console.log('Nigga',profile)
    return (
        <div className="profile-container">
            <div className="gambler-name-container">
                <div className="profile-image">
                    <img src={profile.image || DefaultProfileImage} alt="Profile" />
                </div>
                <div className="gambler-name">
                    <span id="gambler-name">{profile.data.username || "Mr Nikas"}</span>
                    <span id="gambler-title">{profile.title || "Gambler"}</span>
                    <span id="gambler-joined-date">Joined {profile.data.created_at || "Dec 20, 2021"}</span>
                </div>
            </div>
            <hr />
            <div className="gambler-achievements-container">
                <div className="bets-container">
                    <img src={CoinIcon} alt="gambler bets icon" />
                    <hr />
                    <span> Bets</span>
                </div>
                <div className="luck-container">
                    <img src={CloverIcon} alt="gambler luck icon" />
                    <hr />
                    <span> Lucky</span>
                </div>
                <div className="jackpots-container">
                    <img src={DiamondIcon} alt="gambler jackpots icon" />
                    <hr />
                    <span> Jackpots</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;
