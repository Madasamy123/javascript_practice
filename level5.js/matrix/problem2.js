let a=[[1,2],[3,4],[5,6]];
let b=[[2,3],[5,3],[4,3]]
    
    let lenA=a.length;
    let lenB=b.length;
    
    if(lenA==lenB && a[0].length==b[0].length){
        let wholearr=[];
        for(let i=0;i<lenA;i++){
            let ar=a[i];
            let br=b[i]
            
            let rowarr=[];
            
            for(let j=0;j<ar.length;j++){
                let add=ar[j]+br[j]
                rowarr.push(add)
            }
          wholearr.push(rowarr)
            
        }
        console.log(wholearr)
    }
    
    else{
        console.log("no")
    }