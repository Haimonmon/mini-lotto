import { connection } from "../core/database.js";

class Bet {
    constructor() {
        this.db = connection;
    }

    /**
     * Place a new bet
     * @param {number} user_id - The ID of the user placing the bet
     * @param {number} bet_amount - The amount being bet
     * @param {number} bet_number - The number the user is betting on
     */
    async placeBet(user_id, bet_amount, bet_number) {
        try {
            // Ensure the user does not exceed 20 bets
            const [betCount] = await this.db.execute(
                "SELECT COUNT(*) as count FROM bet WHERE user_id = ?", 
                [user_id]
            );
            
            if (betCount[0].count >= 20) {
                throw new Error("Maximum of 20 bet reached.");
            }
            
            // Insert new bet
            const [result] = await this.db.execute(
                "INSERT INTO bet (user_id, bet_amount, bet_number, created_at) VALUES (?, ?, ?, NOW())", 
                [user_id, bet_amount, bet_number]
            );
            return result;
        } catch (err) {
            console.error("<error> bet.placeBet", err);
            throw err;
        }
    }

    /**
     * Get all bets for a user
     * @param {number} user_id - The ID of the user
     */
    async getUserBets(user_id) {
        try {
            const [bets] = await this.db.execute(
                "SELECT * FROM bet WHERE user_id = ?", 
                [user_id]
            );
            return bets;
        } catch (err) {
            console.error("<error> bet.getUserBets", err);
            throw err;
        }
    }
}

export default Bet;