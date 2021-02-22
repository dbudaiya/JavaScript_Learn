# Web前端

[TOC]

## Float浮动元素

### 定义浮动元素

> 脱离文档流，延迟父容器靠右或者靠左进行排列
>
> 主要属性：none ，left，right
>
> **float注意点**：
>
> 只会影响后面的元素。
> 内容默认提升半层
> 默认宽根据内容决定
> 换行排列
> 主要给块元素添加，但也可以给内联元素添加

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
  <head>
    <meta charset="utf-8" />
    <title>float</title>
    <meta
      name="author"
      content="Joy Du(飘零雾雨), dooyoe@gmail.com, www.doyoe.com"
    />
    <style>
		/* body{
			border: 2px black solid;
		}
      .test {
		  width: 100px;
		  height: 100px;
		  background-color: aqua;
			float:left;
      }
      .test1 {
		  width: 200px;
		  height: 200px;
		  background-color: blueviolet;
		  float: left;
      }
	  .test2 {
		  width: 300px;
		  height: 300px;
		  background-color: yellow;
		   float: left; 
      } */

	  ul{
		  margin: 0;
		  padding: 0;
		  list-style: none;
		  width: 300px;
		  height: 300px;
		  border: 1px black solid;

	  }
	  li{
		  width: 100px;
		  height: 100px;
		  background: red;
		  border: 1px yellow solid;
		  box-sizing: border-box;
		  float: left;
	  }
	  li:nth-child(1){
		  height: 110px;
	  }
	  li:nth-child(2){
		  height: 88px;
	  }
	  span:nth-of-type{					
		  float: right;
	  }
    </style>
  </head>
  <body>
	  <div>
		  <ul>
			  <li>1</li>
			  <li>2</li>
			  <li>3</li>
			  <li>4</li>
		  </ul>
	  </div>
	  <span>布袋鼠</span>
    <!-- <div class="test">我将出现在屏幕右方</div>
    <div class="test1">我将出现在屏幕右方</div>
    <div class="test2">我将出现在屏幕右方</div> -->
  </body>
</html>

```

### 清除浮动

> 上下排列：clear属性left，right，both，清除浮动。

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		#box1{width: 100px;height: 100px;background: red;float: right;}
		#box2{width: 200px;height: 200px;background: yellow;clear: both;/*clear:right*/}  //浮动全部清除
	</style>
</head>
<body>
	<div id="box1"></div>
	<div id="box2"></div>
</body>
</html>
```

> 比较复杂的，嵌套排列：
> 固定宽高：不推荐，不能把高度固定死，不适合做自适应的效果
> 父元素浮动：不推荐，因为父容器浮动也会影响到后面的元素
> overflow：hidden（BFC规范），如果有子元素想溢出，那么会受到影响
> display：inline-block（BFC规范），不推荐，父容器会影响到后面的元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		/* 嵌套框架 */
		#box1{
			width: 200px;
			/* height: 200px; */
			border: 1px solid black;
			/* overflow: hidden; */
			display: inline-block;
		}
		#box2{
			width: 100px;
			background-color: red;
			height: 100px;
			float: left;
		}
	</style>
</head>
<body>
	
	<div id="box1">
		<div id="box2">
		</div>
	</div>
	sasas
</body>
</html>
```

> 设置空标签：不推荐，会添加一个标签
> after伪类：推荐，是一个空标签的加强版，目前各大公司的做法
> (clear属性只会操作块元素，对内联没有效果)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		#box1{width: 200px;border: 1px black solid;}
		#box2{width: 100px;height: 200px;background: yellow;float: left;}
		
		/* .clear{
			clear: both;
		} */
		.clear:after{content:'';display:block;clear: both; }
	</style>
</head>
<body>
	
	<div id="box1 " class="clear!!!">
		<div id="box2">
		</div>
		<!-- <div class="clear"></div> -->
	</div>
	sasas
</body>
</html>
```

### position特性

>CSS position 属性用于指定一个元素在文档中的定位方式。top，right，bottom，left属性则决定了该元素的最终位置。
>
>position属性取值：
>static（默认)

引出position的原因

```html
​```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box1{width: 100px;height: 100px;background-color: antiquewhite;}
    .box2{width: 100px;height: 100px;background-color: aquamarine;margin:100px 0px 0px  100px;}
    .box3{width: 100px;height: 100px;background-color: brown;}
  </style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</body>
</html>
​```

```



### relative属性：相对定位

>如果没有定位偏移量，对元素没有任何影响
>不适用元素脱离文档流
>不影响其他元素布局
>left，top，right，bottom是相对于当前元素自身进行偏移的

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    
    .box1{width: 100px;height: 100px;background-color: antiquewhite;}
    .box2{width: 100px;height: 100px;background-color: aquamarine;
    position: relative; left: 100px;top:100px}
    .box3{width: 100px;height: 100px;background-color: brown;}
  </style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</body>
</html>
```



###  absolute属性：绝对定位

> 使得元素脱离文档流
>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box1{width: 100px;height: 100px;background-color: antiquewhite;position: absolute;}
    .box2{width: 100px;height: 100px;background-color: aquamarine;}
  </style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
</html>
```

>使内联元素支持宽高（内联具备块特性）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    span{width: 100px;height: 100px;background-color: aquamarine; position: absolute;}
  </style>
</head>
<body>
  <span>这是一个内联元素</span>
</body>
</html>
```

>使块元素默认宽根据内容决定（让块具备内联的特性）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div{background-color: red;position: absolute;}
  </style>
</head>
<body>
  <div>这是一个块</div>
</body>
</html>
```

> 如果有定位祖先元素相对于定位祖先元素发生偏移，没有定位祖先元素相对于整个文档发生偏移（绝对，相对，固定）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box1{width: 300px;height: 300px;border: 1px black solid;margin:200px;position: relative;}
    .box2{width: 100px ;height: 100px;background-color: red;left: 0px;bottom: 0;position: absolute;}
  </style>
</head>
<body>
  <div class="box1">
    <div class="box2">
      这是对一个移动的块
    </div>
  </div>
</body>
</html>
```

### fixed固定定位

> 使元素完全脱离文档流
> 使内联元素支持宽高( 让内联具备块特性)
> 使块元素默认宽根据内容决定(让块具备内联的特性)
> 相对于整个浏览器窗进行偏移,不受浏览器滚动条的影响

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{height: 1960px;}
    .box1{width: 300px;height: 300px;border: 1px black solid;margin:0 auto;}
    .box2{width: 100px ;height: 100px;background-color: red;left: 0px;top: 0;position: fixed;;}
  </style>
</head>
<body>
  <div class="box1">
    <div class="box2">
      固定定位
    </div>
  </div>
</body>
</html>
```

### sticky黏性定位

> 在指定的位置

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
      height: 1960px;
    }
    div{
      position: sticky;
      top: 0;
      background-color: aquamarine;
    }
  </style>
</head>
<body>
    <p>aaaaaa</p>
    <p>aaaaaa</p>
    <p>aaaaaa</p>
    <p>aaaaaa</p>
    <p>aaaaaa</p>
    <p>aaaaaa</p>
    <div>这是真的牛逼</div>
    <p>安静的疤痕不符合改变</p>
    <p>安静的疤痕不符合改变</p>
    <p>安静的疤痕不符合改变</p>
    <p>安静的疤痕不符合改变</p>
    <p>安静的疤痕不符合改变</p>
    <p>安静的疤痕不符合改变</p> 
</body>
</html>
```

###  Z-index优先级属性

>  常见代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box1{width: 250px;height: 250px;position: absolute;background-color: yellow;z-index: 0;}
    .box2{width: 250px;height: 250px;position: absolute;top: 110px;left: 110px;background-color: red;z-index: -1;}
  </style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
</html>
```

> 嵌套优先级:对指定的父级优先级与同级的box2比较。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #prant{width: 250px;height: 250px;border: 1px solid black;position: absolute;z-index: 0;}
    .box1{width: 250px;height: 250px;position: absolute;background-color: yellow;z-index: -2;}
    .box2{width: 250px;height: 250px;position: absolute;top: 110px;left: 110px;background-color: red;z-index: -1;}
  </style>
</head>
<body>
  <div id="prant">
    <div class="box1"></div>
  </div>
  <div class="box2"></div>
</body>
</html>
```

### 定位实现居中和装饰点

> 实现盒子居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.box1{width: 300px;height: 300px;border: 3px solid red;position: relative;}
		.box2{width: 100px;height: 100px;background-color:black;position: absolute;top: 150PX;left: 150PX;margin: -50px;}
	</style>
</head>
<body>
	<div class="box1">
		<div class="box2">

		</div>
	</div>
</body>
</html>
```

> 装饰点

![装饰点](\imges\2.png)

````#html
<style>
#装饰点:before{content: "";display: block;width: 3px;height: 3px;position: absolute;left: 8px;margin-top: -2px ;top: 50%;}
</style>
````

## 项目实践---博文尚美

### PC端布局

>通栏：自适应浏览器的宽度
>版心：固定一个宽度，并且让容器居中



### CSS添加省略号

> width:
> 必须有一个固定的宽
>
> 
>
> text-oveflow：ellipsis
>添加省略号

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .content {
        width: 100px;
        border: 1px black solid;
      }
    </style>
  </head>
  <body>
    <div class="content">
      测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章
    </div>
  </body>
</html>
```

>white-space：nowrap
>不让内容折行

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      .content {
        width: 100px;
        border: 1px red solid;
		white-space: nowrap;
      }
    </style>
  </head>
  <body>
    <div class="content">
      测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章
    </div>
  </body>
</html>

```

>overflow：hidden
>隐藏溢出的内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      .content{
        width: 100px;
        border: 1px red solid;
		white-space: nowrap;
		overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div class="content">
      测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章
	  测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章
    </div>
  </body>
</html>

```

### CSS精灵及好处

>CSS雪碧图

```html

```

> CSS圆角

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 300px;
        height: 300px;
        border: 2px red solid;
        border-radius: 20px;
        /* border-radius: 50%; //正圆 */
        /* border-radius: 10px 20px ; //上下角 */
        /* border-radius: 10px 20px 30px 40px ;  //上右下左 */
        /* border-radius: 20px 40px;  //椭圆 */
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>

```

>  半圆

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        backgroud-color:red;
        width: 300px;
        height: 150px;   /* !!!将高度改小点就形成了半圆 */
        border: 2px red solid;
        border-radius: 150px 150px 0 0 ;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>

```

## HTML和CSS发展历史

> 视频有有详细讲解

![发展历史](\imges\Screenshot_20200430_083756_tv.danmaku.bili.jpg)

### ![](\imges\Screenshot_20200430_084316_tv.danmaku.bili.jpg)

#### HTML与XHTML的区别（ms)

> DICTYPE文档及其编码
> 元素大小写(xhtml代码须小写，html不区分大小写)
> 属性布尔值
> 属性引号(xhtml必须加上属性引号title=”布袋鼠“)
> 图片ALT属性（<img src="" alt="">）
> 单标签写法（Xhtml单标签必须在后面加上斜线  ' \ \'  ）
> 双标签闭合 （xhtml中必须写完整双标签）

####  strong,em,b与i标签

> 各自的区别：是否具备语义化

<img src="\imges\187270@1588138855..jpg" style="zoom:50%;" />

![]()

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <strong>文本1</strong>
  <p>文本2</p>
  
  <em>文本3</em>
  <i>文本4</i>
</body>
</html>
```

####  引用标签

> 部分介绍在VS Code中查看MSDN网站（很全很完备）

![](\imges\120246@1588139530@2.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <abbr title="World Health Organization">WhO</abbr>成立于1998年12月89日
    <blockquote></blockquote>
    <q></q>
    <address></address>
    <cite></cite>
  </body>
</html>

```

### iframe嵌套页面

![](C:\Users\DUHAI\Documents\我的坚果云\Web前端\imges\86518@1588139985..jpg)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      iframe {
        width: 100%;
        height: 560px;
      }
    </style>
  </head>
  <body>
    <iframe src="http://www.baidu.com" frameborder="0" scrolling="no"> </iframe>
  </body>
</html>

```

### br与wbr标签

> br标签表示换行，wbr标签表示软换行

## HTML新语义化标签

> header ：页眉
> footer：	页脚
> main：主体
> hgroup：标题组合
> nav：导航

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<header>
		<hgroup>
			<h1>主标题</h1>
			<h2>副标题</h2>
		</hgroup>
		<nav>
			<ul>
				<li>首页</li>
				<li>论坛</li>
				<li>裁决</li>
			</ul>
		</nav>
	</header>
	<main></main>
	<footer></footer>
</body>
</html>
```

==注解：header，main，footer在一个网页中只能出现一次==

> article：独立的内容
> aside：辅助信息的内容
> section：区域
> figure：描述图像与视频
> figcaption：描述图像或视频的标题部分

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<header>
		<hgroup>
			<h1>主标题</h1>
			<h2>副标题</h2>
		</hgroup>
		<nav>
			<ul>
				<li>首页</li>
				<li>论坛</li>
				<li>裁决</li>
			</ul>
		</nav>
	</header>
	<main>
		<article>
			<section>
				<ul>
					<li>
						<figure>
							<img src="" alt="">
							<figcaption>
								水果篮子
								<br>
								十二生肖
							</figcaption>
						</figure>
					</li>
					<li>
						<figure>
							<img src="" alt="">
							<figcaption>
								水果篮子
								<br>
								十二生肖
							</figcaption>
						</figure>
					</li>
				</ul>
			</section>
			<section></section>
		</article>
		<aside></aside>
	</main>
	<footer></footer>
</body>
</html>
```

>datalist：选项列表
>datails  /  summary：文档细节   /  文档标题
>progress  /meter ：定义进度条 / 定义度量范围
>time：定义日期或时间
>mark：带有记号的文本

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <hgroup>
        <h1>主标题</h1>
        <h2>副标题</h2>
      </hgroup>
      <nav>
        <ul>
          <li>首页</li>
          <li>论坛</li>
          <li>裁决</li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <section>
          <input type="text " list="elem" />
          <datalist id="elem">
            <option value="a"></option>
            <option value="ab"></option>
            <option value="abc"></option>
            <option value="acd"></option>
            <option value="aas"></option>
          </datalist>
          <datalist>
            <summary>HTML</summary>
            <p>超文本标记语言</p>
          </datalist>
          <progress min="0" max="10" value="8"> </progress>
          <meter min="0" max="100" value="80" low="10" high="60"></meter>
          <p>今天是<time title="2-18">军人节</time>, ......</p>
          <p>今天是<mark>劳动节</mark>，。。。。</p>
        </section>
        <section></section>
      </article>
      <aside></aside>
    </main>
    <footer></footer>
  </body>
</html>
```

###  表格扩展

![](\imges\580F073A43D9543BD98CEB85BC20F385.png)

==还有部分属性没有展示出来==

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table {
        width: 200px;
        height: 200px;
        empty-cells: hide;
        border-collapse: collapse;    
      }
    </style>
  </head>
  <body>
    <div class="content">
      <table border="1">
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </body>
</html>
```

## 表单控件

####  表单控件之美化控件

>
> 与传统的复选框比较美化后的效果

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<label>
		白鸥：<input type="checkbox">
		<p>布袋鼠</p>                <!-- 点击p标签时，复选框也会被选中，即复选框作用在label中 -->
	</label>
</body>
</html>
```

>伪类：        :checked

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		label input{display: none;}
		label div{width: 28px; height: 28px; background: url("背景图片（28*56尺寸）") 0 -28px;}  
		label input:checked +div{background-position: 0 0;}  /* 兄弟选择器 */
	</style>
</head>
<body>
	<label>
		<input type="checkbox">
		<p>布袋鼠</p>               
	</label>
</body>
</html>
```

> 定位：position + opacity

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		label input{display: none;}
		label div{width: 86px; height: 34px ;background: url("一张86*34大小的图片") ;}
	</style>
</head>
<body>
	<label for="">
		<input type="file">
		<div></div>
	</label>
</body>
</html>
```

#### 表单新控件

![](\imges\EED62216542878E91CC2411E6B60FF32.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<form action="http://www.qq.com">
		<input type="email">
		<input type="url">
		<input type="number">
		<input type="range">
		<input type="search">
		<input type="color">
		<input type="time">
		<input type="tel">
		<input type="date">
	
	</form>
</body>
</html>
```

#### 表单属性

> autocomplete：自动完成 默认on 、off
> autofocus ：获取焦点
> required：不能为空
> pattern：正则验证
>
> ==其中重要的四个属性，演示可以在w3c中查看到==

####  表单扩展

> method :数据传输方式
> enctype: 数据传输方式
> name/value:数据的键值对
>
> ==演示可以在w3c中查看到==

#### BFC规范

![](C:\Users\DUHAI\Documents\我的坚果云\Web前端\imges\t.jpg)

> 触发BFC的举动
>
> 触发BFC规范的元素，可以形成一个独立的容器。不受到外界的影响，从而解决一些布局问题

![](\imges\i.jpg)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .div1 {
        width: 100px;
        height: 100px;
        background-color: red;
        margin-bottom: 30px;
      }
      .div2 {
        width: 100px;
        height: 100px;
        background-color: blue;
        margin-top: 30px;
	  }
	  .box{
		  display: flex;
	  }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="div1"></div>
    </div>
    <div class="box">
      <div class="div2"></div>
    </div>
  </body>
</html>
```

#### 浏览器内核与浏览器前缀

![](\imges\a.jpg)

### Transition 

### flex弹性布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .par{
            width: 300px;
            height: 300px;
            margin: 30px auto;
            display: flex;				
            border: 2px solid red;
        }
        .budai{
            width: 100px;
            height: 100px;
            background-color: aqua;
            margin: auto;				
        }
    </style>
  </head>
  <body>
      <div class="par">
          <div class="budai"></div>
      </div>
  </body>
</html>
```

flex-direction

> flex-direction是用来控制子项整体布局方向，是从右向左还是从左向右，是从上往下还是从下往上

![](../VS Code/imges/497859@1589366381..jpg)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .par{
            width: 300px;
            height: 300px;
            margin: 30px auto;
            display: flex;
            border: 2px solid red;
            flex-direction: row-reverse;        /* 这个属性可以改变改变 ，知道每个属性是干嘛的就没事聊，有影响。*/
        }
        div1{
            background-color: aqua;
            width: 50px;
            height: 50px;

        }
    </style>
  </head>
  <body>
      <div class="par">
         <div1>2</div1>
         <div1>3</div1>
         <div1>4</div1>
         <div1>5</div1>
      </div>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .par{
            width: 300px;
            height: 300px;
            margin: 30px auto;
            display: flex;
            border: 2px solid red;
        }
        div1{
            background-color: aqua;
            width: 50px;
            height: 50px;

        }
    </style>
  </head>
  <body>
      <div class="par">
         <div1>2</div1>					//里面的内容达到一定值是就会出现溢出
         <div1>3</div1>
         <div1>4</div1>
         <div1>5</div1>
         <div1>2</div1>						/*整个盒子会达到进行适应效果*/
         <div1>3</div1>
         <div1>4</div1>
         <div1>5</div1>
         <div1>2</div1>     
      </div>
  </body>
</html>
```

![](/imges/891052@1589366911..jpg)

```html

```

