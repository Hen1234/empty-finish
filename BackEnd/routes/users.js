const express = require('express');
const router = express.Router();
const ItemsService = require('../service');

const itemsService = new service();

//REST APIs
router.get('/getItems', getItems);
router.get('/getItemByID/:id', getItemByID);
router.put('/updateItem', updateItem);
router.post('/addItem', addItem);
router.delete('/removeItem/:id', removeItem);
router.put('/withdrawItem', withdrawItem);
router.put('/depositItem', depositItem);


function getItems(req, res, next) {
  res.send(itemsService.getItems());
}

function getItemByID(req, res, next){
  res.send(itemsService.getItemByID(req.params.id));
}

function updateItem(req, res, next){
  res.send(itemsService.updateItem(req.body.id, req.body.name, req.body.description));
}

function addItem(req, res, next){
  res.send(itemsService.addItem(req.body.name, req.body.description, req.body.count));
}

function removeItem(req, res, next){
  res.json(itemsService.removeItem(req.params.id));
}

function withdrawItem(req, res, next){
  res.send(itemsService.withdrawItem(req.body.id, req.body.amount));
}

function depositItem(req, res, next){
  res.send(itemsService.depositItem(req.body.id, req.body.amount));
}


module.exports = router;
