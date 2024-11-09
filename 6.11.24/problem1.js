//Given an array of strings, return the string which has maximum 'a' character present in it.  eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it

function maxA(arr){
for(let i=0;i<arr.length;i++){
   if(arr[i]>"a"){
    console.log(arr[i])
   }
}


}maxA(["apple", "appeal", "after", "banish"])