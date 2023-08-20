//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');
const mongoose =  require('mongoose');

//Starting content for the website preloaded
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

//Initialising the express server 
const app = express();

//Connecting to mongoose 
mongoose.connect("mongodb://localhost:27017/Blog" , {useNewUrlParser : true , family : 4});

//Making a schema for my post database
const postSchema = new mongoose.Schema({
  title: String,
  content : String
});

//Making a model for our collections
const Post = mongoose.model("Posts" , postSchema);


app.set('view engine', 'ejs');

//Using bodyParser middleware to get the content of the post request
app.use(bodyParser.urlencoded({extended: true}));

//directing node that the static files are kept in a folder called public
app.use(express.static("public"));


app.get("/" ,async (req, res) => {
      //.find will return a;; the document from the database in the form of an array
      const allPost = await Post.find({});
      res.render("home.ejs" ,{homeContent : homeStartingContent , postArr : allPost}); 
});


//will take u to that post
app.get("/post/:match" ,async (req, res) => {
  //Getting the title from the route
  const requestedTitle = _.lowerCase(req.params.match);
 //.find will return a;; the document from the database in the form of an array and storing it in allPost
  const allPost = await Post.find({});
  //Checking if title of any of the document matches
  allPost.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if( requestedTitle === storedTitle){
      res.render("post.ejs" , {Title : post.title , Content : post.content });//will render post.ejs page
    }
  });
});

app.get("/about" ,(req, res) => {
  res.render("about.ejs" ,{aboutContent : aboutContent});
});
app.get("/contact" ,(req, res) => {
  res.render("contact.ejs" ,{contactContent : contactContent});
});
app.get("/compose" ,(req, res) => {
  res.render("compose.ejs" );
});


app.post("/compose" , (req,res) => {
  //Whenever the user will type in the title section and post section ,with the help of body parser we will get the title and body and store it as an object  and then we will push the object inside the array  amd render  
  const post = new Post({
    title : req.body.postTitle,
    content : req.body.postBody
  })
  post.save();
  res.redirect("/");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
