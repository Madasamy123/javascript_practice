
function firstNonRepeat(str){

 for(let i=0;i<str.length;i++){ 

   let isTrue=true;

   for(let j=0;j<str.length;j++){

      if(i!==j && str[i]===str[j]){
        isTrue=false;
        break;

      }

   }

   if(isTrue){
    return str[i];
   }

  }
  return null

}console.log(firstNonRepeat("aabbccde")) 
console.log(firstNonRepeat("aabbcc"));