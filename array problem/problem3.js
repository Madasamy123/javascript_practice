//Let "A" be a year, write a program to check whether this year is a leap year or not.

//Print "Y" if it's a leap year and "N" if it's a common year.
// function year(a){

// if(a%4==0 || a % 400==0){
//     console.log("y")
// }
// else if(a%100!==0){
//     console.log("N")
// }

// }year(2024)

function year(a){
    if(a%4==0 || a%400==0 ){
        console.log("y");}
    else if (a%100!==0){
console.log("n")
        }
    
}year(2001)