// function (x) {
//     return x * x;
// }

minusOrNot= x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return - x * x;
    }
}

console.log("minusOrNot(2)");
console.log(minusOrNot(2));


pi=() => 3.14

// // 两个参数:
// (x, y) => x * x + y * y

// 无参数:
// console.log(() => 3.14);

console.log("pi");
console.log(pi());

// // 可变参数:
multi_arg=(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

// 14
multi_arg_res=multi_arg(2,3,4,5)
console.log("multi_arg_res");
console.log(multi_arg_res);

// // ok:
// x => ({ foo: x })