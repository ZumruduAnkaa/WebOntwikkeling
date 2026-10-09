import * as readline from "readline-sync";

let alphabet: string[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let input : string = readline.question(`Enter a string: `);
let result : string = "";

for (let index = 0; index < input.length; index++) {
    let letter = input[index];

    let indexAlpha: number = -1;
    for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[j] === letter) {
            indexAlpha = j;
        }
    }

    if (indexAlpha === -1) {
        // Geen letter = overnemen
        result += letter;
    }else{
        // 13 optellen en modulo 26 nemen 
        let newIndex: number = (indexAlpha + 13) % 26;
        
        result += alphabet[newIndex];
    }
}

console.log(result);