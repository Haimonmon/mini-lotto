import React, { useState } from "react";

const PlaceBetContainer = () => {
    return (
        <div className="place-bet-container">
            <div className="ready-bet">
                
                <div className="chosen-number-container">
                    <input type="text" className="chosen-winning-num-1"/>
                    <input type="text" className="chosen-winning-num-2"/>
                    <input type="text" className="chosen-winning-num-3"/>
                    <input type="text" className="chosen-winning-num-4"/>
                    <input type="text" className="chosen-winning-num-5"/>
                    <input type="text" className="chosen-winning-num-6"/>
                </div>

                <div className="place-bet-button-containern">
                    <div className="bet-card-1 selected-card">
                        <span>$10</span>
                    </div>
                    <div className="bet-card-2">
                        <span>$50</span>
                    </div>
                    <div className="bet-card-3">
                        <span>$100</span>
                    </div>
                    <div className="bet-card-4">
                        <span>$450</span>
                    </div>
                </div>

            </div>


            <div className="bet-container">
                <div className="bet-button">
                    <span>Bet</span>
                </div>
            </div>
            
        </div>
    )
}

export default PlaceBetContainer;