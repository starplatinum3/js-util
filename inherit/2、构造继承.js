
// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function () {
        console.log(this.name + '正在睡觉！');
    }
}
// 原型方法
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃：' + food);
};

//   https://cloud.tencent.com/developer/article/1653999?from=15425


function Cat (name) {
    Animal.call(this);
    this.name = name || 'Tom';//此处的name会覆盖掉父类的name，如果此处不设置name则会默认使用父类的name
}

// Test Code
var cat = new Cat();
console.log(cat.name);//Tom
console.log(cat.sleep());//Tom正在睡觉！
console.log(cat.eat("猫粮"));//此处会报错，通过构造继承的方式无法继承原型属性和方法
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true