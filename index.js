const Choices = require("inquirer/lib/objects/choices")

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
        type: "input",
        name: "office",
        message: "Enter the manager's office number: "
    }
]

const empQues = [
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