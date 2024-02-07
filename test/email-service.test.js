// email-service.test.js

const request = require('supertest');
const app = require('../src/email-service');

describe('Email Service', () => {
    it('should send a confirmation email', async () => {
        const response = await request(app)
            .post('/sendConfirmationEmail')
            .send({ email: 'test@example.com' });
        expect(response.statusCode).toBe(200);
    });

    it('should send a password reset email', async () => {
        const response = await request(app)
            .post('/sendPasswordResetEmail')
            .send({ email: 'test@example.com' });
        expect(response.statusCode).toBe(200);
    });
});
