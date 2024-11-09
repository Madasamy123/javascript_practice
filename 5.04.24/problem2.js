//In an array of string, return all the string which start with the letter 'a' (Case insensitive) for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, 

function arr(str){
   
    for(let i=0;i<str.length;i++){
       if(str[i][0]=="A" || str[i][0] == "a"){
        console.log(str[i])
       }
       
    }

}arr(["apple", "Ali", "mango","Brush","adiceooeifei"])