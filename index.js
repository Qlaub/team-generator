const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const generateHtml = require('./utils/generateHtml');
const {addEmployeePrompts, managerQuestions} = require('./utils/prompts');
const {writeFile, copyFiles} = require('./utils/createDist');

function init() {
  return inquirer.prompt(managerQuestions);
}

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
  .then(() => {
    console.log('index.html file created in "dist" directory!')
  })
  .catch(err => {
    console.log(err);
  });