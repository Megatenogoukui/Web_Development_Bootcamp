const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const database = "Factory"
async function getData(){
  try{
    const result = await client.connect();
  let db = result.db(database);
    let collection = db.collection("product");
    console.log(collection.find({}).toArray());
  }
  catch(err){
    console.log(err)
  }
}
getData();