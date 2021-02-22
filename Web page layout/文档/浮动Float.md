## 内容概述


### 浮动Float

很早就提出这种布局,大公司为了对一些小浏览器进行兼容,依然使用的是Float进行布局

古老的属性Flaot 

Flex 比较新的技术兼容性得适配

margin属性的负值(重要)



Float 最早使用与文字环绕图片,目前也常用于布局

在CSS中3种方法对元素进行定位~布局

normal flow :标准流 常规流 文档流

- absolute positioning:绝对定位
- float 浮动(相对视口进行布局)

绝对定位和浮动都会是元素脱离文档流,达到灵活布局的效果

#### 规则

规则一

- 元素一旦浮动
  - 脱离文档流
  - 向左和向右移动,直到自己的边界紧贴着包含块(一般父元素)或者其他浮动元素边界为止

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      height: 200px;
      background-color: red;
    }

    strong {
      background-color: #0f0;
      float: left;
    }

    a {
      background-color: aquamarine;
      /* 遇到上一个浮动元素停止 */
      float: left;
    }
  </style>
</head>

<body>
  <div class="box">
    <span>我是span</span>
    <strong>我是Strong</strong>
    <a href="#">我是a元素</a>

  </div>
</body>

</html>
```



规则二:

- 浮动元素不能与行内级内容层叠,行内级内容将会被浮动元素推出
  	-   行内级元素,inline-block元素,块级元素的文字内容
  	-   

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      height: 200px;
      background-color: red;
    }

    .inner {
      display: inline-block;
      background-color: orange;
      width: 50px;
      height: 50px;
    }

    strong {
      background-color: #0f0;
      /* 元素跑到最左边顶部的位置,触发BFC机制,生成结界,让原本基线对其的元素对其没造成影响 */
      float: left;

    }

    a {
      background-color: aquamarine;
    }
  </style>
</head>

<body>
  <div class="box">
    我是块级文本元素
    <div class="inner"></div>
    <span>我是span</span>
    <strong>我是Strong</strong>
    <a href="#">我是a元素</a>
  </div>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      background-color: red;
      width: 500px;
    }
    /* 高度由文本的高度决定 */
    img {
      float: left;
    }
  </style>
</head>

<body>
  <div class="box">
    我国人均电
    <img src="https://inews.gtimg.com/newsapp_match/0/12929960994/0" alt="">
    到2018年后已超过700千瓦时。伴随特高压等高端电网的建设，“拉闸限电”这个词似乎已经离开我们多时，取而代之的是大江南北永不熄灭的万家灯火。
    到2018年后已超过700千瓦时。伴随特高压等高端电网的建设，“拉闸限电”这个词似乎已经离开我们多时，取而代之的是大江南北永不熄灭的万家灯火。
    到2018年后已超过700千瓦时。伴随特高压等高端电网的建设，“拉闸限电”这个词似乎已经离开我们多时，取而代之的是大江南北永不熄灭的万家灯火。
    到2018年后已超过700千瓦时。伴随特高压等高端电网的建设，“拉闸限电”这个词似乎已经离开我们多时，取而代之的是大江南北永不熄灭的万家灯火。
  </div>
</body>

</html>
```

规则三:

- 行内级元素,inline-block元素浮动之后,其顶部与所在行的顶部对其

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      background-color: red;
      width: 500px;
    }

    img {
      width: 150px;
      height: 150px;

      /* float: left; */
    }

    .inner {
      width: 100px;
      height: 100px;
      background-color: antiquewhite;
      display: inline-block;
      /* float: left; */

    }
  </style>
</head>

<body>
  <div class="box">
    我国人均电
    <img src="https://inews.gtimg.com/newsapp_match/0/12929960994/0" alt="">
    到2018年后已超过700千瓦时。伴随特高压等高端电网的建设，“拉闸限电”这个词似乎已经离开我们多时，取而代之的是大江南北永不熄灭的万家灯火。
    到2018年后已超过700千瓦时。
    <div class="inner"></div>
    伴随特高压等高端电网的建设，“拉闸限电”这个词似乎已经离开我们多时，取而代之的是大江南北永不熄灭的万家灯火。
    到2018年后已超过700千瓦时。伴随特高压等高端电网的建设，“拉闸限电”这个词似乎已经离开我们多时，取而代之的是大江南北永不熄灭的万家灯火。
    到2018年后已超过700千瓦时。伴随特高压等高端电网的建设，“拉闸限电”这个词似乎已经离开我们多时，取而代之的是大江南北永不熄灭的万家灯火。
  </div>
</body>

</html>
```



结合前面规则理解下面的操作

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      /* height: 300px; */
      background-color: red;
    }

    .inner1 {
      float: left;
      width: 100px;
      height: 100px;
      background-color: orange;
    }

    .inner2 {
      float: left;
      /* display: inline-block; */
      width: 200px;
      height: 200px;
      background-color: purple;
    }
  </style>
</head>

<body>

  <!--  三者之间的关系:
          positioning:absolute/fixted和float:left/right和display之间的关系

    现象解释:
        1.inner2进行左浮动/右浮动的时候,只会在当前自己行中浮动
        2.inner2进行左浮动时,inner在没有浮动时,inner会如何排布
        3.inner2进行左浮动时,inner在没有浮动时,但里面右文本,inner会如何排布 
        4.inner进行左浮动时,inner2也进行左浮动,那么inner1和inner2以此在第一行排布
        5.inner1和inner2都进行浮动时,丹父元素没有设置高度,脱离文档流,那么父元素的高度会消失(高度的坍塌)-->
  <div class="box">
    <div class="inner1"></div>
    <div class="inner2">
      我是一段文本
    </div>
  </div>
</body>

</html>
```

浮动四:

​	如果元素是向左或向右浮动,浮动元素的左边界不能超出包含块的左右边缘

浮动规则五:

- 浮动元素不能层叠
  - 如果一个元素浮动,另一个元素已经在那个位置了,后浮动的元素将紧贴着前一个浮动元素(左浮动找左浮动,右浮动找右浮动)
  - 如果水平方向剩余的空间不够显示元素,浮动元素将向下移动,知道充足的空间为止

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      width: 400px;
      height: 450px;
      background-color: red;
    }

    .inner1 {
      float: left;
      width: 100px;
      height: 100px;
      background-color: orange;
    }

    .inner2 {
      float: left;
      /* display: inline-block; */
      width: 200px;
      height: 150px;
      background-color: purple;
    }

    .inner3 {
      float: left;
      width: 250px;
      height: 250px;
      background-color: blue;
    }
  </style>
</head>

<body>


  <div class="box">
    <div class="inner1"></div>
    <div class="inner2">
      我是一段文本
    </div>
    <div class="inner3"></div>
  </div>
</body>

</html>
```

浮动六:

- 浮动元素的顶端不能超过包含块的顶端,也不能超过之前所有浮动元素的顶端

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      width: 400px;
      height: 450px;
      background-color: red;
    }

    .inner1 {
      width: 100px;
      height: 100px;
      background-color: orange;
    }

    .inner2 {
      /* display: inline-block; */
      float: left;
      width: 200px;
      height: 150px;
      background-color: purple;
    }

    .inner3 {
      float: left;
      width: 150px;
      height: 250px;
      background-color: blue;
    }
  </style>
</head>

<body>


  <div class="box">
    <div class="inner1"></div>
    <div class="inner2">
      我是一段文本
    </div>
    <div class="inner3"></div>
  </div>
</body>

</html>
```

 





重叠关系

- 标准元素:标准流中的元素不存在重叠
- 定位元素:定位元素会重叠到标准流上
  - 标准元素不能设置z-index属性,该属性是定位元素特许
  - 前提:必须是定位元素-非static

- 浮动元素:float left right none

  标准元素 - >浮动元素 ->定位元素

