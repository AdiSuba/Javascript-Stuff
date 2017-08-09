var rg;
var button;

function grammarReady() {

}

function setup() {
  noCanvas();

  rg = new RiGrammar();
  //rg.loadFrom('test.grammar', grammarReady);
   rg.addRule('<start>', 'The N V', 1);
   rg.addRule('N', 'cat | dog | cow');
   rg.addRule('V', 'meows | barks | moos');

  button = createButton('generate');
  button.mousePressed(generate);

}

function generate() {
  var result = rg.expand();
  createP(result);
}
