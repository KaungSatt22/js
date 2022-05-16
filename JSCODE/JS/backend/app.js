var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');
let cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let movieRouter = require('./routes/movies')
let reviewRouter = require('./routes/review')
let {db} = require('./config/db')
let testRouter = require('./routes/test')
let auth = require('./middleware/auth')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/movies',/*auth.verfityuserToken*/ movieRouter);
app.use('/test',testRouter);
app.use('/api/review',reviewRouter);

//db connect
mongoose.connect(db).then(()=> console.log('Mongodb Connected')).catch((err)=> console.log("Mongodb Error",err))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
