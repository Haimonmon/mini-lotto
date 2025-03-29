import React, { useState, useEffect } from "react";
import TimerComponent from '../TimerComponent.jsx';
import '../../styles/home.css';
import useSocket from "../../hooks/useSocket.js";
import DrawComponent from "../Draw.Component.jsx";
import WinningPopUpContainer from "../WinningPopUpContainer.jsx";

const MoneyPotContainer = () => {
    const [potAmount, setPotAmount] = useState(1000000);
    const { isConnected, socket } = useSocket();
    const [status, setStatus] = useState("");
    
    useEffect(() => {
        // ✅ Listen for pot updates
        if(!isConnected) return;
        socket.on("app_state_update_pot_money", (data) => {
            console.log("💰 New Pot Amount:", data);

            if (data) {
                setPotAmount(data);                
            }
        });
        return () => {
            socket.off("app_state_update_pot_money");
        };
    });
    return (
        <div className="pot-money-outer-container">
            <div className="pot-money-inner-container">
                <div className="pot-money-container">
                    <span>${potAmount.toLocaleString()}</span>
                    <hr />
                </div>

                <DrawComponent />

                <TimerComponent />

                <WinningPopUpContainer/>
            </div>
        </div>
    )
}

export default MoneyPotContainer;