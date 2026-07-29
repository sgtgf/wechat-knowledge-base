# PWM通过RC低通滤波器模拟DAC

原创 电路一点通 2025-03-27 11:35 广东

> 原文地址: [https://mp.weixin.qq.com/s/tVJLu5PugAhTpYv6GkQlOw](https://mp.weixin.qq.com/s/tVJLu5PugAhTpYv6GkQlOw)

当我们电路需要DAC而单片机并没有DAC外设时，则可采用PWM通过RC低通滤波器来模拟实现DAC功能。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PWM通过RC低通滤波器模拟DAC_images\img_000_1c3cc6ec8d53.jpg)

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\PWM通过RC低通滤波器模拟DAC_images\img_001_b731a343326a.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

RC低通滤波器

当采用低通滤波器模拟DAC时，PWM频率应远大于RC低通滤波电路的截止频率fc=1/2πRC（10倍以上）。输出电压为Vout=Vcc\*Duty。

  

在使用此电路时，应注意：

1、一般情况下，当电容C较小，电阻R较大时，输出电压损耗较小，纹波较大；当电容C较大，电阻R较小时，输出电压损耗较大，纹波较小。所以，为了获取线性度较高的精确DA转换，一般采用较小电容并尽量不要使用电解电容。

2、为了提高输出的驱动能力，一般会在RC低通滤波器器之后还会加一级高性能的电压跟随，并在跟随器输出的地方加上一个滤波用的电解电容，使输出电压进一步变得光滑。但是需要注意的是，这时的输出电压里可能含有较多的交流 谐波成分，如果处理不当，电压跟随器有可能自激。解决的办法就是使用一个小的去藕电容。而且这里电容的放置顺序必须是电解电容在前，去藕电容在后！

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PWM通过RC低通滤波器模拟DAC_images\img_002_448f15b19d7b.jpg)

  

RC低通滤波器+电压跟随器

3、如果输出电压精度和线性度要求不高，但是对纹波要求却很高，或者这个电压比较固定时，可以使用电容较大的滤波组合。因为，虽然大电容的直流损耗较大，但是我们可以通过调节PWM占空比来达到要求的输出电压，或者通过一级AD转换的反馈来实现精确的固定电压输出。只是这里仍然要加一级电压跟随器，以便于后级采集电路使用，且AD采集点放置在跟随器输出处。

4、如果一级RC低通滤波器达不到效果，则可使用多级RC低通滤波器进一步提高输出平滑度。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PWM通过RC低通滤波器模拟DAC_images\img_003_d9d6ce4ed489.jpg)

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542477&idx=2&sn=0de4cbd1071c8965710413e353f88d2d&scene=21#wechat_redirect)[24V过压保护、反接保护电路图实例](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542477&idx=2&sn=0de4cbd1071c8965710413e353f88d2d&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542477&idx=2&sn=0de4cbd1071c8965710413e353f88d2d&scene=21#wechat_redirect)[一图看懂反激式电源元器件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=1&sn=03878e8fa18ef1c205d20b5c287bbcf7&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542477&idx=2&sn=0de4cbd1071c8965710413e353f88d2d&scene=21#wechat_redirect)[4 种电控界MOS管驱动电路方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541972&idx=2&sn=104858527137b78e803bb5414fd01cbf&scene=21#wechat_redirect)**
    

[**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\PWM通过RC低通滤波器模拟DAC_images\img_004_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**