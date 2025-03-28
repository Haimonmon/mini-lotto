import React, { useState, useEffect } from "react";
import "../styles/home.css";
import useSocket from "../hooks/useSocket";

const DrawComponent = () => {
    const [winningNumbers, setWinningNumbers] = useState([]);
    const { isConnected, socket } = useSocket();

    useEffect(() => {
        // Listen for draw result updates
        if (!isConnected) {
            console.log('DISCONNECTED')
            return;
        };

       

        socket.on("app_state_update_draw_number", (data) => {
            console.log("🎯 New Draw Result:", data);

            if (data && typeof data === "string") {
                // ✅ Convert "XX-XX-XX-XX-XX-XX" into an array of numbers
                const numbersArray = data.split("-").map(Number);
                setWinningNumbers(numbersArray);
                console.log(winningNumbers.length)
            } else {
                setWinningNumbers([]); // Reset if invalid
            }
        });

        return () => {
            socket.off("app_state_update_draw_number");
        };
    }, [isConnected, socket]);

    return (
                <div className="winning-num-container">
                    
                    {winningNumbers.length > 0 ? (
                        onlineDrawComponent(winningNumbers)
                    ) : (
                        offlineDrawComponent()
                    )}
                    
                </div>
    );
};

const onlineDrawComponent = (winningNumbers) => {
    return (
        <>
            {winningNumbers.map((num, index) => (
                <div key={index} id={`num${index + 1}`}>
                    <span>{num}</span>
                    <div id={`num${index + 1}-holder-border`}>
                        <div className="inner-holder"></div>
                    </div>
                </div>
            ))}
        </>
    );
}


/**
 * Returns default component if draw is not active
 */
const offlineDrawComponent = () => {
    return (
        <>
            <div id="num1">
                <span>0</span>
                <div id="num1-holder-border">
                    <div className="inner-holder"></div>
                </div>
            </div>
            <div id="num2">
                <span>0</span>
                <div id="num2-holder-border">
                    <div className="inner-holder"></div>
                </div>
            </div>
            <div id="num3">
                <span>0</span>
                <div id="num3-holder-border">
                    <div className="inner-holder"></div>
                </div>
            </div>
            <div id="num4">
                <span>0</span>
                <div id="num4-holder-border">
                    <div className="inner-holder"></div>
                </div>
            </div>
            <div id="num5">
                <span>0</span>
                <div id="num5-holder-border">
                    <div className="inner-holder"></div>
                </div>
            </div>
            <div id="num6">
                <span>0</span>
                <div id="num6-holder-border">
                    <div className="inner-holder"></div>
                </div>
            </div>
        </>
    );
}
export default DrawComponent;
