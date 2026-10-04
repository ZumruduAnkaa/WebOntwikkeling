import * as readline from "readline-sync";

let tekst : string = readline.question("Geef de tekst in: ");

while(tekst !== ""){
    const rand : string = "+" + "-".repeat(tekst.length + 2) + "+";

    console.log(rand);
    console.log("| " + tekst + " |");
    console.log(rand);

    tekst = readline.question("Geef de tekst in: ")
}
console.log("Tot ziens!")