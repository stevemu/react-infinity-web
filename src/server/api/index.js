'use strict';

var express = require('express');
var _ = require('underscore');
const MOCK_PATH = '../../../mock/';

var router = express.Router();

// products

router.get('/products', function(req, res) {
  var products = require(`${MOCK_PATH}products.json`);
  res.json(products);
});

router.get('/products/:id', function(req, res) {
  var products = require(`${MOCK_PATH}products.json`);
  var product = _.find(products, function(product) {
    return product.id == req.params.id;
  });
  res.json(product);
});

// orders

router.get('/orders', function(req, res) {
  var orders = require(`${MOCK_PATH}orders.json`);
  res.json(orders);
});

router.get('/orders/:id', function(req, res) {
  var orders = require(`${MOCK_PATH}orders.json`);
  var order = _.find(orders, function(order) {
    return order.id == req.params.id;
  });
  res.json(order);
});


module.exports = router;
