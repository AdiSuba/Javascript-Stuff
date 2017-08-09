var txt;
var out;
var submit;

function setup() {
  noCanvas();
  txt = select('#textfield');
  //txt.changed(newText)
  out = select('#output');
  submit = select('#submit');
  submit.mousePressed(newText)
}

function newText() {
  var s = txt.value();
  var r = /(\d{3})-(\d{3})-(\d{3})/g;

  //Lesson 3
  var newstring = s.replace(r, replacer)
  console.log(newstring);
  createP(newstring);
  // Lessson 2
  // var r = /\+?3?8?\(?\d(\d{2})[-). ]?(\d{3})[-. ]?(\d{3})/g;
  // var result;
  // while(result = r.exec(s)) {
  //   createP("0" + result[1] + " " + result[2]+ " " + result[3]);
  // }

  // Lesson 1
  // var matches = s.match(r);
  // for(x of matches) {
  //   createP(x);
  // }
}

function replacer(match, group1, group2, group3) {
  console.log(arguments);
  return group1 + " " + group2 + " " + group3;
}
