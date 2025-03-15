const createServer = require("../utils/serverSetup.js");
const axios = require("axios");

const { app, server, io, fileConnection } = createServer();

let lastEmittedBetId = 0;
let countdown = 60;
let nextCountdown = 15;

// ✅ Function to fetch pot amount every 15 seconds
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

const fetchLatestDraw = async () => {
  const { data } = await axios.get("http://localhost:8000/v1/draw/latest", {}, {
    headers: {
      apikey: "nigga"
    }
  });
  io.emit("draw_result", data);
}

fetchLatestDraw()

// ✅ Function to fetch the latest bets without duplicates
const fetchLatestBets = async () => {
  try {
      const { data } = await axios.get("http://localhost:8000/v1/bets/latestBets", {
          headers: { apikey: "nigga" }
      });

      if (!data.bets || data.bets.length === 0) return; // No new bets

      // 🔥 Filter out bets that were already emitted
      const newBets = data.bets.filter(bet => bet.bet_id > lastEmittedBetId);

      if (newBets.length > 0) {
          console.log("🎲 New Bets:", newBets);

          // ✅ Emit only the new bets
          io.emit("bet_update", newBets);

          // 🔥 Update the last emitted bet ID (take the highest one)
          lastEmittedBetId = Math.max(...newBets.map(bet => bet.bet_id));
      }
  } catch (error) {
      console.error("❌ Failed to fetch latest bets:", error.message);
  }
};

// ✅ Fetch latest bets every 5 seconds
setInterval(fetchLatestBets, 5000);

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

server.listen(3000, () => {
  console.log("😎 Publisher running on port 3000 🎉");
});
