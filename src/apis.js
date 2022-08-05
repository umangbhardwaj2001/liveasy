const dbConnect = require('./db');

async function postdata(req,res)
{
    const collection =await dbConnect();
    const result = await collection.insertOne(req.body);
    if(result.acknowledged)
        res.send({Response:"loads details added successfully"});
    else  
        res.send({Response:result});
}

async function getData(req,res)
{
    const collection =await dbConnect();
    const result = await collection.find({}).toArray()
    res.send({Response : result})
}

async function getDatabyShipperId(req,res)
{
    const collection =await dbConnect();
    const result = await collection.findOne({shipperId : req.params.shipperId})
    res.send({Response : result})
}

async function updateDatabyShipperId(req,res)
{
    const collection =await dbConnect();
    const result = await collection.updateOne({shipperId : req.params.shipperId},{
        $set: req.query
    })
    res.send({Response : result})
}

async function deleteDatabyShipperId(req,res)
{
    const collection =await dbConnect();
    const result = await collection.deleteOne({shipperId : req.params.shipperId})
    res.send({Response : result})
}


module.exports = {
    postdata : postdata,
    getDatabyShipperId : getDatabyShipperId,
    getData : getData,
    updateDatabyShipperId : updateDatabyShipperId,
    deleteDatabyShipperId : deleteDatabyShipperId
}