const express = require('express')
const router = express.Router()
const {chat} = require('../api/chat')

router.post( "/chat" , chat);

module.exports  = router;



