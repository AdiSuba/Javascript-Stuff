
function setup() {
  createCanvas(400, 400);
  background(51);
  drawData();
  console.log('running');

  var button = select('#submit');
  button.mousePressed(submitWord);
}

function drawData() {
  loadJSON('all', gotData);
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
  drawData();
}

function gotData(data) {
  background(51);
  console.log(data);
  var keys = Object.keys(data);
  for(x of keys) {
    var word = x;
    var score = data[word];
    var x = random(width);
    var y = random(height);
    fill(255);
    textSize(16);
    text(word + ": " + score, x, y);
  }
}
