//A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot 
//move in the direction entered by the user and print the robot's new position after each movement.

function allDirection(direction){
    let x=0;
    let y=0;
     switch (direction) {
        case "north":
            console.log("The robot's new position "+x+" "+(y+1));
            
            break;
        case "south":
            console.log("The robot's new position "+x+" "+(y-1));
            break;
        case "east":
            console.log("The robot's new position "+(x+1)+" "+y);
            break;
        case "west":
            console.log("The robot's new position "+x+" "+(y-1));
            break;
        default: 
             console.log("invalid direction ");
            break;
     }
}allDirection("west")