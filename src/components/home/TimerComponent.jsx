import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // Connect to the publisher

const TimerComponent = () => {
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        // Listen for countdown updates from publisher
        socket.on("countdown", (time) => {
            setCountdown(time);
        });

        // Cleanup the event listener on unmount
        return () => {
            socket.off("countdown");
        };
    }, []);

    return (
        <div className="timer-container">
            <span>00 : 00 : {countdown.toString().padStart(2, "0")}</span>
        </div>
    );
};

export default TimerComponent;