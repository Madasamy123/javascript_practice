
let arr=[1,7,3,9,5,6]
let n=1;

for(let i=0;i<n;i++){
   let temp=arr.shift(i);
   arr.push(temp);
}

console.log(arr);