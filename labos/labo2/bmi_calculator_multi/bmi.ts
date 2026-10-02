import * as readline from 'readline-sync';


let aantal : number = Number(readline.question("Geef het aantal personen in: "));

for (let index = 1; index <= aantal; index++) {

    let naam : string = readline.question(`Geef de naam van persoon ${index} in: `);
    let gewicht : number = Number(readline.question(`Geef je gewicht van ${naam} in (in kg): `));
    let lengte : number = Number(readline.question(`Geef je lengte van ${naam} in (in m): `));

    let bmi : number = gewicht / (lengte * lengte);

    console.log(`${naam} heeft een BMI van ${bmi.toFixed(2)}`);
}
