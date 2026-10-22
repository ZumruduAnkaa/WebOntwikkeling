import * as readline from "readline-sync";

let choices : string[] = ["Add a task", "Show tasks", "Check a task", "Exit"];
let todos : string[] = [];
let doneTodos : string[] = [];

let index: number = -1;

do {
    index = readline.keyInSelect(choices, "What would you like to do? ");

    switch (index) {
    case 0:
        let task = readline.question("Enter a task: ");
        todos.push(task);
        break;
    case 1:
        for (let index = 0; index < todos.length; index++) {
            console.log(`${index + 1}. [ ] ${todos[index]}`);
        }
        for (let index = 0; index < doneTodos.length; index++) {
            console.log(`${todos.length + index + 1}. [X] ${doneTodos[index]}`);
        }
        break;
    case 2:
        for (let index = 0; index < todos.length; index++) {
            console.log(`[${index + 1}] ${todos[index]}`);
        }
        const choiceTask = readline.questionInt("What did you do? ") - 1;

        if (choiceTask >=0 && choiceTask < todos.length) {
            const task = todos[choiceTask];

            if (task !== undefined) {
                doneTodos.push(task);
                todos.splice(choiceTask, 1);
            }
        }
        break;

    default:
        break;
}
} while (index !== 3 && index !== -1);

