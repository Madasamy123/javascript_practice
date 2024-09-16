//A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, 
//decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%,
// Display Battery is low.

let battery=100;
while(battery>=20){
    console.log("The battery level is"+battery+"%");
   battery= battery-5;
}
console.log("The battery is low");