//create array of 10 numbers write a program to filter out only the odd numbers and print them

let number=[23,54,76,99,47,24,55,72,17,6]
let num=number.filter(function(a){
    return a%2==0;
})
console.log(num)