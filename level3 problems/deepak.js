//1

function pattern(n){
    // for(let i=1;i<=n;i++){
    //     let str="";
    //     for(let j=1;j<=i;j++){
    //         str+="*"
    //     }
    //     console.log(str)
    // }


//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=n;j>i;j--){
//             str+="  ";
//         }
//         for(let k=1;k<=i;k++){
//             str+="* "
//         }
//         console.log(str)
//    }


//  for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=n;j>=i;j--){
//         str+="* "
//     }
//     console.log(str)
//  }



// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+="  ";
//     }
//     for(let k=n;k>=i;k--){
//         str+="* "
//     }
//     console.log(str)
// }

// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=n;j>i;j--){
//         str+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         str+="* "
//     }
//     console.log(str)

// }

// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+=" ";
//     }
//     for(let k=n;k>i;k--){
//         str+="* "
//     }
//     console.log(str)
// }


// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=n;j>i;j--){
//         str+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         str+=i+" "
//     }
//     console.log(str)
// }


// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=n;j>i;j--){
//         str+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         str+=k+" "
//     }
//     console.log(str)
// }

//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=1;j<=i;j++){
//             str+=" ";
//         }
//         for(let k=n;k>i;k--){
//             str+=i+" "
//         }
//         console.log(str)
//     }


for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=n;j++){
        if(i==1||i==n||j==1||j==n){
  str+=i+" "
        }
        else{
            str+="  "
        }
      
    }
   console.log(str)

}
}
pattern(5)