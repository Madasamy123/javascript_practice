//User Login System:
//Create a login system where a user provides a username and password. 
//If both are correct, print "Access Granted"; otherwise, print "Access Denied."

function user(username,password){
    if(username=="maddy" && password==123){
        console.log("Access Granted")

    }
    else {
        console.log("Access Denied")
    }

}
user("maddy",123)

//Temperature Conversion:
//Write a program that takes a temperature in Celsius and converts it to Fahrenheit or vice versa based on 
//the user’s choice.

function change(t,value){
    if(t=="c"){
        f=value*(9/5)+32;
        console.log(f)
    }
    else if(t=="f"){
        g=(value-32)*(5/9)
        console.log(Math.floor(g))
    }
}change("f",40)


//Discount Calculator:
//Create a program that asks for the total price of items and applies a discount based on conditions:
//10% discount if the total is more than $100.
//20% discount if the total is more than $200.
//No discount if the total is less than $100.

function item(amount){
    if(amount>200){
        d=amount*(20/100)
        e=amount-d;
        console.log("20%  "+d)
    }
    else if(amount>100){
        a=amount*(10/100)
        b=amount-a
            console.log("10%  "+b)
        
    }
    
    else{
        console.log("no discount")   
     }

}item(150)


//Top 3 Highest Scores:
//Given an array of scores from a game, write a program that finds and displays the top 3 highest scores.


