function duplicate(n) {
    let seen = new Set();
    for (let i = 0; i < n.length; i++) {
        if (seen.has(n[i])) {
            console.log(n[i]); 
            return;
        }
        seen.add(n[i]);
    }
    console.log("No duplicates found");
}

duplicate("abcabd");