// const generateEmployees = employeesArr => {
//     return `
//         <section id="team">
//         ${employeesArr
//             .filter}
//         </section>
//     `
// }

module.exports = employeeData => {
    console.log(employeeData)

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Generator</title>
    </head>

    <body>
        <article>
            <h1>${employeeData.name}</h1>
            <h2>${employeeData.role}</h2>
        </article>
    `
}