//without third variable ex: a=10,b=5 o/p a=5,b=10

function swapNum(a,b){

    let first=a;
    let second=b;
    
 
    // let third=first;
    // first=second;
    // second=third
    // console.log(a);
    // console.log(b)

//  without third variable

first=first+second;  // 10+15=25
second=first-second;  // 25-15= 10;
first=first-second;

console.log(first);
console.log(second);


}swapNum(10,15)





