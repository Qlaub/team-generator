const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

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

function addEmployeePrompts() {
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
    if (!data) return;
    // last selection was to add an engineer
    if (data.github) {
      teamData.engineers.push(data);
    }
    // last selection was to add an intern
    if (data.school) {
      teamData.interns.push(data);
    }

    return addEmployeePrompts();
  })

}

// brings up add employee prompt
// user chooses
// if (engineer), else if (intern), else (done) statement to bring user to where they want to go
// if and else if statements have .then() recursively calling addEmployeePrompts at the end

function init() {
  return inquirer.prompt(managerQuestions);
}

// Function call to initialize app
init()
  .then(managerData => {
    teamData.manager = managerData
  })
  .then(addEmployeePrompts)
  .then(() => {
    console.log(teamData);
  })