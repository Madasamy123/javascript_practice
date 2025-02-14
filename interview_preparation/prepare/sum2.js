// Input: "hello world!"
// Output: "world! hello"

function reverseword(str){

    let first=str.split(" ");
    let emStr="";
  
    for(let i=first.length-1;i>=0;i--){
        emStr+=first[i]+" ";

    }
    console.log(typeof(emStr));


}reverseword("hello World!")
