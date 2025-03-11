function superReducedString(s) {
    // Write your code here
    
    let words="abcedfeghijklmnopqrstuvwxyz"
    let newstr=""
    let count=0;
    for(let i=0;i<words.length;i++){
        
        if(s.includes(words[i])){
            
            count++;
        }
       
    }
    if(count%2!=0){
        newstr+=s;
     
        
    }
    else{
        console.log("Empty String");
        return;
    }
    console.log(newstr);

}superReducedString("abcaab")
