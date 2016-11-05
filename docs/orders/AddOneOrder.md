**Add one order**
----
Post a json data about one new order

* **URL**

  <_/api/orders_>

* **Method:**

  `POST` 

* **Data Params**

  ```json
    {
      "name": "Qi",
      "itemId": 1,
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
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "status": "success"
    }
    ```
 

* **Sample Call:**

   ```javascript

   ```

* **Notes:**

 