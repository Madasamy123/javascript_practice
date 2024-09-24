//15. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. 
//Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

function airplane(i,n){

while(i>n){
 console.log("Flight arrived"+""+i);
 i=i-10;
}
console.log("Flight arrived 0ft")
}airplane(1000,0)


//16. Based on the flight’s destination, direct the airplane to a specific runway.
// Use a switch statement to assign the runway depending on the destination entered by the user

function destination(flight){
    switch(flight){
        case "chennai":
            console.log("flight runway no: 1");
        break;
        case "bangalore":
            console.log("flight runway no: 2");
         break;
        case "tuticorn":
            console.log("flight runway no: 3");
        break
        case "trichy":
         console.log("flight runway no: 4");
        break;
        default:
        console.log("runway is not available")

        }
}destination("pirancheri")

