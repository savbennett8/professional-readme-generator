// TODO: Include packages needed for this application

//requires inquierer from npm
const inquirer = require('inquirer');
//requires file system from node
const fs = require('fs');
//imports data from the required relative location
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create a function to initialize app
const promptUser = () => {
    // TODO: Create an array of questions for user input
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
            type: 'list',
            name: 'license',
            message: 'An open source license protects contributors and users. Please choose from one of the following licenses:',
            choices: ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL', 'None']
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
            type: 'input',
            name: 'specialInstructions',
            message: 'Any instructions on how to reach you with additional questions? Enter those here or click "Enter" to skip.'
        },
    ]);
};

// Function call to initialize app
promptUser().then(projectData => {
    const yourReadMe = generateMarkdown(projectData);

    // TODO: Create a function to write README file
    fs.writeFile('yourREADME.md', yourReadMe, err => {
        if (err) throw new Error(err);

        console.log('Page created! Check out yourREADME.md to see it!');
    });
});