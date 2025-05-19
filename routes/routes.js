const express = require('express');
const getGeminiResponse = require('../utils/getGemeniResponse');
const router = express.Router();


router.post("/response", async (req, res) => {
    const { userMsg } = req.body;    
    const botMsg = await getGeminiResponse(userMsg)
    res.json({ botMsg });
})

module.exports = router;