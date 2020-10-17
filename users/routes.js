const express = require('express');
const router = express.Router();
const User = require('./User');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";


router.get('/', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("tommybn");
        dbo.collection("users").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
            db.close();
        });
    });
})


router.get('/:id', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("tommybn");
        dbo.collection("users").findOne({ _id: req.params.id }, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
            db.close();
        });
    });
})


// router.post('/new', (req, res) => {
//   console.log('todo to be saved: ', req.body);

//   // a document instance
//   var currentTodo = new Todo(req.body);

//   // save model to database
//   currentTodo.save(function (err, todo) {
//     if (err) return console.error(err);
//     console.log('todo with ID ' + todo.id + " saved to todos collection.");
//   });

//   res.send("success")
// });

module.exports = router;