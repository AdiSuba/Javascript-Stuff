var txt;
var order = 3;
var ngrams = {};
var button;

function setup() {
  noCanvas();
  txt = "A random set of words. A is a letter. A set is a group. Words are linguistical constructs.";
  for(var i = 0; i < txt.length - order; i++) {
    var gram = txt.substring(i, i + order);

    if(!ngrams[gram]) {
      ngrams[gram] = [];
    }
    ngrams[gram].push(txt.charAt(i + order));
    console.log(i + " " + txt.charAt(i + order));
  }
  button = createButton("generate");
  button.mousePressed(markovIt);
  console.log(ngrams);
}

function markovIt() {

  var currentGram = txt.substring(0, order);
  var result = currentGram;

  for(var i = 0; i < 150; i++) {
    var possibilities = ngrams[currentGram];
    if(!possibilities) {
      break;
    }
    var next = random(possibilities);
    result += next;
    currentGram = result.substring(result.length - order, result.length);
  }

  createP(result);
}
