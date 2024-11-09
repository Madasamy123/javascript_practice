// function word(num){
//     let sum=0;
// let a=num.toString().split("").map(Number)
// for(let i=0;i<a.length;i++){
//     sum+=a[i]
// }
// if(num%sum==0){
//     console.log("yes")
// }
// else{
//     console.log("No")
// }

// }word(27)


// function factorial(num){
//     let sum = 0;
//     for(let i = num; i>=1; i--){
//         let multi = 1;
//         for(let j = i; j>=1; j--){
//             multi*=j
//         }
//         sum+=multi;
//     }
    
// console.log(sum)


// }factorial(5)


// function fibbinosi(num){
//     let a=0;
//     let b=1;
//     let c=0;
//     let sum=a+" "+b+" ";
   
//     for(let i=1;i<=num;i++){
//         c=a+b;
//         sum+=c+" "

//         a=b;
//         b=c
//     }
//     console.log(sum)

// }fibbinosi(5)




// function pattern(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=1;j<=i;j++){
//             if(i%2==0){
//                 str+="* "
//             }
//             else{
//                 str+=i+" "


//             }
//         }
//         console.log(str)
        
//     }
   

// }pattern(5)


function pattern(n){
    for(let i=1;i<=n;i++){
        let str=" "
        for(let j=n;j>=i;j--){
            str+="* "
        }
        console.log(str)
    }
  

}pattern(5)






