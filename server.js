const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const IS_PRODUCTION = process.env.ENV || 'production' === 'production';
console.log(IS_PRODUCTION)
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// ✅ Serve React build files (only in production)
if (IS_PRODUCTION) {
  app.use(express.static(path.join(__dirname, './build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.send('React app is running in development mode.');
  });
}

// ✅ WebSocket Connection
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.emit('welcome', 'A message from the server');

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

let countdown = 60;
let nextCountdown = 15;

const startCountdown = () => {
  let interval = setInterval(async () => {
    if (countdown > 0) {
      countdown--;
    } else {
      console.log("🎉 Time's up! Fetching draw results...");

      try {
        // ✅ Fetch draw results from API
        const { data } = await axios.post("http://localhost:8000/v1/draw/", {}, {
          headers: {
            apikey: "nigga"
          }
        });

        console.log("🎯 Draw Result:", data);

        // ✅ Broadcast draw result to subscribers
        io.emit("draw_result", data);

        // ✅ Reset countdown for the next round
        countdown = nextCountdown;

        // ✅ Wait before restarting the countdown
        setTimeout(() => {
          console.log("🔄 New round starting...");
          countdown = 60;
        }, nextCountdown * 1000);
      } catch (error) {
        console.error("❌ Failed to fetch draw result:", error.message);
      }
    }

    // console.log(`⏳ Countdown: ${countdown}s`);
    io.emit("countdown", countdown);
  }, 1000);
};

startCountdown();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});