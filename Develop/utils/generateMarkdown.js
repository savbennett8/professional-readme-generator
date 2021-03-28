// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
    else if (license === 'None') {
        return ' ';
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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
    else if (license === 'None') {
        return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
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
## **Desctription**
${projectData.description}
## **Table of Contents**
- [Installation](link)
- [Usage](link)
- [License](link)
- [Contributing](link)
- [Tests](link)
- [Contact Info](link)
- [Questions](link)
## Installation
${projectData.installation}
## Usage
${projectData.usage}
<br> ${renderLicenseSection(projectData.license)}
## Contributing
${projectData.contributing}
## Tests
${projectData.tests}
## Contact Info
[GitHub Profile](https://github.com/${projectData.github})
<br> ${projectData.email}
`;
}

module.exports = generateMarkdown;
