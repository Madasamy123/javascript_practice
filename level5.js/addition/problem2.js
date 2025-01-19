let a=[[1,2],[3,4]]
let b=[[1,2],[3,4]]

let lenA=a.length;
let lenB=b.length;

if(lenA==lenB && a[0].length==b[0].length ){
    let empty=[]

    for(let i=0;i<=lenA-1;i++){
        let array=[]
        for(let j=0;j<a[i].length;j++){
            let add=a[i][j]+b[i][j]
            array.push(add)
        }
        empty.push(array)

      
    }
    console.log(empty)
   
}



