import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
                throw new Error(response.data.message || "Signup failed");
            }
        } catch (err) {
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
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <div className="show-password-container">
                    <img
                     id="show-password-icon"
                     src={showPassword ? passwordIconHide : passwordIconUnHide} 
                     alt="password-visibility"
                     onClick={() => {
                        setShowPassword(!showPassword)
                     }}
                    />
                    <span>{showPassword ? "Hide" : "Show"} Password</span>
                </div>
                <div className="lets-go-btn-container">
                    <button type="submit">Let's Go</button>
                </div>
            </form>
        </div>
    );
}

export default Form;