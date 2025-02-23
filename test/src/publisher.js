const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Allow all origins for simplicity
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let countdown = 60;

/* 
 •Start the countdown
 •Reset countdown to 60 when it reaches 0
 •Log the countdown
 •Broadcast the countdown to all subscribers 
*/
setInterval(() => {
  if (countdown > 0) {
    countdown--;
  } else {
    countdown = 60; 
  }
  console.log(`Countdown: ${countdown}`);
  
  io.emit('countdown', countdown); 
}, 1000);

// Serve a simple page for testing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('Publisher running on port 3000');
});