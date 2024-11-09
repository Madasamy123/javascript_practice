//Traverse the array and return the index of the first negative number encountered.

function arr(num){
    for(let i=0;i<num.length;i++){
        if(num[i]<0){
            let a=num.indexOf(num[i]);
            return a
        }
    }

}let result=arr([12,43,54,19,23,45,-1,60])
console.log(result)