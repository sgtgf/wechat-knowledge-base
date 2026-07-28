# Ansys Maxwell脚本那些事


> 原文地址: [https://mp.weixin.qq.com/s/RHptz5IxLIs-96NRe-UC7w](https://mp.weixin.qq.com/s/RHptz5IxLIs-96NRe-UC7w)

# Ansys Maxwell 脚本那些事

Ansys Maxwell 的脚本功能主要集中在工具栏的_Automation_ 当中：

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DQC8WZyuKnkC5FB86a6ynwflUgtTcsN4gfmIGH5vbWTcyAb2wlGNZ3NjGdhT0czdsALp7Nx4xL7zQ/640?wx_fmt=png&from=appmsg)

其脚本大概可以分为两类，可以总结为下面这个_思维导图_：

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DQC8WZyuKnkC5FB86a6ynwfibdyLa9vzytEd21fTznTYGKFCibI4Unr1tKW1icI7PKQIjDmBNbAyianFA/640?wx_fmt=png&from=appmsg)

## 1️⃣ 基于 COM 接口

### COM 接口介绍

第一类基于 COM 接口，COM 是微软于 1993 年提出的一种二进制接口标准，用于**实现跨语言、跨进程甚至跨计算机**的组件交互，很明显只有**Windows 平台独有**，但该接口**与编程语言无关**。官方提供的脚本是 `IronPython` 与 `VBScript`，实际`C/C++`以及`Matlab` 等编程语言都可以调用。

### 对应功能

我们熟知的_录制脚本_、_运行脚本_以及在_命令窗口_中运行脚本命令这些本质上都是基于 COM 接口，几何模型模板 UDP/UDM 也是基于 COM 接口。此外，编写_ACT 拓展插件_也是通过 COM 接口，例如我们比较熟知的计算效率 Map 图的插件`Machine Toolkit`。除了在程序内加载脚本，我们还可以**在另一个进程中去打开并操作 Ansys Maxwell**，这为我们集成有限元仿真在自己工作流里面提供了很大便利。

### 优缺点

很明显，由于**COM 接口与编程语言无关**，我们称之为**跨语言**。这一类脚本优势就是你可以用自己熟悉的编程语言去编写脚本，充分**利用你所选择的编程语言的生态**。但很遗憾，跨平台是未来趋势，ANSYS 官方将逐步放弃对 COM 接口的支持。

## 2️⃣ 基于 gRPC 接口

### gRPC 接口介绍

第二类基于 gRPC 接口，是 Google 于 2015 年开发的一种高性能、开源的远程过程调用（RPC）框架，用于在不同服务之间进行高效通信，支持**跨语言、跨平台**调用。ANSYS 官方提供了 `CPython` 支持，并且封装了 `IronPython` 以及其它 API，形成了 `PyAEDT`。`PyAEDT` 更新迭代速度很快，开源地址为：https://github.com/ansys/pyaedt

### 对应功能

内置`PyAEDT`命令调试窗口，支持`Jupyter Notebook`，支持在软件内运行外部`PyAEDT`脚本，当然也同样支持跨进程调用 Ansys Maxwell，支持在_Automation_工具栏添加扩展。但是官方过滤了其它控件，目前应该只支持注入普通按钮控件。以上的这些功能软件默认不带，需要自己配置环境。`PyAEDT`拓展插件实际上可以**替代 ACT 插件**以及专用于**快速建模的 UDP 和 UDM 功能**。

### 优缺点

只要遵循 COM 接口规范，COM 脚本录制功能应该很容易实现，相比较来说，软件暂不支持录制 `PyAEDT` 类型的脚本，可能后续会支持，也可能并不会支持，我们**需要从文档上查找相关接口**，然后根据文档叙述的接口使用方法调用，这可能会加大我们初期学习的难度，但你需要用到哪个模块的脚本就去哪个模块找就可以，习惯了也没什么困难。另一方面，由于官方没有提供其它编程语言的 gRPC 插件，因此当前来看我们可以认为这一类接口**仅是跨平台**的。当然**跨平台是未来的趋势**，加之`CPython`的生态优势，因此，ANSYS 将**逐步放弃维护基于 COM 接口的脚本**，目前**主推 PyAEDT**。

## 总结

我之前在_哔哩哔哩_分享过了使用 `MatLab` 以及 `C/C++` 外部调用 Ansys Maxwell 进行仿真的一个小案例，比葫芦画瓢可以做出更多复杂且定制化的东西出来，甚至可以**把Ansys Maxwell集成在自己工作流中**。虽然说 ANSYS 官方会逐渐放弃维护基于 COM 接口的脚本，但短时间内不会，至少得把 `PyAEDT` 推的差不多了再说，另一个，还得为老用户着想啊，这该死的兼容~

虽然来说 gRPC 接口指定了我们必须使用 `Python` 编程语言，但当前 AI 编程时代，你如果熟悉一门甚至不熟悉任何编程语言都不要紧，有了 AI 编程这位老师，你可以比之前更快入门并掌握一门编程语言。而就在最近，**[ChatGPT 推出了学习模式](https://mp.weixin.qq.com/s?__biz=Mzg3MjUyNTQyMA==&mid=2247484492&idx=1&sn=2eb69691e615de01f329d9252847d21f&scene=21#wechat_redirect)**，更是为我们学习编程语言提供了更便捷高效的方式。我对 `C/C++` 比较熟悉，最近也在用 ChatGPT 的学习模式快速掌握 `Python` 的基本语法以及高级用法。

作者|斗沙片刻