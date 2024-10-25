let n=5
for(let i=0;i<n;i++){
    let str=""
    for(let j=0;j<=i;j++){
        str+="* "
    }
    console.log(str)
}

for(let i=0;i<n;i++){
    let str="";
    for(let j=n;j>i;j--){
        str+="* ";
    }
    console.log(str)
}

for(let i=1;i<=n;i++){
    let str="";
    for(let j=n;j>i;j--){
        str+="  ";
    }
    for(let k=1;k<=i;k++){
        str+="* ";
    }
    console.log(str)   
}

for(let i=0;i<=n;i++){
    let str="";
    for(let j=0;j<i;j++){
        str+="  ";
    }
    for(let k=0;k<n-i;k++){
        str+="* ";
    }
    console.log(str)   
}


for(let i=0;i<n;i++){
    let str="";
  
    for(let k=0;k<n;k++){
        str+="*"
    }
    console.log(str)
}
