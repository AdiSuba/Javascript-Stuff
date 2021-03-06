var fs = require('fs');
var data = fs.readFileSync('additional.json');
var afinndata = fs.readFileSync('afinn111.json');

var additional = JSON.parse(data);
console.log(additional);
var afinn = JSON.parse(afinndata);

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = app.listen(9000, listening);

function listening() {
  console.log("listening. . .");
}

app.use(express.static('website'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/analyze', analyzeThis);

function analyzeThis(request, response){
  var txt = request.body.text;
  var words = txt.split(/\W+/);
  var totalScore = 0;
  var wordlist = [];
  for(var i = 0; i < words.length; i++) {
    var word = words[i];
    var score = 0;
    var found = false;
    if(additional.hasOwnProperty(word)) {
      score = Number(additional[word]);
      found = true;
    } else if(afinn.hasOwnProperty(word)) {
      score = Number(afinn[word]);
      found = true;
    }
    if(found) {
      wordlist.push({
        word: word,
        score: score
      });
    }
    console.log(score);
    totalScore += score;
  }
  var comp = totalScore / words.length;

  var reply = {
    score: totalScore,
    comparative: comp,
    words: wordlist
  }
    response.send(reply);
}

app.get('/all',sendAll);
app.get('/add/:word/:score?', addWord);
app.get('/search/:word/', searchWord);

function searchWord(request, response) {
  var word = request.params.word;
  var reply;
  if(additional[word]) {
    reply = {
      status: "found",
      word: word,
      score: additional[word]
    }
  }
  else {
    reply = {
        status: "not found",
        word: word
    }
  }
  response.send(reply);
}

function addWord(request, response) {
  var data = request.params;
  var word = data.word;
  var score = Number(data.score);
  var reply;
  if(data.score == null) {
    reply  = {
      msg: "Score is required",
    }
  } else {
    additional[word] = score;
    var data = JSON.stringify(additional, null, 2);
    fs.writeFile('additional.json', data, finished);

    function finished(err) {
      console.log('all set.')
    }
    reply = {
      word: word,
      score: score,
      status: "Thank you for adding the word!"
    }
  }
  response.send(reply);
}


function sendAll(request, response) {
  var data = {
    additional: additional,
    afinn: afinn
  }
  response.send(data);
}
