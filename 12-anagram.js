function isAnagram(str1, str2) {
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '');

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

let arg1 = 'listen';
let arg2 = 'silent';
let res = isAnagram(arg1, arg2);
console.log(res);
