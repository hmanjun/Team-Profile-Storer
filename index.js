//Install packages
const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const genHTML = require("./generate-site")
const fs = require("fs")

//Questions for different employees
const mangQues = [ //manager qs
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

const engiQues = [ //engineer qs
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

const intQues = [ //interns qs
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

//Call to ask user for manager data
const addManager = () => {
    return new Promise(resolve =>{
        inquirer.prompt(mangQues).then((response) =>{
            const {name,id,email,office} = response
            team.push(new Manager(name,id,email,office))
            resolve("resolved")
        })
    })
}

//call to ask user for engineer data
const addEngineer = () =>{
    return new Promise(resolve =>{
        inquirer.prompt(engiQues).then((response) =>{
            const {name,id,email,github} = response
            team.push(new Engineer(name,id,email,github))
            resolve("resolved")
        })
    })
}

//call to ask for intern data
const addIntern = () =>{
    return new Promise(resolve =>{
        inquirer.prompt(intQues).then((response) =>{
            const {name,id,email,school} = response
            team.push(new Intern(name,id,email,school))
            resolve("resolved")
        })
    })
}

//call to ask if user wants to add another employee
const askAddAnother = () =>{
    return new Promise(resove =>{
        inquirer
            .prompt({
                type: "list",
                name: "next",
                message: "Choose the type of member to add next: ",
                choices: ["Engineer","Intern","end program"]
            })
            .then((response) =>{
                resove(response.next)
            })
    })
    
}

//handle calling each data ques in proper order
const getData = async () =>{
    await addManager()
    let add
    let type
    //initial ask if want to add another employee
    await askAddAnother().then(response => {
        if(response != "end program"){
            add = true
            type = response
        } 
        else add = false
    })
    while(add){
        //Using input, ask for appropriate employee data
        if(type === "Engineer"){
            await addEngineer()
        } else {
            await addIntern()
        }
        //after getting member data, ask if user want to add another employee
        await askAddAnother().then(response =>{
            if(response != "end program"){
                add = true
                type = response
            } 
            else add = false
        })
    }
}

const init = async () =>{
    await getData()
    //write file after collecting all team members data
    fs.writeFile("./dist/index.html",genHTML(team), (err) => {
        err ? console.log(err) : console.log("Success!")
    })
    console.log(team)
}

init()