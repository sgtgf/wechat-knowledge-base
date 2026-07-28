# VSCode+TexLive+SumatraPDF实现LaTeX与PDF文件之间相互跳转


> 原文地址: [https://mp.weixin.qq.com/s/3GhBc8ybIJgI9QqdFMoBeg](https://mp.weixin.qq.com/s/3GhBc8ybIJgI9QqdFMoBeg)

最近在正在阅读金建铭编写的《电磁场有限元方法》入门电磁场有限元，为了方便自己理解，一边阅读一边用 LaTeX 将知识点穿起来，本打算用 Word 随便记录一下，但当我准备用Word敲第一个公式的时候，F\*ck！于是删除了新建的 Word，重操 LaTeX 做学习记录，在这个过程中，需要输入大量的公式，对于公式的引用常常令我感到头疼，我不得不根据上下文在编辑器中查找要引用的公式。之前在TeXstudio中“Ctrl+鼠标左键单击”可以实现LaTeX代码和PDF文件的相互跳转，很方便相互定位。但在目前的配置环境中(VSCode+TeXLive +SumatraPDF)，并没有该功能，于是乎不得不摸索一番，这里记录一下配置过程和朋友们分享。（参考LaTeX Workshop插件官方文档）

# Part1为何选择此配置

VSCode+TeXLive+SumatraPDF的组合方式即：

-   选择VS Code作为轻量级编辑器并辅以插件LaTeX Workshop实现代码高亮、智能提示以及一键编译。
    
-   SumatraPDF并不会锁定已经打开的PDF，很方便查看编译的PDF结果。虽然LaTeX Workshop插件具备内置的PDF阅读器，但该方案会导致代码编辑区分割出来一半显示PDF，对于代码编辑以及PDF查看都不是足够舒服。
    

之所以这么选择，是考虑到我的需求：

-   轻量级的代码编辑器
    
-   便捷可选的编译方式
    
-   轻量级的PDF阅读器，不会锁定已打开的PDF
    
-   LaTeX代码与PDF之间的互相跳转
    

让我们一起看看，为了实现上述需求，需要进行哪些配置。

# Part2编译引擎配置

LaTeX Workshop原有的编译引擎的配置太多太杂，并且不满足我的需求，我主要在`settings.json`中配置了三个编译链，命名分别为`xelatex`、`bibtex`和`xelatexmk`，由于`LaTeX`遗留的时代问题，当文中有目录、图标交叉引用和参考文献及其交叉引用时，需要进行多次编译。`xelatexmk`使用命令`latexmk`自适应调用`xelatex`以及`bibtex`对全文进行多次编译，但完整的编译所需时间较长，有时候只是需要简单查看局部的修改效果，因此设置编译链`xelatex`调用`xelatex`引擎对全文进行一次编译。同样，为编译参考文献，设置编译链`bibtex`调用引擎`bibtex`。

`"latex-workshop.latex.recipes": [     {         "name": "xelatex",         "tools": [             "xelatex"         ],     },     {         "name": "bibtex",         "tools": [             "bibtex"         ],     },     {         "name": "xelatexmk",         "tools": [             "xelatexmk"         ],     }   ],   `

编译链`xelatex`调用`xelatex`引擎进行编译，编译选项见`"args"`中的内容。编译链`xelatexmk`调用`latexmk`进行编辑，编译选项见`"args"`中的内容，`latexmk`自适应调用其它引擎完成编译，编译选项见`"args"`。各选项含义见下面注释。

`"latex-workshop.latex.tools": [       {           "name": "xelatexmk",           "command": "latexmk",           "args": [               "-xelatex",  //调用xelatex引擎               "-synctex=1",  //使能latex源文件与PDF文件之间的相互跳转               "-interaction=nonstopmode",  //编译时遇到报错继续编译               "-file-line-error",  //定位编译过程中的错误信息到某一行               "%DOCFILE%"  //编译文件的名称           ],           "env": {}       },       {           "name": "bibtex",           "command": "bibtex",           "args": [               "%DOCFILE%"           ],           "env": {}       },       {           "name": "xelatex",           "command": "xelatex",           "args": [               "-synctex=1",               "-interaction=nonstopmode",               "-file-line-error",               "%DOCFILE%"           ],           "env": {}       },   ],   `

# Part3LaTeX与PDF之间相互跳转

实现编辑器向PDF跳转，首先需要配置VS Code的`settings.json`。这里主要需要指定外部PDF阅读器SumatraPDF.exe的所在路径以及VS Code的Code.exe所在路径。

`//   "latex-workshop.view.pdf.viewer": "external",   "latex-workshop.view.pdf.external.viewer.command": "C:/Program Files/SumatraPDF/SumatraPDF.exe",   "latex-workshop.view.pdf.external.viewer.args": [       "%PDF%",   ],   //设置正向跳转   "latex-workshop.view.pdf.external.synctex.command": "C:/Program Files/SumatraPDF/SumatraPDF.exe",   "latex-workshop.view.pdf.external.synctex.args": [       "-forward-search",       "%TEX%",       "%LINE%",       "-reuse-instance",       "-inverse-search",       "\"D:/Program Files/Microsoft VS Code/Code.exe\" \"D:\\Program Files\\Microsoft VS Code\\resources\\app\\out\\cli.js\" --ms-enable-electron-run-as-node -r -g \"%f:%l\"",       "%PDF%"   ],   `

LaTeX Workshop默认快捷键为"Ctrl+Alt+J"，将鼠标光标停放在LaTeX代码某一位置，按下该快捷键，即可跳转到PDF对应位置。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DSQ4zKphJticghmptxUD60NZp975BOxVfo4uE6JMHzp5Sf5ymKyicwDf3m97XvJlnNOmYN4Pqz0ckjg/640?wx_fmt=png)可以看到，成功跳转后，相应位置会有一段高亮的提醒。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DSQ4zKphJticghmptxUD60NZ401eEGIxD5nGF2zq9yhJe67s2sfFm8hcV5vxibNlicWcBuruiajYpvA2A/640?wx_fmt=png)同样双击PDF文件中的内容，可以实现PDF跳转到`LaTeX`代码。

除了配置好`settings.json`外，可选择配置SumatraPDF，打开SumatraPDF->设置->选项。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DSQ4zKphJticghmptxUD60NZicuTPiauNzu3x4bGL2dcz5GWQrGMchzF0NOHckUZGmk2mjPvIRLrxjWQ/640?wx_fmt=png)在选项里面找到“设置反向搜索命令行”，设置：

`"D:/Program Files/Microsoft VS Code/Code.exe" "D:\Program Files\Microsoft VS Code\resources\app\out\cli.js" --ms-enable-electron-run-as-node -r -g "%f:%l"   `

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DSQ4zKphJticghmptxUD60NZfazJ7yUbSXYmHSfiaHQI7sB3YAdib04SSTKEDyrUnJvtibIChuaxHUBHQ/640?wx_fmt=png)之所以说是可选择配置，因为在第一次从`LaTeX`跳转到PDF时，上述信息会自动填入SumatraPDF。

配置好工具，终于又可以继续Happy LaTeX！

作者|斗沙片刻