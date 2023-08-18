import express from "express"

const app  = express();
const port = 3000;



app.get("/" , (req ,res) => {
    const d = new Date();
    let day = d.getDay();
    var type = "weekday"
    var adv = "work hard"
    if (day == 0 || day == 6){
        type = "weekend"
        adv = "have fun"
    }



    res.render("index.ejs" , {
        daytype : type,
        advice : adv
    })
})

app.listen(port ,()=> {
    console.log(`Your server is running on port ${port}`)
})
