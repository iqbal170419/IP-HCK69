const request = require('supertest');
const app = require('../app');
const { User, Letter, Transaction } = require('../models');

describe('API Endpoints', () => {
    let accessToken;

    beforeAll(async () => {
        const userData = {
            userName: 'testUser',
            email: 'test@example.com',
            password: 'testPassword',

        };
        const user = await User.create(userData);
        accessToken = 'your_mocked_access_token';
    });

    afterAll(async () => {
        await User.destroy({ where: { email: 'test@example.com' } });
    });

    // 1. GET /
    describe('GET /', () => {
        it('should return a list of games', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                }),
            ]));
        });

        it('should handle not found data', async () => {
            const response = await request(app).get('/nonexistent-endpoint');
            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: 'Data not found' });
        });
    });

    // 2. GET /game  

    describe('GET /game', () => {
        it('should return data transaction', async () => {
            const response = await request(app)
                .get('/game')
                .set('Authorization', `Bearer ${accessToken}`);

            expect(response.status).toBe(200);
        });

        it('should handle unauthorized access', async () => {
            const response = await request(app).get('/game');
            expect(response.status).toBe(401);
        });
    });


    // 3. POST /register
    describe('POST /register', () => {
        it('should register a new user', async () => {
            const userData = {
                userName: 'newUser',
                email: 'new@example.com',
                password: 'newPassword',
            };

            const response = await request(app)
                .post('/register')
                .send(userData);

            expect(response.status).toBe(201);
            expect(response.body).toEqual(expect.objectContaining({
                id: expect.any(Number),
                userName: userData.userName,
                email: userData.email,
            }));
        });

        it('should handle registration error - email cannot be empty', async () => {
            const userData = {
                userName: 'newUser',
                email: '',
                password: 'newPassword',
            };

            const response = await request(app)
                .post('/register')
                .send(userData);

            expect(response.status).toBe(400);
            expect(response.body).toEqual({ message: 'email cannot empty' });
        });
    });

    // 4. POST /login
    describe("GET /:id", () => {
        it("should return game details by ID", async () => {
            const game = await Letter.findOne();
            const response = await request(app).get(`/${game.id}`);

            expect(response.status).toBe(200);
        });

        it("should handle not found data by ID", async () => {
            const response = await request(app).get("/5050");
            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: "Game not found" });
        });
    });

    describe('POST /login', () => {
        it('should login with valid credentials', async () => {
            const userData = {
                email: 'test@example.com',
                password: 'testPassword',
            };

            const response = await request(app)
                .post('/login')
                .send(userData);

            expect(response.status).toBe(200);
            expect(response.body).toEqual(expect.objectContaining({
                accessToken: expect.any(String),
                id: expect.any(Number),
                email: userData.email,
                userName: 'testUser',
            }));
        });

        it('should handle login error - Email or Password Empty', async () => {
            const userData = {
                email: '',
                password: '',
            };

            const response = await request(app)
                .post('/login')
                .send(userData);

            expect(response.status).toBe(400);
            expect(response.body).toEqual({ message: 'Email or Password Empty' });
        });
    });


});
