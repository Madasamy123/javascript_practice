// Reverse a String
// Example: Input: "hello", Output: "olleh"

function pallindrome(word){
      let str="";
    for(let i=word.length-1;i>=0;i--){

        str+=word[i];
        

    }
    console.log(str)
 

}
pallindrome("hello")