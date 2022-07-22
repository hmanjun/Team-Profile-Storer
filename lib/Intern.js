const Employee = require("./Employee")

class Intern extends Employee{ //inherit
    constructor(name,id,email,school){
        super(name,id,email) //pass in params for inherited class
        this.school = school
    }
    //getters
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}

module.exports = Intern