const express = require("express"); 
const { getItems, getItem, createItems, updateItem, deleteItem } = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router(); 

//TODO: http"//localhost/tracks, GET, POST, DELETE, PUT

//Get all items
router.get("/", getItems); 
//Get item by id 
router.get("/:id", validatorGetItem, getItem); 
//Create new item
router.post("/", validatorCreateItem ,createItems);
//Update item
router.put("/:id", validatorGetItem, validatorCreateItem ,updateItem);
//Delete item 
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;