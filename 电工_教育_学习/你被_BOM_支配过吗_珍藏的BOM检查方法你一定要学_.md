# 你被 BOM 支配过吗？珍藏的BOM检查方法你一定要学！

原创 硬件笔记本 2022-09-26 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/Uy2vdfQeY2rbTY9pIOvIIA](https://mp.weixin.qq.com/s/Uy2vdfQeY2rbTY9pIOvIIA)

# 做硬件的小伙伴，肯定都有被 BOM 支配过的经历。

比如我最近做了一个新产品，下面的图片就是BOM的部分数据，需要核对的数量极大，而这还仅仅只是所有BOM数据的冰山一角。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xJ4iaAeH5ibILHFiaKibW2ZjicDutbUoQEX5y0HPB2EqBSAhoSV3jYiaRdxiaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

今天给大家分享一个**BOM的检查分析工具**，大家正常工作中对于BOM的检查分析的所有需求，基本都能满足！

  

  

**1、BOM比对**

  

打开软件之后在菜单栏，【工具】-【BOM比对】即可打开使用该功能：

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xmlg2MqKXjttiaibOmI8LnmjUyVV8SokXXNiaZ5nwDTrhfCEjKbykCBp2w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

左边导入原始的BOM，右边导入最新的BOM后，点击BOM比对，可以非常便捷的核对BOM文档修改前后的差异。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xfOnHRK2m6icSNv0jXO04GX16z8DsiatZRQxkbTu6MkgPw8YlJygpiaFcA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**2、BOM分析**

  

BOM分析可以完成如**位号重复、规格值信息不全、封装跟位号不匹配、某器件在BOM文件有位号，在坐标文件无位号等异常的检测。**

  

BOM分析功能集成在新版本的组装分析中,导入BOM后，能直接分析存在的问题：

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xLZBBeH6V3DQctLxfl6CMJKAvmMMckf1iaIa62xXrQice68icxvibIPibTLw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

工具下载地址（复制到浏览器下载） ↓

https://dfm.elecfans.com/uploads/software/promoter/hqdfm\_yjbjb.zip

  

除了BOM比对和分析之外，工具最近还更新了DFA分析的功能。

  

在最新的版本中，新增的DFA功能除了**能大大提高整理Bill of Materials(BOM) 的工作效率， 还能提供组装分析， 支持检查生产元器件组装存在的隐患，提前分析检查避免生产过程中不必要的损失。**

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xqocjq1icibxGLfSx3pneHzW5l62AhibtJr2CuibZFiaa48JxtzoCaAHjvjA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

**新版本功能解读**  

  

软件更新后支持：

  

**1、检测BOM与封装是否匹配**  

  

比如：用户的BOM表里面的型号是P6KE6.8CA，位号D4、D5、D8设计的PCB封装是DFN1610贴片二极管封装，BOM表里面的型号P6KE6.8CA实际是插件双向二极管封装，因此设计的封装无法使用采购的元器件。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xWmRvxReicwNdCrtAydjzXe4S2ibp6ZLR3CXDSTjMIwxTdUs9Xd3HEasA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5x29pHMEzVzPKyIrVSicyx19ib0icPdQO29fgnu3IAjj2HeyAb7FgYswGxQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

或者是BOM表里有型号，实际没有PCB封装，PCB设计完成后制版，按照BOM表采购元器件，在组装时才发现采购的元器件实际PCB板上面没有地方焊接或贴片。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xon9GjQKicanb76Dbd7ibUcRJdxTa6vBUGrQoxm9fO1MKOX2kvBxc2Sfw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**2、检测器件间距是否合理**

  

PCB布局时没有考虑是否能够组装，生产出来的板子组装时器件距离不足，则会导致生产困难，或者无法组装。器件的间距不足即便是能组装，以后也不方便返修。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xDjqGtibticUmC1ocKWcWibSu1torTjAPQVIZt5TO0fppWuj8m4UpmfyMg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**3、检测器件到板边的安全距离**

  

元器件到板边的安全距离不够，在组装过贴片机器时会撞坏板边的器件，拼版生产的板子在过V-CUT机器时会导致板边的器件焊盘被割小，组装时器件无法贴片。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xGhlxV5u2cyIliaibtT7pTaqAwJa7euzPpO3tc5n5rDQP8fBfckHusRyA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**4、检测器件与引脚是否匹配**

  

在BOM表的型号与设计的PCB器件封装不一致时，采购的元器件与板子上面的器件引脚不匹配，导致采购的元器件无法使用。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xOsOAQLC1qomn9ySz9KylaAWRuDRdrXsMTW99GVlK4KmIO7hEIFjAmw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**5、检测丝印是否离器件太远**

  

设计PCB时，字符的位号应尽量靠近元器件的PCB封装，字符的位号离PCB封装太远，会导致组装时，元器件无法识别对应的PCB封装，有可能导致贴错元器件。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xgFIpdzUScEpibE9llLNVVSludoAiaNPPnf7hicxP4RGmhLL8VINKibdVibw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**6、检测脚趾到焊盘边缘距离是否足够**

  

脚趾到焊盘边缘距离不足，可能存在上锡量不足虚焊或焊接不牢的风险，PCB设计封装制作时，需考虑好焊盘的尺寸大小，避免组装时出现的品质隐患。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5x7ic85yy49sN2aYouYiamdI70L2uSINNAz4wm9xrrbfNsklpxeLNOfRRw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**7、检测引脚是否接触多个焊盘**

  

PCB封装做好后布线布局都已完成，采购元器件BOM表的型号错误，封装名错误，都会导致引脚数不一致，器件引脚接触多个焊盘。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xDibMfh1b9Hibv0LaG4oNnCLe5OcD7FjZiaqI7GyTLfNWytGYV8pO88QNA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**8、检测焊盘大小是否合理**

  

在PCB中画元器件封装时，经常遇到焊盘的大小尺寸不好把握的问题，因为元器件规格书是本身的大小，如引脚宽度，间距等，但是在PCB板上相应的焊盘大小应该比引脚的尺寸要稍大，否则焊接的可靠性将不能保证。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5x6u1HTQSuJCqgRq0fDP8Sb0ZveWa9zticgXicT0XaiaIQBgKddibgTW7Ezw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**9、检测mark点**

  

线路板做好后，需要贴装元器件，现在元器件的贴装，都是通过机器来完成的（SMT）。SMT中会用到mark点，mark点用于自动贴片机上的位置识别点。无mark点会导致贴片不方便。

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xDQcT1MNpjuqgz5Gg9VhONHVAQZq9GyAHy4icgr9VKI6Hm2arrtJZPyA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

以上只是本次更新的部分内容，加上软件原本的DFM检测功能及多种工具，囊括了工程师常用的多个场景：

![](https://mmbiz.qpic.cn/mmbiz_png/7gOeeNvL1kV9BRFCiaFOwyWzGOBNnmv5xkOedUiaDYH0ibKIY4Z7ZzgjvNQibic4I9ibo4Ric9ibHqnicR7hciawAzKtPlKQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

**华秋DFM目前一共可以实现10大类，共234细项的检查！**PCB完成设计后，导入相关文件，通过软件一键检测，即可在最大程度上保证PCB设计的可靠性！

  

软件下载地址（复制到浏览器下载） ↓

https://dfm.elecfans.com/uploads/software/promoter/hqdfm\_yjbjb.zip