//Print the sum of all  numbers between a and b. Eg, If a = 5, and b = 8 then it should print 26

function sumNum(a,b){
    let sum=0
    for(let i=a;i<=b;i++){
        sum+=i
    }
console.log(sum)
}sumNum(3,9)



//Debug the code. Print the first N even numbers in reverse. 

// n = 5, the program is expected to print 
// 10
// 8
// 6
// 4
// 2

function reverseoddNum(n){

    for(let i=n;i>=1;i--){
        let result=i*2;
        console.log(result)
    }
  

}reverseoddNum(5)