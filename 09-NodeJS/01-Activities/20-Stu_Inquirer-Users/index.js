const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "language",
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "method of communication",
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("Try Again")
  );
