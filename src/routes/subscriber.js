const createServer = require('../utils/serverSetup.js');
const { app, server, io, fileConnection } = createServer();

const ioClient = require('socket.io-client');
const net = require('net');

// Connect to the publisher ip
const publisherSocket = ioClient('http://localhost:3000');

publisherSocket.on('connect', () => {
  console.log('Connected to publisher');
});

publisherSocket.on('countdown', (time) => {
  io.emit('countdown', time);
});

publisherSocket.on('pot_update', (data) => {
  console.log(`💰 Pot Update:`, data);
  io.emit('pot_update', data);
});

publisherSocket.on('bet_update', (data) => {
  console.log(`🎲 New Bets:`, data);
  io.emit('bet_update', data);
});

publisherSocket.on('draw_result', (data) => {
  console.log(`🎯 Draw Result:`, data);
  io.emit('draw_result', data);
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