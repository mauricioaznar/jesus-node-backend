const express = require("express"); 
const { matchedData } = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword"); 
const {userModel} = require("../models/"); 
const router = express.Router(); 
const {validatorRegister, validatorLogin} = require("../validators/auth");

//http:localhost:3001/api/auth/login
//http:localhost:3001/api/auth/register
router.post("/register",validatorRegister , async (req, res)=>{ 
    req = matchedData(req); 
    const passwordHash = await encrypt(req.password); 
    const body = {...req, password: passwordHash};
    const data = await userModel.create(body); 
    data.set('password', undefined, {strict: false});
    res.send({data}); 
}); 


module.exports = router; 