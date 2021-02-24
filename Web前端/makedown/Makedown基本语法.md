#  欢迎使用Markdown

[Makedown教程官网](https://markdown.com.cn/)

**马克飞翔**是一款印象笔记打。高亮代码造的Markdown

- **功能丰富**：支持代码高亮， *aTex* ;
- **得心应手**：简洁高效的编辑器，提供[桌面客户端][1]以及[l离线Chrome app][2]，支持移动端端Web；
- **深度整合**：支持选中笔记本和标签，支持从印象笔记跳转编辑，轻松管理



---------------------------------

[Toc]

## Markdown简介

> Markdonw是一种轻量级的标记性语言，允人们使用简单的标记文档。   —— [维基百科](http://www.baidu.com)

正如你在阅读的这份文档，他使用简单的符号标识不同的标题，将某些文字标识为**粗体**或者*斜体*

，创建一个[百度链接](http://www.baidu.com)或者一个脚注[^布袋]下面列举几个高级功能，更多语法请按`Ctrl+/`帮助



### 代码块

```Python
@requires_authorization
def somefunc(param1='', param2=0):
    '''A docstring'''
    if param1 > param2: # interesting
        print 'Greater'
    return (param2 - param1 + 1) or None
class SomeClass:
    pass
>>> message = '''interpreter
... prompt'''
```



### LaTtex公式（略...）



### 复选框

使用`- [ ]`和`- [x]`语法可以创建复选框，实现todo-list等功能。列如

- [  ]已完成
- [ x ]代办实现

> **注意：**目前支持尚不完全，必须在**马克飞象**中修改Markdown原文才可生效。下个版本将完全面支持



##  