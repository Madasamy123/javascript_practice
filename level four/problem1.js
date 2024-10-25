//Given an array of integers, find the maximum in the array

// function array(num){
//     let maxNum=0;
//     for(let i=0;i<num.length;i++){
//         if(num[i]>maxNum){
//             maxNum=num[i]
           
//         }
       
//     }
//     console.log(maxNum)
   
    
    


// }array([91,22,3,64,15,56])


////Given an array of integers, find the minimum in the array

// function arr(value){
//     let miniNum=value[0];
//     for(let i=0;i<=value.length;i++){
//         if(miniNum>value[i]){
//         miniNum=value[i]
//         }
       
//     }
//     console.log(miniNum);
// }arr([1,2,3,4,5,6])

//Given an array of strings, find the string which comes first alphabetically without using any library functions. 

// function array1(num){


    

// }array1(["maddy","samy","saro","bala","sudharsan","senthil"])


//
function value(num){
    let str=num.length;
   for(let i=0;i<str;i++){
    for(let j=i+1;j<str;j++){
        if(num[i]<num[j]){
            temp=num[i];
            num[i]=num[j];
            num[j]=temp;
        }
      
    }

  

   }
   console.log(num)
    

}value([37,86,93,21,19,67]);

