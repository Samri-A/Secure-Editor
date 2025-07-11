require("dotenv").config();
const addUserRoute = require("./routes/signup");
const login = require("./routes/auth");
const express = require("express");
const Server = require("./models/server");
const createfile = require("./routes/createfile");
const classify = require("./routes/classify");
const llm_agent = require("./routes/LLm_agent");
const server = new Server();

server.app.use(express.json());
server.app.use('/api' , addUserRoute); 
server.app.use('/api' , login);
server.app.use('/api' , createfile);
server.app.use('/api' , classify);
server.app.use('/api' , llm_agent);

server.listen();

