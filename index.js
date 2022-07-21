const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const mangQues = [
    {
        type: "input",
        name: "name",
        message: "Enter manager's name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter the manager's employee id: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter the manager's email address: "
    },
    {
        type: "number",
        name: "office",
        message: "Enter the manager's office number: "
    }
]

const engiQues = [
    {
        type: "input",
        name: "name",
        message: "Enter employee's name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's employee id: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address: "
    },
    {
        type: "input",
        name: "github",
        message: "Enter the employee's Github user: "
    },
    {
        type: "list",
        name: "addNext",
        message: "Choose the type of member to add next: ",
        choices: ["Employee","Intern","none"]
    }
]

const intQues = [
    {
        type: "input",
        name: "name",
        message: "Enter intern's name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's employee id: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email address: "
    },
    {
        type: "input",
        name: "school",
        message: "Enter the intern's school: "
    },
    {
        type: "list",
        name: "addNext",
        message: "Choose the type of member to add next: ",
        choices: ["Employee","Intern","none"]
    }
]

const team = []

const addManager = () => {
    inquirer.prompt(mangQues).then((response) =>{
        const {name,id,email,office} = response
        team.push(new Manager(name,id,email,office))
    })
}

const addEngineer = () =>{
    inquirer.prompt(engiQues).then((response) =>{
        const {name,id,email,github,addNext} = response
        team.push(new Engineer(name,id,email,github))
        return addNext
    })
}

const addIntern = () =>{
    inquirer.prompt(intQues).then((response) =>{
        const {name,id,email,school,addNext} = response
        team.push(new Intern(name,id,email,school))
        return addNext
    })
}