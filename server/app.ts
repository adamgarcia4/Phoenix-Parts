// const express = require('express')
import express from 'express'

import * as admin from 'firebase-admin'

// Fetch the service account key JSON file contents
const serviceAccount = require('./serviceAccount')

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://phoenix-parts-8eeea.firebaseio.com'
})

const app: express.Application = express()

const api = require('./api')

api(app)

// Utility Middleware
// require('dotenv').config();
// var path = require('path');
// var favicon = require('serve-favicon');

// //Initialize app

// let cors = require('cors');
// app.use(cors());

// //******** MONGOOOSE Database Linking ********
// // var mongo = require('./modules/mongoose')(app);
// app.use(mongo);

// //***********Parser Middlewares****************

// // uncomment after placing your favicon in /public
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(cookieParser());
// var expressValidator = require('express-validator');
// app.use(expressValidator());

// // TODO: given the current way that the routing middleware works, no next() is called.
// // Thus, these middlewares are never called.
// // catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  // err.status = 404
  next(err)
})

// //***********Error Handlers***************

// // development error handler
// // will print stacktrace
// // if (app.get('env') === 'development') {
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.send({
//     message: err.message,
//     error: err
//   });
// });
// // }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   console.log(err);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

module.exports = app
