function countvowels (str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
str1 = "Hello Javascript";
res1 = countvowels(str1);
console.log(res1);

////

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let result = [];

  for (let char of str) {
    if (vowels.includes(char)) {
      result.push(char);
    }
  }
  return result;
}
str1 = "Hello Javascript";
res1 = countVowels(str1);
console.log(res1);
