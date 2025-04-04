// Check if a String is a Palindrome
// Example: Input: "racecar", Output: True

function pallindrome(str){
     let newstr="";
    for(let i=str.length-1;i>=0;i--){
         newstr+=str[i]
    }

    if(newstr==str){
        console.log("pallindrome");
    }
    else{
        console.log("naot a pallindrome")
    }

}pallindrome("racecar")