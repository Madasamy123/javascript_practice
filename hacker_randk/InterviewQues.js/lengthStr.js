
function highestStr(words,target){


    let newarr=[];
    for(let i=0;i<words.length;i++){
        if(words[i][0]==target){
            newarr.push(words[i])

        }


    }
  
    let longestword="";
    let max_length=0;
    for(let j=0;j<newarr.length;j++){

        if(newarr[j].length>max_length){
            max_length=newarr[j].length;
            longestword=newarr[j];
        }

       

    }
    console.log(longestword)
  

}highestStr(["employeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","elebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","tiruvannamalai","umbrella","ehhhhhhhhhhhhhhhhh"],"e")