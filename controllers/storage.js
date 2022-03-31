const {storageModel} = require("../models"); 
const PUBLIC_URL = process.env.PUBLIC_URL; 
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => { 
   try {
    const data = await storageModel.find({}); 
    res.send({data});
   } catch (error) {
       handleHttpError(res, "ERROR_GET_ITEMS");
   }
}
const getItem = async (req, res) => { 
    try {
        const data = await storageModel.findById(); 
        res.send({data});
       } catch (error) {
           handleHttpError(res, "ERROR_GET_ITEMS");
       }
}
/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    
    const {body, file} = req; 

    const fileData = { 
        filename: file.filename, 
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData); 
    res.send({data});
}
const updateItem = (req, res) => { 
}
const deleteItem = (req, res) => { 
}


module.exports = {getItems, getItem, createItem, updateItem, deleteItem}; 