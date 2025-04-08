// WAP to print or log the last character of the given strings

function getLastChar(str) {
  return str.charAt(str.length - 1);
}
const str = `Hey, my friend, Programming Language`;
const str1 = `I am learning logical programs`;
const str2 = `Angular`;
let res1 = getLastChar(str);
console.log(res1);

let res2 = getLastChar(str1);
console.log(res2);

let res3 = getLastChar(str2);
console.log(res3);
