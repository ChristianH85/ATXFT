const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
const passport=require('passport')
var db = require('./db');
const LocalStrategy   = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./models/index.js')

// const signup =require('../passport/signup')
// var mongoose = require('mongoose');
// Connect to DB
mongoose.connect(db.url, {useNewUrlParser: true});

// const utils = require('utils');
// const OpenIDStrategy = require('passport-openid').Strategy;
require('dotenv').config();



  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });


const app = express();


const port = process.env.PORT || 5000;
// passport.use(new GoogleStrategy({
//   clientID: process.env.clientID,
//   clientSecret: process.env.clientSecret,
//   callbackURL: "http://localhost:3000/Search"
// },
// function(accessToken, refreshToken, profile, done) {
//      User.findOrCreate({ googleId: profile.id }, function (err, user) {
//        return done(err, user);
//      });
// }
// ));
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });


// passport.use(new LocalStrategy(
//   function(username, password, cb) {
//     db.users.findByUsername(username, function(err, user) {
//       if (err) { return cb(err); }
//       if (!user) { return cb(null, false); }
//       if (user.password != password) { return cb(null, false); }
//       return cb(null, user);
//     });
//   }));
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'DOGS';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true } );
// mongoose.connect('mongodb://localhost:27017/woof', {useNewUrlParser: true});
// Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// // });
// var passport = require('passport');
// var expressSession = require('express-session');
// app.use(expressSession({secret: 'mySecretKey', resave: false,
// saveUninitialized: true,}));
// app.use(passport.initialize());
// app.use(passport.session());
// Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
//  var flash = require('connect-flash');
//  app.use(flash());
// // Initialize Passport
// var initPassport = require('./passport/init');
// initPassport(passport);

// passport.serializeUser(function(user, done) {
//   console.log('serializing user: ');console.log(user);
//   done(null, user._id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//       console.log('deserializing user:',user);
//       done(err, user);
//   });
// });

// Setting up Passport Strategies for Login and SignUp/Registration
// login(passport);
// signup(passport);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey', resave: false,
saveUninitialized: true,}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username,password)
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }))
)
  // passport.authenticate('local', { failureRedirect: '/login' }),
  // function(req, res) {
  //   res.redirect('/');
  ;
  app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.render('profile', { user: req.user });
//   });
// var flash = require('connect-flash');
//  app.use(flash());
// Initialize Passport
// var initPassport = require('./passport/init');
// initPassport(passport);

// passport.serializeUser(function(user, done) {
//   console.log('serializing user: ');console.log(user);
//   done(null, user._id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//       console.log('deserializing user:',user);
//       done(err, user);
//   });
// });

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }));
passport.use(new GoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: "http://localhost:3000/Search"
},
function(accessToken, refreshToken, profile, done) {
     User.findOrCreate({ googleId: profile.id }, function (err, user) {
       return done(err, user);
     });
}
));
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/Login' }),
  function(req, res) {
    console.log(res)
    res.redirect('/');
  });


app.use('/api', routes);
app.use('/user', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});