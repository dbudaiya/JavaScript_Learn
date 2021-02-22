### 标准流的概念

标准流 Normal Flow

- 默认情况下,元素都是按照normal flow(标准流,常规流,文档流,正常流[document flow])进行排布
  - 从左到右,从上到下按顺序排布
  - 默认情况下,互相之间不存在重叠现象

inline inline-block block

margin,padding定位

margin可以设置为负数

使用margin.padding定位明显的缺点是:

- 影响其他元素的定位效果
- 不便于实现元素重叠效果

CSS属性: position

- 利用position定位
  - static
  - relative
  - absolute
  - fixted

static 静态定位

- position属性的默认值
- 元素按照normal flow布局
- left right top bottom对其不起效果

relative 相对定位

- 元素按照normal flow布局
- 可以使用top bottom left right布局
  - 定位参照对象是元素自己原来的位置

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    img {
      position: relative;
      left: 100px;
      top: 100px;
    }
  </style>
</head>

<body>
  <span>我是span元素</span>
  <p>我是段落元素</p>
  <a href="#">百度一下</a>
  <img
    src="https://kaola-haitao.oss.kaolacdn.com/1bto406pa5_960_480.jpg?x-oss-process=image/resize,w_540,h_270/quality,q_90/ignore-error,1"
    alt="">
</body>

</html>
```

相对定位的场景

- 不影响其他元素位置的前提下,对当前元素位置进行微调

练习:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    sub {
      position: relative;
      font-size: 12px;
      bottom: 2px;
    }

    sup {
      position: relative;
      font-size: 13px;
      top: 2px;
    }
  </style>
</head>

<body>
  <h2>请计算n<sub>1</sub>+n<sub>2</sub>+n<sup>2</sup>的值</h2>
</body>

</html>
```

fixed 固定定位

- 元素脱离标准流
  - 脱标的元素对标准元素不起效果,当其不存在
- 使用left right top bottom进行定位
  - 定位参照的对象是视口

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    img {
      position: fixed;
      right: 100px;
      bottom: 100px;
    }
  </style>
</head>

<body>
  <span>我是span元素</span>
  <p>我是段落元素</p>
  <a href="#">百度一下</a>
  <img
    src="https://kaola-haitao.oss.kaolacdn.com/1bto406pa5_960_480.jpg?x-oss-process=image/resize,w_540,h_270/quality,q_90/ignore-error,1"
    alt="">
</body>

</html>
```

脱标元素有position : fixed absolute Float

脱标元素的特点:

- 可以设置高度(不管是不是行内级元素)
- 默认情况下宽高由内容决定
- 不受标准流的约束
- 不在向父元素汇报高度

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    a {
      position: fixed;
      right: 100px;
      bottom: 100px;

      width: 100px;
      height: 100px;
      background-color: orange;
    }
  </style>
</head>

<body>
  <span>我是span元素</span>
  <p>我是段落元素</p>
  <a href="#">百度一下</a>
  <img
    src="https://kaola-haitao.oss.kaolacdn.com/1bto406pa5_960_480.jpg?x-oss-process=image/resize,w_540,h_270/quality,q_90/ignore-error,1"
    alt="">
</body>

</html>
```



