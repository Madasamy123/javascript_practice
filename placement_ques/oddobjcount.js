function superReducedString(s) {
    // Write your code here
let obj={};
for(let i=0;i<s.length;i++){
    if(obj[s[i]]){
        obj[s[i]]++;
    }
    else{
        obj[s[i]]=1;
    }
}
console.log(obj);
let str="";
for(let value in obj){
    console.log(obj[value])
    if(obj[value]%2!=0){
        str+=value;
    }
}
console.log(str);



}
superReducedString("aaabccddd");