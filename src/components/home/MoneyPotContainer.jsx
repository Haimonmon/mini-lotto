import React, { useState } from "react";

import '../../styles/home.css';

const MoneyPotContainer = () => {
    return (
        <div className="pot-money-outer-container">
            <div className="pot-money-inner-container">
                <div className="pot-money-container">
                    <span>$ 20,000,000</span>
                    <hr/>
                </div>

                <div className="winning-num-container">
                    <div id="num1">
                    <span>5</span>
                    <div id="num1-holder-border">
                        <div className="inner-holder"></div>
                    </div>
                    </div>
                    <div id="num2">
                    <span>20</span>
                    <div id="num2-holder-border">
                        <div className="inner-holder"></div>
                    </div>
                    </div>
                    <div id="num3">
                    <span>19</span>
                    <div id="num3-holder-border">
                        <div className="inner-holder"></div>
                    </div>
                    </div>
                    <div id="num4">
                    <span>3</span>
                    <div id="num4-holder-border">
                        <div className="inner-holder"></div>
                    </div>
                    </div>
                    <div id="num5">
                    <span>11</span>
                    <div id="num5-holder-border">
                        <div className="inner-holder"></div>
                    </div>
                    </div>
                    <div id="num6">
                    <span>9</span>
                    <div id="num6-holder-border">
                        <div className="inner-holder"></div>
                    </div>
                    </div>
                </div>

                <div className="timer-container">
                    <span>00 : 00 : 60</span>
                </div>

            </div>
        </div>
    )
}

export default MoneyPotContainer;