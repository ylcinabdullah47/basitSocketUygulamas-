console.log("database deneme");

const {MongoClient,ObjectId} = require('mongodb');

const url ='mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function connect(){
    try {
        await client.connect();
        console.log("veri tabanı bağlantısı başarılı");
        const database = client.db('deneme1')
        const collection =database.collection('test47')
        // console.log("collection başarılı");   
        return collection;
    } catch (err) {
        console.error(err);
    }
};
module.exports={connect};