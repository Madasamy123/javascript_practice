//In an array of string, return all the string which start with the letter 'a' (Case insensitive) for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali

function startA(arr){

let newstr=[]

for(let i=0;i<arr.length;i++){
    let first=arr[i].toLowerCase()

    if(first[0]=="a"){
        newstr.push(arr[i])
    }

}
console.log(newstr.join(", "))

    
}startA(["apple", "Ali", "mango","Brush"])
