'use strict';
const express = require('express'),
  app = express(),
  url = require('url'),
  http = require('http'),
  request = require('request'),
  Twitter = require('twitter'),
  twitterClient = require('./twitter.js');


app.get('/tweets/:username', (request, response) => {
  let username = request.params.username,
    params = {
      screen_name: username,
      count: 5
    },
    count = 10;
  /**
  * get user timeLine.
  */
  twitterClient.findTweets(count, username, params)
    .then((body) => {
      response.send(body);
      response.end();
    }).catch((err => {
      console.log(err);
    }));

    console.log('ok ok ok ok ok ');

});
app.listen(8080);
