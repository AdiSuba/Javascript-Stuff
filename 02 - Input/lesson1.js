var txt;
var output;
var submit;

function setup() {
  noCanvas();
  //txt = createInput("Sup?");
  txt = select('#textfield')
  //txt.changed(newText);
  //txt.input(newTyping);
  output = select('#output');
  submit = select('#submit');
  submit.mousePressed(newText);
}

function newTyping() {
  output.html(txt.value());
  //createP(txt.value());
}

function newText() {
  createP(txt.value());
}

//function draw() {

//}
