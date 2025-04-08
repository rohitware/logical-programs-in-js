function countCharactor(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a'|| str[i] === 'A') {
            count++;
        }
    }
    return count;
}
let str1 = "Javascript A A";
res = countCharactor(str1);
console.log(res);

let str2 = "Do A or Die";
res = countCharactor(str2);
console.log(res);