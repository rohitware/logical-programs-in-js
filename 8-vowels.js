function countvowels(str) {
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


//using for loop
function vowelCount(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i <= str.length - 1; i++) {
    if (vowels.includes(str[i])) {
      count++
    }
  }
  return count;
}
str2 = "dfljfOOUUjfore";
res = vowelCount(str2);
console.log(res);