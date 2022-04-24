function generateManagerHtml(data) {
  return `<card id="manager">
      <div class="title-container">
        <h2 class="card-name">${data.name}</h2>
        <div class="title"><img src="./assets/images/manager-icon.svg" alt="" class="title-icon">Manager</div>
      </div>
      <div class="detail-container">
        <div class="id">ID: ${data.id}</div>
        <div class="email">Email: <a href="mailto: ${data.email}">${data.email}</a></div>
        <div class="office">Office number: ${data.office}</div>
      </div>
    </card>`
}

function generateEngineerHtml(data) {
  let htmlString = ``;

  data.forEach(engineer => {
    htmlString += `
    <card class="engineer">
      <div class="title-container">
        <h2 class="card-name">${engineer.name}</h2>
        <div class="title"><img src="./assets/images/engineer-icon.svg" alt="" class="title-icon">Engineer</div>
      </div>
      <div class="detail-container">
        <div class="id">ID: ${engineer.id}</div>
        <div class="email">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></div>
        <div class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></div>
      </div>
    </card>`
  });

  return htmlString;
}

function generateInternHtml(data) {
  let htmlString = ``;

  data.forEach(intern => {
    htmlString += `
    <card class="intern">
      <div class="title-container">
        <h2 class="card-name">${intern.name}</h2>
        <div class="title"><img src="./assets/images/intern-icon.svg" alt="" class="title-icon">Intern</div>
      </div>
      <div class="detail-container">
        <div class="id">ID: ${intern.id}</div>
        <div class="email">Email: <a href="mailto: ${intern.email}">${intern.email}</a></div>
        <div class="school">School: ${intern.school}</div>
      </div>
    </card>`
  });

  return htmlString;
}

function generatePageHtml(teamData) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./assets/css/style.css">
  <title>Team Profile</title>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>

  <main>
    ${generateManagerHtml(teamData.manager)}
    ${generateEngineerHtml(teamData.engineers)}
    ${generateInternHtml(teamData.interns)}
  </main>
</body>
</html>
`
}

module.exports = generatePageHtml;