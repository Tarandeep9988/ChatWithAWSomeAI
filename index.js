const express = require('express');
const connectDB = require('./config/connectDB');
const router = require('./routes/routes');
require('dotenv').config();

const app = express();


// Function to connect to mongodb
connectDB()
.then(() => {
    console.log("Starting Server");
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is listening on http://localhost:${PORT}`);
    })
})
.catch((e) => {
    console.log("Closing Server");
    process.exit(1);
})

// Routes
app.use(express.static('public'));
app.use(router);