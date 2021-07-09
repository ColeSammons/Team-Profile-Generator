const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const inquirer = require('inquirer');

const managerQuestions = [
    {
        type: 'input',
        message: "Welcome to Team Profile Generator. Please start by entering the team manager's name.",
        name: 'managerName',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Enter your manager's name please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the team manager's id.",
        name: 'managerId',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Enter your manager's id please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the team manager's email address.",
        name: 'managerEmail',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Enter your manager's email please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the team manager's office number.",
        name: 'managerOffice',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Enter your manager's office number please!");
                return false;
            }
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "Enter the engineer's name.",
        name: 'engineerName',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Enter your engineer's name please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the engineer's id.",
        name: 'engineerId',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Enter your engineer's id please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the engineer's email address.",
        name: 'engineerEmail',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Enter your engineer's email please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the engineer's Github username.",
        name: 'engineerGithub',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Enter your engineer's Github username please!");
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "Enter the intern's name.",
        name: 'internName',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Enter your intern's name please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the intern's id.",
        name: 'internId',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Enter your intern's id please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the intern's email address.",
        name: 'internEmail',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Enter your intern's email please!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the intern's school.",
        name: 'internSchool',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Enter your intern's school please!");
                return false;
            }
        }
    }
];

const confirmQuestion = [
    {
        type: 'list',
        name: 'choose',
        message: 'Would you like to add an Engineer, Intern, or end the session?',
        choices: ['Engineer', 'Intern', 'End']
    }
]

class teamBuilder {
    constructor() {
        this.manager = [];
        this.engineers = [];
        this.interns = [];
    }

    async promptConfirm() {
        let confirm = await inquirer.prompt(confirmQuestion);
        console.log(confirm.choose);
        if (confirm.choose === 'Intern') {
            this.promptIntern();
        }
        if (confirm.choose === 'Engineer') {
            this.promptEngineer();
        }
        if (confirm.choose === 'End') {
            console.log('Program Ending');
        }
    }

    async promptManager() {
        let mAnswers = await inquirer.prompt(managerQuestions);
        this.manager.push(new Manager(mAnswers.managerName, mAnswers.managerId, mAnswers.managerEmail, mAnswers.managerOffice));
        this.promptConfirm();
    }

    async promptEngineer() {
        let eAnswers = await inquirer.prompt(engineerQuestions);
        this.engineers.push(new Engineer(eAnswers.engineerName, eAnswers.engineerId, eAnswers.engineerEmail, eAnswers.engineerGithub));
        this.promptConfirm();
    }

    async promptIntern() {
        let iAnswers = await inquirer.prompt(internQuestions);
        this.interns.push(new Intern(iAnswers.internName, iAnswers.internId, iAnswers.internEmail, iAnswers.internSchool));
        this.promptConfirm();
    }
}

const test = new teamBuilder();
test.promptManager()


module.exports = teamBuilder;