function printEvenLengthStrs(inputStr){
    
//     let first=inputStr.split(" ")
//     let newarr=[]
  
//   for(let i=0;i<first.length;i++){
//       if(first[i].length%2==0){
//           newarr.push(first[i])
        
//       }
     
//   }
//      console.log(newarr.join(','))


let first=inputStr.split(" ")
let newarr=[]

for(let i=0;i<first.length;i++){

    if(first[i].length%2==0){
        newarr.push(first[i])
    
    }
  
    
    
}

console.log(newarr.join(','))
    
    
}printEvenLengthStrs("hi iam vidya studying twelfth")
printEvenLengthStrs("hello hema meeting you in 5 minutes")
