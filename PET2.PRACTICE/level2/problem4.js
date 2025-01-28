// Given three numbers a, b, c print the maximum number amongst the three.

// a =10, b = 30, c = 5

// print 30

// For example:

// Test	Result
// maxOfThree(10, 30, 5)
// 30

function maximumNum(a,b,c){

    if(a>b && a>c){
        console.log(a)
    } 
    else if(b>a && b>c){
        console.log(b)
    }
    else{
        console.log(c)
    }

}maximumNum(10, 30, 65)
