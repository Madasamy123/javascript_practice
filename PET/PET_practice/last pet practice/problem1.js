//Reverse an Array
//Write a JavaScript function to reverse an array.

// function array(num){
//     let b=[]
//     let a=num.length-1
//     for(let i=a;i>=0;i--){
//     b.push(num[i])
  
//     }
//     console.log(b)

// }
// array([1,2,3,4,5,6])



// accending decending order

// function array(a){
// a.sort(function(a,b){
//   return b-a
// })
// console.log(a)

// }array([1,5,2,4,3,9,6])

//Check if a String is a Palindrome

// function word(nam){

//    let str=""
//     for(let i=nam.length-1;i>=0;i--){
//      str+=nam[i]
      
//     }
//     console.log(str)
   

// }word("madasamy")


// fibinossi

// function fibinossi(num){
//     let n1=0;
//     let n2=1;
//     let next=0;
   
//     for(let i=0;i<num;i++){
//         console.log(n1);
//         next=n1+n2;
//         n1=n2
//         n2=next
//     }

// }fibinossi(5)

//Convert a String to Uppercase or lowercase

// function word(letter){
//     let a=letter.toLowerCase()
//     console.log(a)

// }word("MadaSamy")


//Find the Second Highest Number in an Array

// function array(num){
//    let largest=0;
//    let secondLargest=0;
//    for(let i=0;i<num.length;i++){
//     if(num[i]>largest){
//         largest=num[i]
//     }
  
//    }
//    for(let i=0;i<num.length;i++){
//     if(num[i]>secondLargest && num[i]!== largest){
//         secondLargest=num[i]
//     }
//    }
//    console.log(secondLargest)
   
// }array([1,2,3,4,25,16])

// Remove Duplicates from an Array

// function array(num){
//     let b=[]
//     for(let i=0;i<num.length;i++){
//        if(!b.includes(num[i])){
//         b.push(num[i])
//        }
      
//     }
//     console.log(b)
   


// }array([1,2,1,3,2,4,2,5,3,1])


// Find the Length of a String

// function word(nam){
//     let a=nam.length;
//     return a


// }
// let result=word("madasamy")
// console.log(result)


//Count the Number of Vowels in a String

// function word(nam){
//     let count=0;
//     for(let i=0;i<nam.length;i++){
//         if(nam[i]=="a"||nam[i]=="e"||nam[i]=="i"||nam[i]=="o"||nam[i]=="u" ){
//          count++
//         }
//     }
//     console.log(count)

// }word("tirunelveli")

//Write a function to merge two arrays and remove duplicates.

// function arrays(a,b){
//     for(let i=0;i<b.length;i++){
//       if(!a.includes(b[i])){
//         a.push(b[i])
//       }
       
//     }
//     console.log(a)
   


// }arrays([1,2,4,3,5],[6,3,7,8,2,9])


//Find Maximum and Minimum in an Array

// function array(a){
//    let b= Math.max(...a);
//    let c=Math.min(...a);
//    console.log(b);
//    console.log(c)

// }array([1,2,3,4,5,6])

//14. Sum of Elements in an Array

// function array(num){
//     sum=0;
//     for(let i=0;i<num.length;i++){
//     sum=sum+num[i]
//     }
//     console.log(sum)

// }array([1,2,3,4,5])


//How do you flatten a deeply nested array?

// function array(num){
//     let a=num.flat(Infinity)
//     console.log(a)

// }array( [1, [2, 3], [4, [5, 6]]])



 
// Generate a Multiplication Table

// function table(n,mul){
//     for(let i=1;i<=n;i++){
//         a=i*mul
//         console.log(i+"*"+mul+"="+a)
//     }

// }table(10,5)



// function word(a){
    
//         if(a.length==0){
//             console.log(true)
//         }
//         else if(a.length>0){
//             console.log(false)
//         }
    

// }word([])

//Capitalize the First Letter of Each Word

// function letter(word){
//     let a=word.split(' ');
    
//         console.log(a)
//     }
    



// letter("i'm madasamy from tirunelveli")


//
// function word(a){
// let first=a.split(' ')

// let vowel="aeiouAEIOU"

// for(let i=0;i<first.length;i++){
//     let firstLetter=first[i][0]
//     let lastLetter=first[i][first[i].length-1]
//   if(vowel.includes(firstLetter)&& vowel.includes(lastLetter)){
//     console.log(first[i])
//   }

// }

//}word("Maddy is a play boy and he is owner of software company named inge but he fall in  love with Anushka but his ex-lover mamitha baiju don't like that so she decide to kill anushka")


//fibinaosii

// let a=0;
// let b=1;
// next=0;
// for(let i=a;i<5;i++){
//     console.log(a)
//     next=a+b
//     a=b
//     b=next;

// }

//

//simpleInterest

// function simpleInterest(N,RI,P){
 
//     let interest=0;
//     let totalInterest=0;
//     for(let i=N; N>=1;N--){
//         interest=P*RI/100;
//        totalInterest+=interest
//        totalAmount=P+totalInterest
         
        
//         }
//          console.log(totalAmount)
      
        
    
// }simpleInterest(10,10,1000)


// compoundInterest

// function compoundInterest(A,N,I){
//     let CompoundAmount=A;
//     let totalInterest = 0;
//     for(let i=0; i<N; i++){
//         totalInterest = CompoundAmount*I/100;
//         CompoundAmount += (CompoundAmount*I/100);
//         console.log('totalInterest ' + totalInterest + " CompoundAmount " + CompoundAmount)
//     }
   
// }compoundInterest(1000,10,10)

//join number add and mul
//
// function first(number){
//     let a=number.toString()
//     let b=a.split('')
//     let sum=0;
//     let mul=1;
//     for(let i=0;i<b.length;i++){

//         sum+=parseInt(b[i]);
//         mul=mul*parseInt(b[i])
    
//     }
//     console.log(sum)
//     console.log(mul)
   

// }first(1234)

//leap year

// function first(year){
//     if((year%4==0 || year%400==0) && (year%100!=0))
//         {
//         console.log("it is leap year")
//     }
//     else {
//         console.log("not leap year")
//     }

// }first(2022)

