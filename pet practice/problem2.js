//1. Given an array of integers find the number of multiples of 5.

let array=[15,32,75,19,95]
for(let i=0;i<array.length;i++){
    if(array[i]%5==0){
        console.log(array[i])
    }
}



//2 Given an array of integers and 2 numbers a and b (a < b) count the number of elements in the array
// which are between a and b
let a=[10]
let b=[20]
count=0;
for( i=a;i<b;i++){
count=count+1
}
console.log(count)

//3. Given an array of strings count the number of elements which are starting with a vowel

let word=["and","apple","orange","pen"]
let total=0;

for(let i=0;i<word.length;i++){
    if(word[i][0]=="a" || word[i][0]=="e" || word[i][0]=="i"||word[i][0]=="o"||word[i][0]=="u"){
        total=total+1
       
    } 
   
}console.log(total)

//4.Given an array of float find the average of the numbers.

let float=[10.5,20.4,6.7,9.5]
let sum=0;
let avg=0;

for(let i=0;i<float.length;i++){
sum=sum+float[i]
avg=sum/float.length
}
console.log(avg)


