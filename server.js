const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { io: ClientIO } = require('socket.io-client');
const axios = require('axios');

const IS_PRODUCTION = process.env.ENV || 'production' === 'production';
console.log(IS_PRODUCTION);
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

console.log(process.env.PORT);

if (Number(PORT) === 3000) {
  console.log('Running as HOST (Publisher)');

  let countdown = 60;
  let nextCountdown = 15;
  let interval = null; // Store interval reference

  const appState = {
    potMoney: null,
    winningNumbers: null,
  }

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

          appState.winningNumbers = data.data.winning_no;

          // ✅ Broadcast draw result to subscribers
          io.emit("draw_result", data);

          // ✅ Reset countdown for the next round
          countdown = nextCountdown;

          setTimeout(() => {
            console.log("🔄 New round starting...");
            countdown = 60;
          }, nextCountdown * 1000);
        }

        // ✅ Broadcast updated results of the appState
        io.emit("app_state_update_pot_money", appState.potMoney);
        io.emit("app_state_update_draw_number", appState.winningNumbers);
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

          appState.potMoney = data.data.amount.pot_amount
  
          // ✅ Emit pot amount to subscribers
          io.emit("pot_update", data);
      } catch (error) {
          console.error("❌ Failed to fetch pot amount:", error.message);
      }
  };

  // ✅ Call fetchPotAmount every 10 seconds
  setInterval(fetchPotAmount, 10000);

  /** 
   * 🛑 Graceful Shutdown Function 
   */
  function shutdownServer(reason) {
    console.log(`🛑 ${reason}`);

    io.emit("shutdown");

    clearInterval(interval);
    io.close();
    process.exit(1);
  }

  process.on("uncaughtException", (err) => {
    console.error("⚠️ Uncaught Exception:", err);
    shutdownServer("Unexpected server error!");
  });

  process.on("unhandledRejection", (reason, promise) => {
    console.error("⚠️ Unhandled Promise Rejection:", reason);
    shutdownServer("Unhandled promise rejection!");
  });

  // const onlineUsers = new Map();

  // io.on("connection", (socket) => {
  //   console.log(`Subscriber connected to Publisher: ${socket.id}`);
  //   console.log(onlineUsers)

  //   socket.on("user_online", (username) => {
  //     console.log(username)
  //     if (username && username !== "Guest") {
  //       onlineUsers.add(username);
  //       console.log("🔥 Emitting online_users event:", Array.from(onlineUsers.values()));
  //       io.emit("online_users", Array.from(onlineUsers));
  //       console.log("👥 Online Users:", onlineUsers);
  //     }
  //   });

  //   socket.on("place_bet", (betData) => {
  //     console.log("Received bet from subscriber:", betData);

  //     // ✅ Broadcast bet to all subscribers
  //     io.emit("new_bet", betData);
  //   });

  //   socket.on("disconnect", () => {
  //     console.log(`Subscriber disconnected: ${socket.id}`);
  //     onlineUsers.forEach((user) => {
  //       if (socket.id === user.socketId) {
  //         onlineUsers.delete(user);
  //       }
  //     });

  //     io.emit("online_users", Array.from(onlineUsers));
  //   });
  // });

} else {
  let isPublisherConnected = false;
  const publisherSocket = ClientIO(PUBLISHER_URL);

  publisherSocket.on("connect", () => {
    console.log(`✅ Subscriber (${PORT}) connected to Publisher (3000)`);
    isPublisherConnected = true;
  });

  publisherSocket.on("disconnect", () => {
    console.log(`⚠️ Publisher (3000) disconnected! Stopping data emission.`);
    isPublisherConnected = false;
    io.emit("maintenance_mode", true);
  });

  publisherSocket.on("shutdown", () => {
    console.log(`🛑 Publisher sent shutdown signal!`);
    isPublisherConnected = false;
    io.emit("maintenance_mode", true);
  });

  // Listen for draw results from Publisher
  publisherSocket.on('countdown', (data) => {
    if (isPublisherConnected) {
      console.log(`Subscriber (${PORT}) received countdown:, ${data}`);
      io.emit('countdown', data); // ✅ Only emit if publisher is connected
    }
  });

  publisherSocket.on('draw_result', (data) => {
    if (isPublisherConnected) {
      console.log(`Subscriber (${PORT}) received draw_result:, ${data}`);
      io.emit('draw_result', data); // ✅ Only emit if publisher is connected
    }
  });

  publisherSocket.on('pot_update', (data) => {
    if (isPublisherConnected) {
      console.log(`Subscriber (${PORT}) received pot_update:, ${data}`);
      io.emit('pot_update', data); // ✅ Only emit if publisher is connected
    }
  });

  publisherSocket.on('app_state_update_pot_money', (data) => {
    if (isPublisherConnected) {
      console.log(`Subscriber (${PORT}) received app_state_update:, ${data}`);
      io.emit('app_state_update_pot_money', data); // ✅ Only emit if publisher is connected
    }
  });

  publisherSocket.on('app_state_update_draw_number', (data) => {
    if (isPublisherConnected) {
      console.log(`Subscriber (${PORT}) received app_state_update:, ${data}`);
      io.emit('app_state_update_draw_number', data); // ✅ Only emit if publisher is connected
    }
  });

  // Handle client connections
  io.on('connection', (socket) => {
    console.log(`Client connected to Subscriber (${PORT}): ${socket.id}`);

    // If publisher is disconnected, immediately inform client
    if (!isPublisherConnected) {
      socket.emit("maintenance_mode", true);
    }

    // ✅ Listen for user bets and forward them to the publisher
    socket.on("place_bet", (betData) => {
      console.log(`Received bet from client:`, betData);
      if (isPublisherConnected) {
        publisherSocket.emit("place_bet", betData);
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected from Subscriber (${PORT}): ${socket.id}`);
    });
  });

  // ✅ Receive new bets from Publisher and forward to clients
  publisherSocket.on("new_bet", (betData) => {
    console.log("New bet received from Publisher:", betData);
    io.emit("new_bet", betData);
  });
}

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
