var date = new Date();
	document.body.innerHTML = "<h1>Today is:" + date + "</h1>";

function findBiggestFraction(a, b) {
	var result;
	a > b ? result = ["firstFraction", a] :  result = ["secondFraction", b];
	return result;
}

var firstFraction = 60/3;
var secondFraction = 55/3;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("First Fraction Result: ", firstFraction);
console.log("Second Fraction Result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");