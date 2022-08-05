const {MongoClient} = require('mongodb');
require('dotenv').config()
const url = process.env.URL
const database = 'TruckLoad';

const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('loads')
}

module.exports = dbConnect;