const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
let htmlManager = '';
let htmlEmployee = '';

const createEmployees = employeeData => {
    // console.log(employeeData)

    employeeData.forEach(element => {
        if (element instanceof Manager) {
            htmlManager +=`
            <div class="manager-box employee-box">
                <div class="employee-title">
                    <h3>Manager</h3>
                    <h4>${element.name}</h4>
                </div>
                <div class="employee-info">
                    <p><span class="label">Employee ID: </span>${element.id}</p>
                    <p><span class="label">Email: </span>${element.email}</p>
                    <p><span class="label">Office Number: </span>${element.officeNumber}</p>
                </div>
            </div>
            `
        } else if (element instanceof Engineer) {
            htmlEmployee +=`
            <div class="employee-box">
                <div class="employee-title">
                    <h3>Engineer</h3>
                    <h4>${element.name}</h4>
                </div>
                <div class="employee-info">
                    <p><span class="label">Employee ID: </span>${element.id}</p>
                    <p><span class="label">Email: </span><a href="mailto:${element.email}">${element.email}</a></p>
                    <p><span class="label">Github: </span><a href=https://github.com/${element.github}>${element.github}</a></p>
                </div>
            </div>
            `
        } else if (element instanceof Intern) {
            htmlEmployee +=`
            <div class="employee-box">
                <div class="employee-title">
                    <h3>Intern</h3>
                    <h4>${element.name}</h4>
                </div>
                <div class="employee-info">
                    <p><span class="label">Employee ID: </span>${element.id}</p>
                    <p><span class="label">Email: </span>${element.email}</p>
                    <p><span class="label">School: </span>${element.school}</p>
                </div>
            </div>
            `
        }
    });

    let template =`
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css" />
    <title>Team Generator</title>
    </head>

    <header class="page-header">
        <h1 class="header">My Team</h1>
    </header>

    <body>
        <section class="team-box">
            <article class="manager">
                ${htmlManager}
            </article>
            <article class="employee">
                ${htmlEmployee}
            </article>
        </section>
    </body>
    `

    fs.writeFile("./dist/index.html", template, function() {
        console.log("Success!!")
    })
}

// const generateHtml = (html) => { 
    
// }

module.exports = createEmployees;