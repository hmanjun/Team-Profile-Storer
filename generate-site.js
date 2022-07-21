let cards = ""

const dynamicCards = (teamMembers) => {
    teamMembers.forEach((member) =>{
        const lastInfo = lastData(member)
        cards += `<div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${member.id}</li>
                        <li class="list-group-item">Email: ${member.email}</li>
                        ${lastInfo}
                    </ul>
                </div>
                `
    })
}

const lastData = (member) =>{
    if(member.type === "Manager") return `<li class="list-group-item">Office number: ${member.office}</li>`
    if(member.type === "Engineer") return `<li class="list-group-item git" data-git="${member.github}">Github: ${member.github}</li>`
    if(member.type === "Intern") return `<li class="list-group-item">School: ${member.school}</li>`
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
            <div id="members-container" class="d-flex">
                ${cards}
            </div>
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script>
            $(document).on("click",".git",function(event){
                let user = $(this).attr("data-git")
                window.open("https://www.github.com/" + user)
            })
        </script>
      </body>
    
    </html>
    `
}

module.exports = generate