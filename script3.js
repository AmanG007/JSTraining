// closres in javascript

function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath() {
        return pixels/baseValue;
    }

    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small Size ", smallSize());
console.log("MediumSize ", mediumSize());
console.log("Large Size ", largeSize());
console.log("Xlarge Size ", xlargeSize());

// function doSomeMath() {
//     var a = 4;
//     var b = 9;

//     function multiply() {
//         var result = a*b;
//         return result;
//     }

//     return multiply;
// }

// var theResult = doSomeMath();

// console.log("The Result: ", theResult());
