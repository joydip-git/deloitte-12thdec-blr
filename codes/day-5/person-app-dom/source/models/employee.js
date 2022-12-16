class Employee {
    // #_id;
    // #_name;
    // #_salary;
    // #_departmentName
    constructor(pName, pId, pSalary, departmentName) {
        // this.#_id = pId
        // this.#_name = pName
        // this.#_salary = pSalary
        // this.#_departmentName = departmentName
        this.id = pId
        this.name = pName
        this.salary = pSalary
        this.departmentName = departmentName
    }
    // get department() {
    //     return this.#_departmentName
    // }
    // set department(val) {
    //     this.#_departmentName = val
    // }
    // get id() {
    //     return this.#_id
    // }
    // set id(val) {
    //     this.#_id = val
    // }

    // get name() {
    //     return this.#_name
    // }
    // set name(val) {
    //     this.#_name = val
    // }

    // get salary() {
    //     return this.#_salary
    // }
    // set salary(val) {
    //     this.#_salary = val
    // }
    printInfo() {
        // return this.#_name
        //     + ', '
        //     + this.#_id
        //     + ','
        //     + this.#_salary
        // return `${this.#_name}, ${this.#_id}, ${this.#_salary}, ${this.#_departmentName}`
        return `${this.name}, ${this.id}, ${this.salary}, ${this.departmentName}`
    }
}