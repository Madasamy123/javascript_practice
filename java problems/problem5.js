//Based on the flight’s destination, direct the airplane to a specific runway.
// Use a switch statement to assign the runway depending on the destination entered by the user.

function direction(airport){
    switch (airport) {
        case "Tuticorn":
            console.log("The flight runway no:1");
            
            break;
        case "chennai":
            console.log("The flight runway no:2");
            break;
        case "Trichy":
            console.log("The flight runway no:3");
            break;
        case "Covai":
            console.log("The flight runway not:4");
            break;
    
        default:
            console.log("The flight runway is not availiable");
            break;
    }
}direction("madurai")