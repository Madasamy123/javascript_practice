//You have an array of integers. Write a function that returns the count of the even numbers in the array.	

    let even=[12,33,45,62,34]
    let evennum=even.filter(function(even1){
        return even1%2==0
    })
    console.log(evennum)