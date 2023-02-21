const request = require('supertest');
const app = require('./src/app');

describe('GET /api', () => {
  test('returns success', async () => {
		const keyword = 'voice';
		const page = 1 ;
    const response = await request(app).get(`/api?keywords=${keyword}&page=${page}`)
    expect(response.statusCode).toBe(200);
  });

	test('returns 400', async () => {
		const page = 1 ;
    const response = await request(app).get(`/api?page=${page}`)
    expect(response.statusCode).toBe(400);
  });

	test('returns 400', async () => {
		const keyword = 'voice';
    const response = await request(app).get(`/api?keywords=${keyword}`)
    expect(response.statusCode).toBe(400);
  });

});