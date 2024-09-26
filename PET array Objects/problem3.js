//10. Adding New Property to Objects in an Array  
//You have an array of 4 objects, each representing a car with properties brand and model. 
//Write a program to add a new property year to each object and assign a value, then print the updated array.

let array=[
    {
   brand:"mahendra",model:"Thar"},
   {brand:"Tata",model:"model2"},
   {brand:"skooda",model:"model3"},
   {brand:"swift",model:"model4"}  
];
array[0].year=2002;
array[1].year=2003;
array[2].year=2004;
array[3].year=2005
console.log(array)


// 6. Reverse Order of Array Using pop()
// Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store 
// them in a new array in reverse order. Print the reversed array.

let numbers=[10,20,30,40]
let emptyarray=[]
while(numbers.length>0){
    emptyarray.push(numbers.pop());
}
console.log(emptyarray)

//You have an array of 3 objects, each representing a product with properties name and price. 
//Write a program to calculate and print the total price of all the products in the array.
let price=0;
let second=0;
let first=[
    {name:"madasamy",price:800},
    {name:"anand",price:500}
]
for(let i=0;i<first.length;i++){
    second+=first[i].price
}

console.log(second)

//12. Finding an Object by Property Value in an Array  
//You have an array of 5 objects, each representing a student with properties name and grade. 
//Write a program to find and print the name of the student whose grade is "A".

let student=[
    {nam:"maddy",grade:"A"},
    {nam:"samy",grade:"B"},
    {nam:"vijay",grade:"A"},
    {nam:"ajith",grade:"B"},
    {nam:"suriya",grade:"A"}
]
for(let i=0;i<student.length;i++){
    if(student[i].grade==="A"){
        console.log(student[i].nam+" grade is  A")
    }
}