const express = require('express');
const router = express.Router();
const {adduser} = require('../controllers/adduser');

router.post('/signup', adduser);

module.exports = router;