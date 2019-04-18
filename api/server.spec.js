const server = require('./server');
const request = require('supertest');

describe('server.js', () => {

  it('should set testing enviroment', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('GET /', () => {
    it ('should return 200 OK', () => {
      return request(server)
        .get('/')
        .then(res => {
          console.log(res)
          expect(res.status).toBe(200)
        })
    })

    it('should return 200 OK using the squad', async () => {
      const res = await request(server).get('/')
      expect(res.status).toBe(200)
    })

    it('should return JSON', async () => {
      const res = await request(server).get('/')
      expect(res.type)
    })

  })
  
})