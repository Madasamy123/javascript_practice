//Explanation: Since o is coming twice, but we need distinct counts so its only 1 Generate Javascript code which will print the result in console.log and generate 5 test cases

function countvowels(str){

let vowels="aeiou"
let first=""

for(let i=0;i<str.length;i++){
    let char=str[i]

    if(vowels.includes(char) && !first.includes(char) ){
        first+=char
    }
}
console.log(first.length)

}countvowels("cooul")
countvowels("helloi")