const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/test/register', (req, res) => {
    // Sample test registration data
    const testRegistrationData = {
        companyName: "Affordmed",
        ownerName: "Gaurav Vij",
        rollNo: "21131012047",
        ownerEmail: "vijgaurav20@gmail.com",
        accessCode: process.env.ACCESS_CODE // Corrected typo in environment variable name
    };

    // Generate JWT token
    const accessToken = jwt.sign({ companyName: testRegistrationData.companyName }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the registration data and token in response
    res.json({ message: 'Test registration successful', data: testRegistrationData, accessToken });
});

router.post('/test/auth', (req, res) => {
    const { accessCode } = req.body;

    // Check if the access code matches the one in the environment variable
    if (accessCode === process.env.ACCESS_CODE) {
        // Generate JWT token
        const accessToken = jwt.sign({ username: 'exampleUser' }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send the token in response
        res.json({ accessToken });
    } else {
        // Return 401 Unauthorized status if access code is incorrect
        res.status(401).json({ message: 'Unauthorized access' });
    }
});

module.exports = router;
