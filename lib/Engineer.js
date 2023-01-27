// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Wrote class and methods, ran tests until passed all of them

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
