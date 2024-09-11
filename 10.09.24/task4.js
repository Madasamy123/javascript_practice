let n = 5;

function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i < n) {
      sum += i;
      i++;
    }
    return sum;
  }

  let result=sumNumbers(n)
  console.log(result);