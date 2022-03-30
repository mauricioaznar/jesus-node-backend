const express = require("express"); 
const { getItems, getItem, createItems } = require("../controllers/tracks");
const { validatorCreateItem } = require("../validators/tracks");
const router = express.Router(); 

//TODO: http"//localhost/tracks, GET, POST, DELETE, PUT

router.get("/", getItems); 

router.get("/:id", getItem); 

router.post("/", validatorCreateItem ,createItems);

module.exports = router; 