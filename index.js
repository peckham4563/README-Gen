// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
