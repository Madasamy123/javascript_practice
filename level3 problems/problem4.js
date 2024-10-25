//3. Write a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forwards and backward). Ignore spaces and case sensitivity.
// isPalindrome("racecar"); // Output: true
// isPalindrome("hello");   // Output: false

function isPalindrome(word){
    let str="";
    let len=word.length-1
    for(let i=len;i>=0;i--){
        str+=word[i]
    }
     if(word==str){
        console.log(true)
     }
     else{
        console.log(false)
     }

    


}isPalindrome("hello")