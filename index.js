const { ifError } = require('assert');

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://AhsanTariq:Ahsan123@cluster0.2uslzli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

MongoClient.connect(url , function(err,db)
{
    if(err) throw err   
    var database = db.db("CRUD_App")

    var myArray = [
        { _id: "001", Name: 'Ahsan', Address: '321 Main Court' },
        { _id: "002", Name: 'John', Address: '123 Main Street' },
        { _id: "003", Name: 'Emily', Address: '456 Elm Avenue' },
        { _id: "004", Name: 'Michael', Address: '789 Oak Drive' },
        { _id: "005", Name: 'Sophia', Address: '321 Pine Road' },
        
      ];

    database.collection("Students").insertMany(myArray,function(error, result){
        if(error) throw error
        console.log("Data Inserted!")
        db.close();
    })
})