import React, { useEffect, useState } from "react";
import useSocket from '../hooks/useSocket';

/**
 * 
 * @returns Winning Container
 */
const WinningPopUpContainer = () => {
    const [isVisisble, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(""); 
    
    const { isConnected, socket } = useSocket();

    useEffect(() => {
        if (!isConnected) return;

        // ✅ Listen for the winning event
        socket.on("draw_result", (data) => {
            console.log("🎉 User won!");

            setMessage("ROUND ENDED");
            setStatus("round-ended");
            setIsVisible(true); 

            setTimeout(() => {
                setIsVisible(false);
            }, 6000);
        });

        return () => {
            socket.off("draw_result");
        };
    }, [isConnected, socket]);

    return (
        <div className={`winning-popup ${isVisisble ? "show" : ""} ${status}`} id="winning-popup">
            <span id="win-message">ROUND ENDED</span>
        </div>
    );
};

export default WinningPopUpContainer;