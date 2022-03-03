 // 速度最快， 占空间最多（空间换时间）
 function unique2(array){
    var numMap = {}, resUniqueArr = [], type;
    for (var i = 0; i < array.length; i++) {
        type = typeof array[i];
        console.log("type");
        console.log(type);
        if (!numMap[array[i]]) {
            numMap[array[i]] = [type];
            resUniqueArr.push(array[i]);
        } 
        // 假如没有下面的 else 12 和 '12' 会当作一样，就是被去重
        else if (numMap[array[i]].indexOf(type) < 0) {
            // 没找到 type 是啥
            // 他是可能有多种type 吗
            // 12 和 '12' 不一样
            numMap[array[i]].push(type);
            resUniqueArr.push(array[i]);
        }
    }
    return resUniqueArr;
}

// https://zhuanlan.zhihu.com/p/84212558

// var arr=['12','32','89','12','12','78','12','32'];
var arr=['12','32','89',12,'12','78','12','32'];
   arr=unique2(arr);

   console.log("arr");
   console.log(arr);

//    如果没有else 
//    ['12', '32', '89', '78']

// 有else
// ['12', '32', '89', '78']


 //数组下标判断法
 function unique3(array){
    var n = [array[0]]; //结果数组
    for(var i = 1; i < array.length; i++) { //从第二项开始遍历
        if (array.indexOf(array[i]) == i) 
            n.push(array[i]);
    }
    return n;
}