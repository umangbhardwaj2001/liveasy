const express = require('express');
const apis = require('./src/apis')
require('dotenv').config()

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());


const loadRouter = express.Router();
app.use('/load',loadRouter);
loadRouter
    .route('/')
    .post(apis.postdata)
    .get(apis.getData)
loadRouter
    .route('/:shipperId')
    .get(apis.getDatabyShipperId)
    .put(apis.updateDatabyShipperId)
    .delete(apis.deleteDatabyShipperId)


app.listen(port,err =>{
    if(err) console.log('ERROR',err);
    console.log('server is running at port number : ',port);
})