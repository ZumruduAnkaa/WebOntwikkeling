import data from "./movie.json" with {type: "json"};

interface Movie{
    title: string;
    year: number;
    actors: string[];
    metascore: number;
    seen: boolean;
}

const movie: Movie = data as Movie;

const myFavoriteMovie: Movie = {
    title : "Uykucu",
    year: 2025,
    actors: ["Cagatay Ulusoy", "Elcin Sangu"],
    metascore: 8,
    seen: true
}

const myWorstMovie: Movie = {
    title: "Scream 7",
    year: 2026,
    actors: ["Neve Campbell", "Tatum Evans", "Jessica Bowden"],
    metascore: 5,
    seen: true
}

function printMovie(m: Movie): void {
    console.log(`${m.title} (${m.year})`);
    console.log(`Actors: ${m.actors.join(", ")}`);
    console.log(`Metascore: ${m.metascore}`);
    if (m.seen) {
        console.log("Seen: YES");
    }else{
        console.log("Seen: NO");
    }
}

console.log("Movie from file:");
printMovie(movie);

console.log("\n My favorite movie:");
printMovie(myFavoriteMovie);

console.log("\n My worst movie:");
printMovie(myWorstMovie);