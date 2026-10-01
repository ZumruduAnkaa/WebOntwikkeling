import * as readline from 'readline-sync';

let gewicht : number = Number(readline.question("Geef je gewicht in (in kg): "));
let lengte : number = Number(readline.question("Geef je lengte in (in m): "));

let bmi : number = gewicht / (lengte * lengte);

console.log(`Je BMI is ${bmi.toFixed(2)}`);