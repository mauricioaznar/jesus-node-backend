const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/hanldeStorage");
const {
  createItem,
  getItem,
  getItems,
  deleteItem,
} = require("../controllers/storage");
const { validatorGetItem } = require("../validators/storage");
//Get all items
router.get("/", getItems);
//Get item by id
router.get("/:id", validatorGetItem, getItem);
//Create new item
router.post("/", uploadMiddleware.single("myfile"), createItem);
//Delete item
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
