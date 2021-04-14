const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ogjym.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const bikeCollection = client.db("twowheels").collection("bikes");
    const ordersCollection = client.db("twowheels").collection("orders");
    // perform actions on the collection object

    app.post('/addBike', (req, res) => {
        const newBike = req.body;
        console.log('adding new bike', newBike);
        bikeCollection.insertOne(newBike)
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })

    app.post('/addOrder', (req,res) => {
        const order = req.body;
        ordersCollection.insertOne(order)
        .then(resutlt=>{
            res.send(result.insertedCount >0);
        })
    })

    app.get('/bikes', (req,res)=> {
        bikeCollection.find()
        .toArray((err, items) => {
            res.send(items);
        })
    })

    app.get('/orderReview', (req,res)=>{
        ordersCollection.find({email: req.query.email})
        .toArray((err,documents)=>{
            res.send(documents)
        })
    })

    app.delete('/delete/:id', (req,res) => {
        bikeCollection.deleteOne({_id: ObjectId(req.params.id)})
        .then((result)=>{

        })
    })

});





app.listen(port)