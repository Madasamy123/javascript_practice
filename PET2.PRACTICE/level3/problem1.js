// Write a program that completes the printCharacters(charc, n) function which prints the number of characters n times.

// Example: printCharacters('*', 5), prints the output as *****

function printCharacters(charc,n){
    let str=" "
    for(let i=0;i<n;i++){
        str+=charc

    }
    console.log(str)

}printCharacters("*",5)