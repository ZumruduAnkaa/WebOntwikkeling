import * as readline from "readline-sync";

let pokemon: string[] = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];

let team : string[] = [];

for (let i = 0; i < pokemon.length; i++) {
    console.log(`${i}. ${pokemon[i]}`);
}


let input : string = "";

do {
    input = readline.question(`Welke pokemon wil je in je team? [0-20]: `);
    let index = Number(input);

    if (input !== "STOP") {
        let alInTeam: boolean = false;

        for (let i = 0; i < team.length; i++) {
            if (team[i] === pokemon[index]) {
                alInTeam = true;
            }
        }

        if (alInTeam) {
            console.log("Deze pokemon zit al in je team.");
        }else{
            team.push(pokemon[index]!);
        }
    }
} while (input !== "STOP");



console.log("Jouw team van pokemon is: ");
for (let index = 0; index < team.length; index++) {
    console.log(`${index}. ${team[index]}`);
}