function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
//   console.log(sumNumbers(5))
let result=sumNumbers(5);
console.log(result);