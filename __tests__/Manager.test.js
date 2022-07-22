const Manager = require("../lib/Manager")

describe("Manager", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        const worker = new Manager("name",id,"email",101)
        expect(worker.getId()).toEqual(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        const worker = new Manager(name,12,"email",101)
        expect(worker.getName()).toEqual(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        const worker = new Manager("name",12,email,101)
        expect(worker.getEmail()).toEqual(email)
    })

    it("takes and stores the parameter of office number", function(){
        const officeNumber = 101
        const worker = new Manager("name",12,"email",officeNumber)
        expect(worker.getOffice()).toEqual(officeNumber)
    })

    it("returns the class type when getRole() is called", function(){
        const worker = new Manager("name",12,"email","school")
        expect(worker.getRole()).toEqual("Manager")
    })
})