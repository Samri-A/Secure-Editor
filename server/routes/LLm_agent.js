const {LLm_agent} = require("../api/LLm_agent")
const express = require('express');
const router = express.Router();

router.post('/ai_asistant' , LLm_agent);

module.exports = router;
