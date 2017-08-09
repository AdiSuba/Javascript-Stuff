var txt = [];
var words = {}
var keys = [];
var allwords = [];
var othercounts = [];

var files = ['dragon.txt', 'nitrogen.txt', 'music.txt', 'philosophy.txt', 'mittani.txt', 'plant.txt']

function preload() {
  for(var i = 0; i <files.length; i++) {
    txt[i] = loadStrings('files/' + files[i]);
  }

}

function compare(a, b) {
  var ca = words[a].tfidf;
  var cb = words[b].tfidf;
  return cb - ca;
}

function setup() {
  noCanvas();
  for(var i = 0; i <files.length; i++) {
    allwords[i] = txt[i].join("\n");
  }
  var tokens = allwords[0].split(/\W+/);

  for(var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if(words[word] === undefined) {
      words[word] = {
        tf:1,
        df:1
      };
      keys.push(word);
    }
  else {
      words[word].tf += 1;
    }
  }

  for(var j = 1; j < allwords.length; j++) {
    var tempcounts = {};
    var tokens = allwords[j].split(/\W+/);
    for(var k = 0; k < tokens.length; k++) {
      if(tempcounts[tokens[k].toLowerCase()] === undefined) {
        tempcounts[tokens[k].toLowerCase()] = true;
      }
    }
    othercounts.push(tempcounts);
  }

  for(var i = 0; i < keys.length; i++) {
    var w = keys[i];
    for(var j = 0; j < othercounts.length; j++) {
      var tempcounts = othercounts[j];
      if(tempcounts[w]=== true) {
        words[w].df++;
      }
    }
  }

  for(var i = 0; i < keys.length; i++) {
    var w = keys[i];

    var wordobj = words[w];
    wordobj.tfidf = wordobj.tf*log(files.length/wordobj.df);
  }

  keys.sort(compare);
  for(var x of keys)
  {
    createDiv(x + " " + words[x].tf + " " + words[x].df + " " + words[x].tfidf);
  }

  console.log(words);
}
