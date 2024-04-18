var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://AhsanTariq:Ahsan123@cluster0.2uslzli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("CRUD_App");


  dbo.collection("Students").updateOne({ Name: "Ahsan" }, { $set: { Name: "Muneeb Tariq" } }, function (err, res) {
    if (err) throw err;
    console.log(`1 document updated by Name`);
    db.close();

  });

});