let a = [
    [1, 2, 3],
    [3, 4, 2],
    [5, 6, 1]
];

let b = [
    [1, 2, 3, 4],
    [3, 4, 5, 4],
    [5, 6, 5, 4]
];

let rowA = a.length;    // 3
let colA = a[0].length; // 3
let rowB = b.length;    // 3
let colB = b[0].length; // 4

if (colA == rowB) {
    // 2D Array result -> Filled with 0s
    let result = Array.from({ length: rowA }, () => Array(colB).fill(0));

    // Matrix Multiplication
    for (let i = 0; i < rowA; i++) {
        for (let j = 0; j < colB; j++) {
            for (let k = 0; k < colA; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    console.log(result);
} else {
    console.log("Matrix multiplication not possible.");
}
