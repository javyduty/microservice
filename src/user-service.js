// user-service.js

const express = require('express');
const app = express();
const PORT = process.env.USER_SERVICE_PORT || 3000;

// Dummy user database
let users = [];

app.use(express.json());

// Register a new user
app.post('/register', (req, res) => {
    const { email, username, password } = req.body;
    const newUser = { email, username, password };
    users.push(newUser);
    res.status(201).send('User registered successfully');
});

// Authenticate user
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Get user profile
app.get('/profile', (req, res) => {
    const { email } = req.query;
    const user = users.find(user => user.email === email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});
