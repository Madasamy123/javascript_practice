// //Find the second maximum in an array of integers

// function secondLar(arr){
//     let largest=arr[0];
//     let secondLargest=arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }
       
      
      
//     }
   
//     for(let i=0;i<arr.length;i++){
//         if(largest!==arr[i] && arr[i]>secondLargest){
//             secondLargest=arr[i]
          
//         }
       

//     }
//     console.log(secondLargest)
    
// }secondLar([1,2,3,4,5,6])


// //Print the different between the maximum and minimum element in a given array. 

// function maxmin(arr){

//     let max=arr[0];
//     let min=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
        
//     }
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]<min){
//            min=arr[j]
//         }

//     }
//     console.log(min)
//    console.log(max)



// }maxmin([1,2,3,4,5,6,7])


//Count the number of occurrences of a string s2 in a string s1. For example s1 = "This is a String" s2 = "is",
// number of occurences is 2. 

// function occurences(str1,str2){
//     let count=0;
//     let arr=str2.split("")
//  for(let i=0;i<str1.length;i++){
//     if(str1[i]==arr[0]){
//         if(str1[i+1]==arr[1]){
//             count+=1
//         }
//     }
//  }
//  console.log(count)
  
  

// }occurences("This is a string","t")

//1. Problem: Given an array of integers, count how many numbers are even and how many are odd.

//Example Input: [1, 2, 3, 4, 5, 6]
//Example Output: { even: 3, odd: 3 }

// function array(num){
//     let evencount=0;
//     let oddcount=0;
//     for(let i=0;i<num.length;i++){
//       if(num[i]%2==0){
//         evencount+=1;
       
//       }
    
//       else{
//         oddcount+=1;
       
//       }
        
//     }
//   console.log(`{even:${evencount} , odd:${oddcount}}`)

// }array([1, 2, 3, 4, 5, 6])

//2. Problem: Given an array of integers and a target element, find the indices of its first and last occurrence.

//Example Input: ([5, 2, 3, 5, 7, 5, 8], 5)
//Example Output: { firstIndex: 0, lastIndex: 5 }

//3. Given a string, the task is to reverse the order of the words in the given string.
//Examples:
//Input: s = “hello everyone”
//Output: s = “everyone hello”
//Input: s = “i love programming very much”
//Output: s = “much very programming love i”

function array(word){
    let b=[]
    let a=word.split(" ")
 for(let i=a.length-1;i>=0;i--){
  b.push(a[i])
 }
 console.log(b.join(" "))

}array("i love programming very much")


