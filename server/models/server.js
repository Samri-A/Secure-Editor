const express = require('express');
const cors = require('cors');
const path = require('path');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            auth : '/api/auth',
            homepage : '/api/homepage',
        };

        this.middlewares();
        //this.routes();
    }
    middlewares(){
    this.app.use(cors());}

    listen(){
        this.app.listen(this.port , ()=>{
            console.log("server running on port: " , this.port)
        })
    }
   // routes(){
   //     this.app.use(this.paths.auth, require("..routes/auth"));
   //     this.app.use(this.path.homepage , require("..routes/homepage"))
   // }
}

module.exports = Server;

