这个文章标题似乎太长了。但是不点明又不大好。哈哈，暂且不要在意这些细节了，说说今天的主角 CSS的伪类选择器:nth-child，至于为什么还需要配角:nth-of-type,是因为我个人觉得这两个选择器的功能有点相近，估计也有初学者像我一样“粗心大意”，不注意区分它们之间的不同。再者说，两个有了对比也可以加深印象。

先看下两者的定义与用法

:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。

:nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素。

是不是觉得两者的定义有些类似，很容易混淆？接下来还是看看代码吧。对于程序猿来说，代码还是比文字更容易理解些的。


<!DOCTYPE html>
<html>
<head>
<style> 
p:nth-child(2)
{
background:#ff0000;
}
</style>
</head>
<body>

<h1>这是标题</h1>
<p>第一个段落。</p>
<p>第二个段落。</p>
<p>第三个段落。</p>
<p>第四个段落。</p>
<p>第五个段落。</p>

</body>
</html>
上面这段代码的主角是:nth-child    实现的效果是这样的:






接下来再看看，:nth-of-type 能给我们带来什么效果：

<!DOCTYPE html>
<html>
<head>
<style> 
p:nth-of-type(2)
{
background:#ff0000;
}
</style>
</head>
<body>

<h1>这是标题</h1>
<p>第一个段落。</p>
<p>第二个段落。</p>
<p>第三个段落。</p>
<p>第四个段落。</p>
<p>第五个段落。</p>

</body>
</html>


实现的效果如下图：





通过这样一对比是不是很明了？

咳咳，接下来，我想说说自己的理解，很通俗希望能做到让大家易懂吧。

如以上的代码，两段作用的代码段中的父元素都是body，其中

p:nth-child(2){background:#ff0000;}在代码段的效果是在body父元素中找到第2个子元素，如果第2个元素刚好匹配为p标签的话，则该元素背景色变成红色；如果第2个元素不匹配为p标签的话，则不显示。

p:nth-of-type(2){background:#ff0000;}在代码段的效果是在body父元素中找到p元素类型，并将p元素类型的第二个p标签的背景色变成红色。


这是我个人的理解，感觉这样理解起来就比较容易了，当然之后可以的话想借助比方或者会更加形象。

以上就是本人的愚见，有任何纰漏的地方还希望各位大神能指出来。

————————————————
版权声明：本文为CSDN博主「嵐烨」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u014516981/article/details/51661231