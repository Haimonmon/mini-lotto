import React, { useState } from "react";
import ProfileBarContainer from "./ProfileBarContainer";


const PageContainer = ({ children }) => {
    return (
        <main>
            <ProfileBarContainer/>
            { children }
        </main>
    )
}

export default PageContainer;