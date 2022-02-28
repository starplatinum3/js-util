
// https://zhuanlan.zhihu.com/p/258068663

const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]

// 方法一：使用flat()

const res1 = arr.flat(Infinity);
console.log()
// 方法二：利用正则

const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');

const arr = [1, [2, [3, [4, 5]]], 6].toString().split(',');

// 数组扁平化，方法二改良
JSON.stringify(arr).replace(/\[|\]/g, '').
split(',').map(item => Number(item))