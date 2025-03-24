import React, { useEffect, useState } from "react";
import useSocket from '../hooks/useSocket';

const TimerComponent = () => {
    const [countdown, setCountdown] = useState(60);
    const { isConnected, socket } = useSocket();

    useEffect(() => {
        if (!isConnected) return;
        // Listen for countdown updates from publisher
        socket.on("countdown", (time) => {
            setCountdown(time);
        });

        // Cleanup the event listener on unmount
        return () => {
            socket.off("countdown");
        };
    }, [isConnected, socket]);

    return (
        <div className="timer-container">
            <span>00 : 00 : {countdown.toString().padStart(2, "0")}</span>
        </div>
    );
};

export default TimerComponent;