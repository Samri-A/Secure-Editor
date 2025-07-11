const {detect_LLm_agent} = require("../api/detect_LLM_agent");
const express = require('express');
const router = express.Router();

router.post("/classify" , detect_LLm_agent);

module.exports = router;