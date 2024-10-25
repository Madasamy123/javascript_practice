//Write code to print the below pattern, if n = 3
//1           1

//2 2       2 2

//3 3 3 3 3 3

function num(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=n;j++){
            str+=" ";
        }
        for(let k=1;k<=n;k++){
            str+=i
        }
        console.log(str)
    }

}num(3)