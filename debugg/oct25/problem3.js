function findAlphabeticallyFirst(arr) {
    let first = ""; 
    for (let i = 0; i < arr.length; i++) {
      if (a[i] > first) {
        first = a[i];
      }
    }
    return first;
  }findAlphabeticallyFirst(["orange","koyaka","apple","banana"])