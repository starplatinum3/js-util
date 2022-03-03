//查找一个对象(数组)是否存在于一个数组中
function myIndexOf(arr, el) {
    var result = false;
    if (arr instanceof Array && el instanceof Object) {
        for (var i in arr) {
            if(checkLen(arr[i],el)){
                result = recursiveFunc(arr[i], el);
            }
            if (result) {
                return i;
            }
        }
        return -1;
    }
    return -1;
}

//递归调用比较对象每个字段
var recursiveFunc = function (arr, o) {
    var result = false;
    if (o instanceof Object) {
        if (!(arr instanceof Object)) {
            return false;
        }
        for (var p in arr) {
            if(checkLen(arr[p],o[p])){
                result = recursiveFunc(arr[p], o[p]);
                if (!result) {
                    return false;
                }
            }
        }
        return true;
    }
    else {
        if (arr == o) {
            return true;
        }
        return false;
    }
}
// https://www.cnblogs.com/racyily/p/3532393.html
//判断两个对象长度是否相同。
var checkLen = function (o1, o2) {
    var count1 = 0,
        count2 = 0;
    if(o1 instanceof Object && o2 instanceof Object){
        for(var i in o1){
            count1++;
        }
        for(var p in o2){
            count2++;
        }
    }
    return count1==count2;
}