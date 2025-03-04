// let strArr = ['now', 'nowadays', 'startnow', 'beginnow']
// let word = 'now';

function finIndex(arr,word){

   
    for(let i=0;i<arr.length;i++){
      if(arr[i].includes(word)){
          
        let first=arr[i]

        for(let j=0;j<first.length;j++){
          if(first[j]==word[0] && first[j+1]==word[1]){
               console.log(j)
          }
        }
      
      

      }
     
    }
   

}finIndex(['now', 'nowadays', 'startnow', 'beginnow'],"now")