const { tracksModel } = require("../models");  


const getItems = async (req, res) => { 
    const data = await tracksModel.find({}); 
    res.send({data});
}
const getItem = (req, res) => { 
}
/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItems = async (req, res) => {
    const {body} = req; 
    console.log(body);
    const data = await tracksModel.create(body);
    res.send({data});
}
const updateItems = (req, res) => { 
}
const deleteItems = (req, res) => { 
}


module.exports = {getItems, getItem, createItems, updateItems, deleteItems}; 