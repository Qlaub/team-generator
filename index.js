const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml');

let teamData = {
  manager: undefined,
  engineers: [],
  interns: []
}

const managerQuestions = [
  // NAME
  {
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the team manager's name");
        return false;
      }
    }
  },
  // ID
  {
    type: 'input',
    name: 'id',
    message: "What is the team manager's employee ID?",
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the team manager's employee ID");
        return false;
      }
    }
  },
  // EMAIL
  {
    type: 'input',
    name: 'email',
    message: "What is the team manager's email address?",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the team manager's email address");
        return false;
      }
    }
  },
  // OFFICE NUMBER
  {
    type: 'input',
    name: 'office',
    message: "What is the team Manager's office number?",
    validate: officeInput => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please enter the team manager's office number");
        return false;
      }
    }
  }
];

function engineerPrompt(){
  return inquirer
    .prompt([
    // NAME
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's name");
          return false;
        }
      }
    },
    // ID
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's employee ID?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the engineer's employee ID");
          return false;
        }
      }
    },
    // EMAIL
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the engineer's email address");
          return false;
        }
      }
    },
    // GITHUB
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub account?",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter the engineer's GitHub account name")
          return false;
        }
      }
    }
  ]);
}

function internPrompt() {
  return inquirer
    .prompt([
    // NAME
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the intern's name");
          return false;
        }
      }
    },
    // ID
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's employee ID?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the intern's employee ID");
          return false;
        }
      }
    },
    // EMAIL
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the intern's email address");
          return false;
        }
      }
    },
    // SCHOOL
    {
      type: 'input',
      name: 'school',
      message: "What school does the intern attend?",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter the intern's school")
          return false;
        }
      }
    }
  ]);
}

function addEmployeePrompts(team) {
  if (!team[1] && !team[2]) {
    team[1] = [];
    team[2] = [];
  }

  return inquirer
  .prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
    }
  ])
  .then(answer => {
    if (answer.choice === 'Add an engineer') {
      return engineerPrompt();
    } else if (answer.choice === 'Add an intern') {
      return internPrompt();
    } else {
      return false;
    }
  })
  .then(data => {
    // guard clause for if team is finished being built
    if (!data) {
      return team;
    }
    // last selection was to add an engineer
    if (data.github) {
      team[1].push(new Engineer(data.name, data.id, data.email, data.github));
    }
    // last selection was to add an intern
    if (data.school) {
      team[2].push(new Intern(data.name, data.id, data.email, data.school));
    }

    return addEmployeePrompts(team);
  })
}

function writeFile(html) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', html, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'index.html created'
      });
    });
  });
};

function copyFiles() {
  return new Promise((resolve, reject) => {
    // copy css from src
    fs.copyFile('./src/assets/css/style.css', './dist/assets/css/style.css', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'style.css copied to dist/assets/css'
      })
    })
    // copy engineer icon from src
    fs.copyFile('./src/assets/images/engineer-icon.svg', './dist/assets/images/engineer-icon.svg', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'engineer icon copied to dist/assets/images'
      })
    })
    // copy manager icon from src
    fs.copyFile('./src/assets/images/manager-icon.svg', './dist/assets/images/manager-icon.svg', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'manager icon copied to dist/assets/images'
      })
    })
    // copy intern icon from src
    fs.copyFile('./src/assets/images/intern-icon.svg', './dist/assets/images/intern-icon.svg', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'intern icon copied to dist/assets/images'
      })
    })
  })
}

function init() {
  return inquirer.prompt(managerQuestions);
}

// Function call to initialize app
// init()
//   .then(managerData => {
//     team.manager = managerData
//   })
//   .then(addEmployeePrompts)
//   .then(() => {
//     return generateHtml(teamData);
//   })
//   .then(html => {
//     return writeFile(html);
//   })
//   .then(copyFiles)
//   .then()
//   .catch(err => {
//     console.log(err);
//   })

init()
  .then(managerData => {
    let team = [];
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);
    team.push(manager);
    return addEmployeePrompts(team);
  })
  .then(team => {
    return generateHtml(team);
  })
  .then(html => {
    return writeFile(html);
  })
  .then(copyFiles)
  .then()
  .catch(err => {
    console.log(err);
  })