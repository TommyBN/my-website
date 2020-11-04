const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
var ObjectId = require('mongodb').ObjectId;



router.get('/:id', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("tommybn");
        dbo.collection("users").findOne({_id: ObjectId(req.params.id)}, function (err, result) {
            if (err) throw err;
            res.json(result.jobs);
            db.close()
        });
    })
})

//add job
router.post('/add/:id', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("tommybn");
        var newJob = req.body;
        dbo.collection("users").updateOne(
            { "_id": ObjectId(req.params.id) },
            { $push: { jobs: req.body } },
            (err, result) => {
                if (err) throw err;
                res.send(result)
            }
        )
    })
})

//edit job
// router.post('/edit/:id', (req, res) => {
//     MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("job-places");
//         dbo.collection('companies').updateOne(
//             { _id: ObjectId(req.params.id) },
//             { $set: { ...req.body } },
//             (err, result) => {
//                 if (err) throw err;
//                 res.json(result);
//                 db.close()
//             })
//     })
// })

//delete
router.post('/delete/:id', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("tommybn");
        var id = req.params.id;
        console.log(req.body)
        dbo.collection("users").updateOne(
            { "_id": ObjectId(req.params.id) },
            { $pull: { jobs: {name: req.body.name} } },
            (err, result) => {
                if (err) throw err;
                res.send(result)
            }
        )
    })
})


module.exports = router;

