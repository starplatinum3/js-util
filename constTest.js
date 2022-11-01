// for(let i=0;i<12;i++){} console.log(i);
// ReferenceError: i is not defined
// const a = 12;a=13;
// console.log(a);
// TypeError: Assignment to constant variable.
const g = {b:3};
console.log(g.b);
g.b=12;console.log(g.b);
let [head,...tail] = [1,2,3,4];
conole.log(tail);