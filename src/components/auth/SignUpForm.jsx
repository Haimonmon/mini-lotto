import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../InputComponents";
import ShowPassword from "../ShowPassword";
import FormButton from "../FormButtonComponent";


import { signUpUser } from "../../api/auth/AuthenticationAPI";

import passwordIconUnHide from "../../assets/PASSWORD-UNHIDE-STATE.png";
import passwordIconHide from "../../assets/PASSWORD-HIDE-STATE.png";

/**
 * Sign in and Sign up forms
 * @returns my own form :3
 */
const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        console.log(error)

        if (username.length < 8 || username.length > 10) {
            setError("Username must be at least 8 characters long.");
            return;
        }

        if (password.length < 8 || password.length > 14) {
            setError("Password must be at least 10 characters long.");
            return;
        }

        try {
            const response = await signUpUser(username, password);

            if (response.data.success) {
                navigate("/");
            } else {
                console.log(response)
                throw new Error(response.data.message || "Signup failed");
            }
        } catch (err) {
            console.log(err)
            console.log(error)
            setError(err.message);
        }
    };

    return (
        <div className="form-container">
            <div className="account-creation-text">
                <span className="title-sign">Create an account</span>
                <p>Have an account? <Link to="/sign-in" className="link">Spin in</Link></p>
            </div>

            <form className="sign-inputs" onSubmit={handleSignup}>
                <span id="error-message">{error}</span>
                <Input type="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <ShowPassword className="show-password-container" src={showPassword ? passwordIconHide : passwordIconUnHide} onClick={() => {
                    setShowPassword(!showPassword)
                }} showpass={showPassword ? "Hide" : "Show"}/>
                <FormButton className="lets-go-btn-container" type="submit"/>
            </form>
        </div>
    );
}

export default Form;