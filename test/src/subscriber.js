const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const ioClient = require('socket.io-client');
const net = require('net');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Connect to the publisher ip
const publisherSocket = ioClient('http://localhost:3000');

publisherSocket.on('connect', () => {
  console.log('Connected to publisher');
});

publisherSocket.on('countdown', (time) => {
  console.log(`Received countdown: ${time}`);
  io.emit('countdown', time);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

/* Function to find an available port
    •Try the next port if the current one is in use
    •Close the server and return the available port
*/
const findAvailablePort = (port, callback) => {
  const server = net.createServer();

  server.once('error', () => {
    findAvailablePort(port + 1, callback);
  });

  server.once('listening', () => {
    server.close(() => callback(port));
  });

  server.listen(port);
};

// Start the server on the first available port from 3001
findAvailablePort(3001, (port) => {
  server.listen(port, () => {
    console.log(`Subscriber running on port ${port}`);
  });
});