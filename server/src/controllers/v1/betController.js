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
        const io = req.app.get("io");

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
            
            // Broadcast new bet event
            io.emit("new_bet", { user_id, bet_amount, bet_number });

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
        const io = req.app.get("io");
        if (!winning_number) {
            return res.send({ success: false, message: "Winning number is required" });
        }

        try {
            const allBets = await this.bet.getAllBets();
            let totalLostAmount = 0;
            let winningUsers = [];

            for (const bet of allBets) {
                if (bet.bet_number === winning_number) {
                    winningUsers.push(bet.user_id);
                } else {
                    totalLostAmount += bet.bet_amount;
                }
            }

            if (totalLostAmount > 0) {
                await this.pot.updatePot(totalLostAmount);
            }

            // Broadcast draw result event
            io.emit("draw_result", { winning_number, totalLostAmount, winningUsers });

            res.send({ success: true, message: "Bets processed successfully", lostAmountAddedToPot: totalLostAmount });
        } catch (err) {
            res.send({ success: false, message: err.message });
        }
    }
}

export default BetController;