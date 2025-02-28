import { connection } from '../core/database.js';

class Pot {
    constructor() {
        this.db = connection;
    }

    async getPotAmount() {
        try {
            const [result] = await this.db.execute(
                "SELECT pot_amount FROM pot_money"
            );
            return result || 0;
        } catch (err) {
            console.error("<error> pot.getPotAmount", err);
            throw err;
        }
    }

    async updatePot(amount) {
        try {
            const [result] = await this.db.execute(
                "UPDATE pot_money SET pot_amount = pot_amount + ? WHERE pot_id = 1",
                [amount]
            );
            return result;
        } catch (err) {
            console.error("<error> pot.updatePot", err);
            throw err;
        }
    }

    async rollOverPot(userBets) {
        try {
            const [result] = await this.db.execute(
                "UPDATE pot_money SET pot_amount = pot_amount + ? WHERE pot_id = 1",
                [userBets]
            );
            return result;
        } catch (err) {
            console.error("<error> pot.rollOverPot", err);
            throw err;
        }
    }
}

export default Pot;