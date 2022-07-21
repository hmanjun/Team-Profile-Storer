const expect = require("expect.js")
const Intern = require("../lib/Intern")

describe("Intern", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        worker = new Intern("name",id,"email","school")
        expect(worker.id).to.equal(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        worker = new Intern(name,12,"email","school")
        expect(worker.name).to.equal(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        worker = new Intern("name",12,email,"school")
        expect(worker.email).to.equal(email)
    })

    it("takes and stores the parameter of school", function(){
        const school = "UCSC"
        worker = new Intern("name",12,"email",school)
        expect(worker.school).to.equal(school)
    })
})