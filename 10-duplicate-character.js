function duplicateCharCount(str) {
    let charCount = {};

    for (let i = 0; i <= str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char in charCount) {
        if (charCount[char] > 1) {
            console.log(` duplicate character = ${char}, cont: ${charCount[char]}`);

        }
    }
}

let string1 = "hello";
duplicateCharCount(string1);

let string2 = "software developer";
duplicateCharCount(string2);
