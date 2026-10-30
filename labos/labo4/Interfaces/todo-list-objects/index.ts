import data from "./todos.json" with {type: "json"};
import * as readline from "readline-sync";

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}


let choices : string[] = ["Add a task", "Show tasks", "Check a task", "Exit"];
let todos : Todo[] = data as Todo[];
let index: number = -1;

do {
    index = readline.keyInSelect(choices, "What would you like to do? ");

    switch (index) {
    case 0:
        let task = readline.question("Enter a task: ");
        let newTodo: Todo = {
            id: todos.length + 1,
            title: task,
            completed: false
        }
        todos.push(newTodo);
        break;
    case 1:
        for (let index = 0; index < todos.length; index++) {
            if (todos[index]?.completed) {
                console.log(`${index + 1} [X] ${todos[index]?.title}`);
            }else{
                console.log(`${index + 1} [ ] ${todos[index]?.title}`);
            }
        }
        break;
    case 2:
        let openTodos: Todo[] = [];
        for (let index = 0; index < todos.length; index++) {
            const todo = todos[index];
            if (todo !== undefined && !todo.completed) {
                openTodos.push(todo);
            }
        }

        for (let index = 0; index < openTodos.length; index++) {
            console.log(`${index + 1} ${openTodos[index]?.title}`);
        }

        const choiceTask = readline.questionInt("What did you do? ") - 1;


        if (choiceTask >=0 && choiceTask < openTodos.length) {
            const task = openTodos[choiceTask];

            if (task !== undefined) {
                task.completed = true;
            }
        }
        break;

    default:
        break;
}
} while (index !== 3 && index !== -1);