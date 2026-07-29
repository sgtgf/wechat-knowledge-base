# 降压48V转12/15V电路图（DCDC BUCK电源）

原创 电路一点通 2025-01-26 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/yOtmm7pqmExyz1cMSMSlTg](https://mp.weixin.qq.com/s/yOtmm7pqmExyz1cMSMSlTg)

**48V转换15V**

不管是维修还是设计电路时，都会需要把某一种电压转换成另一种电压，比较常见的就是48V电压转换15V,如果要效率高，还得是DCDC降压电路,效率都会大于百分之85。

[![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_000_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  

有时候想找一个电压转换电路，还不容易发现，只能平时多积累，等到使用时直接拿出来这种电源都需要绘制PCB电路板，如果用洞洞板搭出来可能存在干扰，输出纹波大等等，对于电路的布局应该参考官方手册。

这是一个国产电源芯片，输入电压范围宽，直流输入电压16V至90V,可以满足大多数工作环境，可以通过反馈电阻，得到不同的输出电压。

内置开关mos管，输出电流不大，在0.6A,也可以满足大多数负载。内置有限流功能和短路保护功能。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_001_95fd484bdba0.jpg)

  

# **48V转换12V**

  

不管是维修还是设计电路时，都会需要把某一种电压转换成另一种电压，比较常见的就是48V电压转换12V,如果要效率高，就只能通过DCDC芯片，转换的方法大体分为两种，一种是隔离的电源，一种是非隔离的电源，要想简单还是分隔的。  

所谓非隔离就是输入和输出共地，输入地和输出地没有隔开，这种要比隔离的简单一点，它们各有优缺点，根据不同应用环境可以选择不同的方法。

现在这种DCDC的芯片有很多，国产也有很多，SL3043，但是国产的效率和待机功率对比进口的还是差点，如果要求不高，国产的也可以满足。

输入电压:10V至120V

输出电压:1.25V-50V

输出电流：10A

＞90%的效率

逐周期限流保护， 输出短路关断保护，热保护

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_002_d615884667bb.jpg)

  

# **48V转换12V**

  

不管是维修还是设计电路时，都会需要把某一种电压转换成另一种电压，比较常见的就是48V电压转换12V,不考虑所有因素，只要能输出12V就可以，转换的方法有很多，首先使用最少的电子元件转换出电压。

使用串联稳压的方式是最简单的，只需要一个三极管和一个电阻一个稳压二极管就可以得到一个12V电压。R188应该用10k电阻。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_003_cc9e662e70cc.jpg)

此电路优点是元件少，容易实现，缺点是不能输出大电流，100ma以内，电流越大损耗越大，效率越低，用作实验和测试是最方便的电源，当然在不考虑效率的情况下，只要三极管的电流足够大，散热足够好，电流大也是可以的。  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_004_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_006_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_005_ead434f24ea4.png)**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_007_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\降压48V转12_15V电路图（DCDC_BUCK电源）_images\img_008_ead434f24ea4.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

******进大家庭⭕圈探讨回复:****** ******交流******