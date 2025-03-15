import axios from "axios";

const API_URL = "http://localhost:8000/v1/bets/";
const API_KEY = "nigga"; 

/**
 * 
 * @param {*} bet 
 */
const placeBet = async (bet_amount, bet_number) => {
    try {
        console.log('BETH AMOUNT: ', bet_amount);
        console.log('BET NUMBERS: ', bet_number);

        const payload = {bet_amount, bet_number};

        const response = await axios.post(API_URL, payload, {
            headers: { 
                apikey: API_KEY,
                token: sessionStorage.getItem('token')
             },
        });

        return response;

    } catch(error) {
        throw new Error('Place Bet Failed 🔴');
    }
}

export default placeBet;