const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name,id,email,office){
        super(name,id,email)
        this.office = office
        this.type = "Manager"
    }
}

module.exports = Manager