// Write a program to check if the character is a vowel, print "The character is a vowel." If the character is a consonant, 
// print "The character is a consonant." Make sure to handle both upper and lower case letters. A vowel is a character which is 
// any of letters a, e, i, o, u. Any letter which is a not a vowel is considered a consonant. 

function checkVowels(char){

    let checkVowels=char.toLowerCase()

    if(checkVowels=="a"|| checkVowels=="e"|| checkVowels=="i"||checkVowels=="o"||checkVowels=="u"){
        console.log("The character is a vowel")
    }

    else if(checkVowels>="a" && checkVowels<="z"){
        console.log("The character is a consonant")
    }
    else{
        console.log("Invalid input. Please enter an alphabet character. ")
    }




}checkVowels("2")