var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000


var app = express();

const cors = require('cors')
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.get('/welcome', (req,res)=>{
  res.redirect('/')
})


app.listen(PORT, () => console.log(`Listening on tommybn.com:${PORT}`))

// app.use('/api/v1/users', users);

module.exports = app;
