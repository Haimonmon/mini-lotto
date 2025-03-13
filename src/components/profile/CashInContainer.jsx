import React, { useState } from 'react';

/**
 * 
 * @returns 
 */
const CashInContainer = () => {
    return (
        <div class="cash-in-container">
            
            <div class="cash-in-title-container">
                <span id="cash-in-title">
                    Cash in
                </span>
                <span id="cash-in-sub-title">
                    You may want to refill that wallet, my guy.
                </span>
            </div>

            <div class="cash-in-cards">
                <div id="card-1">
                    <span id="card-1-price-value">$20</span>
                    <span id="card-1-title">Rookie Gambler</span>
                </div>
                <hr/>
                <div id="card-2">
                    <span id="card-2-price-value">$100</span>
                    <span id="card-2-title">Casual Better</span>
                </div>
                <hr/>
                <div id="card-3">
                    <span id="card-3-price-value">$500</span>
                    <span id="card-3-title">Risk Taker</span>
                </div>
                <hr/>
                <div id="card-4">
                    <span id="card-4-price-value">$1K</span>
                    <span id="card-4-title">High Roller</span>
                </div>
                <hr/>
                <div id="card-5">
                    <span id="card-5-price-value">$10K</span>
                    <span id="card-5-title">Jackpot Dreamer</span>
                </div>
                </div>

        </div>
    )
}

export default CashInContainer;