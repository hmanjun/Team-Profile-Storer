const Engineer = require("../lib/Engineer")

describe("Engineer", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        worker = new Engineer("name",id,"email","github")
        expect(worker.id).toEqual(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        worker = new Engineer(name,12,"email","github")
        expect(worker.name).toEqual(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        worker = new Engineer("name",12,email,"github")
        expect(worker.email).toEqual(email)
    })

    it("takes and stores the parameter of github user", function(){
        const github = "sampleUser"
        worker = new Engineer("name",12,"email",github)
        expect(worker.github).toEqual(github)
    })
})