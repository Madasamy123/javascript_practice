//8. Find the Index of a Substring in a String Using indexOf() and includes()
//Write a program to find the index of a substring in a given string. If the substring is present, return the index using indexOf(). If not, print "Not Found" using includes().
//Example:
//Input: "Programming", Substring: "gram"
//Output: 3 (Index of "gram" is 3)

let nam="programming";
function first(){
    let second=nam.includes("gram");
    console.log(second);
    let third=nam.indexOf("g");
    console.log(third);
  
}
first()