# 1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）

原创 硬件那点事儿 电路一点通 2025-07-30 11:41 广东

> 原文地址: [https://mp.weixin.qq.com/s/G-Jdlc-c6XcZp7Non\_T7BA](https://mp.weixin.qq.com/s/G-Jdlc-c6XcZp7Non_T7BA)

**Part 01**

**前言**

在PCB设计中，线宽的选择是个技术活，尤其是当电路中流过不同大小的电流时，线宽直接决定了电路的温升、压降和可靠性。太窄了可能导致过热甚至烧板，太宽了又浪费空间，增加成本。今天咱们就结合实际案例，聊聊1A和100A电流分别需要多大的PCB线宽，顺便分享一些设计中的小技巧和注意事项。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_000_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_001_fbdf4db7b190.png)

**Part 02**

**线宽计算**

下图中给出了一个PCB线宽计算的经验公式，来源于IPC-2221标准，IPC-2221这个标准是一个常用的PCB设计规范。咱们先把公式列出来，然后一步步拆解：

面积公式：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_002_0d1a84c52d63.png)

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_003_77d74908bfbc.png)

线宽公式：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_004_ec7253bd13ff.png)

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_005_dd188259c613.png)

接下来那么我们就以铜箔厚度：1oz(即0.0356mm)，允许温升：25℃，环境温度：25℃为例，分别计算一下1A电流需要多大PCB线宽？100A电流需要多大PCB线宽？

**Part 03**

**实例计算**

1.计算1A电流需要的线宽

步骤1：计算走线截面积A

假设走线是外层，散热条件较好，用外层参数：k=0.048，b=0.44，C=0.725。电流I=1A，温升Trise = 25°C。代入公式:

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_006_0886ce3b466c.png)

可以计算得到：A=9.32mil^2

步骤2：计算线宽W

铜箔厚度t=1oz=1.4mil，代入线宽公式:

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_007_234e7c702929.png)

1A电流，外层走线，1oz铜厚，温升25°C时，线宽只需要0.123mm，约0.13mm，这个宽度非常小。

2.计算100A电流需要的线宽

现在算个大电流的场景100A。

步骤1：计算走线截面积A

还是外层走线，参数不变:k=0.048,b=0.44,c = 0.725。电流I=100 A，温升Trise=25°C。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_008_48ac6702c350.png)

步骤2：计算线宽W

铜箔厚度还是t=1oz=1.4mil，代入公式：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_009_f02b1f0955d4.png)

转成毫米：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_010_1bca025d7e0d.png)

100A电流，外层走线，1oz铜厚，温升25°C时，线宽需要69.94mm，约70mm。这可是一条"超级宽"的线，PCB上基本放不下，实际设计中得用其他方法解决，后面会讲。

3.内层走线的差异

如果是内层走线的k=0.024，比外层的k=0.048小一倍，说明内层散热条件差，同样的电流和温升下，内层需要的截面积更大。咱们简单算一下1A在内层的线宽：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_011_07dfa86a26ab.png)

内层线宽是外层的1.6倍左右，符合散热差异。

4.实际设计中的应对：100A怎么办？

70mm的线宽显然不现实，PCB上根本放不下。实际设计中，100A这种大电流通常会用以下方法:

增加铜厚：用2oz甚至4oz铜箔，减少需要的线宽。2oz铜厚时，100A的线宽会减半，变成35mm左右，但还是很宽。

多层并联：在多层PCB中，把几层走线并联起来。比如4层板每层放一条20 mm宽的线，相当于80mm宽，勉强能搞定。

铺铜或加母排：对于大电流，直接在PCB上铺大面积铜箔，或者用铜排Busbar代替走线，散热更好，压降更小。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_012_389f4096d831.png)

**Part 04**

**总结**

通过计算，1A电流只需要0.13mm的线宽（外层，1oz铜厚，25°C温升），而100A需要70mm的线宽，显然需要特殊处理。实际设计中，线宽选择得综合考虑电流、温升、铜厚、散热条件和加工能力。小电流时可以稍微宽松点，大电流时得用铺铜、加母排等"硬核"方法。设计时多算几遍，别让PCB"热到冒烟"，毕竟电路稳了，你才能睡得香！

觉得自己手动计算麻烦？也有在线计算器哦：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_013_ecb030e202b6.png)

公众号内回复关键词：PCB线宽 ，即可获得哦：

  

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[一过零检测电路看上去很复杂，按照元件特性分析很好理解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550343&idx=1&sn=9d5d84104d03cf0c2f0e0fe29e552a7e&scene=21#wechat_redirect)**
    
-   **[硬件工程师离职率低真相揭秘（附: 月薪2W简历）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549510&idx=1&sn=1014bbdf19a39d89aadedf589d57156d&scene=21#wechat_redirect)**
    
-   **[新能源汽车品牌天梯图，遥遥领先还得是特斯拉？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524164&idx=1&sn=b2e2057c90f6d6ea0e1ba53a8f463662&token=915621150&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[插电式混合动力(增程式)电动汽车51页-pptx](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247524086&idx=1&sn=c2defc36630c645e9a9ea25719097d0b&token=915621150&lang=zh_CN&scene=21#wechat_redirect)**
    
-   **[维修电工【PPT系列】电气设备的计划管理及大修工艺](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260574&idx=2&sn=0cab5de3264fc35ad1ef35bdc46bf606&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\1A和100A电流分别需要多大的PCB线宽（实例分享技巧和注意事项）_images\img_014_564a8a9dfb8b.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️