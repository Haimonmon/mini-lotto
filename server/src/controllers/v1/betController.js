import Bet from "../../models/bet.js";
import Pot from "../../models/pot.js";

class BetController {
    constructor() {
        this.bet = new Bet();
        this.pot = new Pot();
    }

    /**
     * Place a bet
     * @param {*} req - user_id, bet_amount, bet_number
     * @param {*} res - success or failure response
     */
    async placeBet(req, res) {
    const { bet_amount, bet_number } = req.body || {};
    const user_id = res.locals.user_id;
    console.log("User ID:", !res.locals.user_id, "Bet Amount:", !bet_amount, "Bet Number:", !bet_number);

    if (!user_id || !bet_amount || !bet_number) {
        return res.send({ success: false, message: "Invalid bet details" });
    }

    // Validate bet_number format "XX-XX-XX-XX-XX-XX"
    const betNumberPattern = /^(\d{1,2}-){5}\d{1,2}$/;
    if (!betNumberPattern.test(bet_number)) {
        return res.send({ success: false, message: "Invalid bet number format. Use XX-XX-XX-XX-XX-XX" });
    }

    try {
        const result = await this.bet.placeBet(user_id, bet_amount, bet_number);
        res.send({ success: true, message: "Bet placed successfully", bet_id: result.insertId });
    } catch (err) {
        res.send({ success: false, message: err.message });
    }
}


    /**
     * Process bets - Check winners and update the pot
     * @param {*} req - winning_number
     * @param {*} res - success or failure response
     */
    async processBets(req, res) {
        const { winning_number } = req.body || {};
        if (winning_number === undefined) {
            return res.send({ success: false, message: "Winning number is required" });
        }
        
        try {
            const allBets = await this.bet.getAllBets();
            let totalLostAmount = 0;
            
            for (const bet of allBets) {
                if (bet.bet_number !== winning_number) {
                    totalLostAmount += bet.bet_amount;
                }
            }
            
            if (totalLostAmount > 0) {
                await this.pot.updatePot(totalLostAmount);
            }
            
            res.send({ success: true, message: "Bets processed successfully", lostAmountAddedToPot: totalLostAmount });
        } catch (err) {
            res.send({ success: false, message: err.message });
        }
    }

     /**
      * Get all bets from the database
     * @returns {Array} List of bets
     */
    async getAllBets() {
        try {   
            const [results] = await this.bets.execute("SELECT * FROM bets");
            return results;
        } catch (err) {
            console.error("<error> bets.getAllBets", err);
            throw err;
        }
    }
}

export default BetController;