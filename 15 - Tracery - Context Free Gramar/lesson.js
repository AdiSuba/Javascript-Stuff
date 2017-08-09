var story = {
  "start": "#[hero:#char#]story#",
  "char": ["dragon", "rabbit", "dog"],
  "story": "A #adj# #hero.capitalize# fights the #adj# monster. Go #adj# #hero.s# go!",
  "adj": ["dark", "sleepy", "quiet"]
}

var grammar;
var button;

function setup() {
  noCanvas();
  grammar = tracery.createGrammar(story);
  button = createButton("generate");
  button.mousePressed(generateStory);
}

function generateStory() {
  var result = grammar.flatten("#start");
  createP(result);
}
