// Problem: Given an array of integers, count how many numbers are even and how many are odd.

//Example Input: [1, 2, 3, 4, 5, 6]
//Example Output: { even: 3, odd: 3 }

function countNum (array){
    let counteven=0;
    let countodd=0;
        for(let i=0;i<array.length;i++){
        if(i%2==0){
            counteven+=1

        }
        else if(i%2!==0){
            countodd+=1
        }
    }
    console.log(counteven,countodd)

}countNum([1,2,3,4,5,6,7])


// Problem: Given an array of integers and a target element, find the indices of its first and last occurrence.

//Example Input: ([5, 2, 3, 5, 7, 5, 8], 5)
//Example Output: { firstIndex: 0, lastIndex: 5 }

function findNum(array,target){
        firstIndex=-1;
        lastIndex=-1;
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            if(firstIndex==-1){
                firstIndex=i;
               
            }
            lastIndex=i;
          
        }
       
    }
    console.log(firstIndex,lastIndex)

}findNum([5, 2, 3, 5, 7, 5, 8],5)


//3. Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”
// Input: s = “i love programming very much”
// Output: s = “much very programming love i”

function reverse(s){
    for(let i=0;i<s.length;i++){
        
    }
  

    
}reverse("hello everyone")

