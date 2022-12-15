var anilPersonObj = new person('anil', 2, 3000)
console.log(anilPersonObj)
var sunilPersonObj = new person('sunil', 1, 2000)
var joyPersonObj = new person('joydip', 3, 1000)

var people = [anilPersonObj, sunilPersonObj, joyPersonObj]

people
    .sort(
        function (p1, p2) {
            return p1.id - p2.id
        }
    )
    .filter(
        function (p) {
            return p.salary > 2000
        }
    )
    .map(
        function (p) {
            return p.name
        }
    )
    .forEach(
        function (pName) {
            console.log(pName)
        }
    )