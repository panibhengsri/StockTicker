const MongoClient = require('mongodb').MongoClient;
const url =
"mongodb+srv://demouser:demouser123@cluster0.cetrw.mongodb.net/textbooks?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if(err) { return console.log(err); return;}
    var dbo = db.db("companies");
    var collection = dbo.collection('collections');
    console.log("Success!");

    coll.find().toArray(function(err, items) {
        if (err) {
            console.log("Error: " + err);
        }
        else
        {
            console.log("Items: ");
            for (i=0; i<items.length; i++)
            console.log(i + ": " + items[i].title + " by: " + items[i].author);
        }
        
        db.close();
    }); //end find

    db.close();
});