const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
let html = '';

const createEmployees = employeeData => {
    // console.log(employeeData)

    employeeData.forEach(element => {
        if (element instanceof Manager) {
            html +=`
            <article class="manager-box employee-box">
                <div class="employee-title">
                    <h3>Manager</h3>
                    <h4>${element.name}</h4>
                </div>
                <div class="employee-info">
                    <p>Employee ID: ${element.id}</p>
                    <p>Email: ${element.email}</p>
                    <p>Office Number: ${element.officeNumber}</p>
                </div>
            </article>
            `
        } else if (element instanceof Engineer) {
            html +=`
            <article class="employee-box">
                <div class="employee-title">
                    <h3>Engineer</h3>
                    <h4>${element.name}</h4>
                </div>
                <div class="employee-info">
                    <p>Employee ID: ${element.id}</p>
                    <p>Email: ${element.email}</p>
                    <p>Github: ${element.github}</p>
                </div>
            </article>
            `
        } else if (element instanceof Intern) {
            html +=`
            <article class="employee-box">
                <div class="employee-title">
                    <h3>Intern</h3>
                    <h4>${element.name}</h4>
                </div>
                <div class="employee-info">
                    <p>Employee ID: ${element.id}</p>
                    <p>Email: ${element.email}</p>
                    <p>School: ${element.school}</p>
                </div>
            </article>
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
            ${html}
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