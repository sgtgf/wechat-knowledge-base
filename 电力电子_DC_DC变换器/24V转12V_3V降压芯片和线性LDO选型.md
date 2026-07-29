# 24V转12V~3V降压芯片和线性LDO选型

原创 电路一点通 2025-01-10 11:45 广东

> 原文地址: [https://mp.weixin.qq.com/s/N-6TCT2sdMbqCEIifTnXmg](https://mp.weixin.qq.com/s/N-6TCT2sdMbqCEIifTnXmg)

大货车的电箱电池电量是24V，小轿车的电箱电池电量是12V，在车充中，就需要用到24V转5V给手机充电的芯片。还有是24V的适配器，稳压降压到更低电压，根据不同的应用，需要不同的电压和不同的电流。需要选择搭配的IC也会很多。

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_000_30e990002c0e.png)

24V转15V ，24V转12V，24V转9V，24V转8V , 24V转6V ,24V转5V，24V转3.3V，24V转3V，24V转1.8V，24V转1.2V.

LDO的话，一般是用PW6206即可，稳压3V，3.3V,5V输出供电。

DC-DC符合100MA起以上电流时，的选择，LDO因为两个电压差太高，效率低的同时，温度及其高，不利于电路的稳定和工作。

▼ **往期精彩回顾** ▼

    
-   [👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   [9天练会电子电路检测.pdf(286页）](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   [嵌入式5种常用模拟电路！  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537820&idx=1&sn=de2f26b00ff0950bdb7dd4f8d69f604a&scene=21#wechat_redirect)
    
-   [交流开关电源 (AC/DC) 设计实例-58页（PPT课件）  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537764&idx=2&sn=1fdc7beb87d456b24d124434030e84c2&scene=21#wechat_redirect)
    
      
    

注意24V输入时，在通电和接上电时，会产生输入尖峰电压，一般是0.5V倍-3倍左右，输入改用电解电容也能吸收尖峰电压，保护芯片不被过高电压击伤损坏。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_001_dfc4922dffa8.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_002_6753ea301ef7.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_003_a19c6fa4da58.png)

在24V输入中，比较合适的LDO可以选择：PW6206，输出电压3V,3.3V,5V

输入电压最高40V，功耗也低4uA左右。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_004_2ee144f77cdd.png)

在24V输入中，比较合适的DC-DC可以选择：0.8A的PW2558，1.2A的PW2312和3A的PW2330以及以上都最合适的。 

PW22558是一颗DC-DC降压转换器芯片，输入电压范围4.5V-55V，最大负载电流0.8A，可调输出电压，频率1.2MHZ高频率，可采用贴片电感，节省空间，采用SOP8封装形式。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_005_b6b332f825ae.png)

PW2312是一颗DC-DC同步降压转换器芯片，输入电压范围4V-30V，最大负载电流1.2A，可调输出电压，频率1.4MHZ高频率，可采用贴片电感，节省空间，采用SOT23-6封装形式。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_006_172733dd9625.png)

PCB图适用于PW2162和PW2312案例：![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_007_6f4187fd7ec4.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_008_c4d1805dda9a.jpg)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\24V转12V_3V降压芯片和线性LDO选型_images\img_009_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

分享💬点赞👍在看❤️ 

  

以“三点”行动支持！