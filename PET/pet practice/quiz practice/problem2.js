//Debug the code. Print the first N even numbers in reverse. 

//n = 5, the program is expected to print 
// let i=0;
// function evenNum(n){
// for(let i=n*2;i>1;i--){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// }evenNum(5)

//

// function number(n){
//     let m=n.toLowerCase()
//     if(m==="a"){
//         return true;
//     }
//     else if
//     (m>="d" && m<="f"){
    
//         return false;
//     }
//     else{
//         return 1;
//     }
    


// }
// let result=number("e")
// console.log(result)


//


// let array=[1,12,3,4,15]

// function first(numbers){
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]%2!==0){
// sum=sum+numbers[i]
//         }
      
//     }
//     console.log(sum)
//     if(sum%3===0){
//       return true
//     }
    
//       return false
    

// }console.log(first(array))



// let array=[2,12,3,4,15]

// function first(numbers){
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]%2!==0){
//             sum=sum+numbers[i]
//         }
//         return sum
//     }}console.log(first(array))



//

// let c=[]
// function integers(a,b){


// for(let i=a;i<=b;i++){
 
//  c.push(i)
// }

// console.log(c);
// let rev=c.reverse();
// console.log(rev)

// }
// integers(10,20)

let a=[];
function number(n1,n2){
for(let i=n1;i<=n2;i++){
    if(i%2!==0){
        a.push(i)
      
    }
}
for(let i=n1;i<=n2;i++){
    if(i%2==0){
        a.push(i)
    }
}
console.log(a)

}number(1,10)