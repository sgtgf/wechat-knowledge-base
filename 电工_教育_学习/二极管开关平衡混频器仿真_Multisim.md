# 二极管开关平衡混频器仿真-Multisim

原创 电路一点通 2025-03-25 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/HCf4pPxRUohUqs9M3F1nEg](https://mp.weixin.qq.com/s/HCf4pPxRUohUqs9M3F1nEg)

### 实验目的与要求

1、加深对混频器功能的理解。

2、掌握二极管开关平衡混频器工作原理。

3、掌握混频器的Multisim测试方法

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)[一图看懂反激式电源元器件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)[电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)[单片机接口保护电路设计方案【deepseek设计】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542243&idx=2&sn=cfd0574da460a177cc0b075c820e55c2&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)[接口电路防护设计要点解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542223&idx=1&sn=2009778e26951209ff4cb6d26251f0aa&scene=21#wechat_redirect)**
    

###  实验内容与测试结果

在Multisim13.0电路窗口中，创建如下图所示仿真电路。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_000_f4096312b15a.png)

图1 

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_001_c2d75ddbf89e.png)

调幅波的参数 

  

####  1、测试输入输出波形，说明两者之间的关系。

        **对图1**，单击仿真按钮，从**示波器**中观察到的输入输出波形如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_002_aabcc3451b8b.png)

####  2、测试输出信号的频谱

        （傅里叶分析法）

        **操作方法 ：**

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_003_e494986dd691.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_004_296753231504.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_005_5f0a60eb48b0.png)

输出信号频谱

  

####  3、将其中一个二极管反接，测试输出波形，并解释原因；将两个二极管全部反接，测试输出波形，并解释原因。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_006_1753747768de.png)

一个二极管反接

  

        二极管平衡被打破，电路没有完成混频作用，根本不能混频。 

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_007_f8bf79ca9ebd.png)

两个二极管均反接

  

         说明二极管同时反接，电路可以正常工作。

####  4、将_R_3、_R_4去掉，测试输出波形，并解释原因。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_008_5e97471c0cfd.png)

         虽然是调幅波，但是有失真，原因是：带通型滤波器特性曲线尖锐还是平缓取决于_R_3、_R_4，_R_3 _、R_4越小越尖锐。曲线越尖锐，意味着通频带越窄，对信号的选择性也就越差。而发射的混频信号宽度为2kHZ,带宽大于2kHZ则可以不失真的输出，但是带宽减小了，两边的谱线输出有些被滤掉了，所以输出的调幅波波形失真。

####  5、若将AM信号的载波频率改为800kHZ,并保持输出中频频率不变，则哪个（些）电路参数应做何改动？实验验证。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_009_210b7671daad.png)

         改变V1、V2的本振频率同时减小200kHZ,波形就不会失真了。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_010_be0a51dcc461.png)

###  实验结果分析

        对上述实验内容及测试结果分别分析如下：

1、实验内容1的测试结果表明：V1、V2是本振信号，V3是调幅波，在5号节点端接两个带通型滤波器。绿色的是调幅波输入的波形，载波频率是1000KHZ,包络变化速度是1kHZ，红色是混频器输出波形，混频器的功能:把一个调幅波变成另外一个调幅波。相同点就是包络变化速度相同，都是1k,调制深度没有改变，调制规律不变，变得是调幅波的载波频率，由1000kHZ变到1465khz-1000khz=465khz。

2、实验内容2的测试结果表明：该混频器有三条谱线，左边的谱线在464k,右边的谱线在465k。

3、实验内容3的测试结果表明：一个二极管反接，二极管平衡被打破，电路没有完成混频作用，根本不能混频。两个二极管反接，说明二极管同时反接，电路可以正常工作。

4、实验内容4的测试结果表明：虽然是调幅波，但是有失真，原因是：带通型滤波器特性曲线尖锐还是平缓取决于_R_3、_R_4，_R_3 _、R_4越小越尖锐。曲线越尖锐，意味着通频带越窄，对信号的选择性也就越差。而发射的混频信号宽度为2kHZ,带宽大于2kHZ则可以不失真的输出，但是带宽减小了，两边的谱线输出有些被滤掉了，所以输出的调幅波波形失真。

5、实验内容5的测试结果表明：本振的频率和调幅波的频率变化要相等，不然调幅波会失真。

Multisim仿真100例

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_011_341439235273.png)

****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_012_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_014_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_016_659969ac15d4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_013_659969ac15d4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_015_659969ac15d4.png)****  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_017_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管开关平衡混频器仿真_Multisim_images\img_018_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**