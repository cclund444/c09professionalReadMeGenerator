const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/readme.md', generateMarkdown(fileContent), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const promptQuestions = () => {
    return inquirer.prompt([
        //title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title to your project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
              console.log('Please enter a project title');
              return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project: (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.'
    },
    
    {
        type: 'list',
        name: 'licenses',
        message: 'Select a license:',
        choices: ['MIT', 'Apache2.0', 'GNU GPLv3', 'ISC']
    }, 

    // contributing
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list who contributed:'
    },
    // contribution 
    {
        type: 'input',
        name: 'contributionReqs',
        message: 'How did you contribute to this project'
    },

    // tests
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm run test'
    },

    //questions 
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter your GitHub username:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Provide your email address or another method of contact:'
    },
  ])
};

promptQuestions()
    .then(createTemplate => {
        writeFile(createTemplate);
    })
    .catch(err => {
        console.log(err);
    });
