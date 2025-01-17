const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const newsAPIRouter = require('./routes/newsAPI');
const bookmarkRouter = require("./routes/bookmark");
const bookmarkedArticlesRouter = require("./routes/bookmarkedArticles");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(session({'secret':'123456', resave: false, saveUninitialized: false,}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', indexRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/newsAPI', newsAPIRouter);
app.use('/api/bookmark', bookmarkRouter);
app.use('/api/bookmarked-articles', bookmarkedArticlesRouter);

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

//set port, listen for requests
// app.listen(port, () => {
//   console.log(`Example app listening at port ${port}`);
// });


module.exports = app;

