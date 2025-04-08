//4. WAP to check whether given strings contains word ‘UI’ or not?

function containsUI(str) {
  return str.includes("UI");
}

const str1 = `React - UI Developer`;
const str2 = `UI Developer`;
const str3 = `Front end and backend technologies`;

res1 = containsUI(str1);
console.log(res1);

res2 = containsUI(str2);
console.log(res2);

res3 = containsUI(str3);
console.log(res3);
