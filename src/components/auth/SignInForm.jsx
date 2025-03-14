import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInUser } from "../../api/auth/AuthenticationAPI";

import passwordIconHide from "../../assets/PASSWORD-HIDE-STATE.png";
import passwordIconUnHide from "../../assets/PASSWORD-UNHIDE-STATE.png";

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

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await  signInUser(username, password);

            // console.log(response);

            if (response.data.success) {
                sessionStorage.setItem("token", response.data.data.token);
                sessionStorage.setItem("username", username);
                navigate("/home");
            } else {
                throw new Error(response.data.message || "Login failed");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="form-container">
            <div className="account-creation-text">
                <span className="title-sign">Spin in</span>
                <p>Don't have an account? <Link to="/sign-up" className="link">Sign up</Link></p>
            </div>

            <form className="sign-inputs" onSubmit={handleLogin}>
                <span id="error-message">{error}</span>
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <div className="show-password-container">
                    <img
                        src={showPassword ? passwordIconHide : passwordIconUnHide} 
                        alt=""
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