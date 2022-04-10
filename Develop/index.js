// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'name', 
        type: 'input',
        message: 'What is your name?'
    },
    {
        name: 'gitHubName',
        type: 'input',
        message: 'What is your GitHub name?'
    },
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answerData => {
        writeToFile("NewREADME.md", generateMarkdown(answerData));
    })
}

// Function call to initialize app
init();
