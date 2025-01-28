// Write a program that checks a number variable. If the number is positive, print "The number is positive.
// " If the number is negative, print "The number is negative." If the number is zero, print "The number is zero."

function checkNum(number){

    if(number>0){
        console.log("positive")
    }
    else if(number<0){
        console.log("negative")
    }
    else if(number==0){
        console.log("zero")
    }

}checkNum(1)