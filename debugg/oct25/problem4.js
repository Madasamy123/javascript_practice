function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left > right) {  
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
          console.log(arr[mid])
      } else {
         console.log( mid - 1)
      }
    }
    
    
  }binarySearch([1,2,3,4,5,6,7],5)