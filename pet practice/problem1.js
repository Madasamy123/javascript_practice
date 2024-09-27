//1. Write a program to check if the character is a vowel, print "The character is a vowel." If the character is 
//a consonant, print "The character is a consonant." Make sure to handle both upper and lower case letters. 
//A vowel is a character which is any of letters a, e, i, o, u. Any letter which is a not a vowel is considered
// a consonant.

function letter(vowel){
for(let i=0;i<vowel.length;i++){
    if(vowel=="a"||vowel=="e"||vowel=="i"||vowel=="o"||vowel=="u"||vowel=="A"||vowel=="E"||vowel=="I"||vowel=="O"||vowel=="U"){
        console.log("The character is a vowel")
    }
    else {
        console.log("The character is a consonant")
    }
}


}letter("a")





//2. Given three numbers a, b, c print the maximum number amongst the three.
//a =10, b = 30, c = 5
//print 30



let a=10;
let b=30;
let c=5;

if(a>b){
    console.log(a)
}
else if(b>c){
    console.log(b)
}
else{
    console.log(c)
}


//3. Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term
//if n = 4, print the first 4 odd numbers 1 3 5 7

let n=4;
for(let i=1;i<=n*2;i++){
    if(i%2!==0){
        console.log(i)
    }
}





//5. Complete the program printAllMultiplesOf5Bet(a, b)
//eg, printAllMultiplesOf5Bet(10, 30) in reverse

function printAllMultiplesOf5Bet(a,b){
 for(b;b>=a;b--){
    if(b%5==0){
        console.log(b)
    }
}
   
}printAllMultiplesOf5Bet(10, 30)


//4. If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the 
//total discount over 10 days.
//Day 1: 5%
//Day 2: 7% (5% + 2%)
//Day 3: 9% (7% + 2%)


function discount(initialDiscount,dailyIncrease,days){
 for(let i=1;i<=days;i++){
    let first=initialDiscount
    initialDiscount+=dailyIncrease
    console.log(first)
 }

}
discount(5,2,10)