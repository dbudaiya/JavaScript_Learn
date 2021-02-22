# node.js从入门到熟悉

1. 安装
   下载地址[node下载](https://nodejs.org/zh-cn/)
   下载完成后直接下一步下一步[详细](https://blog.csdn.net/qq_45832807/article/details/104630279)

2. 打开命令
   a, 在控制台中输入node + js文件所在的路径
   b，在文件夹中按住shift，鼠标左键，进入命令行，然后输入node

3. 核心语法EMAScript，没有BOM和DOM
   global相当于var，是全局变量

4. 数据的传递（get，post）
   1）创建服务器
   需要什么服务就创建什么服务
   var http = require(“http”);
   var fs = require(“fs”);
   var querystring = require("querystring ");
   var url = require(“url”);
   var path= require(“path”);

   ```
   	var server = http.createServer();
   	server.on("request",function(req,res{
   	
   	})
   	server.listen(1000);
   	在地址栏中访问的请求都是get请求
   123456
   ```

5. 什么是node.js?
   1）node.js不是一门语言
   2）不是框架，不是库
   3）是JavaScript运行时环境
   4）简单点儿来讲就是，node.js可以解析和执行JavaScript代码

能够解析JavaScript的有：浏览器和node.js

浏览器中的JavaScript：EcmaScript（基本的语法），BOM和DOM组成。
node.js中的JavaScript：没有BOM,DOM，只有EcmaScript（基本的语法）【node.js为js执行提供了服务器级别的API】

node.js特性：事件驱动，非阻塞IO模型（异步）

npm是世界上最大的开源库生态系统。

命令行工具：webpack，gulp，npm

1. node中的fs（require方法）,readFile(读文件),writeFile(写文件)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200303152502278.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
2. node中简单的服务器搭建![在这里插入图片描述](https://img-blog.csdnimg.cn/20200303160726659.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
3. request请求事件处理函数![在这里插入图片描述](https://img-blog.csdnimg.cn/20200303163302195.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
4. 通过不同的路径跳转不同的地址![在这里插入图片描述](https://img-blog.csdnimg.cn/20200303180301486.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   10.node中的模块化
   在node中没有全局作用域，只有模块作用域（超出文件都不管用）【外部访问不到内部，内部也访问不到外部】

使用require引用方法的时候，相对路径中的（./）不能省略，文件后缀名可以省略。

模块域模块之间的通信![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304104000861.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)

1. 端口号(范围0~65536之间)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304114647849.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304115027199.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304131850396.png)
   **注意：可以同时开启多个服务，但一定要确保不同的服务占用的端口号不一致，说的通俗易懂点儿，在一台计算机上一次一个端口号只能开启一个服务。**
2. 如何让解决node中乱码的问题![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304142452982.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
3. 结合fs发送文件中的数据，Content-Type（不同的资源对应的Content-Type是不一样的）![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304145849877.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304145937403.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   *[Http Content-Type对照表](https://tool.oschina.net/commons)*
4. 如何通过node来模仿Apache？
   在node中除了Content-Type可以用来指定编码，也可以在HTML页面中通过meta元数据（data）来声明当前文本的编码格式。![在这里插入图片描述](https://img-blog.csdnimg.cn/20200305113126898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200305113536427.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
5. readdir（‘读取文件的文件目录路径’，function（err,files）{}）读取目录
6. 模板引擎安装（在要使用模板引擎的界面使用命令行窗口打开所在目录，然后通过npm install art-template[要创建的模板引擎名]）在服务端渲染模板引擎

1)node中模板引擎的安装：npm install art-template
2）在需要使用的问及那模块中加载 art-template
在node中使用：require（‘art-template/下载包的名称’）
3）查文档，使用模板引擎的api[模板文档](https://aui.github.io/art-template/)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306115844593.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306121822171.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306123052900.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200306135510496.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
服务端渲染：在服务端使用模板引擎。模板引擎最初诞生于服务端，后来才发展到了前端。

服务端渲染和客户端渲染的区别：
客户端渲染：（不利于seo搜索引擎优化）
发生两次请求：
1）拿到页面；2）拿到动态的数据
服务端（有页面也有数据）渲染：（可以被python抓取到的）
发生一次请求：
请求发送到服务端，先读取数据，然后模板引擎渲染，响应出最终的结果

1. 发表留言——————————小试牛刀
   项目流程：
   1） /index.html首页
   2）开放public目录中的静态资源
   当请求头 /public/。。的时候，读取相应public目录中的具体资源
   3）/post post.html 请求页面
   4）/fabiao 发表页面，发表成功跳转到首页
   接收表单提交数据，存储表单提交数据，让表单重定向到index.html（statusCode，setHeader）![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307111532861.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307111159967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307111736940.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307112138732.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   [项目链接](https://pan.baidu.com/s/1nR_NBU9GGoGmW6EOuCmp-g)
2. 模块系统![在这里插入图片描述](https://img-blog.csdnimg.cn/20200307142310465.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   模块系统的简化过程：![在这里插入图片描述](https://img-blog.csdnimg.cn/20200308105647244.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   笔记：![在这里插入图片描述](https://img-blog.csdnimg.cn/20200308121228311.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
3. require的加载规则![在这里插入图片描述](https://img-blog.csdnimg.cn/20200308120634818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   注意：优先从缓存中加载，如果以前已经加载过了，则不会重复加载代码，但是可以拿到接口对象。这样做避免了重复加载，提高了模块的加载效率。
4. npm![在这里插入图片描述](https://img-blog.csdnimg.cn/20200310105304298.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200309114753138.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
5. express框架![在这里插入图片描述](https://img-blog.csdnimg.cn/20200309132651607.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200310110703209.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200310124838320.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   **express小试牛刀之CRUD(增删改查)**
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200311115421753.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200311115652200.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)
6. nodemon(修改完代码后自动重启工具)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200310130723490.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyODA3,size_16,color_FFFFFF,t_70)

能学到什么：
B/S模型编程（Browser-Sever模型，前后端模型）【node是我们学习B/S的一个工具】
Node常用API
异步编程
Express Web开发框架（使用框架的目的就是让我们更加专注于业务，而不是底层细节）
Ecmascript 6（简称es6）(``反引号是es6中新增的一种字符串包裹的方式，叫模板字符串，它支持换行和方便变量的拼接)

```
代码风格问题（加不加；的问题）：
	当一行代码以（，[,`开头的时候在前面加上（；）就不会报错
12
```

学习文档分享：
[阮一峰](https://javascript.ruanyifeng.com/)
[一天学会node](https://www.nodebeginner.org/)
[express官网](http://expressjs.com/)

