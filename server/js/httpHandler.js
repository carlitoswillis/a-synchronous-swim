const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {

  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === "GET") {
    // send back a random swim command
    console.log('this is totally working');

    res.writeHead(200, headers);

    var randomMoves = function () {
      var choices = ['left', 'right', 'up', 'down'];
      var direction = choices[Math.floor(Math.random() * 4)];
      return direction;
    }

    res.write(randomMoves());
    res.end();

  } else {
    // all the rest for now
    console.log('this is kind of working');
    res.writeHead(200, headers);
    res.end();
  }
  res.writeHead(200, headers);
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};