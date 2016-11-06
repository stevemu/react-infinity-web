**Add one**
----

* **URL**

  <_/api/taxRateLists/_>

* **Method:**

  `POST` 
  
* **Data Params**
  
    ```json
    OneRateList without id field
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     {
        "status": "success"
     }
    ```
    
**Show one**
----

* **URL**

  <_/api/taxRateLists/:id_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
         id: "2",
         rates: {
           "MA": 0.1,
           "NY": 0.2,
           "CA": 0.02
         }
    }
    ```
 
 
**Show all**
----

* **URL**

  <_/api/taxRateLists/_>

* **Method:**

  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     [
       OneRateList, OneRateList
     ]
    ```
 
**Show one**
----

* **URL**

  <_/api/taxRateLists/:tradeShowId_>

* **Method:**

  `PUT` 
  
* **Data Params**
  
    ```json
    OneRateList
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
     {
        "status": "success"
     }
    ```
    
**Delete one**
----

* **URL**

  <_/api/taxRateLists/1_>

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
 
 