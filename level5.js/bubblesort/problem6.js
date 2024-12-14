//You have the following list of objects, each containing a name and age. Write a Bubble Sort algorithm to sort these objects by the age property in ascending order:

//yaml
//Copy code
//[{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}, {name: "David", age: 22}]

function bubblesort(arr){

    let swapped;

    do{
        swapped=false

        for(let i=0;i<arr.length-1;i++){
            if(arr[i].age>arr[i+1].age){
                let temp=arr[i].age
                arr[i].age=arr[i+1].age
                arr[i+1].age=temp
                swapped= true
            }
        }
    }
    while(swapped){
        return arr
    }

}console.log(bubblesort([{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}, {name: "David", age: 22}]))


