function findMaxSalaryEmployee(data){
    let emptyarr=[]
    let maxnum=0
    let name=""

    for(let i=0;i<data.length;i++){
        emptyarr.push(data[i].split(","))
        if(Number(emptyarr[i][2]>maxnum)){
            maxnum=Number(emptyarr[i][2])
            name=emptyarr[i][0]
        }

    }
    console.log(name)
}findMaxSalaryEmployee([ "Emily,24,850000000", "Sophia,29,450000", "Olivia,31,1200000" ])

function findMaxSalaryEmployee(data){
    let emptyarr=[]
    let maxnum=0
    let name=""

    for(let i=0;i<data.length;i++){
        emptyarr.push(data[i].split(","))
        if(Number(emptyarr[i][2]>maxnum)){
            maxnum=Number(emptyarr[i][2])
            name=emptyarr[i][0]
        }

    }
    console.log(name)
}findMaxSalaryEmployee([ "Emily,24,850000000", "Sophia,29,450000", "Olivia,31,1200000" ])