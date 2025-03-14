import React, { useState, useEffect } from "react";
import TimerComponent from './TimerComponent.jsx';
import { io } from "socket.io-client";
import '../../styles/home.css';

import DrawComponent from "./Draw.Component.jsx";

const socket = io("http://localhost:3000");

const MoneyPotContainer = () => {
    const [potAmount, setPotAmount] = useState(1000000);
    useEffect(() => {
        // ✅ Listen for pot updates
        socket.on("pot_update", (data) => {
            console.log("💰 New Pot Amount:", data.data.amount.pot_amount);
            setPotAmount(data.data.amount.pot_amount);
        });
        return () => {
            socket.off("pot_update");
            socket.off("draw_result");
        };
    });
    return (
        <div className="pot-money-outer-container">
            <div className="pot-money-inner-container">
                <div className="pot-money-container">
                    <span>${potAmount.toLocaleString()}</span> {/* Format as currency */}
                    <hr />
                </div>

                <DrawComponent />

                <TimerComponent />

            </div>
        </div>
    )
}

export default MoneyPotContainer;