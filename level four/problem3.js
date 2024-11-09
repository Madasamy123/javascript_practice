//Find the second maximum in an array of integers

// function maxnum(n){
//     let larger=0;
//     let secondLargest=0;
//     for(let i=0;i<n.length;i++){
//        if(n[i]>larger){
//         larger=n[i]
//        }
//     }
//   for(let i=0;i<n.length;i++){
//     if(secondLargest<n[i] && n[i]!==larger){
//         secondLargest=n[i]
//     }
//   }
//   console.log(secondLargest)

// }maxnum([1,2,3,4,5,6])


//Print the different between the maximum and minimum element in a given array. 
   let num=[12,3,14,1,5,11];
  let largest=num[0];
  let smallest=num[0];                        

  for(let i=1;i<num.length;i++){
    if(largest<num[i]){
      largest=num[i];
      

    }
    

  }
  console.log(largest)
  

  for(let i=1;i<num.length;i++){
    if(smallest>num[i] ){
      smallest=num[i];
      
      
    }
  
  }
  console.log(smallest)
  
   
console.log(largest-smallest)

