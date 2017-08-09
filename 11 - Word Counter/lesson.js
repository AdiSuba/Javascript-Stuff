var txt;
var words = {}
var keys = [];

function preload() {
  txt = loadStrings('example.txt');

}

function compare(a, b) {
  var ca = words[a];
  var cb = words[b];
  return cb - ca;
}

function setup() {
  noCanvas();
  var allwords = txt.join("\n");
  var tokens = allwords.split(/\W+/);

  for(var i = 0; i < tokens.length; i++) {
    if(!/\d+/.test(tokens[i])) {
      if(words[tokens[i].toLowerCase()]) words[tokens[i].toLowerCase()] += 1
      else {
        words[tokens[i].toLowerCase()] = 1;
        keys.push(tokens[i].toLowerCase());
      }
    }
  }

  keys.sort(compare);
  for(var x of keys)
  {
    createDiv(x + " " + words[x]);
  }

  console.log(words);
}
