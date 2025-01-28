// An e-commerce platform offers reward points to its members. For every $10 spent, members earn 1 point. Non-members don't earn any points.

//       Task:

// Write a program that takes the total purchase amount and a boolean indicating if the customer is a member.

// Calculate the reward points earned.

// Output the number of reward points


function CalculaterewardPoints(purchase,isMember){

    if(isMember){
        let rewardpoints=Math.floor(purchase/10)
           console.log(rewardpoints)
        
    }

    else{
        console.log("reward points earned 0")
    }

}CalculaterewardPoints(100,false)