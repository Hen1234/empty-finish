const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const itemsRouter = require('./routes/items');

const app = express();

const cors = require('cors');

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', itemsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error= new Error('Not Found Path');
  error.status = 404;
  next(error);
});

// error handler
app.use(function(error, req, res, next) {
  console.log(error);
  res.status(error.status || 500);
  res.json({
    error: { message: error.message}
  })
});


module.exports = app;
