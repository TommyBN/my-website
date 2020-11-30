const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
var ObjectId = require('mongodb').ObjectId;

//get all todos of specific user
router.get('/:id', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("tommybn");
        dbo.collection("users").findOne({ _id: ObjectId(req.params.id) }, function (err, user) {
            if (err) throw err;
            res.json(user.todos)
        })
    })
})

//add Todo
router.post('/:id', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("tommybn");
        dbo.collection("users").updateOne(
            { "_id": ObjectId(req.params.id) },
            { $push: { todos: req.body } },
            (err, result) => {
                if (err) throw err;
                res.send(result)
            }
        )
    });
})

//delete todo
router.post('/delete/:id', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("tommybn");
        dbo.collection("users").updateOne(
            { "_id": ObjectId(req.params.id) },
            { $pull: { todos: {title: req.body.title} } },
            (err, result) => {
                if (err) throw err;
                res.send(result)
            }
        )
    });
})



module.exports = router;