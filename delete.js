var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://AhsanTariq:Ahsan123@cluster0.2uslzli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("CRUD_App");

  var myquery = { _id: "006" };

  dbo.collection("Students").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log(`1 document deleted by ID: ${myquery._id} `);
    db.close();
  });
});