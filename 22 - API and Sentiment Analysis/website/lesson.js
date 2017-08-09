
function setup() {
  noCanvas();
  console.log('running');

  var button = select('#submit');
  button.mousePressed(submitWord);
  var buttonA = select('#analyze');
  buttonA.mousePressed(analyseThis);
}

function analyseThis() {
  var txt = select('#textinput').value();
  var data = {
    text: txt
  }
  httpPost('analyze/', 'json', data, dataPosted, postErr);
}

function dataPosted(result) {
  console.log(result);
}

function postErr(err) {
  console.log(err);
}

function submitWord() {
  var word = select('#word').value();
  var score = select('#score').value();
  if(word != "") {
    console.log(word, score);
    loadJSON('add/' + word + '/' + score, finished);
  }
}

function finished(data) {
  console.log(data);
}
