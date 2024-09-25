//Given the array train_departures = [10, 15, 7, 20, 5], where each element 
//represents the departure time of a train in 24-hour format, find the earliest train to depart.

let train_departures = [10, 15, 7, 20, 5]

let a=Math.min(...train_departures)
console.log(a)

//Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a 
//seat is available, count the total number of available seats.

let value= [1, 0, 1, 1, 0, 0, 1, 0];
let sum=0;
for(let i=0;i<=value.length;i++){
    if(value[i]==0){
        sum=sum+1
    }
    
}console.log(sum)

//Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of 
//soldiers assigned to different regions, find the region with the highest number of soldiers.

 let soldiers=[120,300,250,180,150]
 let b=Math.max(...soldiers)
 console.log(b)

 //Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an 
 //Indian state over the last 5 years, calculate the average population.
  
 let populations = [50, 60, 70, 80, 90];
 let add=0;
 let avg=0;
for(let i=0;i<populations.length;i++){
   add=add+populations[i];
   avg=add/populations.length
}console.log(avg)