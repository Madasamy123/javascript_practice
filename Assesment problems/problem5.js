//Given an array of cities. Find if the city "Chennai" exists in the array. If it exists, print Found. If it doesn’t exist, print Not Found.

//For example:

//Test	Result
//let cities = ["Mumbai", "Chennai", "Bangalore"]
//findElement(cities);
//Found
//let cities = ["Hyderabad", "Mumbai", "Bangalore"]
//findElement(cities);
//Not Found

let cities = ["Mumbai", "Chennai", "Bangalore"]
 

    if(cities.indexOf("chennai")!==-1){
        console.log("not found");
    }
   else{
    console.log(" found");
   }