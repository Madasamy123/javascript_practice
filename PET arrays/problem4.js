



//You are given an array of student grades. Write a function that calculates the average grade.

let grades=[10,20,30,40,50]
let add=0;
let avg=0;
for(let i=0;i<grades.length;i++){
    add+=grades[i];
    avg=add/grades.length
}
console.log(avg)

//You have an array of people ages. Write a function that filters out people who are 18 years old or older.

let age=[12,35,63,15,45]

let a=age.filter(function(ages){
    return ages>18;
})
console.log(a)

//you have an array of integers. Write a function that returns the count of the even numbers in the array.

let integers=[10,31,64,43,50]
let find = integers.filter(function(a){
    return a%2==0
})
console.log(find.length)


