
function fibbinosi(n){
    let first=0;
    let second=1;
    

    for(let i=0;i<n;i++){
        console.log(first)
        let total=first+second;
        first=second;
        second=total;

    }

    console.log(first)

}fibbinosi(10)