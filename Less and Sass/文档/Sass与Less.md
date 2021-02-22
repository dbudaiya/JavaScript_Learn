# Sass与Less 

[toc]

## 一. Sass与Less环境搭建

Sass和Less都属于CSS预处理器，CSS预预处理器定义了一种新的语言，其实基本思想是用一种专门的编程思想，为CSS增加了一些编程的特性，如：变量，语句，函数，继承等概念。将CSS作为目标生成文件，然后开发者就只要使用这种语法进行CSS编码工作

**[Sass官网]( https://www.sass.hk/ )     [Less官网](http://lesscss.cn/)**

1. Less的后缀为style.less,Sass的后缀为style.scss
2. Less保存后自动生成一个style.css,Sass保存生成一个style.min.css(压缩版)

## Sass与Less注释-变量-插值-作用域

1. 注释

   > Less和Sass中效果一样，单行不会被编译出来，在stye.min.css中单行和多行都不会被编译出来

```scss
body{width: 110px;}

//单行注释   不会被编译出来

/* 
    多行注释，就是CSS的注释方式，会被编译出来
*/
```

2. 变量

   > Less采用`@`符号

```less
@number:123px;          
.box2{
    width: @number;
    height: @number;

}
```

> Sass采用`$`符号

```scss
$number:123px;          
.box2{
    width: $number;
    height: $number;

}
```

3. 插值

   >Less采用`@{name}`形式

```less
body{height: 100px;}

@number:123px;   
@key : padding; 
@i : 2;      				//!
.box@{i}{
    width: @number;
    height: @number;
    @{key}:20px;			//!
}
```

> Sass采用`#{$name}`形式

```scss
body{width: 110px;}

$number:123px;
$key :20px; 	
$i : 3;       				//!
.box#{$i}{
    width: $number;
    height: $number;
    #{$key} :20px;			//!
}

```

4. 作用域

> 与局部变量概念相似（就近原则）

```less
body{height: 100px;}

.box3{
    height: @num1;   				
    @num1:2px;				
    padding: @num1;
}							//这里height和padding得到的都是@num1的值
```

> Sass的得到的则是==上一次最近的height==的值

```scss
    body{height: 100px;}

    //sass的作用域是有顺序的
    .box3{
        height: $num1;   
        $num1:2px;
        padding: $num1;
    }
```

## Sass与Less嵌套之选择器-伪类-属性

1. 嵌套

> ==貌似Less的嵌套和Sass的嵌套一样==。

```less
body{height: 100px;}

ul{
    list-style: none;
    li{
        float: left;
        div{
            width: 100px;
            height: 100px;
            margin-top: auto;
        }
    }
}
```

2. 伪类

   > less伪类的使用和Sass伪类是一样的。加上`&`符号

   ```less
   body{height: 100px;}
   
   ul{
       list-style: none;
       li{
           float: left;
           div{
               width: 100px;
               height: 100px;
               margin-top: auto;
           }   
       }
       &:hover{
           color: yellow;
       }
   }
   ```

3. 属性

   > 属性也可以做成嵌套的方式

```scss
    body{height: 100px;}

    ul{
        list-style: none;
        li{
            float: left;
            div{
                width: 100px;
                height: 100px;
                margin-top: auto;
            }   
        }
        &:hover{
            color: yellow;
            //less没有这种功能
            font: {							//注意这里留有空格
                size: 10px;
                weight: bold;           
            }
        }        
    }
```

## Sass 与Less运算之单元-转义-颜色

> 基本是使用Less

```less
body{height: 100px;}

@num2: 100px;
.box3{
    width: @num2 * 3;
    height: @num2 + 10em;        //110px
    margin: 10em + @num2;       //110em
    font: 20px /1.5;            
    padding: ~"20px /1.5";      //无转义
}
```

> 这里sass没有Less灵活。

```scss
    body{height: 100px;}
    body{height: 100px;}

    $num2: 100px;
    .box3{
        width: $num2 * 3; 
        //单位不同，Sass是不能对其进行运算
        height: $num2 + 10em;       
        margin: 10em + $num2;      
        //斜线默认是分割的操作，加上()对其操作
        font: 20px /1.5;            
        padding: (20px /1.5);	
	}	
```

## Sass与Less函数之内置-自定义

>多查看下API文档

```less
body{height: 100px;}

.box1{
    width: round(3.124131px);  //四舍五入
    height: percentage(0.2);	//转化百分比	
    padding: sqrt(25%);       	//开方
}	
```

```scss
body{height: 100px;}

.box1{
    width: round(3.124131px);  //四舍五入
    height: percentage(0.2);     //转化百分比
    margin: random();   //生成随机数
}
```

> 自定义函数,只要Sass才能

```scss
body{height: 100px;}

@function sum($n,$m){
    @return $n+$m;
}
.box1{
    width: round(3.124131px);  //四舍五入
    height: percentage(0.2);     //转化百分比
    margin: random();   //生成随机数
    padding: sum(10px,20px);
}
```

## Sass 与less混入-命名空间-继承

1. 混入

   > 可以汇入多个

```less
body{height: 100px;}

.show{			
    display: inline;
}

.box{
    width: 100px;
    .show;				//!
}

/* 
生成代码
body {
    height: 100px;
  }
  .show {				//!
    display: inline;
  }
  .box {
    width: 100px;
    display: inline;		//!
  }
*/
```

> 另一种方式  ==加括号和不加括号的区别==

```less
body{height: 100px;}

.show{
    display: inline;
}
.hide(@color){					//对其进行传参
    display: none;
    color: @color;				
}
.box{
    width: 100px;
    .show;
    .hide(blue);
}

/* 生成代码
body {
  height: 100px;
}
.show {
  display: inline;
}
.box {
  width: 100px;
  display: inline;
  display: none;			//!	
  color: blue;				//!
}
*/
```

