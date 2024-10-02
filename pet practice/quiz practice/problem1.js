//Given 2 numbers a and b (a < b). Print all the
//numbers between a and b.
//a = 5, b = 8

function number(a,b){
for(let i=a;i<=b;i++){
    console.log(i)
}
}number(5,8)

//Print the N terms in reverse. 

//n = 5, output 5 4 3 2 1

function num(n){
while(n>0){
    console.log(n)
    n--
}
}num(5)

//Given a number n, print the below series. If n = 5

function value(n){
for(let i=1;i<=n;i++){
    let a=i**2;
    console.log(a)
}
}value(5)

//Write a program that completes the printCharacters(charc, n) function which prints the number of characters n times.

//Example: printCharacters('*', 5), prints the output as *****
let sum=""
function printCharacters(charc,n){
    for(let i=1;i<=n;i++){
        sum+=charc
       
    } console.log(sum)

}printCharacters("*",5)

//Write a function areaOfRectangle(length, breadth) which will return the area

function areaOfRectangle(length,breadth){
    let a=length*breadth;
    console.log(a)

}areaOfRectangle(10,10)


//Write a function greetByNames(fname, sname) returns the Greeting message. 

//example greetByNames("Ram", "Raheem") returns Welcome Ram and Raheem

function greetByNames(fname,sname){
    console.log(`welcome ${fname} and ${sname}`)

}greetByNames("Ram","Raheem")


//Complete the program printAllMultiplesOf5Bet(a, b) 
//eg, printAllMultiplesOf5Bet(10, 30)
//print 10, 15, 20, 25, 30

function printAllMultiplesOf5Bet(a,b){
    for(let i=a;i<=b;i++){
        if(i%5==0){
            console.log(i)
        }
    }

}printAllMultiplesOf5Bet(10,30)

//Find the Sum of first n even numbers sumOfNEven(5) prints 30 (which is 2 + 4 + 6 + 8 + 10)
let sum1=0;
function sumOfNEven(n){
    for(let i=1;i<=n*2;i++){
        if(i%2==0){
            sum1=sum1+i
        } 
    }
    console.log(sum1)

}sumOfNEven(5)