let a=[4,2,1,3,6,5];
for(let i=1;i<a.length;i++){
    let temp=a[i];
    let j=i-1;
    while(j>=0 && a[j]>temp){
        a[j+1]=a[j];
        j--;
    }
    a[j+1]=temp;
    
}
console.log(a);

