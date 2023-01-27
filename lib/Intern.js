// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Wrote class and methods, ran tests until passed all of them

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
