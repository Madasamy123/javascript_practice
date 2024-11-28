function pallindrom(arr){
    
    for(let i=0;i<arr.length;i++){
      let first=arr[i];
      let second=""
      for(let j=first.length-1;j>=0;j--){
          second+= first[j]
          
      }
      if(first===second){
          console.log("true")
      }
      else{
          console.log("false")
      }
    }
    
}pallindrom(["level","maddy","noon"])


