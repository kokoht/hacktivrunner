const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');

require('dotenv').config()

mongoose.connect('mongodb://localhost/hacktivrunner', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Database connected');
})

const index = require('./routes/index');
const runner = require('./routes/runner')
const user = require('./routes/user')

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/', index);
app.use('/runners', runner)
app.use('/users', user)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(process.env.PORT || 3000);
