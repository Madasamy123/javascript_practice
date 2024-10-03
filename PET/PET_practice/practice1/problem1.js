//count array
// let array=[1,2,3,4,5]
// function count(num){
//     let sum=0;
//     for(let i=0;i<=array.length;i++){
//         sum=sum+i
//     }
//     console.log(sum)
    
// }count(array)

//Count Even and Odd Numbers:
//Given an array, count how many even and how many odd numbers are present.
// function array(number){
//     let odd_count=0;
//     let even_count=0;
//     for(let i=0;i<number.length;i++){
//         if(i%2!==0){
//             odd_count+=1
           
//         }
//         else if(i%2==0){
//             even_count+=1
//         }

//     }
//    console.log(odd_count);
//    console.log(even_count);

// }array([12,13,14,15,16,17,8])




//Find Maximum and Minimum:
//Write a function to find the maximum and minimum values in an array.

//Find Maximum and Minimum:
//Write a function to find the maximum and minimum values in an array

// function array(num){
//     let a=Math.max(...num)
//     let b=Math.min(...num)
//     console.log(a);
//     console.log(b)

// }array([1,2,3,4,5])

// reversed aray

// function array(number){
//     let b=[]
//     let a=number.length
//     for(let i=1;a>=1;a--){
//         b.push(a)
       
//     }
//     console.log(b)

// }array([1,2,3,4,5])



//Remove Duplicates:
//Given an array, remove all duplicate elements and return a new array.



//remove duplicates

// function array(num){
//     let first=[]
//     for(let i=0;i<num.length;i++){
//         if(!first.includes(num[i])){
//             first.push(num[i])
//         }
//     }

// console.log(first)

// }array([1,2,1,3,1,4,1,5,3,6,3,2,6])


//second Largest Element:
//Find the second largest element in an array without sorting it.

// function array(num){
//     let largest=0;
//     let secondLargest=0;
//     for(let i=0;i<num.length;i++){
//       if(num[i]>largest){
//        largest=num[i];
//       }
     
//     }
//   for(let i=0;i<num.length;i++){
//      if(num[i]>secondLargest && num[i]!==largest){
//         secondLargest=num[i]
//      }
    
     
//   }
//   console.log(secondLargest);
  
  

// }array([1,2,3,4,5,6,7])


//merge array

// let a=[1,3,5,7]
// let b=[2,4,6,8]

// let c=a.concat(b)
// console.log(c)


//Given an array of numbers, return the sum of all positive numbers.

// function number(value){
//     let sum=0;
//     for(let i=0;i<value.length; i++){
//         if(value[i]>0){
//             sum=sum+value[i];
           
//         }
       
//     }
//   return sum

// }
// console.log(number([1,-2,-4,6,-3,18]))

//Write a function that returns the sum of all elements in two arrays combined.

// function number(n1,n2){
//     let sum1=0;
//     let sum2=0;
//     for(let i=0;i<n1.length;i++){
//     sum1+=n1[i]
//     }
//     for(let i=0;i<n2.length;i++){
// sum2+=n2[i]
//     }
//     return sum1+sum2


    

// }
// console.log(number([1,2,3,4,5],[6,7,8,9,10]))

// sum of first and last element
// function array(number){
//     console.log(number[0]+number[number.length-1])

// }array([1,2,3,4,7])

//Sum of Two Numbers
//Write a function that takes two numbers as arguments and returns their sum.

// function num(a,b){
//     return a+b

// }
// let result=num(10,20)
// console.log(result)

