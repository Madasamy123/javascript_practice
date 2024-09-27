


// 2. !10
// let integers = [10, 30, 40, 40, 50, 20, 10, 40, 50, 70]
// let count=0;
// for(let i=0;i<integers.length;i++){
//     if(integers[i]!==10){
//         count=count+1
// console.log(count)
//     }
// }

// let year=2022;

// if(year%4==0){    
//     console.log("leap year")
// }
// else{
//     console.log("not leap year")
// }

// let n=22;

// for(let i=0;i<=n;i++){
//     if(n%i==0){
//         console.log(i)
//     }
// }

let integers = [10, 30, 40, 40, 50, 20, 10, 40, 50, 70]
let changedInteger = -1;
for(let i=0; i<integers.length; i++){
    for(let j=i+1; j<integers.length; j++){
        if(integers[i] != changedInteger && integers[j] != changedInteger){
        if(integers[i] === integers[j]){
            integers[j] = changedInteger;
        }
    }
}
if(integers[i] != changedInteger) console.log(integers[i]);
}
     

















//reverse level

// let nam="level";
// let b=""
// for(let i=1;i<=nam.length;i++){
   
//     let a=nam.charAt(nam.length-1);
//     b+=a
     
     
// } console.log(b)

















