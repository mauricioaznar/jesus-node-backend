const express = require("express"); 
const router = express.Router(); 
const uploadMiddleware = require('../utils/hanldeStorage');
const { createItem, getItem, getItems, deleteItem, updateItem } = require("../controllers/storage")

//Get all items
router.get("/", getItems); 
//Get item by id
router.get("/:id", getItem); 
//Create new item
router.post("/", uploadMiddleware.single("myfile"), createItem)
//Delete item 
router.delete("/:id", deleteItem); 

module.exports = router; 