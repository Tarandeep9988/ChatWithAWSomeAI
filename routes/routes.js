const express = require('express');
const getGeminiResponse = require('../utils/getGemeniResponse');
const Chat = require('../models/chat');
const router = express.Router();


router.post("/response", async (req, res) => {
    const { userMsg } = req.body;  
    
    // saving userMsg to database
    await Chat.create({
        role: "user",
        message: userMsg,
    });

    // Getting chat history
    const chatHistory = await Chat.find().sort({ createdAt: 1 }); // in ascending order
    // console.log(JSON.stringify(chatHistory, null, 2));
    
    
    const botMsg = await getGeminiResponse(chatHistory) || "no message";

    // saving Ai response to database
    await Chat.create({
        role: "model",
        message: botMsg,
    })
    res.json({ botMsg });
})

module.exports = router;