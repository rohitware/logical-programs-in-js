//1) Using Predefined Methods

function reverseStringMethod(str) {
    return str.split('').reverse().join('');
}
const str1 = 'software';
res = reverseStringMethod(str1)
console.log(res);


//2) Without Using Predefined Methods

function reverseStringManual(str) {
    let reverseStr = '';
    for (i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
}
const str2 = "Web Developer";

res1 = reverseStringManual(str2);
console.log(res1);
