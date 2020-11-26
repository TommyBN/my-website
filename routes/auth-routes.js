const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
var ObjectId = require('mongodb').ObjectId;


//get user
router.get('/:id', (req, res) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("tommybn");
        dbo.collection("users").findOne({ _id: ObjectId(req.params.id) }, function (err, result) {
            if (err) throw err;
            res.status(200).json(result.name);
            db.close();
        });
    });
})                      

    

//sign up
router.post('/signup', async (req, res) => {

    var response = {
        valid: false,
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
                            response.valid = true;
                            response.msg = `משתמש חדש בשם ${username} נרשם בהצלחה למערכת`
                            res.status(200).json(response);
                        });
                    }))
            }
        });
    })
})

//log in
router.post('/login', (req, res) => {

    var response = {
        valid: false,
        msg: '',
        id: '',
        token: ''
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
                        //passwords match, generate token and return it + success message
                            response.token = jwt.sign({id: user._id}, 'sudosudoku');                
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

//check if user is allready logged in
router.post('/check', (req, res) => {
    var response = {
        valid: false,
        msg: '',
        id: '',
    }
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader != 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, 'sudosudoku', (err, data) => {
            console.log('data: ',data)
            if (err) {
                response.msg = 'Not authorized - t'
                res.json(response);
            } 
            else {
                response.id = data.id;
                response.valid = true;
                res.json(response);
            } 
        });
        
    }
    else {
        response.msg = 'Not Authorized - u';
        res.json(response);
    } 
})

module.exports = router;