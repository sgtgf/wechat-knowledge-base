# 写作全程|如何用Beamer写答辩报告


> 原文地址: [https://mp.weixin.qq.com/s/HXto-dG\_v0r5e3cRvbeZgg](https://mp.weixin.qq.com/s/HXto-dG_v0r5e3cRvbeZgg)

**如何用Beamer写答辩报告**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4Ohqudl5OI0D0xeJFv28iaZfHyphr6zsib1MQp1lfgxE7EGXXiblaFem7IEONIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4OhqudicU9faJjzFvnzo6FjWugJRyO78ibYoPLp9QZEg9py8393QC0iaIMt1RLg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWBHLVdYeBeiazTpGxswRKONOa9zpSw522ZXdcnO3skIsOLoCzQYmQzDA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4Ohqudl5OI0D0xeJFv28iaZfHyphr6zsib1MQp1lfgxE7EGXXiblaFem7IEONIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4OhqudicU9faJjzFvnzo6FjWugJRyO78ibYoPLp9QZEg9py8393QC0iaIMt1RLg/640?wx_fmt=png)

**目录**

不

负

青

春

![](https://mmbiz.qpic.cn/mmbiz_png/azPxYnp6TA2ibP8W318yUbdvxF0B1k6kcySEYpPwpvtXB73ibCicdUmuH0jhWsYun8JmuLw66t8dGlUWjmvOvFnBQ/640?wx_fmt=png)

全程概要

基础命令

使用模板

修改模板

导出与放映

查看我的作品

**No.1**

全

程

概

要

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

**我们毕业啦**

![](https://mmbiz.qpic.cn/mmbiz_png/azPxYnp6TA2ibP8W318yUbdvxF0B1k6kcySEYpPwpvtXB73ibCicdUmuH0jhWsYun8JmuLw66t8dGlUWjmvOvFnBQ/640?wx_fmt=png)

不

负

青

春

Latex中的beamer专门用于制作科研汇报幻灯片，许多学术汇报需要它，论文答辩也常见它的身影，以下是它与传统ppt文档的对比：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWPTTU7XibChdyf0YrKl8puMft4HNuvj4XJ2cqINsWUUjHkGJ7SxcnOWA/640?wx_fmt=png)

由此可见，虽然beamer需要掌握latex语言，需要编程来生成文档，上手比起不需要编程的传统ppt更为困难，但是熟练后无需担心格式，可以专注于内容写作，反之，传统ppt在写完内容后仍需调整格式，使写作更为麻烦。

  

要快速上手beamer，最便捷的办法就是找个现成的模板，对里面的语句结合ai进行解读，并做出调整，在调整中逐渐掌握它的基本用法，最后创作出属于自己的作品。

  

本文采用的模板是THU Theme，写作平台是Overleaf，通过展示调整模板的过程，旨在帮助大家快速上手beamer，掌握它的基本用法，完成自己的任务。

  

读者可以先简单了解基本语句（这仅包含我自己写答辩稿时用过的语句）后立即看我是如何解读和修改模板的，再自行上手练习。

  

别担心，有模板在前，上手并不困难，当初我第一晚就学会了基本用法，第二天就能自己写答辩报告了。有了这篇教程，你们只会比我更快。

**No.2**

基

础

命

令

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

1

**创建新章节**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

语句： \\section{}

  

作用：在beamer中创建一个新章节，{}内填入章节名称，beamer会在生成时自动创建一个目录页，有多少个\\section{}语句，就会有多少个章节。

  

语句：\\subsection{具体内容}

  

作用：在\\section{}语句下使用，创建一个子章节。

  

示例：

\\section{恋爱模式}

\\subsection{双方平等}

\\subsection{一方强势}

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4Ohqudl5OI0D0xeJFv28iaZfHyphr6zsib1MQp1lfgxE7EGXXiblaFem7IEONIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4OhqudicU9faJjzFvnzo6FjWugJRyO78ibYoPLp9QZEg9py8393QC0iaIMt1RLg/640?wx_fmt=png)

2

**创建新页**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

语句：  
\\begin{frame}{}

  

\\end{frame}

  

作用：新建空白页，{}内填入页面标题，中间填入具体内容。

  

示例：

\\begin{frame}{什么是恋爱}

恋爱是男女双方产生爱情后，确定具体关系承诺后的一种状态。

\\end{frame}

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4Ohqudl5OI0D0xeJFv28iaZfHyphr6zsib1MQp1lfgxE7EGXXiblaFem7IEONIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4OhqudicU9faJjzFvnzo6FjWugJRyO78ibYoPLp9QZEg9py8393QC0iaIMt1RLg/640?wx_fmt=png)

3

**创建编号**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

**语句：**

**\\begin{itemize}**

**\\item**

**\\item**

**...**

**\\end{itemize}**

  

**作用：**创建项目符号，一个item代表一个符号，注意，该语句必须在frame环境下使用（latex的\\begin{}和\\end{}本质上是在创建一个环境，\\begin和\\end中间所有的语句都包含在这个环境里。）

  

**示例：**

\\begin{frame}{什么是恋爱}

恋爱是男女双方产生爱情后，确定具体关系承诺后的一种状态，可以通过以下指标初步判断是否进入恋爱：

\\begin{itemize}

\\item 关系承诺

\\item 肢体接触

\\item 暧昧语言

\\end{itemize}

只有双方都承认关系存在，才能视为双方在谈恋爱，如果只有一方承认则为单相思，双方都不承认则为暧昧关系。

\\end{frame}

  

**语句：**

**\\begin{enumerate}**

**\\item**

**\\item**

**...**

**\\end{enumerate}**

  

作用：创建具体编号，一个item表示一个编号，用法和上面的语句是一模一样的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4Ohqudl5OI0D0xeJFv28iaZfHyphr6zsib1MQp1lfgxE7EGXXiblaFem7IEONIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4OhqudicU9faJjzFvnzo6FjWugJRyO78ibYoPLp9QZEg9py8393QC0iaIMt1RLg/640?wx_fmt=png)

4

**新建公式**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

语句：

\\( \\)   或   $ $  

  

作用：以上两种符号都能创建行间公式，即公式显示在一行之间。

  

语句：

\\\[

  

\\\]

  

作用：在中间的空行处填入公式，创建独立的段落公式，不过这个公式没有编号。要在frame环境里使用。

  

语句：

\\begin{equation}

  

\\label{}

\\end{equation}

  

作用：创建独立的带编号的段落公式，\\label{}则为这个公式取名，用以后续引用。

  

语句：\\eqref{}

  

作用：引用公式，{}的内容为用label取名过的公式名。

  

语句：  

\\begin{split}

  

\\end{split}

  

作用：创建多行公式，在中间插入\\\\表示换行，插入&表示对齐。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4Ohqudl5OI0D0xeJFv28iaZfHyphr6zsib1MQp1lfgxE7EGXXiblaFem7IEONIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4OhqudicU9faJjzFvnzo6FjWugJRyO78ibYoPLp9QZEg9py8393QC0iaIMt1RLg/640?wx_fmt=png)

5

**插入说明框**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

语句：

\\begin{block}{}  

  

\\end{block}

  

作用：该语句是 Beamer 文档类（用于制作演示文稿）中定义的一个环境，用于创建一个具有特定样式的信息块（通常带背景色、边框和标题）。该语句通常用来展示某个定理。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4Ohqudl5OI0D0xeJFv28iaZfHyphr6zsib1MQp1lfgxE7EGXXiblaFem7IEONIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4OhqudicU9faJjzFvnzo6FjWugJRyO78ibYoPLp9QZEg9py8393QC0iaIMt1RLg/640?wx_fmt=png)

**No.3**

使

用

模板

板

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

**我们毕业啦**

不

负

青

  

Overleaf不仅支持使用者在上面运用latex，也提供了丰富的模板，初学者可以在上面导入模板进行学习，本章将教你导入THU Beamer Theme这一模板。

  

进入该网址，使用Overleaf：https://cn.overleaf.com/project

  

单击“创建新项目”。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWlKjAQ0sdA6LiadrwEY7KEJw4ficc9gPZrJ1aJlJ2wibGIUx62R2OQCFdw/640?wx_fmt=png)

单击“预览所有”。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWE7kfx0brjpZrowJ9dmuryJUoO5guf0FgNBgMiaen0YZpyFEm6YnicCeg/640?wx_fmt=png)

输入“THU Beamer Theme"，进行搜索。（你所在高校说不定有好心人上传了对应模板，你可以搜索你所在高校的缩写，比如广工的学生可以搜索"GDUT"）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWlp3g1tSf3ctTNlbvlI9gYgk5HiaibKqkYGsiaO9lWqzmpD8hzlB3WS6og/640?wx_fmt=png)

找到搜索结果，单击进入，再单击"Open as template"（作为模板打开），将模板作为你的新项目。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWpNp67QCwQDOqnbwq5n6VQhh4uyEvicH6IoFzMibwuBfN2hJ5KiaIo1ZRQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWadm0XM6ygYia6DYNbunSleFicnElT1DA8icpDm8vTPqYzPmw5g5hMR2Cg/640?wx_fmt=png)

进入这个界面就说明模板导入成功，你可以使用这个模板了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWGU0kKrvaZxUpdey4XjibWyNphKJicibONZOTM53EVPnUZVJ9h3BtVick0A/640?wx_fmt=png)

下面是调整出中文界面的具体步骤，单击左上角的房子，回到项目文件夹。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWfuiap84lWONsZun6ecUBuhe9GUyOc3MZXHgkNKcJvMW1VeAicmjJZ5tA/640?wx_fmt=png)

单击下方的"Click here to use Overleaf in Chinese"，切换界面语言至中文。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWa3UAQdcRzHZ57EEnJW0m4sogKx53ldHxPBsUmicMZZqNnyGZFRPY7KQ/640?wx_fmt=png)

再重新打开新创建的项目。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWarkvpRuwYXVrrWENdviccyCcgCVlKEO4nILjN3sXqqedTYcvrnAF7sg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWnARHWw8zz9nyPRFHh3cibr1T71qWNz2Rbic0MhpdOeKmNsJ367YkqwDw/640?wx_fmt=png)

可以看到，整个界面都变成中文了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4Ohqudl5OI0D0xeJFv28iaZfHyphr6zsib1MQp1lfgxE7EGXXiblaFem7IEONIw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/RyQtNConrQLuibdicLCeURTgukeJ4OhqudicU9faJjzFvnzo6FjWugJRyO78ibYoPLp9QZEg9py8393QC0iaIMt1RLg/640?wx_fmt=png)

**No.4**

修

改

模

板

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

**我们毕业啦**

![](https://mmbiz.qpic.cn/mmbiz_png/azPxYnp6TA2ibP8W318yUbdvxF0B1k6kcySEYpPwpvtXB73ibCicdUmuH0jhWsYun8JmuLw66t8dGlUWjmvOvFnBQ/640?wx_fmt=png)

不

负

青

春

在调整模板前，需要对模板本身进行解读。

  

Tsinghua.sty为模板配置文件，里面包含这个模板的配置，该文件的第39行代码定义了模板的主题色：

\\xdefinecolor{tsinghua}{rgb}{0.455,0.204,0.506}  %RGB#82318E  
  
主题色模式用小写rgb表示，{}中的三个具体参数分别代表红色、绿色和蓝色值。在小写rgb的模式下，这三个值最高为1。这一语句使得该模板的主题色为“清华紫”。

  

后续可以调整该语句，使模板主题色变成大大的“广工红”。

  

该文件其他地方可以先不动。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWABpKVQA6ibbJkt74Q379IxjqFkicayiaGk89dVWe6VzicKpibh2ViaO3Oibiaw/640?wx_fmt=png)

slide.tex为主文件，所有的内容都在这里编写。

  

打开这个文件，红线框内的语句对应右边的输出，这部分是文档信息，读者在里面自行修改即可。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWtMGJ5WhPVHSicYNOPIwTXpoOL1gsBjQD0u0cyT8VVQMm4fs9EYZOFPA/640?wx_fmt=png)

图中的语句表示创建的是标题页，以下语句控制在标题页输出清华校徽：  

\\begin{figure}\[htpb\]

        \\begin{center}

 \\includegraphics\[width=0.2\\linewidth\]{pic/Tsinghua\_University\_Logo.eps}

        \\end{center}

    \\end{figure}

后续可以修改该语句，输出本校校徽。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWIefTowKQ5a4ibP4K1udYa0bXxEsmuVTNH9LO4wqBHdFDkNFErmv1ibeA/640?wx_fmt=png)

图中的语句对应的是最后一页中致谢内容的输出：

\\begin{frame}

    \\begin{center}

  {\\Huge\\calligra Thanks!}

    \\end{center}

\\end{frame}

后续可以修改语句，输出你想要的致谢。

  

如果你想学习使用这个模板，你所要做的就是用ai先解读这个模板，然后自行调整里面的语句，通过一次次实践最终掌握这个模板的使用。

  

现在我们来对该模板进行修改。

  

打开文件Tsinghua.sty，找到第39行代码，将它修改为：

\\definecolor{tsinghua}{RGB}{181, 0, 5}  % 使用十进制RGB值

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWTIHeUwMYImVQQE1DHwdKfSyadxfJ5qU0sPiaUFlqx9BaXLCYOjsuIgA/640?wx_fmt=png)

修改后的语句使用的主题色模式为大写的RGB，它的取值范围为0-255，这样修改方便从ppt中的取色器获得所需颜色的RGB值后，能直接应用，不需要转换。

  

经过取色器的测量，**广工红的RGB值为{181,0,5}。**

  

因此，该语句的作用是将主题色修改为广工红。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWQ2VibVKROBhu7yicmwK3xR534HCJz3I7UNtQrLRqY3OEZ1Lj1r9icFwYA/640?wx_fmt=png)

修改后还要单击“重新编译”，网站会显示修改语句后的输出。以后的任何修改，修改完毕后都要单击“重新编译”来预览输出。

  

有时候点击“重新编译”，会出现“编译超时”的提示，这可能是内容过多或图片过大造成的，也可能是网络波动，可以再次点击“重新编译”来刷新，如果仍然不行，则需要减少内容或压缩图片。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWSvRCn2UVITiaXhGTcRpWxN517LhLj0f4b4AOlrEprHycxuqeobECzuw/640?wx_fmt=png)

接着，我们来修改文档信息。根据个人信息修改以下语句：

修改前：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWNO5OWiajxt9XbdDyROmebWVPNPIww7MFOz5E1nZJokiaEaA4IbQCkKwA/640?wx_fmt=png)

修改后：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWGvicZqsmqlwiaibic8xvk1h6hib0CqeYz7o19BaZexV6tl0FbAWxstAicEbg/640?wx_fmt=png)

修改后的输出如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWDoZTdAavzWD4jTicsBWcZ8q2VLPBvJdib7FOvgSJv6kZEFVOyvyHN3Sg/640?wx_fmt=png)

下面来修改校徽输出，先打开pic文件夹，再点击右边的三个点，上传本校校徽：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWaZQko9OPNwJDKR6KeFdy15C0iawbiaTuqE2rU12vVTVCTzSBpeN6EDyA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWY6C4DTdXAiasW7ZyMpPAL4pqcjBTaY5SZrCSbsjsIeNZHzibUjkcgkYQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWCIjJDbFu8ibAvkf9icm1g1mVznvr4eV52zia6YH159HiamxZKqicqvV5cSg/640?wx_fmt=png)

上传后还可以对文件进行重命名，注意不要上传过大的图片，否则编译会超时。（我上传的校徽文件大小为200kb左右成功编译，大小为3MB时编译超时）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWs8ib9EUolh0icPPvoHRzeBqS7Sokek88cJO4MSxRQtfib7LM527mEgyJA/640?wx_fmt=png)

上传图片后修改语句为：

\\includegraphics\[width=0.2\\linewidth\]{pic/GDUT.png}

修改前：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWGYAanFpLjg8NpBIYkIYmYzFOWRk58BO971chPOPfS4K4JqrQSAia2jw/640?wx_fmt=png)

修改后：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWWw63736J8dgibmsgkPOcibRkIxFhPGPJ7sWr3kia20h5mzn1HbUocny7g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWg8A8uXapwyHSQyroJBE3gjmMZlQyW1ZVAavfbRmjl0ibY2z8szFttLg/640?wx_fmt=png)

最后点击重新编译，即可修改校徽。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWBHLVdYeBeiazTpGxswRKONOa9zpSw522ZXdcnO3skIsOLoCzQYmQzDA/640?wx_fmt=png)

这里顺便放出广工校徽，便于有需要的同学保存使用：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWZ9qXkg1syEOLNBnPF5FkQO7kRQJOK0qQo6tFLXtWYRbUjoOxYYLu1w/640?wx_fmt=png)

最后来调整致谢，找到致谢页对应的代码，将它修改成你想要的：

修改前：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWTjURhbx7icc3VF0T6zXFtia60ZbrEVNJ5aMbaJ1JxVZTsKOV8wavR4ng/640?wx_fmt=png)

修改后：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWPtaI8NhvYStteX6ianAWgC3E1Hw063CzDPnrw4xFicHtCvf9uazyBPXQ/640?wx_fmt=png)

最终效果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPW1SrwBmwiad7VlU236B7aassdNxmNJggEqPtrUpFfDoice7CrTsWPB1Rg/640?wx_fmt=png)

到此为止，我们已经完成了模板的修改，接下来就可以进入具体语句的写作了，由于篇幅的关系，这里就不介绍具体语句的写法，各位读者完全可以根据我后面提供的作品进行观察学习。

  

我当时也是这么过来的，观察代码与输出的对应关系，自我调整，自我学习。

**No.5**

导

出

放

映

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

**我们毕业啦**

![](https://mmbiz.qpic.cn/mmbiz_png/azPxYnp6TA2ibP8W318yUbdvxF0B1k6kcySEYpPwpvtXB73ibCicdUmuH0jhWsYun8JmuLw66t8dGlUWjmvOvFnBQ/640?wx_fmt=png)

不

负

青

春

用Overleaf完成写作后，就需要导出你的作品，用beamer写成的作品后缀为pdf，下面介绍导出和放映的方法。

  

单击下载按钮，即可下载pdf文件。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWsgO0EPPvNeBRHhvS4FQ8G6wiclfCrS38oc9up5zOatIGl5J7prPwUOA/640?wx_fmt=png)

下载pdf文件后，用Adobe Acrobat打开（也可以用WPS PDF）。

  

使用全屏模式放映：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWTF98R6jvWT7VflZcMLpd62U7JNHvXlaT79lBwCqGpxYibaPJtd7ScoA/640?wx_fmt=png)

放映时的操作就和ppt没什么两样了。

  

其实不仅能导出pdf文件，还能将整个项目全部导出。

  

单击“房子”按钮返回所有项目界面，然后单击“下载Zip格式文件，即可将项目内所有文件打包下载。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPW4L6XvZt2uwKoES7bpVFvN4yh5KplqqzdpcPpaaPJ23yo2fNmxtnGIQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/wH9k3DKRLucib3n5eRZytrmoGce64ztPWSicbSKJLFELjUmiaYRu24rrBHvYU3mH7iaU9vuySfeXXnubZDvRV4SaFg/640?wx_fmt=png)

后面，如果要从本地上传项目的话，就必须把所有项目打包成zip压缩包上传。

  

(现在我发现自己下载后再上传的项目会出现各种错误，我不知道怎么解决）

  

**No.6**

作

者

成

品

![](https://mmbiz.qpic.cn/sz_mmbiz_png/p4hYM0n6exxQC3FdbgZHDXOreCUibAb2133QLeboGgicb07KFew5f1fu1HbdS6yWcznvwk79mFT5HYQYuZN8Fosw/640?wx_fmt=png)

**我们毕业啦**

![](https://mmbiz.qpic.cn/mmbiz_png/azPxYnp6TA2ibP8W318yUbdvxF0B1k6kcySEYpPwpvtXB73ibCicdUmuH0jhWsYun8JmuLw66t8dGlUWjmvOvFnBQ/640?wx_fmt=png)

不

负

青

春

最后，我将分享自己当时的作品，供各位观摩学习，少走弯路，以下是查看我作品的方法：

  

打开这个链接，这个链接对应的项目为我的本科答辩报告：  
  

https://cn.overleaf.com/read/mrmgcfqjsqgb#3fdc85

  

我已经将自己整个项目分享到了Overleaf社区，如果能通过审核，任何人将能在在模板搜索栏输入"GDUT\_Beamer\_Theme"搜索到我的作品。

  

到这里，我的分享就全部结束了，祝各位毕业顺利！