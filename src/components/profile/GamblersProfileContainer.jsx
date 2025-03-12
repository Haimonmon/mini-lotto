import React, { useState } from 'react';

import WalletContainer from './WalletContainer';
import HistoryContainer from './HistoryContainer';
import ProfileContainer from './ProfileContainer';

const GamblersProfileContainer = () => {
    return (
        <div class="gambers-profile-container">
            <HistoryContainer/>
            <ProfileContainer/>
            <WalletContainer/>
        </div>
    )
}

export default GamblersProfileContainer;