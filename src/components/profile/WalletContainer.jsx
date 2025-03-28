import React, { useState, useEffect } from "react";
import { getProfile } from "../../api/ProfileApi";

/**
 * 
 * @returns
 */
const WalletContainer = () => {
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
        <div class="wallet-outer-container">
            <div class="wallet-inner-container">
                <span id="wallet-money">$ {profile.data.user_money.toLocaleString()}</span>
                <div class="balance-container">
                <span>Wallet Balance</span>
                </div>
            </div>
        </div>
    )
}

export default WalletContainer;