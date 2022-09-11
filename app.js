const express=require('express')
const mongoose=require('mongoose')
const accountCreate=require('./routes/accounts')
const app=express()
const port=3000


app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://facebook:yZh4ZcrsGGR9stcf@cluster0.wzywxdl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on("open",()=>{
    console.log("Mongodb Connected");

})
app.use('/account',accountCreate)


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})