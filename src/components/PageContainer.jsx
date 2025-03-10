import React, { useState } from "react";
import ProfileBarContainer from "./ProfileBarContainer";


const PageContainer = ({ children }) => {
    return (
        <main>
            <ProfileBarContainer/>
            <div className="main-inner-container">
                { children }
            </div>
        </main>
    )
}

export default PageContainer;