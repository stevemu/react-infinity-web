'use strict';

import path from 'path';
var express = require('express');
var router = express.Router();
var _ = require('underscore');
const uuid = require('uuid');

require('../db/seed'); // seed the db for sample data
const dbUtil = require('../db/dbUtil');

// products

// get all products
router.get('/products', function(req, res) {
  var products = dbUtil.getProducts();
  res.json(products);
});

// get one product
router.get('/products/:id', function(req, res) {
  const product = dbUtil.getProductById(req.params.id);
  res.json(product);
});

// post a new product
router.post('/products/', function(req, res) {
  var product = req.body;
  product.id = uuid();
  dbUtil.addProduct(product);
  res.json({status: "success", id: product.id});
});




// orders

// router.get('/orders', function(req, res) {
//   var orders = require(`${MOCK_PATH}orders.json`);
//   res.json(orders);
// });
//
// router.get('/orders/:id', function(req, res) {
//   var orders = require(`${MOCK_PATH}orders.json`);
//   var order = _.find(orders, function(order) {
//     return order.id == req.params.id;
//   });
//   res.json(order);
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
