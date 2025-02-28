import { connection } from "../core/database.js";

class DrawResult {
    constructor() {
        this.db = connection;
    }

    /**
     * Store draw result in the database
     * @param {Array} winningNumbers - The 6 winning numbers
     * @returns {Object} Insert result
     */
    async storeDrawResult(winningNumbers) {
        try {
            const winningNumbersStr = winningNumbers.join(",");
            
            // Check if there's a winning user
            const [winningUsers] = await this.db.execute(
                'SELECT user_id FROM bet WHERE bet_number IN (?)',
                [winningNumbers]
            );
            
            const winningUserId = winningUsers.length > 0 ? winningUsers[0].user_id : null;
            
            const [result] = await this.db.execute(
                'INSERT INTO draw_result (winning_no, created_at, user_id) VALUES (?, NOW(), ?)',
                [winningNumbersStr, winningUserId]
            );
            return result;
        } catch (err) {
            console.error("<error> DrawResult.storeDrawResult", err);
            throw err;
        }
    }

    /**
     * Get the latest draw result
     * @returns {Object} Draw result
     */
    async getLatestDraw() {
        try {
            const [result] = await this.db.execute(
                'SELECT * FROM draw_result ORDER BY created_at DESC LIMIT 1'
            );
            return result[0] || null;
        } catch (err) {
            console.error("<error> DrawResult.getLatestDraw", err);
            throw err;
        }
    }
}

export default DrawResult;