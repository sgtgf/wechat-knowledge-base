# ESD泄放路径及相关问题整改

原创 电路一点通 2025-10-21 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/gE8sVPFpgoGB9U\_dX3MIXw](https://mp.weixin.qq.com/s/gE8sVPFpgoGB9U_dX3MIXw)

## ESD放电是共模干扰：

**共模干扰**是指**干扰信号同时在两条线路（通常是信号线和地线）上以相同方向流动**，并通过设备对地电容等耦合路径返回到源头。相对于差模干扰（两条线上电流方向相反），共模干扰更倾向于通过**辐射或电磁场感应**的方式传播**ESD为什么是共模干扰：对地放电产生共模电压跃变：ESD经常通过一个人体或工具对设备外壳或地放电，结果导致整个系统的“地”都抬升了。此时，信号线与地之间的电压没有改变，但整个系统“漂起来”了，表现为共模变化。**

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\ESD泄放路径及相关问题整改_images\img_000_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

## ESD放电路径：

产品接触放电时，因为静电是共模干扰，因此放电电流将沿着机箱壳体，通过PE地线到实验室水平参考接地平板，然后返回源头。理想情况下，确定静电电流泄放路径时，可以将设备的外壳平铺开，沿放电点到设备接地点画条直线，一般来说，这条直线就是ESD电流的泄放路径。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ESD泄放路径及相关问题整改_images\img_001_d0ca80d90182.png)

## 机箱放电路径不畅、接PE地不良的后果：

产品金属机箱上下壳体之间存在缝隙，导致静电泄放路径发生改变。本产品金属机箱上下壳体之间存在缝隙，此时静电电流泄放路径上阻抗很高，因此，上壳体和手部训练器做接触放电时电荷将在上壳体积累，随着电量的升高，将在上壳体和内部电路之间建立电场，随着电场增强，就会将ESD干扰带入电路内部，如图所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ESD泄放路径及相关问题整改_images\img_002_e5c32154e872.png)

上下机壳金属搭接不良，导致缝隙处有较大的泄放阻抗，此时由于机壳与GND平面存在分布电容(机壳与信号线之间很小)，因此ESD电流将流经GND平面到接地，此时将在GND平面产生压降U，那么叠加到有用信号之上将产生电磁干扰。

## 整改措施：

连接不畅地方加导电橡胶条。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ESD泄放路径及相关问题整改_images\img_003_1dc2c76d3081.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\ESD泄放路径及相关问题整改_images\img_004_e937c994cf0d.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\ESD泄放路径及相关问题整改_images\img_005_57a97b4c57c6.png)

PCB加屏蔽罩：

![](D:\电脑文件\公众号知识库\电工_教育_学习\ESD泄放路径及相关问题整改_images\img_006_59492c3ed402.png)

这也告诉我们，对于需要做接触放电测试的机器，PE地和板级GND需要加R并联C隔开。

  

## **一点通推荐**

-   [画PCB常见错误及解决办法](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247554776&idx=1&sn=c17e5d96eff3e9362e7fab26fb8fc9a7&token=1401892576&lang=zh_CN&scene=21#wechat_redirect)
    
-   [TL431及光耦反馈电路计算（不涉及环路补偿）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247547069&idx=1&sn=47a0f5005799978ea8cc13fd21b395e3&token=1401892576&lang=zh_CN&scene=21#wechat_redirect)
    
-   [光耦隔离继电器电路讲解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534015&idx=2&sn=2cf0fed040b284e550536abc82f2ebe3&token=1401892576&lang=zh_CN&scene=21#wechat_redirect)
    
-   [光耦电路设计步骤+实例，像BJT电路一样容易](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247511953&idx=1&sn=4d27f580b6b4a07655edbdf0554e7d66&token=1401892576&lang=zh_CN&scene=21#wechat_redirect)
    
-   [汽车底盘构造-行驶、传动、转向、制动](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247528949&idx=1&sn=6ebe1240e016c8e1564bbcbac1c9bcf5&token=1685944155&lang=zh_CN&scene=21#wechat_redirect)
    
-   [华为汽车布局:零部件供应商、Hi模式、五界车企实力对比](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247528887&idx=1&sn=be44aca651d28f3b159d653dee148e7e&token=1685944155&lang=zh_CN&scene=21#wechat_redirect)
    
-   [开关、电机、断路器、电表接线图大全【百张高清图解】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456262737&idx=1&sn=435fc3080eb727b65b002cb3147c5b57&scene=21#wechat_redirect)
    
-   [土火象间的矛盾点(当不了恋人，当不了朋友)](https://mp.weixin.qq.com/s?__biz=MzkyNzc4Njk1Mg==&mid=2247483850&idx=1&sn=8d73e14600fec90b29f37a8be2590598&scene=21#wechat_redirect)
    

  

* * *

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\ESD泄放路径及相关问题整改_images\img_007_583ecf83b7f1.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️