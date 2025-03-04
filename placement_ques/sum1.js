


function countStr(str1, str2){
    let count=0;
    let arr=[];
    arr.push(str1);
    arr.push(str2);

    for(let i=0;i<arr.length;i++){

        count+=Number(arr[i])

    }

    console.log(count)

}

countStr( '123', '4568')