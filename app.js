const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.listen(PORT, () => console.log(`Listening on tommybn.com:${PORT}`))

app.get('/test', (req, res)=>{
  res.send('ok, got to test')
})

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    console.log('connected to DB')
    var dbo = db.db("mydb");
    dbo.listCollections().toArray(function (err, collectionInfos) {
        console.log(collectionInfos);
        db.close();
    });
})


module.exports = app;
