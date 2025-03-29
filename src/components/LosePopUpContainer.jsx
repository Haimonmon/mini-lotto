import React, { useEffect, useState } from "react";
import useSocket from '../hooks/useSocket';

/**
 * 
 * @returns Winning Container
 */
const LosePopUpContainer = () => {
    return (
        <div className="lose-popup" id="lose-popup">
            <span id="lose-message">YOU'VE LOST</span>
        </div>
    );
};

export default LosePopUpContainer;