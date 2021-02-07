// Import packages
const inquirer = require("inquirer");
const fs = require("fs");

// Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { assertTSAnyKeyword } = require("@babel/types");

// Team members start off as an empty array
const team = [];

const addManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Welcome to the Team Profile Generator! Are you ready to begin?',
      },
      {
        name: 'name',
        type: 'input',
        message: 'Please enter the name of the manager:',
        validate: isValidString
      },
      {
        name: 'id',
        type: 'input',
        message: 'What is your employee ID?',
        validate: isValidString
      },
      {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address:',
        validate: isValidEmail
      },
      {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your office number?',
        validate: isValidString
      },
      {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
      },
];

// Add new engineer
const addEngineer = [
    {
      name: 'name',
      type: 'input',
      message: "Please enter the name of the engineer:",
      validate: isValidString
    },
    {
      name: 'id',
      type: 'input',
      message: "Please enter the ID of the engineer:",
      validate: isValidString
    },
    {
      name: 'email',
      type: 'input',
      message: "What is the engineer's email address?",
      validate: isValidEmail
    },
    {
      name: 'github',
      type: 'input',
      message: "Please enter the engineer's Github username:",
      validate: isValidString
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
      message: 'What would you like to do next?',
    },
  ];

  const addIntern = [
    {
      name: 'name',
      type: 'input',
      message: "What is the intern's name?",
      validate: isValidString
    },
    {
      name: 'id',
      type: 'input',
      message: "What is the intern's employee ID?",
      validate: isValidString
    },
    {
      name: 'email',
      type: 'input',
      message: "Please enter the intern's email address:",
      validate: isValidEmail
    },
    {
      name: 'school',
      type: 'input',
      message: "What college or university does the intern attend?",
      validate: isValidString
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
      message: 'What would you like to do next?',
    },
  ];
  
// Initialize application
ask(addManager);

// Cycle through questions if member needs to be added
function ask(questionArr) {
    inquirer
      .prompt(questionArr)
      .then((member) => {
        team.push(member);
  
        if (member.upNext === 'Add Engineer') {
          ask(addEngineer);
        } else if (member.upNext === 'Add Intern') {
          ask(addIntern);
        } else {
          createProfiles(team);
        }
      })
      .catch((err) => console.log(err));
  }
  
