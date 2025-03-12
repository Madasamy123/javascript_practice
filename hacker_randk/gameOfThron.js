function anagramPallindrom(s){

    let arr=s.split("");
    let obj={};

    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }
        else{
            obj[arr[i]]=1
        }
    }

    var count=0;

    for(let ans in obj){
        if(obj[ans]%2!=0){
            count++;
        }
    }

    if(count<=1){
        return "YES";
    }
    else{
        return "NO";
    }

}console.log(anagramPallindrom("aaabbbb"))