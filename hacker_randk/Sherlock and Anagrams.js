function sherlockAndAnagrams(s) {
    // Write your code here

    
        // Write your code here
          let map={}
        let count=0;
    
        for(let i=0;i<s.length;i++){
            for(let j=i;j<s.length;j++){
                let str=s.substring(i,j+1).split('').sort().join('');

                console.log(str)
                
                  if(map[str]){
                count+=map[str];
                map[str]++;

    
            }else{
                map[str]=1
            }
            }
    
          
    
        }
  

    console.log(count);

}sherlockAndAnagrams("abba")