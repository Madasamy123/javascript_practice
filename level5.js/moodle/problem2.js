function addition(a,b){
    if(a.length != b.length){
        console.log("Invalid")
    }
    if(a == null || b == null){
         console.log("Invalid")
    }
    for(let i = 0; i<a.length;i++){
        if(a[i].length != b[i].length){
            console.log("Invalid")
            return
        }
    }
    let result = [];
    for(let i = 0; i<a.length; i++){
        let row = [];
        for(let j = 0; j<a[i].length; j++){
            row.push(a[i][j]+b[i][j]);
        }
        result.push(row);
    }
 printMatrix(result);
}
function printMatrix(mat) {
    for(let i = 0; i < mat.length; i++) {
        console.log(mat[i].join(" "));
    }
}
addition([[1,2],[3,4]],[[5,6],[7,8]])
addition([[1, 2]],[1])