const MongoClient = require('mongodb').MongoClient;
const url =
"mongodb+srv://demouser:demouser123@cluster0.cetrw.mongodb.net/textbooks?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if(err) { return console.log(err); return;}
    var dbo = db.db("textbooks");
    var collection = dbo.collection('bks');
    console.log("Success!");
    db.close();
});