const NewOrder = {
  "title": "New Order Schema",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "color": {
      "type": "string"
    },
    "itemId": {
      "type": "integer"
    },
    "shipTo": {
      "type": "object",
      "properties": {
        "name": { "type": "string"},
        "address": { "type": "string"},
        "city": { "type": "string"},
        "state": { "type": "string"},
        "zip": { "type": "string"}
      }
    },
    "billTo": {
      "type": "object",
      "properties": {
        "name": { "type": "string"},
        "address": { "type": "string"},
        "city": { "type": "string"},
        "state": { "type": "string"},
        "zip": { "type": "string"}
      }
    }
  }
};

export default NewOrder;