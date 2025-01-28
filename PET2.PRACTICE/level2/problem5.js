// Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.

// Sample Testcase :

// INPUT

// n=3

// l=2

// r=6

// OUTPUT

// yes

// For example:

// Test	Result
// isBetween(3, 2 , 6)
// yes


function betweenNumber(N,L,R){

    if(N<R && N>L){
        console.log("yes")
    }
    else{
        console.log("no")
    }

}betweenNumber(3,2,6)
