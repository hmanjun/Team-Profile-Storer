const Intern = require("../lib/Intern")

describe("Intern", function(){
    it("takes and stores the parameter of id", function(){
        const id = 12
        const worker = new Intern("name",id,"email","school")
        expect(worker.getId()).toEqual(id)
    })

    it("takes and stores the parameter of name", function(){
        const name = "James"
        const worker = new Intern(name,12,"email","school")
        expect(worker.getName()).toEqual(name)
    })

    it("takes and stores the parameter of email", function(){
        const email = "sample@gmail.com"
        const worker = new Intern("name",12,email,"school")
        expect(worker.getEmail()).toEqual(email)
    })

    it("takes and stores the parameter of school", function(){
        const school = "UCSC"
        const worker = new Intern("name",12,"email",school)
        expect(worker.getSchool()).toEqual(school)
    })

    it("returns the class type when getRole() is called", function(){
        const worker = new Intern("name",12,"email","school")
        expect(worker.getRole()).toEqual("Intern")
    })
})