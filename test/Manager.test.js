const Manager = require("../lib/Manager")

describe("Manager", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        worker = new Manager("name",id,"email",101)
        expect(worker.id).toEqual(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        worker = new Manager(name,12,"email",101)
        expect(worker.name).toEqual(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        worker = new Manager("name",12,email,101)
        expect(worker.email).toEqual(email)
    })

    it("takes and stores the parameter of office number", function(){
        const officeNumber = 101
        worker = new Manager("name",12,"email",officeNumber)
        expect(worker.office).toEqual(officeNumber)
    })
})