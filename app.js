const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors')
// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://127.0.0.1:27017/";

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/auth', require('./routes/auth-routes'))
app.use('/api/todos', require('./routes/todos-routes'))
app.use('/api/jobs', require('./routes/jobs-routes'))

app.listen(PORT, () => console.log(`Listening on tommybn.com:${PORT}`))




module.exports = app;
