var reverse = function(x) {
    let reversed=0;
    let min = Math.pow(-2, 31);
    let max = Math.pow(2, 31) - 1;

    if (x< min || x > max) {
        return 0;
    }

    if (x > 0) {
        let first = x.toString().split("").reverse().join("");
        reversed = Number(first);
    } else {
        let second = Math.abs(x).toString().split("").reverse().join("");
        reversed = -Number(second);
    }

   
  


    return reversed;
};
console.log(reverse(123456))