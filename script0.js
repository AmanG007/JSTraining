//immediately invoded functional expressions
// var a = 3/4;
// var b = 5/7;


var fistFraction = 33/4;
var secondFraction = 33/5;

var theBiggest = (function(a, b) {
    var result;
    a>b ? result = ["a: " + a] : result = ["b: " + b];
    return result;
})(fistFraction, secondFraction)

console.log(theBiggest);