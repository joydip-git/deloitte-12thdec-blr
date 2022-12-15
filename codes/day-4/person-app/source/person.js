function person(pName, pId, pSalary) {
    this.id = pId
    this.name = pName
    this.salary = pSalary
    this.printInfo = function () {
        return this.name + ', ' + this.id + this.salary
    }
}