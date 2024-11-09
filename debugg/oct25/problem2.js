function findMax(arr) {
    let max = 0; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    console.log( max);
  }findMax([54,86,23,98,104,21])