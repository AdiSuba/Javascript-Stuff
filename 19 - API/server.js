var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);

var express = require('express');
var app = express();
var server = app.listen(9000, listening);

function listening() {
  console.log("listening. . .");
}

app.use(express.static('Website'));

app.get('/flower', sendFlower);
app.get('/flower/:flower/:num?', sendFlower);
app.get('/all',sendAll);
app.get('/add/:word/:score?', addWord);
app.get('/search/:word/', searchWord);

function sendFlower(request, response) {
  var data = request.params;
  var num = data.num;
  var txt = "Here are some flowers: 🌼🌼🌼<br/>";
  if(num === undefined) num = 1;
  if(data.flower != undefined) {
    for(var i = 0; i < num; i++)
      txt += "I see you like " + data.flower + "<br/>";
  }
  response.send(txt);
}

function searchWord(request, response) {
  var word = request.params.word;
  var reply;
  if(words[word]) {
    reply = {
      status: "found",
      word: word,
      score: words[word]
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
    words[word] = score;
    var data = JSON.stringify(words, null, 2);
    fs.writeFile('words.json', data, finished);

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
  response.send(words);
}
