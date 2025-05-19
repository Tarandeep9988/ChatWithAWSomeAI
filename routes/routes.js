const express = require('express');
const router = express.Router();

// homeroute

router.post("/response", (req, res) => {
    res.json({message : "this is message"});
})

module.exports = router;