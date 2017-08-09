var names;
var order = 9;
var ngrams = {};
var beginnings = [];

function preload() {
  fs = require('fs')
  names = fs.readFileSync('./alltrump.txt', 'ascii', function (err,data) {
    if (err) {
      return console.log(err);
    }
    //names = data;
  });
}

function setup() {
  var alltweets = names.split('\n');
  for(var j = 0; j < alltweets.length; j++) {
    txt = alltweets[j];
    for(var i = 0; i < txt.length - order; i++) {
      var gram = txt.substring(i, i + order);
      if (i == 0) {
        beginnings.push(gram);
      }
      if(!ngrams[gram]) {
        ngrams[gram] = [];
      }
      ngrams[gram].push(txt.charAt(i + order));
      //console.log(i + " " + txt.charAt(i + order));
    }
  }
}

this.markovIt = function() {
  preload();
  //console.log(names)
  setup();
  var currentGram = random(beginnings);
  var result = currentGram;

  for(var i = 0; i < 140; i++) {
    var possibilities = ngrams[currentGram];
    if(!possibilities) {
      break;
    }
    var next = random(possibilities);
    result += next;
    currentGram = result.substring(result.length - order, result.length);
  }
  return result;
}

function random(items) {
  return items[Math.floor(Math.random()*items.length)];
}
