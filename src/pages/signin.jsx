import Form from "../components/auth/Form";
import MainContainer from "../components/MainContainer";
import EmptySideBar from "../components/auth/EmptySidebar";
import SiteDescription from "../components/auth/siteDescription";

import "../../public/public.css"
import "../styles/auth.css"

/**
 * Just a sign in
 */
const SignIn = () => {
    return (
        <MainContainer>
            <EmptySideBar/>
            <SiteDescription/>
            <Form/>
        </MainContainer>       
    )
}

export default SignIn;