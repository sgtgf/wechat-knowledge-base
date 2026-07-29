# PCB叠层阻抗设计（详细）

原创 电路一点通 2025-04-15 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/OvlmHnahVrhlM1r2RpKOpA](https://mp.weixin.qq.com/s/OvlmHnahVrhlM1r2RpKOpA)

#### 本文介绍了阻抗的概念、计算公式，阐述了控制PCB阻抗的意义，即减少信号反射导致的失真，以实现不失真的信号传输。还说明了影响阻抗的因素，如介质厚度、介电常数等，并通过实例展示了某公司板子的叠层阻抗信息及阻抗线线宽线距情况,设计过程中还要以实际出发，多余板厂沟通，多参考demo及设计目的。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_000_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

#### 文章目录

一、什么是阻抗

二、阻抗计算公式

三、控制阻抗意义

四、影响阻抗的因素

五、实例展示

* * *

## 前言

`随着信号传送速度迅猛的提高和高频电路的广泛应用，对印刷电路板也提出了更高的要求。印刷电路板提供的电路性能必须能够使信号在传输过程中不发生反射现象，信号 保持完整，降低传输损耗，起到匹配阻抗的作用，这样才能得到完整、可靠、精确、无干扰、噪音的传输信号。`

## 一、什么是阻抗

在具有电阻、电感和电容的电路里，对电路中的电流所起的阻碍作用叫做阻抗。阻抗常用Z表示，是一个复数，实部称为电阻，虚部称为电抗，其中电容在电路中对交流电所起的阻碍作用称为容抗 ,电感在电路中对交流电所起的阻碍作用称为感抗，电容和电感在电路中对交流电引起的阻碍作用总称为电抗。阻抗的单位是欧姆。阻抗的概念不仅存在于电路中，在力学的振动系统中也有涉及。

## 二、阻抗计算公式

Z=R+j(wL-1/wC)  
说明：负载是电阻、电感的感抗、电容的容抗三种类型的复物，复合后统称“阻抗”。其中R为电阻；wL为感抗；1/wC为容抗；j为虚数单位。  
（1）如果wL-1/wC >0，称为“感性负载”；  
（2）反之，如果wL-1/wC <0，称为“容性负载”。

## 三、控制阻抗意义

在高频下，PCB上的信号走线就像传输线，在信号走线轨迹上的每个点都有阻抗。如果这个阻抗从一个点到下一个点变化，就会有一个信号反射，其幅度将取决于两个阻抗之间的差异。差异越大，反射越大。这种反射将沿信号的相反方向传播，这意味着反射信号将叠加在主信号上，使原始信号会失真。原本要从发送端发送的信号一旦到达接收端就会发生变化。失真可能很大，以至于信号可能无法执行所需的功能。因此，要获得不失真的信号传输，PCB信号走线必须具有统一的受控阻抗，以最大限度地减少由反射引起的信号失真。公众号@电路一点通

## 四、影响阻抗的因素

可参考SI9000模型，前面已经详细将结果SI9000计算规则，这里就不详细展开了。  
H1：介质厚度，也就是我们走线层和参考面的距离；  
Er1：介电常数；  
W1：阻抗线的底部宽度；  
W2：阻抗线的顶部宽度；  
S1：阻抗线的线间距；  
T1：成品铜厚；  
C1：基材阻焊厚度；  
C2：铜皮或走线上的阻焊厚度；  
C3：基材走线中间的阻焊厚度；  
CEr：阻焊的介电常数；

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_001_d45493b184df.png)

## 五、实例展示

下图为某公司的板子叠层阻抗信息：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_002_798ca4e1e7cd.png)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_003_ecf1c2a7d0a6.png)  
从以上信息，可以总结出层叠分布及阻抗控制情况，具体见下表：

![请添加图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_004_c84aa02378b4.png)  
从以上信息可以看出，PCB是6层板，分别是（TOP、GND02、ART03、ART04、GND05、  
BOTTOM）；板厚为 1mm（生产时允许有 10%公差）。  
通过叠层信息，可以利用Polar SI9000计算出阻抗线线宽线距情况，具体见下图：

1）微带线单线阻抗：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_005_b1420d3b58a4.png)  
2）微带线差分线阻抗：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_006_2f018fe41a33.png)

3）带状线单线阻抗：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_007_a8201f44ed8f.png)

4）带状线差分线阻抗：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_008_a8078f79b3b3.png)

##   

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[2种余电快速泄放电路方案优缺点比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543870&idx=1&sn=984caffd4abc506ea774728f6b3391e3&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[两种4~20mA 电流采样电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544093&idx=1&sn=a2ecc94d4f38c7e6c55b029d2832d5f9&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[德系大众车EA211、EA111和EA888 三款发动机闭着眼睛买？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517443&idx=1&sn=59eba24507fb558c8f2291d50a683458&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[12米纯电动公交车辆高低压电路](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247511060&idx=2&sn=3100e693fde4f90a9a9d7adcefa05c11&scene=21#wechat_redirect)**
    

[**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\PCB叠层阻抗设计（详细）_images\img_009_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**