// // You are designing a program to determine the outcome 
// of a cricket match based on the Duckworth-Lewis 
// method due to rain interruptions. 
// Declare variables teamScore, targetScore, and oversLeft.
//  If the teamScore is greater than or equal to 
// targetScore, 
// print "Team wins by DL method" 
// If teamScore is less than targetScore 

// but oversLeft is greater than 0, 
// print "Match to be continued" 
// If teamScore is less than targetScore and 
// oversLeft is 0, 
// print "Team loses by DL method"

// For example:

// Test	Result
// dlMethod(150, 145, 0);
// Team wins by DL method


function cricketScore(teamScore,targetScore,oversLeft){

    if(teamScore>=targetScore){
        console.log("Team wins by DL method")
    }
    else if(oversLeft>0){
        console.log("Match to be continued")
    }
    else if(teamScore<targetScore && oversLeft==0){
        console.log("Team loses by DL method")
    }

}cricketScore(150,145,0)
