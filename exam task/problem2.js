//. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week

function getDayName(num){
    if(num==1){
        console.log("monday");
    }
    else if(num==2){
        console.log("Tuesday");
    }
    else if(num==3){
        console.log("wednesday");
    }
    else if(num==4){
        console.log("Thursday");
    }
    else if(num==5){
        console.log("friday");
    }
    else if(num==6){
        console.log("saturday");
    }
    else if(num==7){
        console.log("sunday");
    }
    else{
        console.log("invalid day");
    }
}getDayName(5)