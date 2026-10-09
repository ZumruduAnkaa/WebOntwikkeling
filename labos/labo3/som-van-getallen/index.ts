import * as readline from "readline-sync";

let aantal : number = Number(readline.question("Hoeveel getallen wil je optellen? "));

let getallen : number[] = [];

for (let index = 0; index < aantal; index++) {
    getallen[index] = readline.questionInt(`Geef getal ${index + 1} in: `);
}

let som : number = 0;

for (let index = 0; index < getallen.length; index++) {
    som += getallen[index]!;
}

console.log(`De som van de getallen is ${som}`)