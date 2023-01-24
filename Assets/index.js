// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem did it solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, any third-party assets, and any toturials you may have followed here.',
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What license did you use?',
        choices: [
            "Academic Free License v3.0",
            "Apache license 2.0",
            "Artistic license 2.0",
            "Boost Software License 1.0",
            "BSD 2-clause Simplified license",
            "BSD 3-clause New or Revised license",
            "BSD 3-clause Clear license",
            "Creative Commons license family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License 1.1",
            "GNU Affero General Public License v3.0",
            "GNU General Public License family",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License",
        ]
    }
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
    fs.writeFile('README.md',JSON.stringify(answers), (error) => {
        return error
        ? console.error(error)
        : console.log('File written succesfully');
    });
});

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
