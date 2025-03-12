import React, { useState } from "react";

/**
 * 
 * @returns
 */
const WalletContainer = () => {
    return (
        <div class="wallet-outer-container">
            <div class="wallet-inner-container">
                <span id="wallet-money">$ 20,000</span>
                <div class="balance-container">
                <span>Wallet Balance</span>
                </div>
            </div>
        </div>
    )
}

export default WalletContainer;