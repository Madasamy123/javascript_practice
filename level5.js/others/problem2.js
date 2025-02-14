function countOccurrence(str) {
    let obj = {};
    let newStr = "";

    // Character occurrence count
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }

    // Convert object to string format
    for (let key in obj) {
        newStr += key + obj[key];
    }

    console.log(newStr);
}

countOccurrence("abcd");         // Output: a1b1c1d1
countOccurrence("aaabbcdaa");    // Output: a5b2c1d1
countOccurrence("asdasdgfgfasdasdasd"); // Output: a5s5d5g2f2