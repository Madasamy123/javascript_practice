  function countOdds(low, high) {
    let count=0;
    for(let i=low;i<=high;i++){
        if(i%2!=0){
           count++

        }
    }
     console.log(count);
    
};
countOdds(8,10);