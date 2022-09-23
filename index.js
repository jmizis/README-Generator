// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// const questions = 

inquirer.prompt ([
    {
        type: 'input',
      name: 'title',
      message: 'Enter your Project title',
        
    },
   
    {
        type: 'input',
      name: 'description',
      message: 'Enter your Project description',
    },
    
    {
        type: 'input',
      name: 'installation',
      message: 'Enter your installation instructions',
    },
    
    {
        type: 'input',
      name: 'usage',
      message: 'Enter your project usage',
    },
    
    {
        type: 'list',
        name: 'license',
        message: 'What license is your application under?',
        choices:["MIT","APACHE","Mozilla","NONE"]


    },
   
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
   
    {
      type: 'input',
      name: 'Email',
      message: 'Enter your email address.',
    },
  ])
  .then((answers) => {
    const READMEmd = generateMarkdown(answers);

    fs.writeFile('generateMarkdown1.md', READMEmd, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


