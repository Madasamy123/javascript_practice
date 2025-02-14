// Input: ("abcde", "cdeab")
// Output: true


function rotateStr(str1,str2){
   
    if(str1.length!=str2.length || str1.length==0){
        console.log("invalid")
        return false;
    }

    let combined=str1+str1;

     if(combined.includes(str2)){
        return true;
     }

     return false;




}console.log(rotateStr("abcde", "cdeab"))