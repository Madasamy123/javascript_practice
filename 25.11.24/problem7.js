// For the first 100 kWh, the rate is ₹8 per kWh.
// For the next 200 kWh (from 101 to 300 kWh), the rate is ₹12 per kWh.
// For any usage above 300 kWh, the rate is ₹15 per kWh.
// For usage = 350 kWh:

// First 100 kWh = 100 × ₹8 = ₹800
// Next 200 kWh = 200 × ₹12 = ₹2400
// Remaining 50 kWh = 50 × ₹15 = ₹750
// Total Bill = ₹800 + ₹2400 + ₹750 = 3950

// The program takes an array of usages, the program prints the sum

// example usages = [350, 150, 100];

function totalkwh(arr){
       let total=0;
    for(let i=0;i<arr.length;i++){

        if(arr[i]>=1 && arr[i]<=100){
            total+=arr[i]*8
        }

        else if(arr[i]>100 && arr[i]<=300){
            total+=100*8
            total+=(arr[i]-100)*12
        }
        else if(arr[i]>300){
            total+=100*8
            total+=200*12
            total+=(arr[i]-300)*15
           
        }
       
    }
    console.log(total)
   
}totalkwh([350, 150, 100])

