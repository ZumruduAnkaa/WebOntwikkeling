import * as readline from "readline-sync";

interface Drink{
    idDrink: string,
    strDrink: string
}

interface CocktailResponse{
    drinks?: Drink[];
}


async function main(){
    let ingredient: string = "";
    do {
        ingredient = readline.question("Enter a ingredient: ");
        if (ingredient !== "") {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`)
                if (!response.ok) throw new Error(response.status.toString());
                const data : CocktailResponse = await response.json();

                console.log(`Cocktails with ${ingredient}:`);
                if (data.drinks) {
                    for (let drink of data.drinks) {
                        console.log(`- ${drink.strDrink}`);
                    }
                }else{
                    console.log("No cocktails found.")
                }

            } catch (error) {
                console.log(error);
            }
        }
    } while (ingredient !== "");
}

main();