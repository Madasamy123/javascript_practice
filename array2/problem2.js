let fruit=["apple","banana","orange","grapes","lemon","jack"];
let empty=[];
let store= 0 ;
for(i=fruit.length-1;i>=0;i--){
    store = fruit[i];
    let total=empty.push(store);
    console.log(total);
}console.log(empty);
