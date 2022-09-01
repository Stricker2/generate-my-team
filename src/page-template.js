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
            <div>
                ${element.name}
                ${element.id}
                ${element.email}
                ${element.officeNumber}
            </div>
            `
            console.log('this is a manager: ', element.officeNumber)
        } else if (element instanceof Engineer) {
            console.log('this is a engineer: ', element.github)
        } else if (element instanceof Intern) {
            console.log('this is a intern: ', element.school)
        }
    });

    let template =`
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
    </head>

    <body>
        <div>${html}</div>
    </body>
    `

    fs.writeFile("./dist/index.html", template, function() {
        console.log("Success!!")
    })
}

// const generateHtml = (html) => { 
    
// }

module.exports = createEmployees;