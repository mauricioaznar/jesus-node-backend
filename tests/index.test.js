const supertest = require('supertest')
const app = require('../app')
const {setupDatabase, userOne} = require("./utils/setupDatabase");


beforeEach(async () => {
  await setupDatabase()
})

it("login when userOne", async () => {
  const response = await supertest(app)
    .post('/api/auth/login')
    .send(userOne)

  console.log(response.body)

  expect(response.status).toBe(200)
})

it("doesnt login when user and password are not valid", async () => {
  const validUser = {
    "name": "INvalid user",
    "password": "invalid password",
    "age": 2,
    "email": "mauricioaznar@gmail.com"
  }

  const response = await supertest(app)
    .post('/api/auth/login')
    .send(validUser)

  expect(response.status).toBe(403)
})

it("create user when valid properties", async () => {
  const newUser = {
    "name": "New user name",
    "password": "jh2883283",
    "age": 30,
    "email": "gmail@gmail.com"
  }

  const response = await supertest(app)
    .post('/api/auth/register')
    .send(newUser)

  expect(response.status).toBe(200)
})