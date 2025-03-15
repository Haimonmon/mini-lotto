import axios from 'axios';

const API_URL = "http://localhost:8000/v1/account/";
const API_KEY = "nigga";

export const getProfile = async () => {
    try{
        const response = await axios.get(`${API_URL}profile`,{
            headers: {
                apikey: API_KEY,
                token: sessionStorage.getItem('token')
            }
        })

        return response;
    } catch (error){
        throw new Error(error.response?.data?.message || "GetProfile failed");
    }
}

export const addMoney = async (money) => {
    try{
        const payload = { money }
        const response = await axios.patch(`${API_URL}topup`, payload, {
            headers: {
                apikey: API_KEY,
                token: sessionStorage.getItem('token')
            }
        })
        return response;
    } catch (err){
        throw new Error(err.response?.data.message || "Topup failed")
    }
}