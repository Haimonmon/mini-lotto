const createServer = require('../utils/serverSetup.js');
const { app, server, io, fileConnection } = createServer();

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

server.listen(3000, () => {
  console.log('😎 Publisher running on port 3000 🎉');
});