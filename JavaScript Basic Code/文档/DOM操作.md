## 事件

### JS效果

 1. 直接事件调用（多个就较为复杂）

    > 第一个JS兼容问题
    >
    > 在FF（火狐浏览器）下直接使用ID存在问题
    >
    > - 引入document.getElementByid();==一次只能获取一次==
    > - document.getElementByid在任何浏览器下均可使用
    >
    > 网页换肤

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div1 {
        width: 250px;
        height: 250px;
        margin: 0 auto;
        background-color: aqua;
      }
    </style>
  </head>
  <body>
    <div
      id="div1"
      onmouseover="document.getElementById('div1').style.width='300px';document.getElementById('div1').style.height='300px';document.getElementById('div1').style.background='red';"
      onmouseout="document.getElementById('div1').style.width='250px';document.getElementById('div1').style.width='250px';document.getElementById('div1').style.background='yellow';"
    ></div>
  </body>
</html>

```

2. 函数调用样式

   > 直接写在事件内的代码会很乱
   >
   > - 引入function函数，函数的基本形式
   > - 把JS从标签里放入函数里，类似css里的Class
   > - 变量的使用--别名
   >
   > 定义和调用
   >
   > - 函数定义：只是告诉系统有这个函数，不会实际执行
   > - 函数调用：真正执行函数里的代码
   > - 关系和区别

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div1 {
        width: 250px;
        height: 250px;
        margin: 0 auto;
        background-color: aqua;
      }
    </style>
    <script>
      function budai() {
        var h1 = document.getElementById("div1");			//document.getElementById兼容性问题
        h1.style.width = "300px";
        h1.style.height = "300px";
        h1.style.background = "red";
      }
      function budai2() {
        var h2 = document.getElementById("div1");			////不能直接使用div.style..,IE浏览器不兼容
        h2.style.width = "250px";
        h2.style.width = "250px";
        h2.style.background = "yellow";
      }
    </script>
  </head>
  <body>
    <div id="div1" onmouseover="budai()" onmouseout="budai2()">
      <!-- 这里添加的是方法名加上括号 -->
    </div>
  </body>
</html>

```

4. 等会给一个点击亮灯泡的效果

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        var h1 = document.getElementById("on");
        var h2 = document.getElementById("off");
        var h3 = document.getElementById("budai");
        h1.onclick = function () {
          h3.src = "./login/pic_bulbon.gif";
        };
        h2.onclick = function () {
          h3.src = "./login/pic_bulboff.gif";
        };
      };
    </script>
  </head>
  <body>
    <input type="button" value="点亮灯泡" id="on" />
    <img src="./login/pic_bulboff.gif" alt="" id="budai" />
    <input type="button" value="关掉灯泡" id="off" />
  </body>
</html>

```

5. 如果div是是显示，隐藏掉；如果是隐藏就显示出来

   > onmouseout 鼠标移除
   > onmouseover 鼠标移入
   > display  显示
   >
   > 点击按钮显示或隐藏Div（弹出菜单）

   

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div {
        width: 100px;
        height: 100px;
        /* display: none; */
        background-color: aquamarine;     /* 别忘了加颜色 */
      }
    </style>

    <script>
      function budai() {
        var h1 = document.getElementById("div");
        if (h1.style.display == 'none') {		//style指定大类型
          h1.style.display='block';				//记住这几种赋值方式
        }else{
            h1.style.display='none';
        }
      }
    </script>
  </head>
  <body>
    <input type="button" value="我是一个空间" onclick="budai()" /> 
    <div id="div"></div>
  </body>
</html>

```

7. className关键字的使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div1 {
        width: 100px;
        height: 100px;
        border: 1px solid red;                  
      }
      .Toye {
        background: yellow;                     /* 这里貌似不能更换背景 */
      }
    </style>
    <script>
      function budai() {
        var h1 = document.getElementById("div1");       /* 这里的单双引号都可以使用 */
        h1.className = "Toye"; //class是JS中的关键字
      }
    </script>
  </head>
  <body>
    <input type="button" value="布袋变黄" onclick="budai()" />
    <div id="div1"></div>
  </body>
</html>

```

### JS效果（2）

​	1.JS带参函数

>==点击按钮修改页面颜色==
>
>1.下面代码复用率太高

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div1 {
        width: 200px;
        height: 200px;
        border: 1px solid red; 
        background: white;                 
      }

    </style>
    <script>
      function budai() {
        var h1 = document.getElementById("div1");       
        h1.style.background='red';
      }
      function budai1() {
        var h1 = document.getElementById("div1");       
       h1.style.background='black';
      }
      function budai2() {
        var h1 = document.getElementById("div1");       
       h1.style.background='blue';
      }
    </script>
  </head>
  <body>
    <input type="button" value="布袋变黄" onclick="budai()" />
    <input type="button" value="布袋变黑" onclick="budai1()" />
    <input type="button" value="布袋变蓝" onclick="budai2()" />
    <div id="div1"></div>
  </body>
</html>

```

> 解决方法(单参函数)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div1 {
        width: 200px;
        height: 200px;
        border: 1px solid red;
        background: white;
      }
    </style>
    <script>
      function budai(n) {
        var h1 = document.getElementById("div1");
        h1.style.background = n;
      }
    </script>
  </head>
  <body>
    <input type="button" value="布袋变黄" onclick="budai('yellow')" />
    <input type="button" value="布袋变黑" onclick="budai('black')" />
    <input type="button" value="布袋变蓝" onclick="budai('red')" />
    <!-- 里面必须填入颜色名单词 -->
    <div id="div1"></div>
  </body>
</html>

<!-- 
       /* function budai(n) {
        var h1 = document.getElementById("div1");
        if (n == yello) {
          h1.style.background = "yello";
        } else if (n == block) {
          h1.style.background = "block";
        } else {
          h1.style.background = "blue";
        }
      }                             //废弃方法，没啥用！！小心点  
       */
 -->
```

点击按钮修改页面的宽度高度，背景颜色

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div1 {
        width: 200px;
        height: 200px;
        border: 1px solid red;
        background: white;
        display: none;
      }

    </style>
    <script>
     function ye(){
        var h1=document.getElementById('div1');
         h1.style.background='yellow';
     }
     function gao(){
        var h2=document.getElementById('div1');
         h2.style.height='600px';
     }
     function you(){
         var h3 = document.getElementById('div1');
         h3.style.display='block';
     }
    </script>
  </head>
  <body>
      <input type="button" value="布袋变黄"  onclick="ye()" />
      <input type="button" value="布袋变高"  onclick="gao()"/>
      <input type="button" value="布袋变有" onclick="you()" />
    <div id="div1"></div>
  </body>
</html>

```

> 简便方法
>
> 双参函数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #div1 {
        width: 200px;
        height: 200px;
        border: 1px solid red;
        background: white;
        display: none;
      }
    </style>
    <script>
      function set(name, cha) {
        var h1 = document.getElementById("div1");  	
           /* 只要有点的地方就可以使用[''] 
        例如：var h1 = document['getElemenyById("div1")']代替以上代码句子
        */
        h1.style[name] = cha;                   //name直接写会出大问题
      }
    </script>
  </head>
  <body>
    <input
      type="button"
      value="布袋变黄"
      onclick="set('background','yellow')"
    />
    <input type="button" value="布袋变高" onclick="set('height','600px')" />
    <input type="button" value="布袋变有" onclick="set('display','block')" />
    <div id="div1"></div>
  </body>
</html>

```

###  提取行间事件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <input type="button" value="我是一个按钮" id="b1">
      <script>
          var h1 = document.getElementById("b1");
          function h2(){            
              alert('a');
          }
          h1.onclick=h2;            //直接加入方法名
      </script>
  </body>
</html>

```

匿名函数

>不能讲匿名函数放在head标签中，否则会==出错==
>
>Uncaught TypeError: Cannot set property 'onclick' of null    at Dome.html:9   

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="button" value="我是一个按钮" id="b1" />
    <script>
      var h1 = document.getElementById("b1");
      h1.onclick = function () {
            alert("a");             //减少了名字的使用
      };
    </script>
  </body>
</html>

```

> 事件加载完之后执行：window.lonload 的意义 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {                 
        var h1 = document.getElementById("b1");
        h1.onclick = function () {
          alert("a");
        };
      };
    </script>
  </head>
  <body>
    <input type="button" value="我是一个按钮" id="b1" />
  </body>
</html>

```

行为，样式，结构分离就是不要在行间或者body中加入style，script样式

> ​	获取一组元素
>
> - getElementsByTagName();获取一组数组

```html
<script>
        window.onload= function(){
            var h1 = document.getElementsByTagName('div');
            alert(h1.length);				//得到div的长度
        }
</script>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        border: 2px solid red;
        float: left;
      }
    </style>
    <script>
      window.onload = function () {
        var h1 = document.getElementsByTagName("div");
        h1.style.background = "red";				//报错结果
      };
    </script>
  </head>
  <body>
    <div></div>
    <div></div>
    <div></div>
  </body>
</html>
Uncaught TypeError: Cannot set property 'background' of undefined
    at window.onload (Dome.html:18)

```

解决方法(1)数组下标的方法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        border: 2px solid red;
        float: left;
      }
    </style>
    <script>
      window.onload = function () {
        var h1 = document.getElementsByTagName("div");
        h1[0].style.background='red';
        h1[1].style.background='yellow';       //!!!
        h1[2].style.background='blue';
      };
    </script>
  </head>
  <body>
    <div></div>
    <div></div>
    <div></div>
  </body>
</html>
```

优化方法（2）for语句

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        border: 2px solid red;
        float: left;
      }
    </style>
    <script>
      window.onload = function () {
        var h1 = document.getElementsByTagName("div");
        for (var i = 0; i <= h1.length; i++) {
          h1[i].style.background = "red";                   //使用for循环使得背景颜色全部变为红色，考虑到如果不想全部不是红色。
        }

        /*  h1[1].style.background='yellow';
        h1[2].style.background='blue'; */
      };
    </script>
  </head>
  <body>
    <div></div>
    <div></div>
    <div></div>
  </body>
</html>

```

复选框全选，不选，反选的问题提出解决

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        var h0 = document.getElementById("quanxuan");
        var h1 = document.getElementById("div1");
        var h2 = h1.getElementsByTagName("input");
        h0.onclick = function () {
          for (var i = 0; i < h2.length; i++) {

              /* 不知道为什么不能加h2[i]["checked"] == true为前提，
              好像这里checked的默认属性就是true，所以直接放在下面的这条语句里面判断就能执行 */
            if (h2[i]["checked"] == true) {
              h2[i]["checked"] = false;
            } else {
              h2[i]["checked"] = true;
            }
          }
        };
      };
    </script>
  </head>
  <body>
    <input type="button" value="全选/全不选" id="quanxuan" /><br />
    <div id="div1">
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
    </div>
  </body>
</html>

```

## 