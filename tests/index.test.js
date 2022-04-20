const supertest = require('supertest')
const app = require('../app')
const {setupDatabase, userOne, newTrack} = require("./utils/setupDatabase");


// beforeEach(async () => {
//   await setupDatabase()
// })

// it("login when userOne", async () => {
//   const response = await supertest(app)
//     .post('/api/auth/login')
//     .send(userOne)

//   console.log(response.body)

//   expect(response.status).toBe(200)
// })

// it("doesnt login when user and password are not valid", async () => {
//   const validUser = {
//     "name": "INvalid user",
//     "password": "invalid password",
//     "age": 2,
//     "email": "mauricioaznar@gmail.com"
//   }

//   const response = await supertest(app)
//     .post('/api/auth/login')
//     .send(validUser)

//   expect(response.status).toBe(403)
// })

// it("create user when valid properties", async () => {
//   const newUser = {
//     "name": "New user name",
//     "password": "jh2883283",
//     "age": 30,
//     "email": "gmail@gmail.com"
//   }

//   const response = await supertest(app)
//     .post('/api/auth/register')
//     .send(newUser)

//   expect(response.status).toBe(200)
// })


let token;
beforeEach(async () => {
  await setupDatabase();
});

describe("POST /auth", () => {
      //Should respond with 200 - Valid data 
  test("Login when userOne ", async () => {
    const response = await supertest(app).post("/api/auth/login").send(userOne);

    expect(response.status).toBe(200);
    token = response.body.data.token;
  });
  //Should respond with 200 - Valid properties
  test("Register when all valid  properties", async () => {
    const newUser = {
      name: "New user name",
      password: "dinosaurs",
      age: 30,
      email: "gmail@gmail.com",
      role: ["admin", "user"]
    };
    const response = await supertest(app)
        .post("/api/auth/register")
        .send(newUser)
    expect(response.status).toBe(200);    
  });

    //Should respond with 401 - Invalid properties  
  test('It should requiere valid properties', async () => {
      //Incomplete data 
      const newUser = { 
          name: "new user", 
          password: "t_rex",
          email: "t-rex@ingen.com" 
      };
      
    const response = await supertest(app)
        .post("/api/auth/register")
        .send(newUser)
    expect(response.status).toBe(401);
  });

});

describe("GET /api/tracks", () => {
  //Should respond with 401 - token not beign sent
  test("It should require authorization", async () => {
    const response = await supertest(app)
      .get("/api/tracks");

    expect(response.status).toBe(401);
  });

  //Should respond with 200 - send the token
  test("It responds with JSON when authorization", async () => {
    const response = await supertest(app)
      .get("/api/tracks")
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });
});

describe("GET By Id /api/tracks/:id", () => { 
  //Should respond with 401 - token not beign sent 
  test('It shoud require authorization', async () => {
    const response = await supertest(app)
      .get('/api/tracks/625e0fe1a9f3a7ff16a92f86')

    expect(response.status).toBe(401);  
    expect(response.type).toBe('application/json');
  });

  //Should respond with 200 - send the token 
  test('It responds with JSON of a specific item', async () => {
      const response = await supertest(app) 
        .get('/api/tracks/625e0fe1a9f3a7ff16a92f86')
        .set("Authorization", `Bearer ${token}`)

      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
  });
});

describe("POST /api/tracks", () => { 
    //  //Should respond with 401 - token not beign sent and No admin role
    test('It should require authorization and admin role', async () => {
        const response = await supertest(app) 
            .post('/api/tracks')
            .send(newTrack)
        expect(response.status).toBe(401);    
    });

    //Should response with 200 - Token sent and user permissions 
    test('New track when valid properties', async () => {
        const response = await supertest(app)
            .post('/api/tracks')
            .set("Authorization", `Bearer ${token}`)
            .send(newTrack)
        expect(response.status).toBe(200);    
    });
})