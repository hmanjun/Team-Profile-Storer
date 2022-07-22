const Employee = require("./Employee")

class Manager extends Employee{ //inherit 
    constructor(name,id,email,office){
        super(name,id,email) //pass in params for inherited class
        this.officeNumber = office
    }
    //getters
    getOffice(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager