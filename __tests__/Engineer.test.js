const Engineer = require("../lib/Engineer")

describe("Engineer", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        const worker = new Engineer("name",id,"email","github")
        expect(worker.getId()).toEqual(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        const worker = new Engineer(name,12,"email","github")
        expect(worker.getName()).toEqual(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        const worker = new Engineer("name",12,email,"github")
        expect(worker.getEmail()).toEqual(email)
    })

    it("takes and stores the parameter of github user", function(){
        const github = "sampleUser"
        const worker = new Engineer("name",12,"email",github)
        expect(worker.getGithub()).toEqual(github)
    })

    it("returns the class type when getRole() is called", function(){
        const worker = new Engineer("name",12,"email","github")
        expect(worker.getRole()).toEqual("Engineer")
    })
})