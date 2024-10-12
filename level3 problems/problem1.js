//Print the below pattern of ‘*’ if n = 3


// function pattern(n){
//     let str=""
// for(let i=0;i<n;i++){

// str+="*"
// console.log(str)

// }

// }pattern(5)


// function pattern(n){
// for(let i=0;i<=n;i++){
//     let str=""
//     for(let j=1; j<=i;j++){
//         str+="*"
       
//     }
//     console.log(str)
  
// }

// }pattern(3)



function pattern(n){
    for(let i=1;i<=n;i++){
        console.log(' '.repeat(n-i)+' *'.repeat(i))
    }

}pattern(5)