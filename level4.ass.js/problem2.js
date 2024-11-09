//Given a string count number of distinct vowels in the String. Consider all the inputs to be in
// lowercase
// Input: cool
// Output: 1
// Explanation: Since o is coming twice, but we need distinct counts so its only 1 Generate Javascript code which will print the result in console.log and generate 5 test cases

function vow(word){

  let vowels="aeiou"
  let first=""

  for(let i=0;i<word.length;i++){
  let char=word[i]
  if(vowels.includes(char) && !first.includes(char)){
    first+=char
  }
  }
  console.log(first.length)
}vow("cool")