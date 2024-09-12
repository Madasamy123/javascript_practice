//Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:
//If the number is divisible by 3, return "Divisible by 3".
//If the number is divisible by 5, return "Divisible by 5".
//If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
//If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".

function classifyNumber(number){
    if(number%3==0 & number%5==0){
        console.log("Divisible by both 3 and 5");
    }
    else if(number%3==0){
        console.log("Divisible by 3");
    }
    else if(number%5==0){
        console.log("divisible by 5");
    }
    else{
        console.log("Not divisible by 3 or 5");
    }
}classifyNumber(30)