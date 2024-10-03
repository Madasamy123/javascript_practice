//Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water
// level in a tank, find the tank with the lowest water level.

let water_levels = [30, 50, 20, 40, 60]
let lowest=Math.min(...water_levels);
console.log(lowest);

//Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number
// of days left until an important festival, find the closest upcoming festival.

let days_until_festival = [30, 15, 45, 10, 25]
let close_festival=Math.min(...days_until_festival);
console.log(close_festival)

//Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter 
//is scheduled to land, check if any two helicopters are scheduled to land at the same time.
let landing_times = [12, 15, 12, 18, 20]

for(let i=1;i<landing_times.length;i++){
    if(){
        console.log("helicopters are scheduled to land at the same time")

    }
    else{
        console.log("helicopters are scheduled to at the different time")
    }
}






