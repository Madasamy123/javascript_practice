let arr=[3, 4, 1, 5, 1, 9, 3];
let empty=[];
for(let i=0;i<arr.length;i++){
    let isDuplicate=false;
    for(let j=0;j<empty.length;j++){
        if(arr[i]==empty[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
        empty.push(arr[i]);
    }
}
console.log(empty);