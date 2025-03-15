import axios from "axios";

const API_URL = "http://localhost:8000/v1/account/";
const API_KEY = "nigga"; 

/**
 * Handles user signup
 * @param {string} username
 * @param {string} password
 * @returns {Promise<Object>} response data
 */
export const signUpUser = async (username, password) => {
    try {
        const payload = { username, password };
        const response = await axios.post("http://localhost:8000/v1/account/", payload, {
            headers: { 
                apikey: API_KEY,
             },
        });

        return response
    } catch (error) {
        throw new Error(error.response?.data?.message || "Signup failed");
    }
};


/**
 * Handles user signup
 * @param {string} username
 * @param {string} password
 * @returns {Promise<Object>} response data
 */
export const signInUser = async (username, password) => {
    try {
        const payload = { username, password };
        const response = await axios.post("http://localhost:8000/v1/account/login", payload, {
            headers: { apikey: API_KEY },
        });

        return response
    } catch (error) {
        throw new Error(error.response?.data?.message || "Signup failed");
    }
};
