const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./utils/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let finished = false;

// Prompt Manager
async function promptManager(){
    const prompts = [...questions.employee];
    prompts.push(...questions.manager);
    console.log("Enter the Manager's information")

    const answers = await inquirer.prompt(prompts);

    const { name, id, email, officeNumber } = answers;
    return new Manager(name, id, email, officeNumber);
}

// Prompt Engineer
async function promptEngineer(){
    const prompts = [...questions.employee];
    prompts.push(...questions.engineer);
    console.log("Enter the Engineer's information")
    const answers = await inquirer.prompt(prompts);

    const { name, id, email, gitHub, done } = answers
    finished = !done;
    return new Engineer(name, id, email, gitHub); 
} 

// Prompt Intern
async function promptIntern(){
    const prompts = [...questions.employee];
    prompts.push(...questions.intern);
    console.log("Enter the Intern's information")

    const answers = await inquirer.prompt(prompts);

    const { name, id, email, schoolName, done } = answers
    finished = !done;
    return new Intern(name, id, email, schoolName);
}


async function getEmployees(){
    const employees = [];
    employees.push(await promptManager());
 
    finished = false;
    while(finished === false){
        employees.push(await promptEngineer());
    }
   
    finished = false;
    while(finished === false){
        employees.push(await promptIntern());
    }

    return employees;
}

getEmployees().then(employees => {
    fs.mkdirSync(OUTPUT_DIR, { recursive:true })
fs.writeFile(outputPath, render(employees), () => console.log('HTML Generated'));
})
