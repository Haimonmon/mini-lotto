import MainContainer from "../components/MainContainer.jsx";
import NavigationBar from "../components/Navigation.jsx";
import PageContainer from "../components/PageContainer.jsx";
import MoneyPotContainer from "../components/home/MoneyPotContainer.jsx";
import PlaceBetContainer from "../components/home/PlaceBetContainer.jsx";
import BottomNavigation from "../components/BottomNavBar.jsx";


// * Not Complete 💀👌✨
const Home = () => {
    return (
        <MainContainer size="large">
            <NavigationBar/>
            <PageContainer>
                <MoneyPotContainer/>
                <PlaceBetContainer/>
            </PageContainer>
            <BottomNavigation/>
        </MainContainer>
    );
}

export default Home;