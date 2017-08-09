var txt;
var out;
var submit;

function setup() {
  noCanvas();

  txt = select('#textfield');
  out = select('#output');
  submit = select('#submit');
  submit.mousePressed(newText)

}

function newText() {
  var s = txt.value();
  var index = s.indexOf(": ");
  var end = s.indexOf(" ", index + 2);
  if (end == -1) end = s.length();
  if(index != -1) {
    var newtext =  s.substring(index + 2, end);
    createP(newtext);
  }

  var words = splitTokens(s, ', ');
  for (var i = 0; i < words.length; i++) {
    //createP(words[i]);
  }

  words = words.sort();
  s = join(words,  ' ');
  createP(s);
  //createP(s.length);
}

//function draw() {

//}
