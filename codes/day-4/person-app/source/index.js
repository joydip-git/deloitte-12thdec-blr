var anilPersonObj = new Person('anil', 2, 3000)
console.log(anilPersonObj)
var sunilPersonObj = new Person('sunil', 1, 2000)
var joyPersonObj = new Person('joydip', 3, 1000)

anilPersonObj.name = 'Anil Kumar'
console.log(anilPersonObj.name)
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