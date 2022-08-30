const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let team = [];

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the engineer's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then((data) => {
        let engineer = new Engineer(data.name, data.ID, data.email, data.github);
        team.push(engineer);
        anotherMember();
    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the intern's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the intern's school?"
        }
    ])
    .then((data) => {
        let intern = new Intern(data.name, data.ID, data.email, data.school);
        team.push(intern);
        anotherMember();
    })
}

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the manager's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?"
        }
    ])
    .then((data) => {
        let manager = new Manager(data.name, data.ID, data.email, data.office);
        team.push(manager);
        addTeamMember();
    })
}

const addTeamMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            choices: ['Engineer', 'Intern', "Don't add another team member"]
        }
    ])
    .then((data) => {
        if(data.employee === 'Engineer') {
            addEngineer();
        } else if (data.employee === 'Intern') {
            addIntern();
        } else {
            createTeam();
        }
    })
}

const anotherMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'another',
            message: 'Do you want to add another team member?',
            choices: ['Yes', 'No']
        }
    ])
    .then((data) => {
        if(data.another === 'Yes') {
            addTeamMember();
        } else {
            createTeam();
        }
    })
}

const createTeam = () => {
    fs.writeFileSync('index.html', createHtml(team))
}

addManager();