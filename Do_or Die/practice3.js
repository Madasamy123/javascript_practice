//Given an array of strings, find the string which comes first alphabetically without using any library functions. 

function alpaorder(arr){

    let order=arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]<order){
            order=arr[i].toLowerCase()
        
        }
    }
    console.log(order)

}alpaorder(["Abddy","Samy","Apple","karthi","vbuthujothi"])