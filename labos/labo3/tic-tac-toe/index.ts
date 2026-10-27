import * as readline from 'readline-sync';

let board: string[][] = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];
let currentPlayer: string = "X";
let gameOver: boolean = false;
let moves: number = 0;

while (!gameOver) {
    let input: string = readline.question(`Player ${currentPlayer}, enter your move (row,column): `);
    let parts: string[] = input.split(",");
    let row: number = Number(parts[0]);
    let column: number = Number(parts[1]);

    if (parts.length !== 2 || isNaN(row) || isNaN(column) || board[row] === undefined || board[row]![column] === undefined) {
        console.log("That position does not exist, try again.");
    } else if (board[row]![column]! !== " ") {
        console.log("That position is already taken, try again.");
    } else {
        board[row]![column] = currentPlayer;
        moves++;

        // show the board
        for (let i: number = 0; i < board.length; i++) {
            let line: string = "";
            for (let j: number = 0; j < board[i]!.length; j++) {
                line += board[i]![j]!;
                if (j < board[i]!.length - 1) {
                    line += "|";
                }
            }
            console.log(line);
            if (i < board.length - 1) {
                console.log("-----");
            }
        }

        // check for a winner
        let won: boolean = false;
        for (let i: number = 0; i < 3; i++) {
            // row i
            if (board[i]![0] !== " " && board[i]![0] === board[i]![1] && board[i]![1] === board[i]![2]) {
                won = true;
            }
            // column i
            if (board[0]![i] !== " " && board[0]![i] === board[1]![i] && board[1]![i] === board[2]![i]) {
                won = true;
            }
        }
        // diagonals
        if (board[0]![0] !== " " && board[0]![0] === board[1]![1] && board[1]![1] === board[2]![2]) {
            won = true;
        }
        if (board[0]![2] !== " " && board[0]![2] === board[1]![1] && board[1]![1] === board[2]![0]) {
            won = true;
        }

        if (won) {
            console.log(`Player ${currentPlayer} wins!`);
            gameOver = true;
        } else if (moves === 9) {
            console.log("It's a draw!");
            gameOver = true;
        } else {
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    }
}