

// decryptMessage("ereht olleh dlrow"); // Output: "there hello world"

function reverseStr(str){
   
    let newarr=[];
    let first=str.split(" ");
   
   for(let i=0;i<first.length;i++){
      
      let a=first[i];
      let b=""
     
      for(let j=a.length-1;j>=0;j--){
         b+=a[j]
      }
     
      newarr.push(b)
       
   }
    console.log(newarr.join(" "))
 
    
}reverseStr("ereht olleh dlrow")