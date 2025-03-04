// let arr = [[0, 9, 3], [8, 1, 6], [7,2,4]];
// output = sort arr


function sortarr(arr){
  
    // let wholearr=[];

    for(let i=0;i<arr.length;i++){
        // let newarr=[];
        for(let j=0;j<arr[i].length;j++){

           if(arr[i][j]>arr[i][j+1]){
            let temp=arr[i][j];
            arr[i][j]=arr[i][j+1];
            arr[i][j+1]=temp;
         
           }
        //    console.log(arr[i]);
        //    newarr.push(arr[i][j])
        }
    //  wholearr.push(newarr);

    }
    // console.log(wholearr);
    console.log(arr);
 

}sortarr( [[11, 9, 3], [8, 1, 6], [7, 2, 4]])