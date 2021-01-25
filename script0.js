var a = 3/4;
var b = 5/7;

var theBiggest = function(a, b) {
    var result;
    a>b ? result = ["a: " + a] : result = ["b: " + b];
    return result;
}

console.log(theBiggest(3/4, 23/4));
console.log(theBiggest);