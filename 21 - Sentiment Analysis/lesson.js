var afinn;

function preload() {
  afinn = loadJSON('afinn111.json')
}

function setup() {
  noCanvas();
  console.log(afinn);

  var txt = select('#txt');
  txt.input(typing);
}

function typing() {
  var txtinput = txt.value;
  words = txtinput.split(/\W/);
  var scoredwords = [];
  console.log(words);
  //console.log(txt.value);
  var score = 0;
  for(x of words) {
    var word = x.toLowerCase();
    var score;
    if(afinn.hasOwnProperty(word)) {
      score += Number(afinn[word]);
      scoredwords.push(word + ": " + afinn[word] + "\r\n");
    }
  }
  var scoreP = select('#score');
  scoreP.html('score: ' + score);
  var comp = select('#comparative');
  comp.html('comparative: ' + score / words.length);
  var wordlist = select('#wordlist');
  wordlist.html(scoredwords)
}
