// email-service.js

const express = require('express');
const app = express();
const PORT = process.env.EMAIL_SERVICE_PORT || 4000;

app.use(express.json());

// Send confirmation email
app.post('/sendConfirmationEmail', (req, res) => {
    const { email } = req.body;
    // Dummy implementation to send confirmation email
    console.log(`Sending confirmation email to ${email}`);
    res.send('Confirmation email sent successfully');
});

// Send password reset email
app.post('/sendPasswordResetEmail', (req, res) => {
    const { email } = req.body;
    // Dummy implementation to send password reset email
    console.log(`Sending password reset email to ${email}`);
    res.send('Password reset email sent successfully');
});

app.listen(PORT, () => {
    console.log(`Email Service is running on port ${PORT}`);
});
