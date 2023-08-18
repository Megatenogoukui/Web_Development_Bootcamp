const { error } = require("console");
const fs = require("fs");

// fs.writeFile("text.txt" , "Node is going to blow my mind" , (err) => {
//     if (err) throw error;
//     console.log("The file have been saved")
// })

fs.readFile('text.txt' ,'utf8', (err , data) => {
    if (err) throw err;
    console.log(data)
})