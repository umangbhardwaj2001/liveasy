# This is an API build to serve the load
To test this API in your local machine make sure to install node.js and npm then run following commands
```bash
npm install
npm start
```
then use postman for HTTP methods
> here I have used get, post, put, and delete methods along with paramenters

or you can directly paste this [API LINK](https://b-liveasy.herokuapp.com/) in postman and perform the HTTP methods

##### BoilerPlate for post request
```json
{
    "loadingPoint": "delhi",
    "unloadingPoint": "jaipur",
    "productType": "chemicals",
    "truckType": "canter",
    "noOfTrucks": "2",
    "weight": "100",
    "comment": "",
    "shipperId": "shipper:<UUID>",
    "Date" : "dd-mm-yyyy"
}
```

##### For get,post method 
    append link by /load and send response like boilerplate mentioned above.
    
##### for get,delete,put load by shipperid
    append link by /load/SHIPPERID
