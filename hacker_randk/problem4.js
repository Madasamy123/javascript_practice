function birthdayCakeCandles(candles) {
    // Validate input
    if (!Array.isArray(candles) || candles.length === 0) {
        console.log("Please provide a valid array of numbers.");
        return;
    }

    // Find the maximum candle height
    let highvalue = 0;
    for (let i = 0; i < candles.length; i++) {
        if (highvalue < candles[i]) {
            highvalue = candles[i];
        }
    }

    // Count how many candles have the maximum height
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === highvalue) {
            count++;
        }
    }

    console.log(count); // Output the final count
}

// Example usage:
birthdayCakeCandles([4, 4, 1, 3]); // Output: 2
