
const dbUtil = require("./dbUtil");
const db = dbUtil.db;

// products

var products = [
  {
    "id": "1",
    "model": "Example-1",
    "price": 4000,
    "profileImage": "Evoke_black_1.png"
  },
  {
    "id": "2",
    "model": "Example-2",
    "price": 5000,
    "profileImage": "Iyashi_black-black_1.jpg"
  }
];

// add mock products to db
products.forEach((product, index) => {
  const productInDb = db.get('products').getById(product.id).value();
  if (!productInDb) { // if product does not exists already
    db.get('products').push(product).value(); // add to db
  }
});

// orders

var orders = [
  {
    "id": "1",
    "name": "Qi",
    "itemId": 1,
    "color": "black",
    "price": 255325.3,
    "shipTo": {
      "name": "Jane Smith",
      "address": "123 Maple Street",
      "city": "Pretendville",
      "state": "NY",
      "zip": "12345"
    },
    "billTo": {
      "name": "Jane Smith",
      "address": "123 Maple Street",
      "city": "Pretendville",
      "state": "NY",
      "zip": "12345"
    }
  },
  {
    "id": "2",
    "name": "Osa",
    "itemId": 1,
    "color": "black",
    "price": 2512355.3,
    "shipTo": {
      "name": "Jane Smith",
      "address": "123 Maple Street",
      "city": "Pretendville",
      "state": "NY",
      "zip": "12345"
    },
    "billTo": {
      "name": "Jane Smith",
      "address": "123 Maple Street",
      "city": "Pretendville",
      "state": "NY",
      "zip": "12345"
    }
  }
];

orders.forEach((order, index) => {
  const orderInDb = db.get('orders').getById(order.id).value();
  if (!orderInDb) { // if order does not exists already
    db.get('orders').push(order).value(); // add to db
  }
});

// trade shows
var tradeShows = [
  {
    id: "1",
    city: "quincy",
    state: "ma"
  },
  {
    id: "2",
    city: "bronx",
    state: "ny"
  }
];

tradeShows.forEach((show, index) => {
  const tradeShowInDb = db.get('tradeShows').getById(show.id).value();
  if (!tradeShowInDb) { // if order does not exists already
    db.get('tradeShows').push(show).value(); // add to db
  }
});

// trade shows
var taxRates = [
  {
    id: "1",
    title: "my 1",
    rates: {
      "MA": 0.2,
      "NY": 0.5
    }
  },
  {
    id: "2",
    title: "my 2",
    rates: {
      "MA": 0.1,
      "NY": 0.2,
      "CA": 0.02
    }
  }
];

taxRates.forEach((rateList, index) => {
  const rateListInDb = db.get('taxRateLists').getById(rateList.id).value();
  if (!rateListInDb) { // if obj does not exists already
    db.get('taxRateLists').push(rateList).value(); // add to db
  }
});