**Add one product**
----
Post a json data about one new product

* **URL**

  <_/api/products_>

* **Method:**

  `POST` 

* **Data Params**

  ```json
  OneProduct without id field
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "status": "success",
        "id": "3"
    }
    ```
 
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
        "id": 1,
        "model": "Evoke",
        "price": 4000,
        "profileImage": "Evoke_black_1.png"
      }
    
    ```

**Show all products**
----
Returns json data of all products

* **URL**

  <_/api/products_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
      OneProduct
    ]
    ```

**Update One Product**
----

* **URL**

  <_/api/products/:productId_>

* **Method:**

  `PUT` 
  
* **Data Params**
  
    ```json
    OneProduct
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     {
        "status": "success"
     }
    ```
    
**Delete one product**
----

* **URL**

  <_/api/products/1_>

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
 
 