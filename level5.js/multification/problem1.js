let a = [ [1, 2, 3],
           [4, 5, 6]]
let b = [[7,  8],
           [9, 10],
           [11,12]]
           let cola = a.length;//2
           let rowa = a[0].length;//3
           let colb = b.length;//3
           let rowb = b[0].length;//2
           const result = [];
     for (let i = 0; i < cola; i++) {
    result[i] = [];
    for (let j = 0; j < rowa; j++) {
        result[i][j] = 0;
    }
}
  for(let i = 0; i<cola; i++){
      for(let j = 0; j<rowb; j++){
          for(let k = 0; k<colb; k++){
              result[i][j] += a[i][k]*b[k][j]
          }
      }
  }
  console.log(result)