import * as readline from "readline-sync";

let again : boolean = true;

while (again) {
    let email : string = readline.question("Geef het email adres in: ");

    const indexOfAt : number = email.indexOf("@");
    const indexOfDot : number = email.indexOf(".");

    let firtName : string = email.substring(0, indexOfDot);
    let lastName : string = email.substring(indexOfDot + 1, indexOfAt);

    firtName = firtName.substring(0, 1).toUpperCase() + ".";
    lastName = lastName.charAt(0).toUpperCase() + lastName.substring(1);
    
    console.log(`De naam is ${firtName} ${lastName}`);

    again = readline.keyInYNStrict("Wil je nog een email adres ingeven? (y/n) ");

}

console.log("Nog een goede dag!")