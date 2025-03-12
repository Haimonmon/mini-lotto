import MainContainer from "../components/MainContainer.jsx";
import NavigationBar from "../components/Navigation.jsx";
import PageContainer from "../components/PageContainer.jsx";

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
            </PageContainer>
        </MainContainer>
    );
}

export default Profile;