 let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+="* "
//     }
//     console.log(str)
// }

// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=n;j>=i;j--){
//         str+="* "
//     }
//     console.log(str)
// }

// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=n;j++){
//         str+="*"
//     }
//     console.log(str)
// }

// for(let i=1;i<=n;i++){
// let str="";
// for(let j=n;j>i;j--){
//     str+="  "
// }
// for(let k=1;k<=i;k++){
//     str+="* "
// }
// console.log(str)
// }

// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<i;j++){
//         str+="  ";
//     }
//     for(let k=0;k<=n-i;k++){
//         str+="* "
//     }
//     console.log(str)
// }

// function lcm(a,b){
//     let larger=0;
//     let smaller=0;
//     if(a>b){
//         larger=a;
//         smaller=b;
//     }
//     else if(a<b){
//         larger=b;
//         smaller=a;
//     }
//      let lcm=larger;
//     while(lcm%smaller!==0){
//         lcm+=larger
//     }
//     console.log(lcm)

// }lcm(5,3)

// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
        
//         b=a%b;
//         a=temp;
       
//     }
//     console.log(a)

// }gcd(60,45)


// function primeNUm(n){
//     let isPrime=true;
//     if(n<=1){
//         isPrime=false;
//     }
//     else{
//         for(let i=2;i<=Math.sqrt(n);i++){
//             if(n%i==0){
//             isPrime=false;
//             }
//         }
//     }
//     if(isPrime){
//         console.log("prime")
//     }
//     else{
//         console.log("non-prime")
//     }

// }primeNUm(7)