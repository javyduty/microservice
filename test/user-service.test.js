// user-service.test.js

const request = require('supertest');
const app = require('../src/user-service');

describe('User Service', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/register')
            .send({
                email: 'test@example.com',
                username: 'testuser',
                password: 'testpassword'
            });
        expect(response.statusCode).toBe(201);
    });

    it('should authenticate a user with valid credentials', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                email: 'test@example.com',
                password: 'testpassword'
            });
        expect(response.statusCode).toBe(200);
    });

    it('should return user profile for a valid user', async () => {
        const response = await request(app)
            .get('/profile')
            .query({ email: 'test@example.com' });
        expect(response.statusCode).toBe(200);
        expect(response.body.email).toBe('test@example.com');
    });
});
