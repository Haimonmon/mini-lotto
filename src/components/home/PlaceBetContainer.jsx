import React, { useState } from "react";
import placeBet from "../../api/home/PlaceBetAPI";

const PlaceBetContainer = () => {
    const [chosenNumbers, setChosenNumbers] = useState(["", "", "", "", "", ""]);
    const [selectedBetAmount, setSelectedBetAmount] = useState(10); // Default to $10

  
    const handleNumberChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; 

        const updatedNumbers = [...chosenNumbers];
        updatedNumbers[index] = value;
        setChosenNumbers(updatedNumbers);
    };

   
    const handleBetSelection = (amount) => {
        setSelectedBetAmount(amount);
    };

    
    const handlePlaceBet = async () => {
        const formattedBetNumbers = chosenNumbers.join("-");
        console.log("Betting on:", formattedBetNumbers);
        console.log("Bet Amount:", selectedBetAmount);

        try {
            const response = await placeBet(selectedBetAmount, formattedBetNumbers);

            if (response.success) {
                console.log(response.data); 
            } else {
                console.log(response);
                console.log('Failed ouchiee 🔴🔴')
            }
        } catch (error) {
            console.error(error);
            alert("Failed to place bet ❌");
        }
    };

    return (
        <div className="place-bet-container">
            <div className="ready-bet">
                <div className="chosen-number-container">
                    <input type="text" value={chosenNumbers[0]} maxLength="2" onChange={(e) => handleNumberChange(0, e.target.value)} className="chosen-winning-num-1"/>
                    <input type="text" value={chosenNumbers[1]} maxLength="2" onChange={(e) => handleNumberChange(1, e.target.value)} className="chosen-winning-num-2"/>
                    <input type="text" value={chosenNumbers[2]} maxLength="2" onChange={(e) => handleNumberChange(2, e.target.value)} className="chosen-winning-num-3"/>
                    <input type="text" value={chosenNumbers[3]} maxLength="2" onChange={(e) => handleNumberChange(3, e.target.value)} className="chosen-winning-num-4"/>
                    <input type="text" value={chosenNumbers[4]} maxLength="2" onChange={(e) => handleNumberChange(4, e.target.value)} className="chosen-winning-num-5"/>
                    <input type="text" value={chosenNumbers[5]} maxLength="2" onChange={(e) => handleNumberChange(5, e.target.value)} className="chosen-winning-num-6"/>
                </div>

                <div className="place-bet-button-containern">
                    <div className={`bet-card-1 ${selectedBetAmount === 10 ? "selected-card" : ""}`} onClick={() => handleBetSelection(10)}>
                        <span>$10</span>
                    </div>
                    <div className={`bet-card-2 ${selectedBetAmount === 50 ? "selected-card" : ""}`} onClick={() => handleBetSelection(50)}>
                        <span>$50</span>
                    </div>
                    <div className={`bet-card-3 ${selectedBetAmount === 100 ? "selected-card" : ""}`} onClick={() => handleBetSelection(100)}>
                        <span>$100</span>
                    </div>
                    <div className={`bet-card-4 ${selectedBetAmount === 450 ? "selected-card" : ""}`} onClick={() => handleBetSelection(450)}>
                        <span>$450</span>
                    </div>
                </div>
            </div>

            <div className="bet-container">
                <div className="bet-button" onClick={handlePlaceBet}>
                    <span>Bet</span>
                </div>
            </div>
        </div>
    );
};

export default PlaceBetContainer;
