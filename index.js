const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

//Adding prompts for manager

inquirer.prompt([
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

  {
    type: "list",
    name: "newTeamMember",
    message: "Do you want to add another team member?",
    choices: ["Add an engineer", "Add an intern", "Finish building team"],
  },
  {
    // This function asks another set of questions if the engineer is chosen
    when: function (answers) {
      return answers.newTeamMember === "Add an engineer";
    },
    type: "input",
    name: "engineerName",
    message: "Name?",
  },
  {
    when: function (answers) {
      return answers.newTeamMember === "Add an engineer";
    },
    type: "input",
    name: "engineerId",
    message: "ID?",
  },

  {
    when: function (answers) {
      return answers.newTeamMember === "Add an engineer";
    },
    type: "input",
    name: "engineerEmail",
    message: "Email address?",
  },
  {
    when: function (answers) {
      return answers.newTeamMember === "Add an engineer";
    },
    type: "input",
    name: "engineerGithub",
    message: "GitHub username?",
  },
  {
    when: function (answers) {
      return answers.newTeamMember === "Add an intern";
    },
    type: "input",
    name: "internName",
    message: "Name?",
  },
  {
    when: function (answers) {
      return answers.newTeamMember === "Add an intern";
    },
    type: "input",
    name: "internId",
    message: "ID?",
  },

  {
    when: function (answers) {
      return answers.newTeamMember === "Add an intern";
    },
    type: "input",
    name: "internEmail",
    message: "Email address?",
  },
  {
    when: function (answers) {
      return answers.newTeamMember === "Add an intern";
    },
    type: "input",
    name: "school",
    message: "School?",
  },
]);
