'use strict';

import path from 'path';
var express = require('express');
var router = express.Router();
const uuid = require('uuid');

require('../db/seed'); // seed the db for sample data

const db = require('../db/dbUtil').db;


//CRUD API for products, orders, tradeShows

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

router.post('/:collection', (req, res) => {
  var obj = req.body;
  obj.id = uuid();
  req.collection.push(obj).value();
  res.json({status: "success", id: obj.id});
});

router.put('/:collection/:id', (req, res) => {
  req.collection.getById(req.params.id).assign(req.body).value();
  res.json({status: "success"});
});

router.delete('/:collection/:id', (req, res) => {
  req.collection.remove({id: req.params.id}).value();
  res.json({status: "success"});
});



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
