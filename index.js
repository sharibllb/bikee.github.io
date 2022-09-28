const express = require("express");
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/contactbike',{useNewUrlParser: true})
 
const port = 80;

const contactSchema = new mongoose.Schema({
    name: String,
    age: Number,
    mobile: Number,
    email: String,
    textarea: String
})

const contact = mongoose.model('contact', contactSchema);
// console.log (path.join(__dirname, '/static'));

const staticPath = (path.join(__dirname, "/static"))
// app.set('/static', path.join(__dirname, '/static'));
// app.set('view engine', 'html')

app.use (express.static(staticPath));
// app.use('/static', express.static('static'));
app.use(express.urlencoded())

// app.get("/", (req, res)=>{
//     res.status(200).send("This is static file")
// })

// app.get("/contact",(_req, res)=>{
//     res.status(200).send("contact.html")
// })

app.post('/contact', (req, res) =>{
    var myData = new contact(req.body)
    myData.save().then(()=>{
        res.send("These item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("The item was not saved to the database")
    })
})


app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})