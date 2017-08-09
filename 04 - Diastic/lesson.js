var txt;
var words;

function diastic(seed, words) {

  var phrase = "";
  var current = 0;
  var lastword = "";

  for (var i = 0; i < seed.length; i++) {
    var c = seed.charAt(i);
    for(var j = current; j < words.length; j++) {
      if(words[j].charAt(i) == c) {
        if(words[j] == lastword) j++;
        else {
          phrase += words[j] + " ";
          lastword = words[j];
          current++;
          break;
        }
      }
    }
  }
  return phrase;
}

function preload() {
  txt = loadStrings('example.txt');
}

function setup() {
  noCanvas();

  txt = join(txt, ' ');
  words = splitTokens(txt, ' ,.;:[](){}0123456789"');
  var seed = select('#seed');
  var submit = select('#submit');
  submit.mousePressed(function() {
    var phrase = diastic(seed.value(), words);
    createP(phrase);
  });

}
