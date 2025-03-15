import React, { useState } from "react";
import { addMoney } from "../../api/ProfileApi";

const CashInContainer = () => {
    const [message, setMessage] = useState("");

    const handleCashIn = async (amount) => {
        setMessage(""); // Reset message

        try {
            const response = await addMoney(amount); // Call API

            if (response.data.success) {
                setMessage(`✅ Successfully added $${amount.toLocaleString()}!`);
            } else {
                setMessage(`❌ Failed: ${response.data.message || "Error occurred"}`);
            }
        } catch (err) {
            setMessage(`❌ Error: ${err.message}`);
        }
    };

    return (
        <div className="cash-in-container">
            <div className="cash-in-title-container">
                <span id="cash-in-title">Cash in</span>
                <span id="cash-in-sub-title">You may want to refill that wallet, my guy.</span>
            </div>

            <div className="cash-in-cards">
                <div id="card-1" onClick={() => handleCashIn(20)}>
                    <span id="card-1-price-value">$20</span>
                    <span id="card-1-title">Rookie Gambler</span>
                </div>
                <hr />
                <div id="card-2" onClick={() => handleCashIn(100)}>
                    <span id="card-2-price-value">$100</span>
                    <span id="card-2-title">Casual Better</span>
                </div>
                <hr />
                <div id="card-3" onClick={() => handleCashIn(500)}>
                    <span id="card-3-price-value">$500</span>
                    <span id="card-3-title">Risk Taker</span>
                </div>
                <hr />
                <div id="card-4" onClick={() => handleCashIn(1000)}>
                    <span id="card-4-price-value">$1K</span>
                    <span id="card-4-title">High Roller</span>
                </div>
                <hr />
                <div id="card-5" onClick={() => handleCashIn(10000)}>
                    <span id="card-5-price-value">$10K</span>
                    <span id="card-5-title">Jackpot Dreamer</span>
                </div>
            </div>

            {message && <div className="cash-in-message">{message}</div>}
        </div>
    );
};

export default CashInContainer;
