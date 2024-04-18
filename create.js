var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://AhsanTariq:Ahsan123@cluster0.2uslzli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("CRUD_App");

  var myobj = { _id: "006", name: "Ahsan Tariq", address: "Highway 37" };

  dbo.collection("Students").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log(`1 document inserted by ID: ${myobj._id} `);
    db.close();
  });
}); 