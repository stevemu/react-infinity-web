**Show one product**
----
Returns json data about a single product

* **URL**

  <_/api/products/:id_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     {
        "name": "Qi",
        "id": "1",
        "itemId": "1",
        "color": "black",
        "price": 2555.3,
        "shipTo": {
          "name" : "Jane Smith",
          "address" : "123 Maple Street",
          "city" : "Pretendville",
          "state" : "NY",
          "zip"   : "12345"
        },
        "billTo": {
          "name" : "Jane Smith",
          "address" : "123 Maple Street",
          "city" : "Pretendville",
          "state" : "NY",
          "zip"   : "12345"
        }
      }
      }
    
    ```
 