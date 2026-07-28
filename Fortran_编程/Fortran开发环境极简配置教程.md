# Fortran开发环境极简配置教程


> 原文地址: [https://mp.weixin.qq.com/s/Y4sqAgsthxhQ\_GBWQasGrg](https://mp.weixin.qq.com/s/Y4sqAgsthxhQ_GBWQasGrg)

对于初学编程的人来说，设置和配置一个适合编程的开发环境往往是一个具有挑战性的任务。开发环境都配置不好，还谈啥编程学习啊？

为了帮助 Fortran 小白克服这个“拦路虎”，在这里分享一下自己的经验心得，于是有了这篇开发环境的极简配置教程。

之所以称为**极简**，是因为这里**只需要安装两个****软件****：**

-   **Notepad++ 文本编辑器**
    
-   **gfortran 编译器（MinGW-w64 版本）**
    

一个用于编辑，一个用于编译。这两个安装包加起来也就 140 MB。它们全部是开源免费的，可放心使用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXC7SHjyUicC3IYjybm5umpy38YFZtjZNtjta1AkdIriaeOPia3aRoJFEU8J0OdibGF1y8jicCwWSjv0jw/640?wx_fmt=png&from=appmsg)

**安装文件已经打包好，欢迎自行下载**：

> 网盘链接：https://pan.baidu.com/s/1zMdBAmbm6cFQSZm\_PK8fuw?pwd=abcd

注：这些安装文件仅适用于 Windows 64 位系统。其他系统的环境配置可依照本文思路，自行检索和下载安装文件。

下载完成后，我们就可以进入具体的安装过程了。

## 安装文本编辑器 Notepad++

这个非常容易，直接双击 **npp.8.6.4.Installer.x64.exe** 安装文件，按提示步骤，一步一步操作即可。界面效果如下。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXYiaT8z7Igt8kWPjWt9l1kfKiaibzBK2OxHibIHfeiciazuQ2mI74lwnkg96LYfkEtHIo8YkaIV8G52M6A/640?wx_fmt=png&from=appmsg)

Notepad++ 是用来编辑 Fortran 代码的，下面是对它的特点介绍，可以简单了解一下。

> Notepad++ 是一款流行的开源文本编辑器和源代码编辑器，它支持多种编程语言，包括 Fortran。它非常适合作为 Fortran 编程的主力代码编辑器，主要归功于以下 3 个特点：
> 
> -   **轻量级和快速**   Notepad++ 是一个轻量级的编辑器，启动速度快，对系统资源的占用小。这对于需要频繁打开和编辑 Fortran 源文件的用户来说是一个重要的优点。
>     
> -   **语法高亮和代码折叠**   Notepad++ 支持语法高亮，这意味着 Fortran 代码中的关键字、变量、注释等会以不同的颜色显示，这使得代码更易于阅读和理解。此外，它还提供了代码折叠功能，允许用户折叠或展开代码块，这对于浏览复杂的 Fortran 程序结构非常有帮助。
>     
> -   **强大的搜索和替换功能**   Notepad++ 提供了强大的搜索和替换功能，支持正则表达式，这对于在Fortran代码中进行文本操作非常有用。它还支持多个文件的查找和替换，这对于管理大型项目中的代码一致性至关重要。
>     
> 
> 综上所述，Notepad++ 是一个功能丰富且灵活的文本编辑器，是 Fortran 编程的理想选择。无论是对于初学者还是经验丰富的开发者，Notepad++ 都提供了一个高效且舒适的编程环境。

## 安装编译器 gfortran

首先，我们要在 Windows 平台上安装 MinGW-w64 版本的 gfortran 编译器。MinGW-w64 是一个为 Windows 提供原生 64 位支持的开源软件开发环境，它包括了GCC（GNU Compiler Collection）的 MinGW 实现，其中就包括 gfortran 编译器。gfortran 非常轻量，整套 MinGW64 包解压开来才 436 MB。由于它本身是纯命令行工具，因此即使在低配电脑上也可以很好地进行代码编译。以下是详细的安装指南。

1.  **解压 MinGW-w64 压缩包**：将下载的 MinGW-w64 压缩包中的文件解压缩到你选择的目录，如 `C:\mingw64`。
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXYiaT8z7Igt8kWPjWt9l1kf37zcm3IO3IwmndChzicSKPygGXUkdDEtzVutw4sTiaTs5eCcnebCqGKQ/640?wx_fmt=jpeg&from=appmsg)
    
      
    
2.  **添加到系统环境变量**：这是非常关键的一步。**为了能够****在命令行中直接使用 gfortran**，你需要将 MinGW-w64 的 bin 目录手动添加到系统环境变量中。
    

-   右键点击“此电脑”或“我的电脑”，选择“属性”。
    
-   点击“高级系统设置”。
    
-   在“系统属性”窗口中，点击“环境变量”。
    
-   在“系统变量”区域，找到并选择`Path`变量，然后点击“编辑”。
    
-   在列表的末尾添加 MinGW-w64 的 bin 目录路径，例如：`C:\mingw64\bin`（请根据你的安装路径进行修改）。
    
-   点击“确定”保存更改。
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXYiaT8z7Igt8kWPjWt9l1kficCqia4Y8QPtVDgsNVg7mXHrev1V34iciaibJnlmGL9CPOfnVb0vUVgKuUw/640?wx_fmt=jpeg&from=appmsg)
    

## 运行测试

接下来就是运行测试了。我们使用 gfortran 来编译一个简单的 Fortran 程序。

1.  **编写 Fortran 代码**：使用文本编辑器 Notepad++ 编写一个 Fortran 程序，例如：
    
    `program hello       print *, 'Hello, MinGW-w64 world!'   end program  hello   `
    
    将这段代码保存为`hello.f90`。记一下它的**存储路径**，我们这里假定存储到`F:\test`目录下`。`
    
2.  **打开命令提示符**：按下`Win + R`键，输入`cmd`并按回车，打开命令提示符窗口。
    
3.  **导航到源代码目录**：使用`cd`命令导航到保存`hello.f90`的目录，也就是 F:\\test 。
    
    `cd F:\test   `
    
4.  **编译 Fortran 程序**：在命令提示符中，使用以下命令编译你的 Fortran 程序：
    
    `gfortran hello.f90 -o hello.exe   `
    
    这条命令会调用 MinGW-w64 的 gfortran 编译器，将`hello.f90`编译成名为`hello.exe`的可执行文件。
    
5.  **运行程序**：编译成功后，你可以直接在命令提示符中运行你的程序：
    
    `hello.exe   `
    
    如果一切顺利，你将在屏幕上看到输出 “Hello, MinGW-w64 world!”。
    

这样开发环境就配置好了！就是这么简单。

  

**不懂就问：命令****行****编译是不是太** **low 了？**

非也。命令行编译模式主打一个**轻量和快速**，没有复杂的菜单和工具栏，只有纯粹的文本输入和输出，这可以**让你更专注于代码本身**。命令行编译还可以精确控制编译过程，包括编译选项、优化级别、链接库等。同时它的跨平台兼容性很好，支持各种类型的操作系统。

最重要的一点，命令行编译**易于集成到脚本和自动化工具中**，这对于大型项目和持续集成（CI）环境非常有用。开发者可以通过编写脚本来自动化编译、测试和部署过程。

就上面的小例子，你完全可以自己写一个 bat 命令文件，把要执行的命令全部存储下来：

 `gfortran hello.f90 -o hello.exe    hello.exe    pause`

将它放在 F:\\test 目录下，以后每次编译只要双击一下就好了，So easy!

## 结语

根据上面的步骤安装好 gfortran 和 Notepad++，你就可以在 Windows 平台上轻松地编译和运行 Fortran 程序了，这会为你的 Fortran 编程之旅提供坚实的基础。

接下来做什么呢？你可以进一步地学习 Fortran 语言的语法，探索更多 gfortran 的编译选项和命令行模式操作技巧。一定要将已搭建好的开发环境顺畅地运用起来，一步一个脚印地积累编程经验。记住，实践是提高编程技能的关键，所以不断地编写和测试你的代码，享受 Fortran 编程带来的乐趣吧！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。