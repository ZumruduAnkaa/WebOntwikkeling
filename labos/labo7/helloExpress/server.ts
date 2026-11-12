import express from "express";

const app = express();

app.set("port", 3000);

app.use(express.static("public"));

interface Me{
    naam: string;
    leeftijd: number;
    profielFoto: string;
}

const thisisme: Me = {
    naam: "Trossard",
    leeftijd: 30,
    profielFoto: "img/trossard.jpg"
};

interface Pokemon {
    name: string;
    id: number;
    weight: number;
    sprites: {
        front_default: string;
        back_default: string;
    };
}

let pikachu: Pokemon | undefined = undefined; 

app.get("/", (req, res) => {
  res.type("text/html");
  res.send("Hello <strong>World</strong>");
});

app.get("/whoami", (req, res) => {
  res.type("text/html");
  res.send(`
    <p>Mijn naam is ${thisisme.naam} en ik ben ${thisisme.leeftijd} jaar oud.</p>
    <img src="${thisisme.profielFoto}" width="200">
    `);
});

app.get("/whoamijson", (req, res) => {
  res.type("application/json");
  res.json(thisisme);
});

app.get("/pikachujson", (req, res) => {
    res.type("application/json");
    res.json(pikachu);
});

app.get("/pikachuhtml", (req, res) => {
    if (pikachu === undefined) {
        res.type("text/html");
        res.send("<p>Pikachu nog niet geladen...</p>");
        return;
    }
    res.type("text/html");
    res.send(`
        <p>ID ${pikachu?.id}</p>
        <p>Naam: ${pikachu?.name}</p>
        <p>Gewicht: ${pikachu?.weight}</p>
        <img src="${pikachu.sprites.front_default}" width="200">
        <img src="${pikachu.sprites.back_default}" width="200">
        `);
});

app.get("/randomcolor", (req, res) =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;

    res.type("text/html");
    res.send(`
        <body style="background-color: ${color};">
            <h1>${color}</h1>
        </body>
        `);
});

app.use((req,res) => {
    res.type("text/html");
    res.status(404);
    res.send(`
        <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
            <h1 style="font-size: 80px; margin: 0;">404</h1>
            <p>Oeps, deze pagina bestaat niet.</p>
            <a href="/">Terug naar home</a>
        </body>
        `);
});


app.listen(app.get("port"), async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    pikachu = await response.json();
    console.log("[server] http://localhost:" + app.get("port"));
});