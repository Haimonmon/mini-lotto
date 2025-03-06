import React, { useState, useEffect } from "react";
import socket from "../core/socket.js"; // Import the socket connection
import axios from "axios";

const LottoDisplay = () => {
    const [countdown, setCountdown] = useState(60);
    const [status, setStatus] = useState("Waiting for the next draw...");
    const [winningNumbers, setWinningNumbers] = useState(null);
    const [potAmount, setPotAmount] = useState(1000); // Default pot amount
    const [bets, setBets] = useState([]); // Store user bets
    const [betAmount, setBetAmount] = useState("");
    const [betNumbers, setBetNumbers] = useState("");

    useEffect(() => {
        // ✅ Fetch initial pot amount
        const fetchPot = async () => {
            try {
                const response = await axios.get("http://localhost:3000/v1/pot/");
                setPotAmount(response.data.potAmount);
            } catch (err) {
                console.error("Error fetching pot:", err);
            }
        };

        fetchPot();

        // ✅ Listen for countdown updates
        socket.on("countdown", (data) => {
            setCountdown(data.timeLeft);
        });

        // ✅ Listen for draw status updates
        socket.on("status", (data) => {
            setStatus(data.message);
        });

        // ✅ Listen for draw results
        socket.on("drawResult", (data) => {
            console.log("🔥 Draw Result Received:", data);
            setWinningNumbers(data.winningNumbers);
            setStatus("🎉 Winning numbers drawn!");
        });

        // ✅ Listen for pot updates
        socket.on("potUpdate", (data) => {
            console.log("🏦 Pot Updated:", data);
            setPotAmount(data.potAmount);
        });

        // ✅ Listen for new bets
        socket.on("new_bet", (data) => {
            console.log("📝 New Bet Placed:", data);
            setBets((prevBets) => [...prevBets, data]);
        });

        return () => {
            socket.off("countdown");
            socket.off("status");
            socket.off("drawResult");
            socket.off("potUpdate");
            socket.off("new_bet");
        };
    }, []);

    // ✅ Handle Bet Submission
    const placeBet = async (e) => {
        e.preventDefault();

        // ✅ Validate bet format (6 numbers, e.g., "12-23-34-45-06-18")
        const betPattern = /^(\d{1,2}-){5}\d{1,2}$/;
        if (!betPattern.test(betNumbers)) {
            alert("Invalid format! Use 6 numbers separated by dashes (XX-XX-XX-XX-XX-XX).");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/v1/bets/", {
                bet_amount: betAmount,
                bet_number: betNumbers,
            },
            { 
                headers:{
                    apikey: 'nigga',
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pZ2dlcnMiLCJ1c2VyX2lkIjozLCJpYXQiOjE3NDEyODg2MzMsImV4cCI6MTc0MTM3NTAzM30.3MGXtV5kt_ceuA_3EBZWgaIf9wRj1BkgcQHd7roCaBQ'
                }
            }
            );

            if (response.data.success) {
                alert("🎉 Bet placed successfully!");
                setBetAmount("");
                setBetNumbers("");
            } else {
                alert("❌ " + response.data.message);
            }
        } catch (err) {
            console.error("Error placing bet:", err);
            alert("Error placing bet. Try again!");
        }
    };

    return (
        <div className="lotto-container">
            <h1>🎰 Mini Lotto</h1>
            <h2>⏳ Countdown: {countdown}s</h2>
            <p>Status: {status}</p>

            {/* ✅ Display Current Pot Amount */}
            <h3>🏦 Pot Amount: ${potAmount}</h3>

            {/* ✅ Betting Form */}
            <div className="bet-form">
                <h3>💸 Place Your Bet</h3>
                <form onSubmit={placeBet}>
                    <input
                        type="number"
                        placeholder="Bet Amount"
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="XX-XX-XX-XX-XX-XX"
                        value={betNumbers}
                        onChange={(e) => setBetNumbers(e.target.value)}
                        required
                    />
                    <button type="submit">🎲 Place Bet</button>
                </form>
            </div>

            {/* ✅ Display Winning Numbers */}
            {winningNumbers && (
                <div className="winning-numbers">
                    <h3>🎉 Winning Numbers:</h3>
                    <p>{winningNumbers.join(" - ")}</p>
                </div>
            )}

            {/* ✅ Display User Bets */}
            <div className="bets">
                <h3>📜 Latest Bets:</h3>
                <ul>
                    {bets.map((bet, index) => (
                        <li key={index}>
                            🆔 User {bet.user_id} bet ${bet.bet_amount} on {bet.bet_number}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LottoDisplay;
