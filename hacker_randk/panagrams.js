function pangrams(s) {
    // Write your code here
     let words="abcdefghijklmnopqrstuvwxyz";
     let first=s.toLowerCase().split("");
     let isPangram=true;
    
    for(let i=0;i<words.length;i++){
        if(!first.includes(words[i])){
            isPangram=false;
            break;
        }
    }
    
    if(isPangram){
         return "pangram"
    }
    else{
        return "not pangram";
    }
   
    

}