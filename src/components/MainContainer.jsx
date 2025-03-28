import React, { useState } from "react";

import "../styles/container.css";


const MainContainer = ({size,  children }) => {
    return (
        <div className={`main-container ${size}`}>{ children }</div>
    )
}

export default MainContainer;