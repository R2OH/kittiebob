const express = require('express')
const app = express()
const port = 3000


const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://readAgent:<jqWjVJ1jgIdxQemK>@cluster0-1q7ty.mongodb.net/test"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});

app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))