import * as readline from "readline-sync";

let punten : number[] = [];
let invoer : string;
let studentNummer : number = 1;

do {
    invoer  = readline.question(`Geef de punten van student ${studentNummer} in:`);

    if (invoer !== "") {
        let punt : number = Number(invoer);
        if (isNaN(punt)) {
            console.log("Geef een geldige getal in.");
        }else{
            punten[punten.length] = punt;
            studentNummer++;
        }
    }
} while (invoer !== "");

let som : number = 0;
let aantalOnvoldoende : number = 0;


for (let punt of punten) {
    som += punt;
    if (punt < 5) {
        aantalOnvoldoende++
    }   
}

if (punten.length > 0) {
    let gemmidelde : number = som / punten.length;
    console.log(`Het gemiddelde van de punten is ${gemmidelde}`);
    console.log(`Het aantal studenten met een onvoldoende is ${aantalOnvoldoende}`);
}