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
    }
]

const team = []

const addManager = () => {
    return new Promise(resolve =>{
        inquirer.prompt(mangQues).then((response) =>{
            const {name,id,email,office} = response
            team.push(new Manager(name,id,email,office))
            resolve("resolved")
        })
    })
}

const addEngineer = () =>{
    inquirer.prompt(engiQues).then((response) =>{
        const {name,id,email,github,addNext} = response
        team.push(new Engineer(name,id,email,github))
    })
}

const addIntern = () =>{
    inquirer.prompt(intQues).then((response) =>{
        const {name,id,email,school,addNext} = response
        team.push(new Intern(name,id,email,school))
    })
}

const askAddAnother = () =>{
    return new Promise(resove =>{
        inquirer
            .prompt({
                type: "list",
                name: "next",
                message: "Choose the type of member to add next: ",
                choices: ["Engineer","Intern","none"]
            })
            .then((response) =>{
                resove(response.next)
            })
    })
    
}

/*
const getTeamInfo = new Promise((resolve, reject) => {
    addManager()
    let stopAdding = false
    resolve()
})
*/

const init = async () =>{
    await addManager()
    await askAddAnother().then(response => {
        console.log(response)
    })
    console.log(team)
}

init()