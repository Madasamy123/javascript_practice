//Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.
//Given the array seat

// let trainDepartures=[10,15,7,20,5]
// let minValue=trainDepartures[0];
// for(i=0;i<=trainDepartures.length;i++){
//     if(trainDepartures[i]<=minValue){
//         minValue=trainDepartures[i]
//     }

// }console.log(minValue);


let trainDepartures=[10,15,7,20,5]
let minValue=trainDepartures[0]
for(i=0;i<trainDepartures.length;i++){
    if(trainDepartures[i]<=minValue)
    minValue=trainDepartures[i]

}
console.log(minValue)