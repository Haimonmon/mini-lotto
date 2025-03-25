const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { io: ClientIO } = require('socket.io-client');
const axios = require('axios')

const IS_PRODUCTION = process.env.ENV || 'production' === 'production';
console.log(IS_PRODUCTION)
const PORT = process.env.PORT || 3000;
const PUBLISHER_URL = 'http://localhost:3000';

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

console.log(process.env.PORT)

if (Number(PORT) === 3000) {
  console.log('Running as HOST (Publisher)');

  let countdown = 60;
  let nextCountdown = 15;
  let interval = null; // Store interval reference

  const startCountdown = () => {
    interval = setInterval(async () => {
      try {
        if (countdown > 0) {
          countdown--;
        } else {
          console.log("🎉 Time's up! Fetching draw results...");

          // ✅ Fetch draw results from API
          const { data } = await axios.post("http://localhost:8000/v1/draw/", {}, {
            headers: { apikey: "nigga" }
          });

          console.log("🎯 Draw Result:", data);

          // ✅ Broadcast draw result to subscribers
          io.emit("draw_result", data);

          // ✅ Reset countdown for the next round
          countdown = nextCountdown;

          setTimeout(() => {
            console.log("🔄 New round starting...");
            countdown = 60;
          }, nextCountdown * 1000);
        }

        io.emit("countdown", countdown);
      } catch (error) {
        console.error("❌ Server Error: ", error.message);
        shutdownServer("Server error occurred. Shutting down...");
      }
    }, 1000);
  };

  startCountdown();

  const fetchPotAmount = async () => {
      try {
          const { data } = await axios.get("http://localhost:8000/v1/pot/", {
              headers: {
                  apikey: "nigga",
              },
          });
  
          console.log("💰 Pot Amount:", data);
  
          // ✅ Emit pot amount to subscribers
          io.emit("pot_update", data);
      } catch (error) {
          console.error("❌ Failed to fetch pot amount:", error.message);
      }
  };
  
  // ✅ Call fetchPotAmount every 15 seconds
  setInterval(fetchPotAmount, 15000);

  /** 
   * 🛑 Graceful Shutdown Function 
   */
  function shutdownServer(reason) {
    console.log(`🛑 ${reason}`);

    // Emit shutdown event to notify subscribers
    io.emit("shutdown");

    // Stop emitting countdown
    clearInterval(interval);

    // Close all WebSocket connections
    io.close();

    // Stop the server completely (exit process)
    process.exit(1); 
  }

  // Handle unexpected errors and shutdown
  process.on("uncaughtException", (err) => {
    console.error("⚠️ Uncaught Exception:", err);
    shutdownServer("Unexpected server error!");
  });

  process.on("unhandledRejection", (reason, promise) => {
    console.error("⚠️ Unhandled Promise Rejection:", reason);
    shutdownServer("Unhandled promise rejection!");
  });
} else {
  let isPublisherConnected = false;
  const publisherSocket = ClientIO(PUBLISHER_URL);

  publisherSocket.on('connect', () => {
    console.log(`✅ Subscriber (${PORT}) connected to Publisher (3000)`);
    isPublisherConnected = true;
  });

  publisherSocket.on('disconnect', () => {
    console.log(`⚠️ Publisher (3000) disconnected! Stopping data emission.`);
    isPublisherConnected = false;
    io.emit("maintenance_mode", true);
  });

  publisherSocket.on('shutdown', () => {
    console.log(`🛑 Publisher sent shutdown signal!`);
    isPublisherConnected = false;
    io.emit("maintenance_mode", true);
  });

  // Listen for draw results from Publisher
  publisherSocket.on('countdown', (data) => {
    if (isPublisherConnected) {
      console.log(`Subscriber (${PORT}) received countdown:, data`);
      io.emit('countdown', data); // ✅ Only emit if publisher is connected
    }
  });
  publisherSocket.on('draw_result', (data) => {
    if (isPublisherConnected) {
      console.log(`Subscriber (${PORT}) received countdown:, data`);
      io.emit('draw_result', data); // ✅ Only emit if publisher is connected
    }
  });
  publisherSocket.on('pot_update', (data) => {
    if (isPublisherConnected) {
      console.log(`Subscriber (${PORT}) received countdown:, data`);
      io.emit('pot_update', data); // ✅ Only emit if publisher is connected
    }
  });

  // Handle client connections
  io.on('connection', (socket) => {
    console.log(`Client connected to Subscriber (${PORT}): ${socket.id}`);

    // If publisher is disconnected, immediately inform client
    if (!isPublisherConnected) {
      socket.emit("maintenance_mode", true);
    }

    socket.on('disconnect', () => {
      console.log(`Client disconnected from Subscriber (${PORT}): ${socket.id}`);
    });
  });
}

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// // ✅ WebSocket Connection
// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id);
//   socket.emit('welcome', 'A message from the server');

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// let countdown = 60;
// let nextCountdown = 15;

// const startCountdown = () => {
//   let interval = setInterval(async () => {
//     if (countdown > 0) {
//       countdown--;
//     } else {
//       console.log("🎉 Time's up! Fetching draw results...");

//       try {
//         // ✅ Fetch draw results from API
//         const { data } = await axios.post("http://localhost:8000/v1/draw/", {}, {
//           headers: {
//             apikey: "nigga"
//           }
//         });

//         console.log("🎯 Draw Result:", data);

//         // ✅ Broadcast draw result to subscribers
//         io.emit("draw_result", data);

//         // ✅ Reset countdown for the next round
//         countdown = nextCountdown;

//         // ✅ Wait before restarting the countdown
//         setTimeout(() => {
//           console.log("🔄 New round starting...");
//           countdown = 60;
//         }, nextCountdown * 1000);
//       } catch (error) {
//         console.error("❌ Failed to fetch draw result:", error.message);
//       }
//     }

//     // console.log(`⏳ Countdown: ${countdown}s`);
//     io.emit("countdown", countdown);
//   }, 1000);
// };

// startCountdown();