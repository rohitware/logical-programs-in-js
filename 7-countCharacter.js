function countCharactor(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            count++;
        }
    }
    return count;
}
let str1 = "Javascript";
res = countCharactor(str1);
console.log(res);

let str2 = "Do or Die";
res = countCharactor(str2);
console.log(res);