var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000


var app = express();

const cors = require('cors')
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.get('/', (req,res)=>{
  res.send('<h3>hello</h3>')
})


app.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}`))

// app.use('/api/v1/users', users);

module.exports = app;
