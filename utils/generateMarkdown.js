// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(answers) {
  return `# ${answers.title}
 ${renderLicenseBadge(answers.license)}
  ## Table of Content

  - [Project Title](#ProjectTitle)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Github](#github)
  - [Email](#email)

  
  ## Description
  ${answers.description}

  ## Installation

  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Github
  ${answers.github}

  ## Email
  ${answers.Email}

 



`;
}

















function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "APACHE") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

    `
  }
  else {return("")}
}




module.exports = generateMarkdown;
