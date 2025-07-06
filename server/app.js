import adduser from './controllers/adduser';
require("dotenv").config();
const Server = require("./models/server");
const server = new Server();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
console.log("MONGO_URI from .env:", mongoURI); // Debugging line

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

server.app.get('/', (req, res) => {
    res.send('Welcome to Secure Editor API');   })
server.app .post('/api/signin',adduser(req , resizeBy) )
server.listen();

