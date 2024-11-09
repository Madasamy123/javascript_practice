//Reverse a string without using library functions.

function str(word){
    let b=[]  

let a=word.split("")
for(let i=a.length-1;i>=0;i--){
 b.push(a[i])
}
console.log(b.join(""))
}str("madasamy")