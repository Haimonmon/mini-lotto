import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import 'dotenv/config.js';
import cors from 'cors';
import morgan from 'morgan';

import v1 from './routes/v1/index.js';
import './core/database.js';
import { initializeSocket } from './core/socket.js';
import LottoTimer from './core/lottoTimer.js';

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = initializeSocket(server); // Initialize Socket.IO

const port = process.env.PORT || 8080;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/v1', cors(), v1);

// Attach io to the app so controllers can use it.
app.set("io", io);

// Start the lotto timer
new LottoTimer(io);

server.listen(port, () => console.log(`Server running on port: http://localhost:${port} `));