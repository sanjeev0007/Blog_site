var express = require('express'),
 expressLayouts = require('express-ejs-layouts'),
 mongoose = require('mongoose'),
 passport = require('passport'),
 flash = require('connect-flash'),
 session = require('express-session'),
 app = express();

// Passport Config
    require('./config/passport')(passport);

// DB Config
mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
     .catch(err => console.log(err));

// Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./route/first.js'));
app.use('/users', require('./route/person.js'));

//for access of image
app.use( express.static( "public" ) );



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
});
