# 华为交换机拆解，学EMC基本操作

原创 硬件笔记本 2022-06-16 07:26 四川

> 原文地址: [https://mp.weixin.qq.com/s/UjAe4xOde-9LAf34kjCQ8A](https://mp.weixin.qq.com/s/UjAe4xOde-9LAf34kjCQ8A)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

1\. 静电抗扰

理想情况下，我们的系统是一个中空且密闭的金属盒子，根据电磁场理论，外界的任何静电源都不可能影响到盒子内部的电路运作。然而这样的一个系统是没有什么实际意义的。一个实际的系统必然包括对外接口（即不可能密闭）。一个实际的（金属外壳的）系统应该能够（在积聚起足以影响系统工作的静电电荷前）足够快地将施加在其上的静电泄放到地。这就带来以下几个要求（仅针对金属外壳设备）：

    1) 良好的接地端子

    2) 任何裸露的、可能被静电影响的金属都应与接地端子之间有良好的连接

    3) 设备外壳上的任何空隙都应足够小，使得静电无法通过金属空隙“穿越”到设备内部

  

2\. 机箱全貌

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg1wQ1AcQXj2AeRUrDPwjxpz3u1zzya69D0cfMFaiaN9icRar3LQ67mFtSmbLHruXICGOTusL5WpAcA/640?wx_fmt=jpeg)

这个机箱是有一个上盖的，上盖与机箱有较大（很大！）面积的金属接触，可惜忘了拍图。印象中上盖整体盖住了机箱的左、上、右、后四个面。

  

3\. 电源输入和AC/DC

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg1wQ1AcQXj2AeRUrDPwjxpLYmCkaerKWY1O8z2pK3oyZNFQ7q4icAicyVv62obmM2Uic9HWqibA8wVXQ/640?wx_fmt=jpeg)

电源输入的地线直接接到了机箱外壳上，而没有接到AC/DC上，也就是是说，将机箱这个大片金属当做一个比较完美的静电放电回路（对浪涌之类的试验应该也有好处）。AC/DC电源输入插座上方的蓝色器件应该是一个压敏电阻？

  

4\. AC/DC输出

AC/DC输出直接接到了主板上（PCB电源输入和工作地）。

  

5\. 主板与机箱的连接

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg1wQ1AcQXj2AeRUrDPwjxprBh3LP8WBg8ibZeOFDuP6icXSIBkiaG5vBib9BftIicrbfbLUrsTMgncyxQ/640?wx_fmt=jpeg)

  

可以看到，用于固定主板的螺钉下是大面积的裸露铜箔。拆开主板，下方的机箱壳体是这样的：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg1wQ1AcQXj2AeRUrDPwjxpib05RLOXhLCNicnU2dCrVgIFlQE3NNjfY1KnMGiaw3ZBg2F77rSLwTktw/640?wx_fmt=jpeg)

每一个安装孔都凸起一块较大面积。相应的，从机箱底部看，安装孔部位是凹陷的。

每一个固定PCB螺钉都将PCB上的某个地（工作地或接插件地，见下文）连接到机箱外壳。PCB上的工作地和接插件地通过机箱外壳共地。

  

6\. 主板接插件与机箱、主板之间的连接

分两种情况。

6.1 焊接在主板上的接插件与机箱外壳良好搭接

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg1wQ1AcQXj2AeRUrDPwjxpQtX7ehUMYbPYXZunpia7q10QaloOoRHJziabt7P12xDCPNNywNBhgpsQ/640?wx_fmt=jpeg)

图中机箱外壳在接插件孔处有弯角，与接插件簧片良好连接。这时将接插件外壳直接连接到PCB的工作地。

  

6.2 接插件外壳与机箱接触不够良好

此时接插件外壳在PCB上使用单独的地平面（多个与机箱外壳接触不良的接插件外壳共用地平面），然后一方面在PCB上与工作地之间跨接电容，另一方面通过上文所述螺钉和大面积铜箔连接到机箱外壳。PCB上的接插件地和工作地通过机箱共地。在PCB上这两者不直接连接（两者之间有电容连接）。这样，当对着此类接插件进行静电放电时，静电将首先通过机箱外壳泄放掉，而不会跑到PCB的工作地上。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg1wQ1AcQXj2AeRUrDPwjxpKRtjKgBicSovKkfZl4RsE3IP2uegERZMl39Y1gAnia6v5W4KDic3es2SQ/640?wx_fmt=jpeg)

  

7\. 其他杂项

7.1 轻触开关

（通过面板操作的轻触开关）的接地脚连接到接插件地，因此在不安装进机箱的情况下，轻触开关是不起作用的。

  

7.2 网络接口保护

除常用的本地侧TVS外，变压器侧的地通过压敏电阻（阻值不详）连接到接插件地（最终通过机箱连接到工作地）。

网络指示灯放置于PCB上，通过长导光柱引出，而不使用带LED的RJ45座，避免静电通过LED信号线干扰到系统运作。

  

转自博客园告别时代《EMC起步：华为交换机拆解 》

  

**后台回复****“**加群**”，****管理员拉你入技术交流群。**