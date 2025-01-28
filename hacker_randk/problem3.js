function miniMaxSum(arr) {
    // Calculate the total sum of all numbers
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    
    let maxNum = -Infinity; // Initialize maxNum to the smallest possible value
    let minNum = Infinity;  // Initialize minNum to the largest possible value

    // Calculate the minimum and maximum sums
    for (let i = 0; i < arr.length; i++) {
        let sumExcludingCurrent = totalSum - arr[i];
        maxNum = Math.max(maxNum, sumExcludingCurrent); // Update maxNum
        minNum = Math.min(minNum, sumExcludingCurrent); // Update minNum
    }
    
    console.log(minNum + " " + maxNum);
}miniMaxSum([1,2,3,4,5])
