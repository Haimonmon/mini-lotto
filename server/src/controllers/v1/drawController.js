import { getIO } from "../../core/socket.js"; // ✅ Import getIO()
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
        return Array.from(numbers).sort((a, b) => a - b); // Return array
    }
    

    /**
     * Create a draw result and store it in the database
     * Also, process bets to check for winners and update the pot
     */
    async createDraw() {
        // ✅ Use getIO() to get socket instance
        const io = getIO(); 

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

            // Emit draw result event to all connected clients
            io.emit("draw_result", {
                drawId: response.insertId,
                winningNumbers,
                totalLostAmount,
                winningUsers
            });

            return {
                success: true,
                message: "Draw result stored and bets processed successfully.",
                data: { drawId: response.insertId, winningNumbers, totalLostAmount, winningUsers },
            };
        } catch (err) {
            return {
                success: false,
                message: err.toString(),
            };
        }
    }
}

export default DrawResultController;
