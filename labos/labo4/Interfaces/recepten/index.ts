interface Recept{
    naam: string;
    beschrijving: string;
    personen: number;
    ingredienten: Ingredient[];
}

interface Ingredient{
    naam: string;
    hoeveelheid: string;
    prijs: number;
}

const lasagne: Recept = {
    naam: "Lasagne",
    beschrijving: "Lekkere lasagne",
    personen: 4,
    ingredienten: [
        { naam: "lasagnevellen", hoeveelheid: "1 pak", prijs: 2 },
        { naam: "gehakt", hoeveelheid: "500g", prijs: 5 },
        { naam: "ui", hoeveelheid: "1 stuk", prijs: 0.5 },
        { naam: "look", hoeveelheid: "1 teentje", prijs: 0.25 },
    ],
};

console.log(`Recept: ${lasagne.naam}`);
console.log(`Beschrijving: ${lasagne.beschrijving}`);
console.log(`Personen: ${lasagne.personen}`);
console.log(`Ingredienten:`);

lasagne.ingredienten.forEach(ing =>{
    console.log(`- ${ing.hoeveelheid} ${ing.naam}`);
});

const totaal: number = lasagne.ingredienten.reduce(
    (acc: number, cur: Ingredient): number => acc + cur.prijs, 0
);

console.log(`Totale kostprijs: ${totaal} euro`);
