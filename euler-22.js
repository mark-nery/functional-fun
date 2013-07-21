var _ = require(__dirname + '/underscore');

fs = require('fs')

var namesText = fs.readFileSync(__dirname + '/names.txt','utf8')
var names = _.map(namesText.split(",") , function(name) {return name.replace(/\"/gi,''); })

names.sort();

function letterValue(alphabet) { 
  valueMap = _.object(alphabet,_.range(1,alphabet.length + 1));
  return  function(c) {
    return valueMap[c];
  }
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var letterScore = letterValue(alphabet)

function nameValue(name,valFun) { 
  return _.reduce(_.map(name,valFun),function(x,y) {
    return x + y;
  })
}

function score(start){
  var counter = start;
  
  return function(name,fun1,fun2){
    return counter++ * fun1(name,fun2)
  }
}

var calcScore = score(1);

var results = _.map(names , function (name) {
  return calcScore(name,nameValue,letterScore)
})

console.log(_.reduce(results,function(x,y) {return x + y}))
