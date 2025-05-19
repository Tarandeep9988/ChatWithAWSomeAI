const express = require('express');
const connectDB = require('./config/connectDB');
const router = require('./routes/routes');
const morgan = require('morgan');
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

// middleware to log incoming requests
app.use(morgan('tiny'));

// middleware to serve static content
app.use(express.static('public'));

// middleware to parse body json
app.use(express.json());

// Routes
app.use(router);
