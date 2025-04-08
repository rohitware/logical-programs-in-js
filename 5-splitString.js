//5. WAP to How do you split a string into an array of substrings?

function splitString(str, delimiter) {
  return str.split(delimiter);
}
const str1 = "apple,orange,banana";
const str2 = "Stew,Bill,Jenny,Elon";

res1 = splitString(str1, ",");
console.log(res1);

res2 = splitString(str2, ",");
console.log(res2);