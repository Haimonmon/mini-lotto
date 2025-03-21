import React, { useState } from "react";
import placeBet from "../../api/home/PlaceBetAPI";
import PlaceBetButton from "../PlaceBetButton";

const PlaceBetContainer = () => {
    const [chosenNumbers, setChosenNumbers] = useState(["", "", "", "", "", ""]);
    const [selectedBetAmount, setSelectedBetAmount] = useState(20);
    const [invalidNumbers, setInvalidNumbers] = useState([]);
    const [hasErrors, setHasErrors] = useState(false);
    const [liveBets, setLiveBets] = useState([]);

    const handleNumberChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; 

        const updatedNumbers = [...chosenNumbers];
        updatedNumbers[index] = value;

        setChosenNumbers(updatedNumbers);
        validateNumbers(updatedNumbers);
    };

    const validateNumbers = (numbers) => {
        const numberSet = new Set();
        let errors = [];
        let hasEmptyFields = false;
    
        numbers.forEach((num, index) => {
            if (num === "") {
                hasEmptyFields = true;
                errors.push(index);
            } else if (parseInt(num) > 45 || numberSet.has(num)) {
                errors.push(index);
            } else {
                numberSet.add(num);
            }
        });
    
        setInvalidNumbers(errors);
        setHasErrors(errors.length > 0);
    
        return hasEmptyFields;
    };

   
    const handleBetSelection = (amount) => {
        setSelectedBetAmount(amount);
    };

    
    const handlePlaceBet = async () => {
        const hasEmptyFields = validateNumbers(chosenNumbers);

        if (hasEmptyFields) {
            alert("Missing numbers! Please fill in all fields.");
            return;
        }

        if (hasErrors) {
            alert("Invalid chosen number bet!");
            return;
        }

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
                    {chosenNumbers.map((num, index) => (
                        <input 
                            key={index}
                            type="text"
                            value={num}
                            maxLength="2"
                            onChange={(e) => handleNumberChange(index, e.target.value)}
                            className={invalidNumbers.includes(index) ? "error-input" : ""}
                        />
                    ))}
                </div>

                <div className="place-bet-button-containern">
                    <PlaceBetButton className={`bet-card-1 ${selectedBetAmount === 20 ? "selected-card" : ""}`} onClick={() => handleBetSelection(20)} value="$20" />
                    <PlaceBetButton className={`bet-card-2 ${selectedBetAmount === 50 ? "selected-card" : ""}`} onClick={() => handleBetSelection(50)} value="$50" />
                    <PlaceBetButton className={`bet-card-3 ${selectedBetAmount === 100 ? "selected-card" : ""}`} onClick={() => handleBetSelection(100)} value="$100" />
                    <PlaceBetButton className={`bet-card-4 ${selectedBetAmount === 450 ? "selected-card" : ""}`} onClick={() => handleBetSelection(450)} value="$450" />
                    {/* <div className={`bet-card-1 ${selectedBetAmount === 20 ? "selected-card" : ""}`} onClick={() => handleBetSelection(20)}>
                        <span>$20</span>
                    </div>
                    <div className={`bet-card-2 ${selectedBetAmount === 50 ? "selected-card" : ""}`} onClick={() => handleBetSelection(50)}>
                        <span>$50</span>
                    </div>
                    <div className={`bet-card-3 ${selectedBetAmount === 100 ? "selected-card" : ""}`} onClick={() => handleBetSelection(100)}>
                        <span>$100</span>
                    </div>
                    <div className={`bet-card-4 ${selectedBetAmount === 450 ? "selected-card" : ""}`} onClick={() => handleBetSelection(450)}>
                        <span>$450</span>
                    </div> */}
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
