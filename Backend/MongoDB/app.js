
const mongoose = require("mongoose");
// Connecting to server
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  family: 4 // Force using IPv4
});

//Creating a Schema
const fruitSchema = new mongoose.Schema({
  name: String,

  rating : Number,
  review : String
});

//Creating a model
const Fruit = mongoose.model("Fruit" , fruitSchema);

//Creating object form the model
const fruit1 = new Fruit({
  name: "Apple",
  rating : 9,
  review: "Apple a day keeps the dr away"
});
const fruit2 = new Fruit({
  name: "Orange",
  rating : 9,
  review: "Apple a day keeps the dr away"
});
const fruit3 = new Fruit({
  rating : 9,
  review: "Apple a day keeps the dr away"
});

//Inserting the objects
// Fruit.insertMany([fruit1,fruit2,fruit3]);


//Reading the Document
const getDocument = async ()=>{
  const results= await Fruit.find({});
  results.forEach((result) => console.log(result.name))
  mongoose.connection.close();
 }
 getDocument();
 
 
//Updating the document 
const updateDocument = async ()=>{
  await Fruit.updateOne({_id : "64dfd76b27e8c8051970b0ea"} , {name : "Mango" }) ;
}
updateDocument();


//Deleting Documents
const deleteDocument = async ()=>{
  await Fruit.deleteOne({_id : "64dfd76b27e8c8051970b0ea"});

}
deleteDocument();



const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruit : fruitSchema
})

const Person = mongoose.model("Person" , personSchema);

const person1 = new Person({
  name : "John",
  age : 45,
  favFruit: fruit2
})
const person2 = new Person({
  name : "Lvduu",
  age : 25
})
const person3 = new Person({
  name : "Ganduu",
  age : 4
})
const person4 = new Person({
  name : "YEdaa",
  age : 23
})

// //Deleting all documents
// const deleteAllDocument = async ()=>{
//   await Person.deleteMany({__v : 0});

// }
// deleteAllDocument();

person1.save();

