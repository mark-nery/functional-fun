#functional look into solving http://projecteuler.net/problem=1
#outlined here http://mark-nery.github.io/software/2013/07/13/playing-with-functional-javascript/

function isMultipleOf(n) {
  if( _.isArray(n))
    return function(x) {
      return _.chain(n)
        .map(function (n) { return x % n == 0 } )
        .contains(true)
        .value()
    }
  else
    return function(x) { return x % n == 0 } 
}    

function multiplesList(upto,filterFunction) {
  return _.filter(_.range(upto), filterFunction))              
}

function listCruncher(upto, multiples, operation){
  return _.chain(multiplesList(upto,isMultipleOf(multiples)))
    .reduce(operation)
    .value()
}

