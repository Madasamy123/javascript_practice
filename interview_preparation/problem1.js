//find Palindrome using function return stratement apply both number and string print :yes or No

function pallindrom(str){

    let first=str.toString().split("");
    let second=first.length-1;
    let three=""
    for(let i=second;i>=0;i--){
        three+=first[i]
        
    }
        if(str==three){
            return "it is pallindrome"
        }
        else{
            return "not pallindrom"
        }

}
console.log(pallindrom(12321))