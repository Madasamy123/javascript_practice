//9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

//If the number is divisible by 3, return "Divisible by 3".
//If the number is divisible by 5, return "Divisible by 5".
//If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
//If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".


function classifyNumber(n){
  
    if(n%3==0 && n%5==0){
        console.log(" divisible by both 3 or 5");
    }
    else if(n%3==0){
        console.log("Divisible by 3");
    }
    
    else if(n%5==0){
        console.log("Divisible by 5")
    }
    else{
    
        console.log("Not divisible by 3 or 5")
    }

}classifyNumber(15)

//10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the
// corresponding day of the week.

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "monday";
        case 2:
            return "Tuesday";
        case 3:
            return "wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "saturday";
        case 7:
            return "Sunday";
            default:
                return "Invalid day number";
        }
}
console.log(getDayName(3))