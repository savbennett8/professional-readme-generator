// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    else if (license === 'Apache-2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
    else if (license === 'BSD-3-Clause') {
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    }
    else if (license === 'BSD-2-Clause') {
        return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    }
    else if (license === 'GPL') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }
    // If there is no license, return an empty string
    else if (license === 'None') {
        return ' ';
    }
};

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[License Link](https://opensource.org/licenses/MIT)';
    }
    else if (license === 'Apache-2.0') {
        return '[License Link](https://opensource.org/licenses/Apache-2.0)';
    }
    else if (license === 'BSD-3-Clause') {
        return '[License Link](https://opensource.org/licenses/BSD-3-Clause)';
    }
    else if (license === 'BSD-2-Clause') {
        return '[License Link](https://opensource.org/licenses/BSD-2-Clause)';
    }
    else if (license === 'GPL') {
        return '[License Link](https://opensource.org/licenses/gpl-3.0)';
    }
    // If there is no license, return an empty string
    else if (license === 'None') {
        return ' ';
    }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
    // If there is no license, return an empty string
    if (license === 'None') {
        return ' ';
    }
    return `
## License
This project is licensed under the terms of the ${license} license. Click here to view the ${renderLicenseLink(license)}.
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
    return `
# ${projectData.title}
${renderLicenseBadge(projectData.license)}
## **Description**
${projectData.description}
## **Table of Contents**
- [Installation](https://github.com/savbennett8/professional-readme-generator/blob/main/yourREADME.md#installation)
- [Usage](https://github.com/savbennett8/professional-readme-generator/blob/main/yourREADME.md#usage)
- [License](https://github.com/savbennett8/professional-readme-generator/blob/main/yourREADME.md#license)
- [Contributing](https://github.com/savbennett8/professional-readme-generator/blob/main/yourREADME.md#contributing)
- [Tests](https://github.com/savbennett8/professional-readme-generator/blob/main/yourREADME.md#tests)
- [Questions](https://github.com/savbennett8/professional-readme-generator/blob/main/yourREADME.md#questions)
## Installation
${projectData.installation}
## Usage
${projectData.usage}
${renderLicenseSection(projectData.license)}
## Contributing
${projectData.contributing}
## Tests
${projectData.tests}
### Questions
[GitHub Profile](https://github.com/${projectData.github})
<br> ${projectData.email}
<br> ${projectData.specialInstructions}
`;
}

module.exports = generateMarkdown;
