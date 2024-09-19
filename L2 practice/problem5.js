//Given a string "Freshworks, Global Infocity, Perungudi, Chennai - 600096", print the address on 4 different lines.
//Expected Output:
//Freshworks
//Global Infocity
//Perungudi
//Chennai - 600096

let first="Freshworks, Global Infocity, Perungudi, Chennai - 600096"
let second=first.split(",")
for(let i=0;i<second.length;i++){
   

    console.log(second[i])
}
    
