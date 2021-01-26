// Const let

function logScope() {
    var localVar = 3;

    if (localVar) {
        let localVar = "I'm different";
        console.log("nested localVar: ", localVar);
    }

    console.log("logScope localVar: ", localVar);
}

logScope();