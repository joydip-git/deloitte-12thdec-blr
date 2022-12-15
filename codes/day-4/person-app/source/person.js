/*
function person(pName, pId, pSalary) {
    this.id = pId
    this.name = pName
    this.salary = pSalary
    this.printInfo = function () {
        return this.name + ', ' + this.id + this.salary
    }
}
*/

class Person {
    #_id;
    #_name;
    #_salary;
    constructor(pName, pId, pSalary) {
        this.#_id = pId
        this.#_name = pName
        this.#_salary = pSalary
    }
    //clg(obj-var.id)
    get id() {
        return this.#_id
    }
    //obj-var.id=2
    set id(val) {
        this.#_id = val
    }

    get name() {
        return this.#_name
    }
    set name(val) {
        this.#_name = val
    }

    get salary() {
        return this.#_salary
    }
    set salary(val) {
        this.#_salary = val
    }

    printInfo() {
        return this.#_name + ', ' + this.#_id + this.#_salary
    }
}