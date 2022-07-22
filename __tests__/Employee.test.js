const Employee = require("../lib/Employee")

describe("Employee", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        const worker = new Employee("name",id,"email")
        expect(worker.getId()).toEqual(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        const worker = new Employee(name,12,"email")
        expect(worker.getName()).toEqual(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        const worker = new Employee("name",12,email)
        expect(worker.getEmail()).toEqual(email)
    })

    it("returns the class type when getRole() is called", function(){
        const worker = new Employee("name",12,"email")
        expect(worker.getRole()).toEqual("Employee")
    })
})