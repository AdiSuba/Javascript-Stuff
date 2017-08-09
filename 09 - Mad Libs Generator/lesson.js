var data;

var txt = "$$Exclamation$$! they said $$Adverb$$ as they jumped into their\n$$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.";


function setup() {
  noCanvas();

  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs/pubhtml?pageId=111881622755760066921',
                       callback: gotData,
                       simpleSheet: true } )

  var button = createButton('generate madlib');
  button.mousePressed(generate);
}

function gotData(stuff, tabletop) {
  data = stuff
}

function replacer(match, pos) {
  var entry = random(data);
  return entry[pos];
}

function generate() {
  var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madlib);
}
