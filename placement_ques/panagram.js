function panagram(str){
    let words="abcdefghijklmnopqrstuvwxyz"
    let first=str.toLowerCase().split("");
    isPanagram=true;
  
  for(let i=0;i<words.length;i++){   
    if(!first.includes(words[i])){
       isPanagram=false;
       break;
           }
   
  }
  if(isPanagram){
      console.log("it is panagram")
  }
  else{
      console.log("no")
  }
    
}panagram("We promptly judged xntique ivory buckles for thae prize")

