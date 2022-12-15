function person(pName, pId, pSalary) {
    //local variable
    //var a = 100
    //object data properties and their values
    this.id = pId
    this.name = pName
    this.salary = pSalary
    this.printInfo = function () {
        return this.name + ', ' + this.id + this.salary
    }
}
var anilPersonObj = new person('anil', 2, 3000)
console.log(anilPersonObj)
var sunilPersonObj = new person('sunil', 1, 2000)
var joyPersonObj = new person('joydip', 3, 1000)
//{ id:1, name:'anil', salary:1000}