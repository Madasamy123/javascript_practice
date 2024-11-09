let arr = [5, 8, 13, 21];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 13) {
    console.log(arr[i]); 
    return; // Loop continues even after finding 13
  }
}