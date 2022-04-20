const supertest = require('supertest')
const {userOne, employeeUser} = require("./setupDatabase");
const app = require("../../app");

async function getAdminToken() {
    const response = await supertest(app)
        .post("/api/auth/login")
        .send(userOne)


    const token = response.body.data.token;

    if (typeof token !== 'string') throw new Error('getAdminFunciton failed')

    return {Authorization: `Bearer ${token}`}
}

async function getEmployeeToken() {
    const response = await supertest(app)
        .post("/api/auth/login")
        .send(employeeUser)


    const token = response.body.data.token;

    if (typeof token !== 'string') throw new Error('getAdminFunciton failed')

    return {Authorization: `Bearer ${token}`}
}


module.exports = {
    getAdminToken,
    getEmployeeToken
}