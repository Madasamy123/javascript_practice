//Implement an algorithm to determine if a string has all unique characters

// function uniqueStr(nam){
//     let first=nam.split("");
  
// for(let i=0;i<first.length;i++){
//     for(let j=i+1;j<first.length;j++){
//         if(first[i]==first[j]){
//             return false;
         
//         }
       
//     }
    
// }
// return true;
    
// }console.log(uniqueStr("harish"))


//Implement an algorithm to determine if a string has all unique characters

function uniqueStr(nam){
    let isCheck=true;
    for(let i=0;i<nam.length-1;i++){
        for(let j=i+1;j<nam.length;j++){
            
        if(nam[i]==nam[j]){
            isCheck=false;
            
           
            
        }
    }
    }
    
    if(isCheck){
        console.log("True");
    }
    else{
        console.log("false");
    }
        
    }uniqueStr("haris")