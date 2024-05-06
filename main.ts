#!/usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(1000 + Math.random() * 9000);

let mybalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name"
    },
    {
        name: "course",
        type: "list",
        message: "choose the course you want to enroll",
        choices: ["IT course", "networking", "Autocad", "graphicdesign", "videoediting"]
    }
]);

const tutionfee: { [key: string]: number } = {
    "IT course": 30000,
    "networking": 20000,
    "Autocad": 10000,
    "graphicdesign": 5000,
    "videoediting": 1000
};

console.log(`Tuition fee: ${tutionfee[answer.course]}`);
console.log(`Balance: ${mybalance}`);

let reply = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "what you will like to proceed with",
        choices: ["view status", "exit"]
    }
]);

if (reply.select === "view status") {
    console.log("*******status******");
    console.log(`student name= ${answer.student}`);
    console.log(`student ID= ${randomnumber}`);
    console.log(`Course= ${answer.course}`);
    console.log(`Balance: ${mybalance}`);
} else {
    console.log("exit student management system");
}
