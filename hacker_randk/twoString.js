// function twoStrings(s1, s2) {
//     // for (let i = 0; i < s1.length; i++) {
//     //     for (let j = 0; j < s2.length; j++) {
//     //         if (s1[i] === s2[j]) {
//     //             return "YES"; // Early exit when a match is found
//     //         }
//     //     }
//     // }
//     // return "NO"; // If no match is found


// }


function twoStrings(s1, s2) {
    
    let set=new Set(s1);
    console.log(set);
    for(let char of s2){
        if(set.has(char)){
            return "YES";
        }
        
    }
    return "NO";

}
console.log("Answer: "+twoStrings("hello","world"));