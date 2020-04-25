
let mat = [
    [9, 1, 4, 7, 8, 2, 3, 6, 5],
    [3, 8, 5, 4, 1, 6, 7, 9, 2],
    [7, 2, 6, 5, 9, 3, 4, 1, 8],
    [8, 9, 2, 6, 3, 7, 5, 4, 1],
    [4, 6, 3, 2, 5, 1, 8, 7, 9],
    [5, 7, 1, 9, 4, 8, 2, 3, 6],
    [1, 4, 8, 3, 2, 9, 6, 5, 7],
    [2, 5, 7, 1, 6, 4, 9, 8, 3],
    [6, 3, 9, 8, 7, 5, 1, 2, 4]];

window.onload = function () {

    fullTheSudoku(mat);
};


function fullTheSudoku(mat) { // function that insert the numbers of sudoku game into each cell of the table
    table = document.getElementById('table');
    for (r = 0; r < table.rows.length; r++) {
        for (c = 0; c < table.rows[r].cells.length; c++) {
            document.getElementById(`r${r}c${c}`).value = mat[r][c];
        }
    }
    difficultyLevel(mat);
}

//function that delete random numbers from the cells according the level of the game that the user chose.

function difficultyLevel(mat) {
    let difflevel = location.search;
    // console.log(difflevel);
    let randomrunrow;
    let randomruncoll;
    let numberstoclear;
    // var mat = 0;
    if (difflevel == '?playEasy') { //if choose easy
        numberstoclear = 20;
    }
    if (difflevel == '?playMedium') { //if choose medium
        numberstoclear = 40;
    }
    if (difflevel == '?playHard') { // if choose hard
        numberstoclear = 60;
    }
    //  debugger
    while (numberstoclear > 0) {
        randomrunrow = Math.floor(Math.random() * 9); // inserting random number from 0-9 into a variable.
        randomruncoll = Math.floor(Math.random() * 9);
        let numToDelete = document.getElementById(`r${randomrunrow}c${randomruncoll}`).value
        if (numToDelete != "") {
            document.getElementById(`r${randomrunrow}c${randomruncoll}`).value = "";
            document.getElementById(`r${randomrunrow}c${randomruncoll}`).removeAttribute('readonly');
            numberstoclear--;
        }
    }
}

// debugger

function goBack() { // button that takes us to previous page
    location.assign("difficulty.html");

}
// debugger

function checkBoard() {// validation button
    let counter=0;
    let mat = [
        [9, 1, 4, 7, 8, 2, 3, 6, 5],
        [3, 8, 5, 4, 1, 6, 7, 9, 2],
        [7, 2, 6, 5, 9, 3, 4, 1, 8],
        [8, 9, 2, 6, 3, 7, 5, 4, 1],
        [4, 6, 3, 2, 5, 1, 8, 7, 9],
        [5, 7, 1, 9, 4, 8, 2, 3, 6],
        [1, 4, 8, 3, 2, 9, 6, 5, 7],
        [2, 5, 7, 1, 6, 4, 9, 8, 3],
        [6, 3, 9, 8, 7, 5, 1, 2, 4]];

    for (r = 0; r < table.rows.length; r++) {
        for (c = 0; c < table.rows[r].cells.length; c++) { // loops that runs on each cell.
            // console.log(mat[r][c]);
            // making a match between each input id content to the matrix.
            if (document.getElementById(`r${r}c${c}`).value == mat[r][c]) { 
                document.getElementById(`r${r}c${c}`).style.background = 'green';//i the numbers are match the cell will be green
                counter++;
            } else {
                document.getElementById(`r${r}c${c}`).style.background = 'red';//i the numbers are match the cell will be red
            }

        }
    }
    // console.log(counter);

    if (counter == 81) {
        //   window.alert('champ!');
    } else {
        // window.alert('give anather try');
    }
}

function playAgain() {
    location.reload();// reload the page again and by that shufle the numbers.

}