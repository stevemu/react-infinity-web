**Add one trade show**
----

* **URL**

  <_/api/trade-shows/_>

* **Method:**

  `POST` 
  
* **Data Params**
  
    ```json
    OneTradeShow without id field
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     {
        "status": "success"
     }
    ```
    
**Show one trade show**
----

* **URL**

  <_/api/trade-shows/:tradeShowId_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     {
        "id": "1",
        "city": "quincy",
        "state": "ma"
     }
    ```
 
 
**Show all trade shows**
----

* **URL**

  <_/api/trade-shows/_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     [
       OneTradeShow, OneTradeShow
     ]
    ```
 
**Show one trade show**
----

* **URL**

  <_/api/trade-shows/:tradeShowId_>

* **Method:**

  `PUT` 
  
* **Data Params**
  
    ```json
    OneTradeShow
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     {
        "status": "success"
     }
    ```
    
**Delete one trade show**
----

* **URL**

  <_/api/trade-shows/1_>

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
 
 