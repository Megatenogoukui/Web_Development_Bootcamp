import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import ejs from 'ejs';

//Initializing Express
const app = express();
//Setting port to 3000
const port  = 3000;
//Adding middleware for getting the body of the postRequest
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');

//Letting the express know that the static files are kept in folder called Public
app.use(express.static("public"));

//Initializing mongoose
mongoose.connect("mongodb://localhost:27017/wikiDB" , {useNewUrlParser : true , family : 4});

//Creating a schema
const articleSchema = new mongoose.Schema({
    title : String,
    content : String
})

//Making amodel of the schema
const Article = mongoose.model("articles" , articleSchema);


//Using Chainable routes as the routes are pointing to one location we can use modular routes
app.route("/articles")

// 1)Creating a Get request which will return all the articles saved in the Database
    .get( async (req , res) => {
        try{
            //Collecting all the articles from the database
            const allArticles = await Article.find({});
            res.send(allArticles);
        }
        catch(err){
            res.send(err);
        }
    })
// 2) Posting a ew article on the database
    .post((req,res)=> {
        //Getting the title and content from the body
        const title = req.body.title;
        const content = req.body.content;
        try{
            //creating an object so that we can save it in the database
            const article =  new Article({
                title : title,
                content : content
            });
            //saving the object inside the data base
            article.save();
            res.send("Successsss")
            
        }
        catch(err){
            res.send(err);
        }
    })
    //Deleting all the articles from the collections
    .delete(async (req ,res)=> {
        try{
        //Deletes All the articles from the database
        await Article.deleteMany({})
        res.send("Suceessss")
        }
        catch(err){
        res.send(err)
        }
    });
   


//Now Targeting specific article

app.route("/articles/:specificArticle")
    //Getting specific articles
    .get(async (req,res)=> {
        //Storing the article title provided by user
        const reqArticle = req.params.specificArticle;
        try{
            //storing the specified article from the database
            const specificArticle = await Article.findOne({title : reqArticle});
            //If article is present then sending the article
            if(specificArticle){
                res.send(specificArticle);
            }
            //Esle seding a message
            else{
                res.send("Article not Present")
            }
        }
        catch(err){
            res.send(err)
        }
    })

    .put(async (req ,res)=>{
         //Storing the article title provided by user
         const reqArticle = req.params.specificArticle;
         const upTitle = req.body.title;
         const upContent = req.body.content;
        try{
            //Updating the Article
            const specificArticle = await Article.replaceOne({title: reqArticle} , {title : upTitle , content: upContent});
        if(specificArticle){
            res.send(specificArticle);
        }
        //Esle sending a message
        else{
            res.send("Article not Present")
        }
        }
        catch(err){
            res.send(err)
        }
        
})

 .patch(async (req ,res)=>{
    //Storing the article title provided by user
    const reqArticle = req.params.specificArticle;
    const upTitle = req.body.title;
    const upContent = req.body.content;
   try{
       //Updating the Article
       const specificArticle = await Article.updateOne({title: reqArticle} ,{$set: req.body});
   if(specificArticle){
       res.send(specificArticle);
   }
   //Esle sending a message
   else{
       res.send("Article not Present")
   }
   }
   catch(err){
       res.send(err)
   }
   
})

    //Deleting the specific article
    .delete(async (req,res)=> {
        try{
            await Article.deleteOne({title : req.params.specificArticle});
            res.send("Succesfully Deleted")
        }
        catch(err){
            res.send("Error")
        }
    })


app.listen(port , () => {
    console.log(`listening to port ${port}`);
})