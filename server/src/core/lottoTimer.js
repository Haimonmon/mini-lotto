import { getIO } from './socket.js';
import DrawResultController from '../controllers/v1/drawController.js';

class LottoTimer {
    constructor() {
        this.io = getIO();
        this.drawResultController = new DrawResultController();
        this.running = false; 
        this.startCountdown();
    }

    startCountdown() {
        let countdown = 60;
        setInterval(async () => {
            if (countdown > 0) {
                countdown--;
                console.log(`Countdown: ${countdown}`); 
                this.io.emit('countdown', { timeLeft: countdown });
            } else if (!this.running) { 
                this.running = true; 

                console.log("⏳ Drawing results in 5 seconds...");
                this.io.emit('status', { message: 'Drawing results...', waiting: 5 });

                await new Promise(resolve => setTimeout(resolve, 5000));

                // ✅ Call `createDraw` and let it handle the emitting
                await this.drawResultController.createDraw();

                countdown = 60;
                this.running = false; 
            }
        }, 1000);
    }
}

export default LottoTimer;