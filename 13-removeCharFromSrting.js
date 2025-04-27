function removeChar(str, charToRemove) {
    // Create a RegExp dynamically with 'gi' flags
    const regex = new RegExp(charToRemove, 'gi');
    return str.replace(regex, '');
}

// Example usage:
console.log(removeChar("java@script", "@"));

console.log(removeChar("softyware", "y"));

console.log(removeChar("code mind", " "));


// using replace()
const str = "java@script";
console.log(str.replace("@", "")); 