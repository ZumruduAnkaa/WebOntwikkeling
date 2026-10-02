import * as readline from "readline-sync";

let minuten : number = Number(readline.question("Geef het aantal minuten in: "));

let uren : number = Math.floor(minuten / 60);
let restMinuten : number = minuten % 60;

console.log(`Dit is ${uren} uur en ${restMinuten} minuten`)