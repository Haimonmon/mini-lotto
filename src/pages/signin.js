import Form from "../components/auth/SignInForm.jsx";
import MainContainer from "../components/MainContainer";
import EmptySideBar from "../components/EmptySidebar";
import SiteDescription from "../components/auth/siteDescription";

import "../styles/public.css";
// import "../styles/auth.css";

/**
 * Just a sign in
 */
const SignIn  = () => {
    return (
        <MainContainer size="small">
            <EmptySideBar/>
            <SiteDescription/>
            <Form/>
        </MainContainer>       
    )
}

export default SignIn ;