// Import required modules
const express = require('express');
const dotenv = require('dotenv'); // Import dotenv for environment variables

// Load environment variables from .env file
dotenv.config();

// Import route files
const registerRouter = require('./register');
const authRouter = require('./auth');

// Create an Express application
const app = express();
const port = process.env.PORT; // Port on which the server will run, default to 3000 if PORT is not defined in the environment

// Middleware to parse JSON bodies
app.use(express.json());

// Use route files
app.use(registerRouter);
app.use(authRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
