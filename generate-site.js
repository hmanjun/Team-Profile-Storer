let cards = ""

const dynamicCards = (teamMembers) => {
    teamMembers.forEach((member) =>{
        const lastInfo = lastData(member)
        cards += `<div class ="card mx-2 my-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${member.getName()} (${member.getRole()})</h5>
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${member.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                            ${lastInfo}
                        </ul>
                    </div>
                </div>
                `
    })
}

const lastData = (member) =>{
    if(member.getRole() === "Manager") return `<li class="list-group-item">Office number: ${member.getOffice()}</li>`
    if(member.getRole() === "Engineer") return `<li class="list-group-item">Github: <a href="https://www.github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></li>`
    if(member.getRole() === "Intern") return `<li class="list-group-item">School: ${member.getSchool()}</li>`
}

const generate = (data) =>{
    dynamicCards(data)
    return `<!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Team Members</title>
      </head>
    
      <body>
    
        <header class="d-flex p-5 justify-content-center bg-danger text-light">
            <h1>My Team</h1>
        </header>
    
        <main>
            <div id="members-container" class="d-flex justify-content-center flex-wrap mt-5 mb-5">
                ${cards}
            </div>
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
      </body>
    
    </html>
    `
}

module.exports = generate