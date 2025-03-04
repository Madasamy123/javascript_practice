function find(n){
    let count=1;
    let str="";
    for(let i=1;i<n.length;i++){
        if(n[i]==n[i-1]){
            count++
        }
        else{
            str+=n[i-1]+count
            count=1
        }
    }

    str+=n[n.length-1]+count;
    // let total;
    // if(str.length<n.length){
    //     total=str
    // }
    // else{
    //     total=n
    // }
    console.log(str);
}
find("aaabbccc")

find("abcddef")     
























