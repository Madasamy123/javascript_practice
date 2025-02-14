function countfruit(arr){
    
    const first=new Map();
    
    for(let item of arr){
        first.set(item,(first.get(item)||0)+1)
    }
    return first;
    
}console.log(countfruit(["apple","banana","orange","apple","orange"]))