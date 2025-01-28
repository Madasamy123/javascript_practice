// Complete the program printAllMultiplesOf5Bet(a, b) 
// eg, printAllMultiplesOf5Bet(10, 30)
// print 10, 15, 20, 25, 30
 
// Hint use , str.slice() and str.length if required
// For example:

// Test	Result
// printAllMultiplesOf5Bet(10, 30); 
// 10, 15, 20, 25, 30
// printAllMultiplesOf5Bet(11, 22);
// 15, 20

function printAllMultiplesOf5Bet(a, b) {
    let result=" "
    for(let i=a;i<=b;i++){

        if(i%5==0){
            result+=i+" "

        }
       
    }
    console.log(result)

} printAllMultiplesOf5Bet(10, 30)