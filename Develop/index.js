// TODO: Include packages needed for this application

//requires inquierer from npm
const inquirer = require('inquirer');
//imports data from the required relative location
const generatePage = require('./src/page-template.js');


// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a detailed description of your project. (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a step-by-step description of how to get the development environment running. (Required)',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('Please provide installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'An open source license protects contributors and users. Please provide the license you choose:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you want other developers to contribute, add instructions on how to do so:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide examples of how to run your tests:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Contact Info: What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Contact Info: What is your email address?'
        },
        {
            type: 'confirm',
            name: 'contactInstructionsConfirm',
            message: 'Contact Info: Do you have any special instructions on how you would like to be contacted?',
            default: false
        },
        {
            type: 'input',
            name: 'contactInstructions',
            message: 'Provide instructions on the best way to contact you:',
            when: ({ contactInstructionsConfirm }) => {
                if (contactInstructionsConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
