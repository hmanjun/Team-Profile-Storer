const expect = require("expect.js")
const Engineer = require("../lib/Engineer")

describe("Engineer", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        worker = new Engineer("name",id,"email","github")
        expect(worker.id).to.equal(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        worker = new Engineer(name,12,"email","github")
        expect(worker.name).to.equal(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        worker = new Engineer("name",12,email,"github")
        expect(worker.email).to.equal(email)
    })

    it("takes and stores the parameter of office number", function(){
        const github = "sampleUser"
        worker = new Engineer("name",12,"email",github)
        expect(worker.github).to.equal(github)
    })
})