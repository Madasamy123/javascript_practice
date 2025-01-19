function addition(a,b){

    let first=a.length;
    let second=b.length;

    if(first==second && a[0].length==b[0].length){
        let result=[]

        for(let i=0;i<first;i++){
            let arr=[];
            for(let j=0;j<a[i].length;j++){
                let add=a[i][j]+b[i][j]
                arr.push(add);
            }
            result.push(arr)
        }
        console.log(result)
    }

}addition([[3,5,7],[2,6,8]],[[1,4,3],[5,2,9]])