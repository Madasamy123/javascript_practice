// //Given an array of strings like "Name,age,salary" Find the employee name who has the maximum salary.

// // For example:

// // Test	Result
// // findMaxSalaryEmployee([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])
// // Olivia

// function maxsalary(arr){
//     let newarr=[]
//     let maxamout=0
//     var maxname=""

//     for(let i=0;i<arr.length;i++){
//         newarr.push(arr[i].split(","))
//        if(Number(newarr[i][2])>maxamout){
//           maxamout=Number(newarr[i][2])
//           maxname=newarr[i][0]
//        }
//     }
//     console.log(maxname)

// }maxsalary([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])
function maxsalary(arr){
    let newarr=[]
    let max=0;
    let maxname=""
    
    for(let i=0;i<arr.length;i++){
        newarr.push(arr[i].split(","))
         if(Number(newarr[i][2])>max){
            max=Number(newarr[i][2])
            maxname=newarr[i][0]
         }
    
    }
    console.log(maxname)
    
    }maxsalary([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])
    














