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
//   //first word captial in the sentence
// function word(a) {
//     let b = a.split(' ')
//     for (let i = 0; i < b.length; i++) {
     
//         b[i]=b[i].replace(b[i][0],b[i][0].toUpperCase())
//     }

//     console.log(b)


// } word("i am madasamy from tirunelveli")



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

// }word("Maddy is a play boy and he is owner of software company named inge but he fall in  love with Anushka but his ex-lover mamitha baiju don't like that so she decide to kill anushka")


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

//join number add and mul digit
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


//count vowels

// function letter(word){
//        let count=0;
//        for(let i=0;i<word.length;i++){
           
//            if(word[i]=="a"|| word[i]=="e"|| word[i]=="i"||word[i]=="o"||word[i]=="u")
//            count++;
//        }
//        console.log(count)
       
//    }letter("madasami")


// practice

// function practice(nam){
//    let a=nam.length-1
//    let str="";
//    let b=[]
  
//    for(let i=a;i>=0;i--){
//    str+=nam[i];
//    if(nam[i]=="a"|| nam[i]=="e"||nam[i]=="i"|| nam[i]=="o"||nam[i]=="u"){
//     b.push(nam[i])
//   }
 
//    }
//    console.log(str)
//    console.log(b)

//    for(let i=0;i<b.length;i++){
//     if(nam[0]==b[i]){
//         console.log("sdf");
//     }

//     else{
//         console.log("no word")
//     }
    
//    }

// } 
// practice("madasami")


// pallindrom

// function word(nam){
//     let str=""
//     let a=nam.length-1;
//     for(let i=a;i>=0;i--){
//          str+=nam[i]
    
//     }
//    if(str==nam){
//     console.log("palindrom")
//    }
//    else{
//     console.log("not palindrom")
//    }

// }word("level")

//

//second largest number

// function value(number){
//     let largest=0;
//     let secondLargest=0;

//     for(let i=0;i<number.length;i++){
//         if(number[i]>largest){
//             largest=number[i]
           
//         }
       
//     }
//    for(let i=0;i<number.length;i++){
//     if(number[i]>secondLargest && number[i]!==largest){
//        secondLargest=number[i]
//     }
    
//    }
//    console.log(secondLargest)
  

// }value([10,12,65,87,84])

//print star


// function star(n){
//       let str=""
//     for(let i=1;i<=n;i++){
//        str+="*"
//        console.log(str)
//     }
   

// }star(5)

//print reverse star

// function reveresStar(n){
//     for(let i=n;n>=1;n--){
//     let str=""

//         for(let j=n;j>=1;j--){
//             str+="*"
//         }
//     console.log(str)
      

//     }
  
// }reveresStar(5)


//second largest

// function value(number){
//    let n=2; 
// for(let i=0;i<n;i++){
//  a=Math.max(...number)
// let b=number.indexOf(a)
// number.splice(b,1)
// }
// console.log(a)
// }value([10,20,30,40,50])


//slice

// function value(nam){
//     let b=nam.length-1
//     let a=nam.slice(2,6)
//     console.log(a)

// }value("madasamy")

///Remove Duplicates  and accending from an Array

// function array(num){
//     let a=[]
//     for(let i=0;i<num.length;i++){
//         if(!a.includes(num[i])){
//             a.push(num[i])
//             let b=a.sort(function(c,d){
//                 return c-d
//             })
//             console.log(b)
           
//         }
       
//     }
//     console.log(a)

// }array([1,2,1,4,6,2,7,3,5])

////compoundInterest

// function compoundInterest(p,n,r){
    
//     let totalinterest=0;
//     for(let i=0;i<=n;i++){
//         totalinterest=p*r/100;
//         p+=(p*r/100)
//         console.log(totalinterest,p)
       

//     }
  

// }compoundInterest(1000,10,10)
