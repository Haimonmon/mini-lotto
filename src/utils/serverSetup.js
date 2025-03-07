const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

/**
 * creates an own server for each app running . . . ⚡
 * 
 * this also automatic connect to the `public` folder
 */
const createServer = () => {
    const app = express();
    const server = http.createServer(app);

    const io = new Server(server, {
        cors: { origin: "*" },
    });

    // * Finds the " public " Folder on Project File Structure
    const staticPath = path.resolve(__dirname, '../../build');
    const fileConnection = connectToMain(staticPath, app)

    return { app, server, io, fileConnection }
}

/**
 * 
 * @param {*} path - static path but for this project , ` public ` is the common for static path
 */
const connectToMain = (path, app) => {
    if (!path || typeof path !== 'string') {
        console.error(`[ ${path} ] Invalid path 🔴`);
        return false;
    };

    try {
        checkFileExist(path,  'Folder not Found 🔴');

        app.use(express.static(path));
    
        app.get('/', (req, res) => {
            const filePath = path.join(path, 'index.html');

            checkFileExist(filePath, 'An index.html file not found 🔴');

            res.sendFile(filePath);
        });

    } catch(e) {
        console.error(`[ ${path} ] Something is wrong on serverSetup.js to the path connection 💀🔴`);
        console.error(e.message);
        return false;
    }
}

/**
 * Valid Handler 👌
 * 
 * @param {*} path - the file to check if it exist to the project strucutre ✅👌
 */
const checkFileExist = (path, message) => {
    if (!fs.existsSync(path)) {
        throw new Error(`[ ${path} ] ${message}`);
    }
}

module.exports = createServer;