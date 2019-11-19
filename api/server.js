const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require("../routes/auth");
const server = express();


server.use(express.json());
server.use(helmet());

server.use(cors());

server.use('/auth', authRouter)


server.get('/', (req, res) => {
    res.send('Server is running')
});


module.exports = server;