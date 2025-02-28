import DrawResult from "../../models/draw.js";
import Bet from "../../models/bet.js";
import Pot from "../../models/pot.js";

class DrawResultController {
    constructor() {
        this.drawResult = new DrawResult();
        this.bet = new Bet();
        this.pot = new Pot();
    }

    /**
     * Generate a random draw result with 6 unique numbers between 1 and 45
     * @returns {string} Winning numbers in "XX-XX-XX-XX-XX-XX" format
     */
    generateWinningNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        return sortedNumbers.map(num => num.toString().padStart(2, '0')).join('-');
    }

    /**
     * Create a draw result and store it in the database
     * Also, process bets to check for winners and update the pot
     * @param {*} req 
     * @param {*} res 
     */
    async createDraw(req, res) {
        try {
            const winningNumbers = this.generateWinningNumbers();
            const response = await this.drawResult.storeDrawResult(winningNumbers);
            
            // Process bets
            const allBets = await this.bet.getAllBets();
            let totalLostAmount = 0;
            let winningUsers = [];

            for (const bet of allBets) {
                if (bet.bet_number === winningNumbers) {
                    winningUsers.push(bet.user_id);
                } else {
                    totalLostAmount += bet.bet_amount;
                }
            }

            if (totalLostAmount > 0) {
                await this.pot.updatePot(totalLostAmount);
            }

            res.send({
                success: true,
                message: "Draw result stored and bets processed successfully.",
                data: { drawId: response.insertId, winningNumbers, totalLostAmount, winningUsers },
            });
        } catch (err) {
            res.send({
                success: false,
                message: err.toString(),
            });
        }
    }

    /**
     * Get the latest draw result
     * @param {*} req 
     * @param {*} res 
     */
    async getLatestDraw(req, res) {
        try {
            const drawResult = await this.drawResult.getLatestDraw();
            if (!drawResult) {
                return res.send({ success: false, message: "No draw results found." });
            }
            res.send({ success: true, data: drawResult });
        } catch (err) {
            res.send({ success: false, message: err.toString() });
        }
    }
}

export default DrawResultController;