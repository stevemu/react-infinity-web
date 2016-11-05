 
**Add one order**
----

* **URL**

  <_/api/orders_>

* **Method:**

  `POST` 

* **Data Params**

  ```json
    OneOrder without id field
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "status": "success"
    }
    ```
 

**Show one order**
----

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
 
**Show all orders**
----

* **URL**

  <_/api/orders_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
      OneOrder, OneOrder
    ]
    ```


**Update One Order**
----

* **URL**

  <_/api/orders/:orderId_>

* **Method:**

  `PUT` 
  
* **Data Params**
  
    ```json
    OneOrder
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     {
        "status": "success"
     }
    ```


**Delete one order**
----

* **URL**

  <_/api/orders/1_>

* **Method:**

  `DELETE` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "status": "success"
    }
    ```
 
 