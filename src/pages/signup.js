import Form from "../components/auth/SignUpForm.jsx";
import MainContainer from "../components/MainContainer";
import EmptySideBar from "../components/auth/EmptySidebar";
import SiteDescription from "../components/auth/siteDescription";
import EmptyBottomBar from "../components/auth/EmptyBottomBar";

import "../styles/public.css";
// import "../styles/auth.css";

/**
 * Just a sign in
 */
const SignUp = () => {
    return (
        <MainContainer size="small">
            <EmptySideBar/>
            <SiteDescription/>
            <Form/>
            <EmptyBottomBar />
        </MainContainer>       
    )
}

export default SignUp;