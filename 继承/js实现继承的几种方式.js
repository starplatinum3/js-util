// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
      console.log(this.name + '正在睡觉！');
    }
  }
  // 原型方法
  Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
  };

//   https://cloud.tencent.com/developer/article/1653999?from=15425


// 1. 原型链继承
// 核心： 将父类的实例作为子类的原型

function Cat(){ 
}
Cat.prototype = new Animal();
Cat.prototype.name = '猫';

//　Test Code
var cat = new Cat();
console.log(cat.name);//猫
console.log(cat.eat('鱼'));//猫正在吃：鱼
console.log(cat.sleep());//猫正在睡觉！
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true