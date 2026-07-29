# 石英晶体振荡器仿真-Multisim

原创 电路一点通 2025-03-06 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/DOFDeAA18VfLA15Tc1kylA](https://mp.weixin.qq.com/s/DOFDeAA18VfLA15Tc1kylA)

### 实验目的与要求

1、熟悉晶体振荡器的基本工作原理。

2、掌握静态工作点和负载变化对晶体振荡器的影响。

3、了解晶体振荡器工作频率微调的方法。

4、掌握晶体振荡器频率稳定度高的特点。

  

### 实验仪器

微机，仿真软件Multisim13.0

  

### 实验内容与测试结果

在Multisim13.0电路窗口中，创建如下图所示仿真电路。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_000_536f199f0835.png)

图一

  

#### 1、观察输出波形，测量振荡频率和输出电压幅度。

        **对图1**，单击仿真按钮，从**示波器**中观察到的输入输出波形如下：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_001_1a5c40c1cda0.png)

波形图

  

 f振荡频率=2.083kHZ;

输出振荡幅度为:8.724 V;

  

#### 2、测量静态工作点的变化范围（IEQmin-IEQmax）。

        操作方法：先将R2调成0%，测IEQmin，接着按下图操作所示进行操作。

![](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_002_77b8ba22b877.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_003_c95e7f14c55a.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_004_cf5ec0f4905e.png)

选择IE就行，接着就可以按仿真

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_005_1ffade473724.png)

IQE最小值

 IQE最大值的操作和上面一样，将R2调到100%，重复上述操作。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_006_7cde06d328a1.png)

IQE最大值

####  3、测量当静态工作点在上述范围时输出频率和输出电压的变化。

        _R_6\=30k保持不变，分别取_R_2：25%、50%、75%，自行设计记录表格。

_R_2

25%

50%

75%

输出频率

0 HZ

4.676 MHZ

4.675 MHZ

输出电压

10.359 nV

8.724 V

8.730 V

####  4、测量负载变化对振荡频率和输出电压幅度的影响

        _R_2：50%，_C_2=50%保持不变，分别取_R_6：10k、30k、50k，自行设计记录表格。

_R_6

10k

30k

50k

振荡频率

4.676 MHZ

4.676 MHZ

4.675 MHZ

输出电压

7.423 V

8.724 V

8.867 V

#### 5、测量微调电容变化对振荡频率和输出电压幅度的影响 

        _R_2：50%，_R_6=30k，分别取_C_2：48%、50%、52%，自行设计记录表格。 

_C_2

48%

50%

52%

振荡频率

4.679 MHZ

4.676 MHZ

4.679 MHZ

输出电压

8.024V

8.724 V

8.481 V

### 实验结果分析 

对上述实验内容及测试结果分别分析如下：

1、实验内容1的测试结果表明：这是一个以石英谐振器作选频网络的反馈型振荡器称为（石英晶体振荡器），波形图显示，该振荡器频率f振荡频率=2.083kHZ; 输出振荡幅度为:8.724 V;

2、实验内容2的测试结果表明：该振荡器具有极好的稳定度。IQEmin：-1.92978、IQEmax：-1.11025；

3、实验内容3的测试结果表明：当_R_2值过小的时候，石英晶体无法发生振荡，所以频率为0 HZ，当石英晶体开始振荡之后，会迅速趋近于稳定，频率变化很小。

4、实验内容4的测试结果表明：无论_R_6如何变化，振荡器的频率都不会发生很大的变化。

5、实验内容5的测试结果表明：对电容_C_2进行微调，对振荡器的频率造成影响很小。石英晶体的参数值十分稳定，所以它的等效谐振回路具有很高的标准性。

Multisim仿真100例

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_007_341439235273.png)

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_008_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_009_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_010_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_012_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_011_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_013_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## **一点通推荐**

-   [  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=1&sn=26e51cee715c5eff0716b0edf4a1b138&scene=21#wechat_redirect)
    

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[三极管开关电路设计思路假设成真，还要保证啥条件？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541116&idx=1&sn=45df014db83cebd9aa20da1bb83c406b&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[LED背光驱动芯片应用电路详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540851&idx=1&sn=d5e7e21ecf18e5f17bd60487df198103&scene=21#wechat_redirect)**
    
-     
    

-   [汽车零件名称全命名（发动机结构、变速器、制动系统、底盘、电器）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247486962&idx=1&sn=84064cf369d2f834fe72f17cde4c2d1a&scene=21#wechat_redirect)  
    
-   [汽车空调系统主要零件图（压缩机、冷凝器、蒸发器、节流部件）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487155&idx=1&sn=c827534320f161c465b38d565b847ec5&scene=21#wechat_redirect)
    
-   [汽车底盘部件结构图解：底盘、变速器、离合器、悬挂、制动、转向](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487235&idx=1&sn=ce96f821e25b1e8ffc4136fc211db631&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\石英晶体振荡器仿真_Multisim_images\img_014_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**