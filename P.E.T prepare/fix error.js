//1. Fix the issues in this code
calculateArea();
greetUser();

function calculateArea() {
 const radius = 5;
 let area;
  area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 var userName = "John";
 console.log(userName);
 
}

//2. Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?
let count = 100;
while (count > 0) {
 console.log("Counting down: " + count);
 count--;
}

//3. Why always `It's cold outside.` is printed irrespective of the temperature value. Fix this!

let temperature = 30;
   if (temperature >= 20) {
    console.log("It's cold outside.");
   } else {
    console.log("It's warm outside.");
   }

//4.
checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num < 0){
    console.log("Negative");
  }
  else if (num > 0) {
    console.log("Positive");
  } 
  else {
    console.log("Zero");
  }
}

