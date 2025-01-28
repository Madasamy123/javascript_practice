// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal 3+5+9=17 . The right to left diagonal 1+5+9=15 . Their absolute difference is 15-17=2.

function squareMatrix(arr){

let first=0;
let second=0;

for(let i=0;i<arr.length;i++){

    first+=arr[i][i]
    second+=arr[i][arr.length-i-1];
}

console.log(Math.abs(first-second))


}squareMatrix(
    [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ] )