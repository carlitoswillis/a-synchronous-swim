const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypressHandler = require('./keypressHandler.js');
const keypress = require('keypress');
const index = require('../index.js');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {

  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  // written by us
  if (req.method === "GET") {
    // send back a random swim command

    res.writeHead(200, headers);

    // keypressHandler.initialize(console.log);

    // var randomMoves = function () {
    //   var choices = ['left', 'right', 'up', 'down'];
    //   var direction = choices[Math.floor(Math.random() * 4)];
    //   return direction;
    // }

    // var sendMoves = function () {

    //   var direction; // input from server side - 'left' , 'right'
    //   return direction;
    // }

    // res.write(randomMoves());
    res.write(index.sendMove);
    res.end();

  } else {
    // all the rest for now
    console.log('this is kind of working');
    res.writeHead(200, headers);
    res.end();
  }
  // end of our code


  res.writeHead(200, headers);
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};