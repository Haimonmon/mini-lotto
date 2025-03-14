import React, { useState } from "react";

const PlaceBetContainer = () => {
    return (
        <div className="place-bet-container">
            <div className="ready-bet">
                <div className="chosen-number-container"></div>
                <div className="place-bet-buttpn-containern">
                    <div className="bet-card-1">
                        <span>20</span>
                    </div>
                    <div className="bet-card-2">
                        <span>20</span>
                    </div>
                    <div className="bet-card-3">
                        <span>20</span>
                    </div>
                    <div className="bet-card-4">
                        <span>20</span>
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