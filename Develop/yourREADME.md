
# Project Name
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }
    else if (license === 'MIT') {
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
}
## **Desctription**
i make readme for you, you're welcome
## **Installation**
i ask qusetions, you answer, the end.
## Usage
oisjdfo jslkjf l;sadjf o iasdlfj; lsadjof;jsdf
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }
    return `
## License
This project is licensed under the terms of the ${projectData.license} license. Click here to view the ${licenseLink}.
`
}
## Contributing
sdoifj asdfl kjoweirj o;iejro;wej.da nd, mxcnvhas
## Tests
o;sid of jlaskjfd oiwej r jwlorosjdlfa
## Contact Info
savbennett8
lalala@gmail.co,
