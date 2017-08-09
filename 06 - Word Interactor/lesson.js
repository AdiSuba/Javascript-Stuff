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

function highlight() {
  console.log('hover');
  //this.style('background-color', color(random(255), random(255), random(255)));
  this.html(this.html().replace(/./g, "x"));
}

function newText() {
  var s = txt.value();

  var words = s.split(/(\W+)/);
  for(var x of words) {
    var span = createSpan(x);

    if(!/\W+/.test(x)){

      //span.style('background-color', color(random(255), random(255), random(255)));

      span.mouseOver(highlight);

    }
    span.parent(output);
  }
  // console.log(words);
  // createP(s);
}
