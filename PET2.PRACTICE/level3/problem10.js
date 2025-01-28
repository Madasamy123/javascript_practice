//Given a number 'N' print the sum of each digit to the power of number of digits in given input.
// Example :
// Input => 1234
// => ( 1 ^ 4 ) + ( 2 ^ 4 ) + ( 3 ^ 4 ) + ( 4 ^ 4 )
// => 1 + 16 + 81 + 256
// Output => 354
// N <=100000000000
// Sample Testcase :
// INPUT
// 1234
// OUTPUT
// 354
// Hint: Use Math.pow. Eg Math.pow(2,4) will return 16

// For example:

// Test	Result
// powerByDigits(1234)
// 354


function powerOfDigits(N){

    let digit=N.toString().split("")
     let digitLength=digit.length
    let sum=0;
     for(let i=0;i<digitLength;i++){
        sum+=Math.pow(Number(digit[i]),digitLength)
     }
     console.log(sum)

}powerOfDigits(1234)




//  3. Print the first power of 5 after 10000


function firstPowerOfFiveAfter10000() {
    let result = 1; // Start with 5^0 = 1

    for (let power = 0; result <= 10000; power++) {
        result = Math.pow(5, power); // Calculate 5^power
    }

    console.log(result); // Output the first power of 5 greater than 10000
}

// Example usage:
firstPowerOfFiveAfter10000(); // Output: 15625