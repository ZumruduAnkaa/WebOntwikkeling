import * as readline from "readline-sync";

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


async function main(){

    let choices : string[] = ["Add a task", "Show tasks", "Check a task", "Exit"];
    let todos : Todo[] = [];
    let index: number = -1;

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
        if (!response.ok) {
            throw new Error(response.status.toString())
        }
        todos = await response.json();
    }catch(error:any){
        console.log("Er ging iets mis bij het ophalen van de todo's.");
        console.log(`Foutmelding: ${error.message}`);
        console.log("Controleer je internetverbinding en probeer opnieuw.");
        return;
    }

    do {
        index = readline.keyInSelect(choices, "What would you like to do? ");

        switch (index) {
        case 0:
            let task = readline.question("Enter a task: ");
            let newTodo: Todo = {
                userId: 1,
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


}


main();