const express = require('express');
const router = express.Router();
const User = require('./User');
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

//get all users
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

//get user
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

//sign up
router.post('/signup', async (req, res) => {

    var response = {
        signedUp: false,
        msg: '',
    }

    //check if username exist
    await MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("tommybn");
        dbo.collection("users").findOne({ name: req.body.username }, async function (err, user) {
            if (user) {
                response.msg = 'שם המשתמש כבר קיים במערכת. אנא בחר שם אחר';
                res.json(response)
            }
            else {
                //create user object
                let user = {
                    name: req.body.username,
                    password: req.body.password
                };
                //hash password
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err) throw err;
                        user.password = hash;
                        //save user    
                        dbo.collection("users").insertOne(user, function (err, result) {
                            if (err) throw err;
                            let username = result.ops[0].name;
                            response.signedUp = true;
                            response.msg = `משתמש חדש בשם ${username} נרשם בהצלחה למערכת`
                            res.status(200).json(response);
                        });
                    }))
            }
        });
    })
})

router.post('/login', (req, res) => {

    var response = {
        valid: false,
        msg: '',
        id: ''
    }

    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("tommybn");

        //find user by name
        dbo.collection("users").findOne({name: req.body.username}, function (err, user) {
            if (err) throw err;
            if(user){
                //user exist, check password
                bcrypt.compare(req.body.password, user.password, (err, match) => {
                    if(err) throw err;
                    if(match) {
                        //passwords match, return success message
                        response.valid = true;
                        response.msg = 'כניסה מוצלחת';
                        response.id = user._id;
                        res.json(response);
                    }
                    else {
                        //password incorrect, return failure message
                        response.msg = 'סיסמא שגויה.';
                        res.json(response);
                    }
                })
            }
            else {
                //user doesnt exist, return failure message  
                response.msg = 'שם המשתמש לא קיים במערכת.';
                res.json(response); 
            }
        });
    });
})


module.exports = router;