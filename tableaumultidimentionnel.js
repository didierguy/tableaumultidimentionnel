/* Chessboard dojo

In order to represent a chessboard in a program, write a chessboard function that will 
return an array of arrays containing the squares coordinates.
Pour représenter un échiquier dans un programme, écrivez une fonction d'échiquier qui
renvoie un tableau de tableaux contenant les coordonnées des carrés.*/

/*
const array=
    ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8']; c
    ['b - 1', 'b - 2', 'b - 3', 'b - 4', 'b - 5', 'b - 6', 'b - 7', 'b - 8'];
    ['h - 1', 'h - 2', 'h - 3', 'h - 4', 'h - 5', 'h - 6', 'h - 7', 'h - 8'];
*/

function chessboard() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h'];
    let board = [];
    for (let i in letters) {
        let row = [];
        for (let j = 1; j < 9; j++) {
            row.push(`${letters[i]} - ${j}`);
        }
        board.push(row);
    }
    return board;
}
console.log(chessboard());
