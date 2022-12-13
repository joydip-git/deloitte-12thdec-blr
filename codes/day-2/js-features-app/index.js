// var a = 10
// //code
// a = 'deloitte'
// //code
// var expo = a.toExponential(2)
// console.log(expo)

//a,b => arguments (local variables of the function)
function add(a, b) {
    //addRes => local variable
    var addRes = a + b
    console.log(addRes)
}

function subtract(a, b) {
    var subRes = a - b
    //console.log(subRes)
    return subRes
}

var first = 10
var second = 20
add(first, second)
var subResult = subtract(first, second)
console.log(subResult)


