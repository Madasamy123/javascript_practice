//Given an array of strings arr and another string s, check if s in present in arr

function check(arr,s){
    let istrue=false;
    for(let i=0;i<arr.length;i++){
       
       if(arr[i]==s){
        istrue=true;
       }
      
}
if(istrue){
    console.log("yes")
  }
  else{
    console.log("no")
  }

}
check(["maddy","samy","deepak","bala","senthil","sudharsan"],"sudhaan")


//Given an array of positive integers sorted in ascending order (increasing order, 1st element is the smallest, 
//Nth element is the largest), implement the binary search algorithm.


//Given a array of integers, count of number of occurrences of the maximum element in the array 

//Sample Input: 3 2 1 3

//Sample Output: 2

function arr(num){
let m=num.length;
let max=num[0]
let count=0;
for(let i=0;i<m;i++){
    if(num[i]>max[0]){
        max=num;
    }

}
for(let i=0;i<m;i++){
    if(max==num[i]){
        count+=1;
    }
}

console.log(count)
}arr([ 3, 2, 1, 3,8])


//Write code to print the below pattern, if n = 3
// 1         1

// 2 2     2 2

// 3 3 3 3 3 3

let n=3;
for(let i=1;i<=n;i++){
    str="";


    }

console.log(str)