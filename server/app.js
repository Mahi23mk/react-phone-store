const mongo = require('mongodb').MongoClient;

const url = "mongodb+srv://mahima23:mahima@123@cluster0.qfv0i.mongodb.net/FirstDb?retryWrites=true&w=majority";


mongo.connect(url,function(err,db){
  if(err) throw err;
  console.log("database created");
  var dbo = db.db("NewDatabase");
  var obj = {name:"mahi",class:"btech"};

  dbo.createCollection("customers").insertOne(obj,function(err,res){
    if(err) throw err;
    console.log("createCollection");
    db.close();
  });
});

//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://mahima23:<password>@cluster0.qfv0i.mongodb.net/<dbname>?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//});
