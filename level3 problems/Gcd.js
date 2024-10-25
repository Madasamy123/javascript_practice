// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
        
//     }
//     return a;
    
// }
// let result=gcd(60,45)
// console.log(result)

function gcd(a,b){
    while(b!==0){
    let temp=b;
    b=a%b
    a=temp;
    }
console.log(a)
}
gcd(60,45)