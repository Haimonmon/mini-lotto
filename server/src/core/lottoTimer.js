import { getIO } from './socket.js';
import DrawResultController from '../controllers/v1/drawController.js';

class LottoTimer {
    constructor() {
        this.io = getIO();
        this.drawResultController = new DrawResultController();
        // 🚀 Prevent multiple draws from running
        this.running = false; 
        this.startCountdown();
    }

    startCountdown() {
        let countdown = 60;
        setInterval(async () => {
            if (countdown > 0) {
                countdown--;
                // ✅ Logs countdown in terminal
                console.log(`Countdown: ${countdown}`); 
                this.io.emit('countdown', { timeLeft: countdown });
            // ✅ Prevent duplicate draw calls
            } else if (!this.running) { 
                // 🚀 Set flag to prevent re-execution
                this.running = true; 
                
                console.log("⏳ Drawing results in 5 seconds...");
                this.io.emit('status', { message: 'Drawing results...', waiting: 5 });

                await new Promise(resolve => setTimeout(resolve, 5000));

                const winningNumbers = this.drawResultController.generateWinningNumbers();
                 // ✅ Logs draw results
                console.log("🎉 Winning Numbers:", winningNumbers);

                await this.drawResultController.createDraw(
                    { body: {} }, 
                    { send: (data) => {
                        // ✅ Logs draw response
                        console.log("✅ Draw Result Sent:", data); 
                        this.io.emit('drawResult', data);
                    }}
                );

                countdown = 60;
                // ✅ Allow next draw cycle
                this.running = false; 
            }
        }, 1000);
    }
}

export default LottoTimer;
