function palindrom(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let reverse = cleanStr.split('').reverse().join('');

    if (cleanStr == reverse) {
        console.log(`given world ${str} is palindrom`);
    }

    else {
        console.log(`given world ${str} is not a palindrom`);
    }
}
str1 = 'madam';
palindrom(str1);


// Method 2: With Loop (No built-in methods)

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("world"));   
  