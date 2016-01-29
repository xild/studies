'use strict';

const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'M2j0V7dHDF272AIKZuZqAKy4Z',
  consumer_secret: 'BpVU1Edk41nhlon7FAHxFCsdUGr0b7wPIidAiGOsi0V9XePWum',
  access_token_key: '25308688-2vyFozTsVv0hFrKbpYFYN97Mu5AQ4TkF3LoGMM59N',
  access_token_secret: 'hoJqscw0JrSIaxlDbbsW3ivPOrhaAg5lfThix1vjOg2jp'
});

module.exports = {

  findTweets(count, user, params) {

    return new Promise((resolve, reject) => {
      client.get('statuses/user_timeline', params, (error, tweets) => {
        if (error) reject(`Error geting user timeline `);
        resolve(tweets);

      });
    });
  }


}
