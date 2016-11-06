'use strict';

import path from 'path';
var express = require('express');
var router = express.Router();
var _ = require('underscore');
const uuid = require('uuid');

require('../db/seed'); // seed the db for sample data


const dbUtil = require('../db/dbUtil');
const db = dbUtil.db;

router.param('collection', (req, res, next, collection) => {
  const arr = db.get(collection);
  req.collection = arr;
  next();
});

router.param('id', (req, res, next, id) => {
  const result = req.collection.getById(id);
  req.single = result;
  next();
});

router.get('/:collection/', (req, res) => {
  res.json(req.collection.value());
});

router.get('/:collection/:id', (req, res) => {
  res.json(req.single.value());
});

//
// // products
//
// // get all products
// router.get('/products', function(req, res) {
//   var products = dbUtil.getProducts();
//   res.json(products);
// });
//
// // get one product
// router.get('/products/:id', function(req, res) {
//   const product = dbUtil.getProductById(req.params.id);
//   res.json(product);
// });
//
// // post a new product
// router.post('/products/', function(req, res) {
//   var product = req.body;
//   product.id = uuid();
//   dbUtil.addProduct(product);
//   res.json({status: "success", id: product.id});
// });
//
// // update a product
// router.put('/products/:id', function(req, res) {
//   var product = req.body;
//   var id = req.params.id;
//   dbUtil.updateProduct(id, product);
//   res.json({status: "success"});
// });
//
// // delete a product
// router.delete('/products/:id', function(req, res) {
//   var id = req.params.id;
//   dbUtil.deleteProduct(id);
//   res.json({status: "success"});
// });
//
//
//
// // orders
//
// router.get('/orders', function(req, res) {
//   var orders = dbUtil.getOrders();
//   res.json(orders);
// });
//
// router.get('/orders/:id', function(req, res) {
//   const order = dbUtil.getOrderById(req.params.id);
//   res.json(order);
// });
//
// router.post('/orders/', function(req, res) {
//   var order = req.body;
//   order.id = uuid();
//   dbUtil.addProduct(order);
//   res.json({status: "success", id: order.id});
// });
//
// router.put('/orders/:id', function(req, res) {
//   var order = req.body;
//   var id = req.params.id;
//   dbUtil.updateOrder(id, order);
//   res.json({status: "success"});
// });
//
// router.delete('/orders/:id', function(req, res) {
//   var id = req.params.id;
//   dbUtil.deleteOrder(id);
//   res.json({status: "success"});
// });
//
//
// // trade shows
//
// // get all
// router.get('/trade-shows', function(req, res) {
//   var objects = dbUtil.getOrders();
//   res.json(objects);
// });
//
// // get one
// router.get('/trade-shows/:id', function(req, res) {
//   const show = dbUtil.getTradeShowById(req.params.id);
//   res.json(show);
// });
//
// // post a new
// router.post('/trade-shows/', function(req, res) {
//   var show = req.body;
//   show.id = uuid();
//   dbUtil.addTradeShow(show);
//   res.json({status: "success", id: show.id});
// });
//
// // update
// router.put('/trade-shows/:id', function(req, res) {
//   var show = req.body;
//   var id = req.params.id;
//   dbUtil.updateTradeShow(id, show);
//   res.json({status: "success"});
// });
//
// // delete
// router.delete('/trade-shows/:id', function(req, res) {
//   var id = req.params.id;
//   dbUtil.deleteTradeShow(id);
//   res.json({status: "success"});
// });


// image upload

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../uploads"))
  },
  filename: function (req, file, cb) {
    // get original file extension
    var ext = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
  }
});
var upload = multer({ storage: storage });
router.post('/image-upload', upload.single('image'), function(req, res, next) {
  res.json({status: "success", newFilename: req.file.filename})
});


module.exports = router;
