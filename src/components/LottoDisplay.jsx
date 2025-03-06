import React, { useState, useEffect } from "react";
import socket from "../core/socket.js";
import axios from "axios";

const LottoDisplay = () => {
    const [potAmount, setPotAmount] = useState(1000); // ✅ Default to 1000

    useEffect(() => {
        // ✅ Fetch initial pot amount from backend
        const fetchPot = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/pot");
                setPotAmount(response.data.potAmount);
            } catch (err) {
                console.error("Error fetching pot:", err);
            }
        };

        fetchPot();

        // ✅ Listen for pot updates from the backend
        socket.on("potUpdate", (data) => {
            console.log("🏦 Pot Updated:", data);
            setPotAmount(data.potAmount);
        });

        return () => {
            socket.off("potUpdate");
        };
    }, []);

    return (
        <div className="lotto-container">
            <h3>🏦 Pot Amount: ${potAmount}</h3>
        </div>
    );
};

export default LottoDisplay;
