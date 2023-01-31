const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Adding prompts for manager

let teamMembers = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the team manager's name",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the team manager's Employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the team manager's email address",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter the team manager's office number",
    },
  ])

  // collecting Manager info and pushing to teamMembers array

  .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    teamMembers.push(manager);
    console.log(teamMembers);
    addTeamMembers();
  });

// Adding prompts for team members

function addTeamMembers() {
  inquirer
    .prompt({
      type: "list",
      name: "newTeamMember",
      message: "Do you want to add another team member?",
      choices: ["Add an engineer", "Add an intern", "Finish building team"],
    })

    .then((answers) => {
      if (answers.newTeamMember === "Add an engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "engineerName",
              message: "Name?",
            },
            {
              type: "input",
              name: "engineerId",
              message: "ID?",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "Email address?",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "GitHub username?",
            },
          ])
          .then((engineerAnswers) => {
            const engineer = new Engineer(
              engineerAnswers.engineerName,
              engineerAnswers.engineerId,
              engineerAnswers.engineerEmail,
              engineerAnswers.engineerGithub
            );
            teamMembers.push(engineer);
            console.log(teamMembers);
            addTeamMembers();
          });
      } else if (answers.newTeamMember === "Add an intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "internName",
              message: "Name?",
            },
            {
              type: "input",
              name: "internId",
              message: "ID?",
            },
            {
              type: "input",
              name: "internEmail",
              message: "Email?",
            },
            {
              type: "input",
              name: "internSchool",
              message: "School?",
            },
          ])
          .then((internAnswers) => {
            const intern = new Intern(
              internAnswers.internName,
              internAnswers.internId,
              internAnswers.internEmail,
              internAnswers.internSchool
            );
            teamMembers.push(intern);
            console.log(teamMembers);
            addTeamMembers();
          });
      }
    });
}

// // Adding prompts for interns

// inquirer.prompt([
//   {
//     type: "input",
//     name: "internName",
//     message: "What is the intern's name?",
//   },
//   {
//     type: "input",
//     name: "internId",
//     message: "What is the intern's ID?",
//   },
//   {
//     type: "input",
//     name: "internEmail",
//     message: "What is the intern's email?",
//   },
//   {
//     type: "input",
//     name: "internSchool",
//     message: "What is the intern's school?",
//   },
// ]);
