import MainContainer from "../components/MainContainer.jsx";
import NavigationBar from "../components/Navigation.jsx";
import PageContainer from "../components/PageContainer.jsx";
import BottomNavigation from "../components/BottomNavBar.jsx";

import GamblersProfileContainer from "../components/profile/GamblersProfileContainer.jsx";
import CashInContainer from "../components/profile/CashInContainer.jsx";

// * Not Complete 💀👌✨
const Profile = () => {
    return (
        <MainContainer size="large">
            <NavigationBar/>
            <PageContainer>
                <GamblersProfileContainer/>
                <CashInContainer/>
                <BottomNavigation />                
            </PageContainer>
        </MainContainer>
    );
}

export default Profile;