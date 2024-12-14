//Given an array of strings, find the string which comes  alphabetically order without using any library functions. 




    function alpaorder(arr) {
        // Convert all strings to lowercase for case-insensitive comparison
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                // Compare strings lexicographically
                if (arr[i].toLowerCase() > arr[j].toLowerCase()) {
                    // Swap elements
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    
        console.log(arr);
        return arr;
    }
    
    alpaorder(["maddy", "Samy", "Apple", "karthi", "Abuthujothi"]);
    

