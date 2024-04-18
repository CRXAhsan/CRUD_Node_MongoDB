var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://AhsanTariq:Ahsan123@cluster0.2uslzli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("CRUD_App");


  dbo.collection("Students").find({}).toArray(function (err, res) {
    if (err) throw err;
    console.log(res);
    db.close();

  });
});