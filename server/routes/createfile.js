const express = require('express');
const router = express.Router();
const {CreateFile} = require("../controllers/createfile");

router.post('/createfile', CreateFile);

module.exports = router;