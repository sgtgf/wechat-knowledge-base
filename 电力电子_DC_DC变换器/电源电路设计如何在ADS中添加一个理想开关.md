# 电源电路设计如何在ADS中添加一个理想开关

原创 电路一点通 2025-04-10 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/EOmWzII7yBj6ihflntLHdA](https://mp.weixin.qq.com/s/EOmWzII7yBj6ihflntLHdA)

开关在电路设计的过程中经常会用到，通常用一个三极管或mos管就能实现开关的功能，在电路原理性验证的时候我们可以在ADS中建立一个理想的开关模型，来对我们想要实现的电路进行仿真验证。比如开关电源中的开关或模拟一个动态的负载，都可以通过一个理想的开关模型来实现。具体如何操作呢？

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源电路设计如何在ADS中添加一个理想开关_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

首先在器件搜索框里找到System-Switch&Algorithmic，单击进入子选项卡

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源电路设计如何在ADS中添加一个理想开关_images\img_001_0696afd5b2e4.jpg)

在这里我们选用一个动态的SPDT开关（单刀双掷），当然也可以在搜索框里直接搜索switch或SPDT关键字。将它放到我们的电路中就可以了。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源电路设计如何在ADS中添加一个理想开关_images\img_002_992424363f52.jpg)

ADS的帮助文档里有详细的使用说明，有兴趣的同学可以自己翻一翻。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源电路设计如何在ADS中添加一个理想开关_images\img_003_31c69b75d12d.jpg)

Pin1 是输入管脚，Pin2和Pin3 是输出管脚，pin4 是控制管脚。如果Pin4 的电压大于2V，Pin1 和Pin2导通，如果Pin4的电压小于1V，Pin1 和Pin3导通。当Pin4 的电压在1V和2V之间的时候我们暂时先不用这种状态，不予考虑。原理很简单，实际上就是通过Pin4上的电压改变R1与R2的电阻值来控制通断的。如果Pin4 的电压大于2V，R1的阻值为0ohm，R2为1Gohm，当Pin4的电压小于1V, R1的阻值为1Gohm，R2为0ohm。

一个例子：

这里我们模拟一个动态变化的负载，变化的范围是10ohm和20ohm两个值，周期是5usec，通过一个方波信号提供开关Pin4的控制电压，然后在电源输出端加一个电流探针来观察这电源输出的电流。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源电路设计如何在ADS中添加一个理想开关_images\img_004_557642167d79.jpg)仿真原理图

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源电路设计如何在ADS中添加一个理想开关_images\img_005_068ade380b8f.jpg)仿真结果

可以看到当负载发生变化时，电源输出的电流就会发生变化，在芯片工作时，芯片里成千上万的MOS管的状态在不停的反转，在电源看来，这个芯片的输入阻抗就是一个不停变化的量，就会产生噪声，如果想更准确的模拟这个噪声，用开关加电阻的方式是远远不够的，需要更精确的模型，或通过测试手段得到噪声。

有的芯片的动态范围很大，如果电源平面阻抗处理的不好，这些动态电流就会在供电网络上产生压降，芯片的输入电压不稳。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543740&idx=1&sn=4eec30740b99cf90f8076bc388d2c68b&scene=21#wechat_redirect)[硬件设计之元器件选型：二极管、三极管、MOS管](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543740&idx=1&sn=4eec30740b99cf90f8076bc388d2c68b&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543740&idx=1&sn=4eec30740b99cf90f8076bc388d2c68b&scene=21#wechat_redirect)[【电机控制】PMSM无感FOC控制](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543421&idx=2&sn=3d5c92f9b785d39b6b1708987dd0a6f0&scene=21#wechat_redirect)**
    

-   [高压共轨电控柴油机概述与维修维护](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516700&idx=2&sn=cafd5f9ad82998ba73eb3ce5f7a706b3&scene=21#wechat_redirect)  
    
-   [汽车主要参数，一文全懂](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516431&idx=1&sn=581bb53f27db3a501e7c6f7a70779cd0&scene=21#wechat_redirect)  
    
-   [汽车空调系统部件结构与控制电路](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247516267&idx=1&sn=71505efa18188da16ac12fdaa1c4db0e&scene=21#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源电路设计如何在ADS中添加一个理想开关_images\img_006_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**