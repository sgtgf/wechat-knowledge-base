# 开关电源MOS导通-大电流-上电放电

原创 电路一点通 2025-05-09 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/jSPgpvoRvRegPu5-NKpeXw](https://mp.weixin.qq.com/s/jSPgpvoRvRegPu5-NKpeXw)

## 1、MOS作为开关导通

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_000_8f8c7c671f4f.png)

因为MOS管的特性，我们会选择N管，要保证MOS管的持续导通，GS之间的压差必须要达到平台电压，MOS管才会导通。当输入MOS管G端的电压为0/12V的时候，MOS管智能导通一瞬间，这时候就需要MOS管G端的电压跟随S端的电压而变化。

## 2、电容实现电压跟随+推挽输出（大电流）

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_001_efb21dad7ec6.png)

电容C3实现了G端电压跟随S端电压，MOS管的电流需要的很大，不能通过限流电阻来获得电流，通过推挽输出，可以减少开通和关断损耗，即保证电流的值

## 3、滞回比较器（产生PWM波）

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_002_4eb5f8cbba9e.png)

在上电的时刻，在7脚为高阻态的时候，MOS管要有一个放电回路（在GS之间当一个电阻，形成放电回路），只要Z脚有电压，Q3就为导通状态，机油导通，又有放电回路，即电压为0。

软启动（占空比从0-40%的过程）

## 产生方波

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_003_3bfff211f940.png)

下面部分实现放电速度快，并且可以实现充电慢，电阻可调。这样就可以实现调节PWM波

## 如何解决负载电路影响电源电压

通过电容对供电电容进行充电（并联）

自举电容：通过电容充电，来维持电容的电压，然后放电，再充电

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_004_5fabc30abf41.png)

在on的时候，C3的电压>C2的电压，防止反向充电，加二极管

## 第一次上电的时候，解决启动的问题

通过30V的电压直接对供电电容进行充电，但同时，也会对后面的负载电路进行影响

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_005_1d797d218b7f.png)

 同时，由于充电电流过小（负载电路需要10多mA的电流），会导致电容充不上电

应该先让电容上面有电，一切问题迎刃而解，希望在供电电容消耗电压的时候，后面的电容对电压进行补充

上电时序：在刚上电的时候，C3上面电压为0，通过30V 电源进行充电，充电电流1mA，电容往负载的开关是打开的，电容上面的电压就开始上升，达到12V的时候，负载上面的开关是闭合的，电容对外进行放电，假设掉到6V用了0.2S的时间，这0.2S的时间，足够让后面的电路工作起来了，会不断的对后面的电容进行充电，后面的电容的电压大于前面电容的电压的时候，就会不断的对前面的电容进行充电，最终稳定在12V。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_006_805db6f51acf.png)

## 小总结：

1、实现了开关作用

2、PWM波形，频率可以达到要求，占空比可调，三角波电路，电平电位可调

3、软启动电路

4、采用悬浮电路设计思路

5、自举电路

6、上电启动电路

7、电流保护电路

8、电压环控制电路

## 电流保护电路：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_007_5f7dcb257f79.png)

通过对电感电流的检测，当电流过大的时候， 会是MOS管的两端短接，通过三极管的导通和关闭来控制MOS管的导通。

## 电压环控制电路：

负载电容和自居电容的电压是相等的，所以我们对自举电容上面的电压进行采样。

对前面的比较器的电平电压拉低，并且能够调整占空比

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_008_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

     注：本文仅代表作者（如梦001）观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[电源入口处防反接电路-汽车电子硬件电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546235&idx=1&sn=706b98e362ce40a3e9d73db097feff5a&scene=21#wechat_redirect)**
    
-   **[元器件选型：电阻、电容、电感、磁珠](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546178&idx=2&sn=8f0fc770f23174c5274911563b2a7762&scene=21#wechat_redirect)**
    
-   **[USB2.0/3.0电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544806&idx=1&sn=8da43e8f0ea8df32211420071b7b9f76&scene=21#wechat_redirect)**
    
-   **[硬件电路设计--CAN通信](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544244&idx=3&sn=ffdda939310d4665d09f73e76851aad2&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源MOS导通_大电流_上电放电_images\img_009_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️