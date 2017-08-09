var afinn;

function preload() {
  afinn =loadJSON('afinn111.json');
}

function setup() {
  noCanvas();
  console.log(table);
  for(var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    var word = row.get(0);
    var score = row.get(1);
    afinn[word] =  score;
  }
  console.log(afinn);
  save(afinn, 'afinn111.json');
}
