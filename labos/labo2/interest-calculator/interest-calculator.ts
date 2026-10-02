import * as readline from 'readline-sync';

let bedrag : number = Number(readline.question("Geef het bedrag in: "));
let interest : number = Number(readline.question("Geef het interest percentage in: "));

let naEenJaar : number = bedrag * (1 + interest/100) ** 1;
let naTweeJaar : number = bedrag * (1 + interest/100) ** 2;
let naVijfJaar : number = bedrag * (1 + interest/100) ** 5;

console.log(`Na 1 jaar heb je ${naEenJaar.toFixed(2)}`);
console.log(`Na 2 jaar heb je ${naTweeJaar.toFixed(2)}`);
console.log(`Na 5 jaar heb je ${naVijfJaar.toFixed(2)}`);

