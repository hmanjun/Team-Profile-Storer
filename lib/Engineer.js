const Employee = require("./Employee")

class Engineer extends Employee{ //inherit
    constructor(name,id,email,github){
        super(name,id,email) //pass in params for inherited class
        this.github = github
    }
    //getters
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer