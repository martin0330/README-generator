// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'name', 
        type: 'input',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        name: 'gitHubName',
        type: 'input',
        message: 'What is your GitHub name?',
        validate: gitHubNameInput => {
            if (gitHubNameInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },
    {
        name: 'projectName',
        type: 'input',
        message: 'What is your project name?',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter your email!')
                return false;
            }
        }
    },
    {
        name: 'projectDescription',
        type: 'input',
        message: 'Please provide a description for your project',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput){
                return true;
            } else {
                console.log('Please provide a description');
                return false;
            }  
        }
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Enter installation instructions',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else{
                console.log('Please enter installation instructions')
                return false
            }
        }
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Enter usage description',
        validate: usageInput => {
            if (usageInput) {
                return true
            } else {
                console.log('Please enter usage description')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the steps for testing?',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter the steps for testing!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you do this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'website',
        message: 'What is the website link?',
        validate: websiteInput => {
            if(websiteInput) {
                return true;
            } else {
                console.log('Please enter the website link!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Please enter all names of contributors',
        validate: contributorInput => {
            if(contributorInput) {
                return true;
            } else {
                console.log('Please enter names!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'GPLv3', 'GPL', 'none']
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
