# Gmsh源码编译


> 原文地址: [https://mp.weixin.qq.com/s/No2LMnW4mYxlGsMa6FVafQ](https://mp.weixin.qq.com/s/No2LMnW4mYxlGsMa6FVafQ)

最近在研究Gmsh，将编译过程中遇到的问题进行一个总结。

## 1Gmsh介绍

Gmsh是开放源码的三维有限元网格生成器，内置了CAD引擎以及后处理器。它的设计目标是提供便捷、轻量、用户友好的网格工具，具有参数化的输入以及灵活的可视化能力。Gmsh由四个模块构成（geometry, mesh, solver, post-processing），通过图形化接口控制，或者通过C++, C, Python, Julia和Fortran编程接口调用。

最开始在win下借助MinGW64进行编译，遇到了各种各样奇怪的问题，于是转战到Linux系统。在解决了一个一个的问题后，终于将源码编译成功，成功运行Gmsh图形化界面。

## 2ubuntu桌面卡死

寒假回家，手上只有自己本科时候的笔记本，比较老旧，一开始虚拟机安装的是ubuntu20.04版本，在配置好基本的环境后开始编译，但每次编译到90%都会由于错误终止，错误的信息主要是：

`/usr/bin/ld: 找不到 -lXext   /usr/bin/ld: 找不到 -lXmu   /usr/bin/ld: 找不到 -lXi   `

当我把上述信息输入浏览器寻找解决办法时，发现浏览器并不能打开任何新的网页，提示崩溃，所用应用程序都打不开，于是我强制关机。重启后发现ubuntu不能进入图形化界面，经过多番尝试后仍不能进入，于是重装ubuntu系统，遇到了同样的情况，ubuntu最后不能进入图形化界面。后来无意之间看到了引起黑屏的原因是ubuntu卡死：

> 当ubuntu系统出现鼠标能活动但点击无效的情况时，千万不要强行关机，否则系统直接毁了，进不去的。

好吧，我强制关机估计是把系统给毁了。但是重装系统后依然出现这样的情况，于是我猜测会不会是笔记本电脑比较老旧，加之ubuntu安装位置在我的光驱位的机械硬盘中，电脑带不动ubuntu20.04，于是我重新安装了ubuntu18.04版本，重新配置基本的环境。

## 3编译遇到/usr/bin/ld: 找不到 -lXXX问题

基本的`gcc`、`g++`、`make`、`cmake`环境配置好以后，我重新开始了编译。在对Gmsh源码进行编译前，需要安装几个依赖库。

供方提供了需要的依赖库以及编译Gmsh代码注意事项Gmsh compilation：

https://gitlab.onelab.info/gmsh/gmsh/-/wikis/Gmsh-compilation

Gmsh 需要 OpenCASCADE 和 FLTK 两个依赖库，最开始我想尝试使用OpenCASCADE 和 FLTK 的源码直接编译安装。在编译依赖库源码时候遇到了没有某些依赖库的情况，一般按照：`sudo apt install lib<XXX>-dev`安装对应的包即可解决问题。其中`<XXX>`为编译过程中依赖包的名称。

安装好依赖环境后，进行Gmsh源码的编译，在编译到90%时候，不出意外，又又又又又遇到了`/usr/bin/ld: 找不到 -lXXX问题`，主要是以下的问题：

`/usr/bin/ld: 找不到 -lXext   /usr/bin/ld: 找不到 -lXmu   /usr/bin/ld: 找不到 -lXi   `

这次我按照`sudo apt install lib<XXX>-dev`依次解决，但最后一个问题：`/usr/bin/ld: 找不到 -lXi`我按照`sudo apt install liblxi-dev`处理后仍然无法解决，使用命令：`apt-cache search lxi`查找相关包中发现了下面几个包：

`~$ apt-cache search lxi   liblxi-dev - LAN eXtensions for Instrumentation (LXI) software interface   liblxi1 - LAN eXtensions for Instrumentation (LXI) software interface   lxde - metapackage for LXDE   lxi-tools - LAN eXtensions for Instrumentation (LXI) software interface   lximage-qt - Image viewer for LXQt   lximage-qt-l10n - Language-package for lximage-qt   lxinput - LXDE keyboard and mouse configuration   lxinput-dbg - LXDE keyboard and mouse configuration (debug)   mesa-utils - Miscellaneous Mesa GL utilities   vxi-dev - Development files for the VXI-11 RPC protocol   `

依次尝试后都没有解决问题，多方查找资料后，是`libX11`安装不完整：

`~$ sudo apt install libx11-dev libxext-dev libxtst-dev libxrender-dev libxmu-dev libxmuu-dev   `

解决`/usr/bin/ld: 找不到 -lXi`问题，主要需要安装包`libxi-dev`(`libxi-dev`包含在`libxtst-dev`中)。可以看到之前安装的包`liblxext`、`libxmu-dev`也包含在其中。为了不在引起类似问题，将`libX11`全部安装。

解决了上述问题后，终于！！！

在gmsh源码目录下依次执行：

`mkdir build   cd build   cmake ..   cmake -DCMAKE_INSTALL_PREFIX=<安装位置>  ..   `

编译完成，没有报错。

## 4程序执行后图形化界面空白

在编译安装好的`bin`文件夹下找到了gmsh，但不是可执行程序，而是共享库：

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DRuibIzHfEoUAspSS7Oooun6WD1MUgVNPnx86fAreyvwkibesib3ZdbJnWqxantlD0brT4xZpyErI71Q/640?wx_fmt=png)

但是没有关系，在终端中执行`./gmsh`后，可以打开界面，但是打开的界面是一片空白。刚刚惊喜后又重新陷入了emo，这是为啥！

在外网中多方查找，发现可能的原因是依赖库`fltk`安装不完整导致，这个库是我自己编译安装的，可能存在一些问题，因此，选择卸载，通过命令：`libfltk1.3-dev`直接安装`fltk`库。

再次编译，终于终于终于！运行出了完整的gmsh图形化界面！![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DRuibIzHfEoUAspSS7Oooun6CNHib3184nlVD35pdzeBXnc80xpxvHCwVJgPDtlKgZPGqibcKia9go8Aw/640?wx_fmt=png)

## 5编译出可执行程序

虽然编译运行成功，但是美中不足，编译出来的是共享库而不是可执行程序。通过在网上查找，发现ubuntu上安装的gcc与g++编译器默认是`-pie`类型，编译出的是共享库，因此需要在编译中指定编译器选项为`-no-pie`。可以再`camke`中添加该选项：

`cmake  -DCMAKE_C_FLAGS=-no-pie -DCMAKE_CXX_FLAGS=-no-pie ..   `

或者在CMakeLists.txt文件中添加：

`set(CMAKE_CXX_FLAGS   "-no-pie")     set(CMAKE_C_FLAGS   "-no-pie")`  

至此，就可以成功编译出可运行程序gmsh！！！

好好享受吧～

作者|斗沙片刻