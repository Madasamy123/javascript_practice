
function bonAppetit(bill, k, b) {
    // Write your code here
    
    let totalCount=0;
    for(let i=0;i<bill.length;i++){
        totalCount+=bill[i];
        
    }
     let second=(totalCount-bill[k])/2;
    
    if(second==b){
         console.log("Bon Appetit")
    }
    
    else{
    
       let ans=b-second;
       console.log(ans)
       
    }
    
   
  
   

    

}
bonAppetit([3,10,2,9],1,8)