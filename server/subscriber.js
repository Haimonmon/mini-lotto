const createServer = require('../src/utils/serverSetup');
const { app, server, io, fileConnection } = createServer();

const ioClient = require('socket.io-client');
const net = require('net');

// Connect to the publisher ip
const publisherSocket = ioClient('http://localhost:3000');

publisherSocket.on('connect', () => {
  console.log('Connected to publisher');
});

publisherSocket.on('countdown', (time) => {
  console.log(`Received countdown: ${time}`);
  io.emit('countdown', time);
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