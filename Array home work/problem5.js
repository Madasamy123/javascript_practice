//Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level 
//in a tank, find the tank with the lowest water level.

let water_levels = [30, 50, 20, 40, 60]
let lowestLevel=water_levels[0]
for(i=0;i<water_levels.length;i++){
    if(water_levels[i]<lowestLevel){
        lowestLevel=water_levels[i]
    }

}console.log(lowestLevel)