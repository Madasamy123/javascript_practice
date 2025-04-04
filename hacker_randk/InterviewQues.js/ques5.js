function armstrongNum(n){

    let first=n.toString().split("");
    let sq=first.length;
    let sum=0;
    for(let i=0;i<first.length;i++){
        let second=Number(first[i]**sq)
        sum+=second;

    }
  
  if(sum==n){
    console.log("Armstrong Number")
  }
  else{
    console.log("Not a Armstrong Number")
  }



}armstrongNum(9474)