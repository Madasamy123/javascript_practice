


function birthday(s, d, m) {
    // Write your code here


let count=0;

for(let i=0;i<=s.length-m;i++){
    let sum=0;
    
    for(let j=0;j<m;j++){
        sum+=s[i+j]
    }
    if(sum==d){
    count++;
}
}
return count;

}birthday([1, 2, 1, 3, 2],4,2)