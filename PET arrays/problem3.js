//Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature
// in a specific region of a forest, identify which regions have temperatures above 80 degrees.

let temperatures = [75, 80, 72, 85, 90]

for (let i = 1; i <= temperatures.length; i++) {
    if (temperatures[i] > 80) {
        console.log(temperatures[i])
    }
}

//Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students
// assigned to different bus routes, calculate the total number of buses required if each bus can hold a
// maximum of 50 students.
let students_per_route = [45, 55, 30, 60, 40]
let total_count_bus=0;
for(let i=0;i<students_per_route.length;i++){
   let count_bus_route=1;
   if(students_per_route[i]>50) count_bus_route++
   total_count_bus=total_count_bus+count_bus_route;
}
console.log("total count bus is"+" "+total_count_bus)








//You have an array of daily expenses for a week. Write a function that 
//calculates the total expenses for the week.

let week_expensive = [10, 20, 30, 40, 50, 60, 70]
let sum = 0;
for (let i = 1; i < week_expensive.length; i++) {

    sum += week_expensive[i];

}

console.log(sum)


