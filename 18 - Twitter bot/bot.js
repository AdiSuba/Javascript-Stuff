console.log('The bot is starting');

var Twit = require('twit');

// var config = require('./config');
var T = new Twit({
  consumer_key:         'wUL2ZYxSFjvjXjn8I9uEvlZ12',
  consumer_secret:      '22tLw0pd7UHen1ERG93GxqRCWwHfaDnUtUeMkAUliU9xLOLyBG',
  access_token:         '863496101990674434-Xc5WlhOUT8rH61a7uJQKsEn07hlOb1s',
  access_token_secret:  'BxBTAOodZu2d5DW8gdQbVr89a65cvUGszXOAdI8LFQhJA'
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//Gets tweets from Donald Trump
// T.get('search/tweets', { q: 'from:realDonaldTrump since:2015-06-16', count: 32000 }, gotData);
// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   var fs = require('fs');
//   var txt = "";
//   for(var i = 0; i < tweets.length; i++) {
//     // console.log(tweets[i].text);
//     txt += tweets[i].text + "\r\n";
//   }
//   fs.writeFile("D:/trumptest.txt", txt, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
//   });
// };

tweetIt();
setInterval(tweetIt, 1000*60*60);

function tweetIt() {
  var markov = require('./lesson.js')
  var tweet = {
    status: markov.markovIt(),
  }
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if(err) {
      console.log("Something went wrong!");
      tweetIt();
    } else {
      console.log("Done!");
    }
  }
  console.log(tweet.status);
}
