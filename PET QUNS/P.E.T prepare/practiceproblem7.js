//13. A robot moves forward as long as its battery level is above 20%. Using a while loop, 
//simulate the robot's movement, decreasing the battery level by 5% after each step and displaying
// the remaining battery level. Once the battery level is below 20%, Display Battery is low.
let batteryLevel=100;
while(batteryLevel>=20){
    console.log("remaining battery level"+" "+batteryLevel)
    batteryLevel=batteryLevel-5;
}
console.log("Battery is low")


//14. A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the 
//direction entered by the user and print the robot's new position after each movement.

function position(direction){
    switch(direction){
   case "North":
    console.log("The robot is North");
    break;
    case "south":
        console.log("The robot is South");
    break;
    case "East":
        console.log("The robot is East");
     break;
    case "West":
        console.log("The robot is west")
    break;
    default:
        console.log("Invalid direction");

    
    }
}
position("North west");