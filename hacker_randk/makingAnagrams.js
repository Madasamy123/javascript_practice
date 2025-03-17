function makingAnagrams(s1, s2) {
    let count = s1.length + s2.length; // Total length first consider

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                count -= 2; // Same character match => remove from both
                s2 = s2.slice(0, j) + s2.slice(j + 1); // Remove matched character from s2
             
                break;
            }
        }
    }

    return count;
}
