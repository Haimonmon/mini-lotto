import axios from 'axios';

const API_URL = "http://localhost:8000/v1/account/";
const API_KEY = "nigga";

let walletMoney = 0;

// * Jstu getter function :)
export const getWalletMoney = () => walletMoney;

export const getProfile = async () => {
    try{
        const response = await axios.get(`${API_URL}profile`,{
            headers: {
                apikey: API_KEY,
                token: sessionStorage.getItem('token')
            }
        })

        walletMoney = response.data.data.user_money;

        console.log(response.data)
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

        walletMoney += money;

        console.log(walletMoney)

        response.data.new_balance = walletMoney;
        return response;
    } catch (err){
        throw new Error(err.response?.data.message || "Topup failed")
    }
}

export default walletMoney;