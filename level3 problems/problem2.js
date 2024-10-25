//1.Write a function removeDuplicates(arr) that takes an array and returns a new array with all duplicate elements removed.
//removeDuplicates([1, 2, 3, 3, 4, 5, 5]); // Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr){
    let newarray=[]
    for(let i of arr){
        if(newarray.includes(i)){

        }
        else{
            newarray.push(i)
        }
    }
    console.log(newarray)
   
}removeDuplicates([1, 2, 3, 3, 4, 5, 5])
