function subset(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) { 
        let isCheck = false;
        for (let j = 0; j < arr1.length; j++) { 
            if (arr1[j] == arr2[i]) {
                isCheck = true;
                break; 
            }
        }
        if (!isCheck) {  
            console.log(false);
            return;
        }
    }
    console.log(true); 
}


subset([1, 2, 3, 4, 5], [1, 2, 3]);  
