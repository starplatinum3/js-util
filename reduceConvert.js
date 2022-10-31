 // 把 arr 转成 {0：'男'，1：'女'} 这样子
 const arr = [{
     label: '男',
     value: '0'
 }, {
     label: '女',
     value: '1'
 }];

 const obj = arr.reduce((previousValue, currentValue) => {
     // let  key=[obj.value]
     // console.log("key");
     // console.log(key);

     let objValue = currentValue.value
     console.log("=======");
     console.log("objValue");
     console.log(objValue);
     //     objValue
     // 0
     // objValue
     // 1

     // let  rest=...narr
     //    return { ...narr, key: obj.label }
     // return { 
     //     ...narr, 
     //     obj.value: obj.label 
     // }

     // js 展开
    //  为什么 js ... 展开的时候 后面新加的 key 是列表呢，也有可能是我理解错了 
    // 我看不懂这个语法。。

     console.log("previousValue");
     console.log(previousValue);
     let extend = {
         ...previousValue
     }
     console.log("extend");
     console.log(extend);
     // 为什么要 列表
     let now = {
         ...previousValue,
         [currentValue.value]: currentValue.label
     }

    // 为啥 js obj key 是列表 
    // 这样子语法错了。。
    //  let now = {
    //     ...previousValue,
    //     currentValue.value: currentValue.label
    // }
     console.log("now");
     console.log(now);
     return now
 }, {});
 console.log("obj")
 console.log(obj)

//  =======
// objValue
// 1
// previousValue
// { '0': '男' }
// extend
// { '0': '男' }
// now
// { '0': '男', '1': '女' }
// obj
// { '0': '男', '1': '女' }

//  =======
// objValue
// 1
// narr
// { '0': '男' }
// extend
// { '0': '男' }
// now
// { '0': '男', '1': '女' }
// obj
// { '0': '男', '1': '女' }

// 。。。。。

 //  obj
 // { '0': '男', '1': '女' }
 // ————————————————
 // 版权声明：本文为CSDN博主「sunhongyu007」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
 // 原文链接：https://blog.csdn.net/m0_51708342/article/details/118034175