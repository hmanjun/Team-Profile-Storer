const expect = require("mocha").expect
const Employee = require("../lib/Employee")

describe("Employee", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        worker = new Employee("name",id,"email")
        expect(worker.id).to.be(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        worker = new Employee(name,12,"email")
        expect(worker.name).to.be(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        worker = new Employee("name",12,email)
        expect(worker.email).to.be(email)
    })
})