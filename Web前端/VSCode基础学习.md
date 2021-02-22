# VS Code 代码开发工具

[toc]

### 安装软件

#### 课程介绍

- **免费，开源**
- **海量的扩展软件**
- **轻量**：对电脑配置要求不高，CPU处理快

VSCode 是微软推出的跨平台、扩展组件丰富的文本编辑器。

官方提供 [稳定的发行版本](https://code.visualstudio.com/) 与 [最新测试版本](https://code.visualstudio.com/insiders/) 两个版本。

![image-20181020195230055](http://houdunren.gitee.io/note/assets/img/image-20181020195230055.c0f39e06.png)

### [#](http://houdunren.gitee.io/note/ide/vscode.html#全局命令)全局命令

在windows 系统中在安装 VisualStudio Code 时选择设置PATH就可以在命令行全局使用了。

在Mac系统中使用以下方式

1. 修改 `vim ~/.bash_profile` 如果安装了 `zsh` 修改 `vim ~/.zshrc`
2. 添加 `export PATH=/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin:$PATH`

### [#](http://houdunren.gitee.io/note/ide/vscode.html#重置软件)重置软件

有时编辑器安装插件过多，造成异常时就需要重置了

1. 删除软件
2. 苹果系统执行`rm -rf ~/.vscode`
3. window删除 `C:\Users\23000\.vscode` 与 `C:\Users\23000\AppData\Roaming\Code` 文件夹，将`23000` 换成你的帐号

## [#](http://houdunren.gitee.io/note/ide/vscode.html#配置共享)配置共享

你完全不需要配置vscode，可以将其他用户的配置拿来使用，也可以将配置分享给其他电脑或用户，

首先安装插件 [settings-sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

### [#](http://houdunren.gitee.io/note/ide/vscode.html#提交配置)提交配置

1. 安装完插件后会要求登录 `github` 帐号![image-20191012012711372](http://houdunren.gitee.io/note/assets/img/image-20191012012711372.53112d1d.png)

2. 登录后在 `vscode` 的界面中选择一个 gist 或 skip 自动创建一个用来在github上保存配置

   ![image-20191012012924917](http://houdunren.gitee.io/note/assets/img/image-20191012012924917.ba4cd2ec.png)

3. 使用 command+shift+p 在弹出的命令框中输入 `sync` 并选择`更新上传`，好了配置已经可以上传了

   ![image-20191012013057007](http://houdunren.gitee.io/note/assets/img/image-20191012013057007.968455b3.png)

### [#](http://houdunren.gitee.io/note/ide/vscode.html#下载配置)下载配置

下面来介绍其他电脑下载配置的方法

1. 安装 [settings-sync)](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) 插件

2. 和上面步骤一样登录`github` 并选择和提交配置电脑一样的 `gist`

3. 使用 command+shift+p 在弹出的命令框中输入 `sync` 并选择`下载配置`

   ![image-20191012013444904](http://houdunren.gitee.io/note/assets/img/image-20191012013444904.1908985e.png)

### [#](http://houdunren.gitee.io/note/ide/vscode.html#公共配置)公共配置

如果我们想使用别人的配置，首先对方需要提供给你 `gist` 。

1. 将`settings sync` 插件初始化

   ![image-20191012013653772](http://houdunren.gitee.io/note/assets/img/image-20191012013653772.727e5bc0.png)

2. 在命令窗口选择`下载配置`

   ![image-20191012013759969](http://houdunren.gitee.io/note/assets/img/image-20191012013759969.2d19c926.png)

3. 这步不需要登录`github` 了，选择 `Download Public Gist` 并在弹出的窗口中输入别人分享的 `gist`

   ![image-20191012013914969](http://houdunren.gitee.io/note/assets/img/image-20191012013914969.97c8dd18.png)

### [#](http://houdunren.gitee.io/note/ide/vscode.html#向军配置)向军配置

下面是我的 `gist` 分享给大家，同时我使用的字体是 [FiraCode](https://github.com/tonsky/FiraCode) 你需要单独下载安装

```text
cb786c15845e72e7fe56490a0090da62
```

## [#](http://houdunren.gitee.io/note/ide/vscode.html#风格界面)风格界面

### [#](http://houdunren.gitee.io/note/ide/vscode.html#中文语言)中文语言

1. 扩展中搜索 `chinese` 即中文语言包![image-20181020194746230](http://houdunren.gitee.io/note/assets/img/image-20181020194746230.ad177e7e.png)

   https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hant

   > 也可以点击上面链接在浏览器中直接安装

2. 重启vscode工具完成

### [#](http://houdunren.gitee.io/note/ide/vscode.html#设置风格)设置风格

下面的两款风格插件都不错，里面有多个主题。

1. [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode)
2. [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
3. [Ayu](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu)
4. [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)

### [#](http://houdunren.gitee.io/note/ide/vscode.html#字体设置)字体设置

使用一个漂亮的字体会让人赏心悦目，我常用的字体有[FiraCode](https://github.com/tonsky/FiraCode) , [Hack](https://github.com/source-foundry/Hack) 、[JetBrains Mono](https://www.jetbrains.com/lp/mono/)。

在vscode配置中搜索`Editor: Font Family` 并设置以下值。

```text
'JetBrains Mono','Fira Code',Menlo,Monaco, 'Courier New', monospace
```

需要在配置中将连字打开（设置中搜索`fontLigatures`关键词）

```text
"editor.fontFamily": "'Fira Code','JetBrains Mono'",
"editor.fontLigatures": true,
```

### [#](http://houdunren.gitee.io/note/ide/vscode.html#代码格式)代码格式

代码美化主要我使用的是 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ，并需要在项目目录创建配置文件`.prettierrc`基本内容如下

```text
{
  "eslintIntegration": true,
  "stylelintIntegration": true,
  "printWidth": 2000,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": false
}
```

更多配置请参数官方文档 https://prettier.io/docs/en/options.html

### [#](http://houdunren.gitee.io/note/ide/vscode.html#其他配置)其他配置

隐藏行号

```text
设置 > 用户设置 > Line Numbers
```

导航设置

```text
设置 > 工作台 > 导航路径 > (Breadcrumbs: Enabled & Breadcrumbs: File Path)
```

滚动缩放

```text
文本编辑器 > Editor: Mouse Wheel Zoom
```

文件排序

资源管理器按最新修改排序

```text
功能 > 资源管理器 > Sort Order[modified]
```

## [#](http://houdunren.gitee.io/note/ide/vscode.html#代码片段)代码片段

`vscode` 提供自定义代码片段功能非常方便，同时结合[Settings Sync 在不同电脑间同步配置](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) 进行同步后，可以在多台电脑中共享代码片段。

![image-20190902132902764](http://houdunren.gitee.io/note/assets/img/image-20190902132902764.b9929e22.png)

### [#](http://houdunren.gitee.io/note/ide/vscode.html#参数说明)参数说明

```text
prefix      :这个参数是使用代码段的快捷入口,比如这里的log在使用时输入log会有智能感知.
body        :这个是代码段的主体.需要设置的代码放在这里,字符串间换行的话使用\r\n换行符隔开.注意如果值里包含特殊字符需要进行转义.
　　　　　　　 多行语句的以,隔开
$1          :这个为光标的所在位置.
$2          :使用这个参数后会光标的下一位置将会另起一行,按tab键可进行快速切换,还可以有$3,$4,$5.....
description :代码段描述,在使用智能感知时的描述
```

### [#](http://houdunren.gitee.io/note/ide/vscode.html#操作实例)操作实例

下面自定义一个代码片段，当输入 `hd` 并按 `tab` 键后自动输出 `houdunren.com`。

```text
{
	"Print to console": {
		"prefix": "hd",
		"body": [
			"houdunren.com",
		],
		"description": "输出houdunren.com"
	}
}
```

结果如下

![image-20190902133049126](http://houdunren.gitee.io/note/assets/img/image-20190902133049126.3c684105.png)

多段文字配置

```text
{
	"表关联": {
		"prefix": "hd-foreign",
		"body": [
			"\\$table->unsignedBigInteger('package_id')->nullable()->comment('套餐编号');",
			"\\$table->foreign('package_id')->references('id')->on('packages')->onDelete('cascade');",
		],
		"description": "多表关联"
	}
}
```

## [#](http://houdunren.gitee.io/note/ide/vscode.html#工作区)工作区

有时我们希望开发时在一个VS编辑器中同时编辑多个文件，这时候可以使用工作区来管理。

1. 创建文件houdunren并用VSCODE打开
2. 然后选择 **将工作区另存为** 操作，保存到houdunren目录即可
3. 再次打开houdunren/hdcms文件夹
4. 然后选择 **将文件夹添加到工作区**

## [#](http://houdunren.gitee.io/note/ide/vscode.html#屏幕模式)屏幕模式

该模式可以将按钮与鼠标操作在屏幕上显示，非常适合讲解使用。

开启方式为 `ctrl+shift+p` 后选择 `screen`

![image-20200123172855909](http://houdunren.gitee.io/note/assets/img/image-20200123172855909.cc05add0.png)

效果如下

![image-20200123173013067](http://houdunren.gitee.io/note/assets/img/image-20200123173013067.0b31ab2e.png)

## [#](http://houdunren.gitee.io/note/ide/vscode.html#sass)SASS

使用SASS可以及大的提高编写CSS的效率

1. 首先安装插件 [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

2. 创建hd.scss文件

3. 使用ctrl+ship+p 搜索 `Watch sass` 开启scss文件自动编译

   ![image-20200323153116242](http://houdunren.gitee.io/note/assets/img/image-20200323153116242.36a2817c.png)

4. 系统会自动生成hd.css文件，在html等文件中引入即可





## [#](http://houdunren.gitee.io/note/ide/vscode.html#常用插件)常用插件

1. [PHP IntelliSense PHP](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)
2. [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
3. [PHP Extension Pack PHP扩展集合](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-pack)
4. [PHP Debug PHP调试插件](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug)
5. [php cs fixerPHP代码格式化插件](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer)
6. [Laravel Blade Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade)
7. [laravel-goto-controller](https://marketplace.visualstudio.com/items?itemName=stef-k.laravel-goto-controller)
8. [Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
9. [Laravel代码片段](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade)
10. [Laravel Artisan](https://marketplace.visualstudio.com/items?itemName=ryannaddy.laravel-artisan)
11. [Markdown Preview Enhanced Markdown预览](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
12. [WakaTime记录工作数据报表](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)，需要到[官方网站](https://wakatime.com/)注册并获取key
13. [Vetur一个好用的Vue.js开发插件](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
14. [Code Runner 支持多种语言的代码的立即执行](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
15. [Code Spell Checker 用于检测代码语法](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
16. [VS Color Picker 选择颜色](https://marketplace.visualstudio.com/items?itemName=lihui.vs-color-picker)
17. [vscode-fileheader 设置文件头](https://marketplace.visualstudio.com/items?itemName=mikey.vscode-fileheader)
18. [auto-close-tag 自动结束HTML标签](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
19. [auto-rename-tag 自动更改HTML标签名](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
20. [easy-less 编译LESS](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)
21. [faker 随机生成图片等信息](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-faker)
22. [carbon-now-sh 生成漂亮的代码截图](https://marketplace.visualstudio.com/items?itemName=ericadamski.carbon-now-sh)
23. [Highlight Matching 高亮匹配标签](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
24. [Settings Sync 在不同电脑间同步配置](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
25. [Code Runner 编辑器中运行代码](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
26. [Live Server 浏览器自动刷新](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
27. [tabnine AI代码自动补全](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
28. [将代码生成漂亮的图片](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.polacode-2019)
29. [Prettier 代码格式化](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
30. [vscode-intellij-recent-files 快速在最近编辑文件切换](https://marketplace.visualstudio.com/items?itemName=percygrunwald.vscode-intellij-recent-files)
31. [Bracket Pair Colorizer 2 代码块快速匹配](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
32. [EditorConfig 格式化配置Laravel 开发必装](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
33. [IntelliSense for CSS class names 自动提示类名](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)

## [#](http://houdunren.gitee.io/note/ide/vscode.html#常见问题)常见问题

1. 输入时总在状态栏目输入，那是因为安装了vim插件删除或禁用就好了