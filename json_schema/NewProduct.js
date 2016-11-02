const NewProduct = {
  "title": "Product Schema",
  "type": "object",
  "properties": {
    "model": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "picture": {
      "type": "string"
    }
  }
};

//example
var example =
{
  model: "it900",
  price: "900",
  picture: "1223423.png"
};


export default NewProduct;