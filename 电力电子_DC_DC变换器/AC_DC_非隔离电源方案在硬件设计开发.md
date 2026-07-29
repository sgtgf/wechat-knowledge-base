# AC-DC 非隔离电源方案在硬件设计开发

原创 电路一点通 2025-02-26 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/kKyk2uryjif6b\_Vzv4RzxQ](https://mp.weixin.qq.com/s/kKyk2uryjif6b_Vzv4RzxQ)

 **领取该PPT资料**   

   **👇**👇**👇******   

    **文末**   

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_000_d7979da2635e.png)

1 适用范围

AC-DC 非隔离电源方案是以高集成度的恒压控制芯片为核心，再由少量的外围电路组成的一种精简的小功率非隔离开关电源方案。该方案一般支持 Buck，Boost 和 Buck-Boost 等拓扑结构中的一种或多种，其中的恒压控制芯片一般都内嵌高压 MOS，支持过流保护、欠压保护和短路保护等功能。

2 常见的拓扑结构

2.1 BUCK 拓扑结构特点非隔离电路、直接反馈、低功耗、输出正电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_001_f9226970e636.png)

2.2 BUCK-BOOST 拓扑结构

特点非隔离电路、直接反馈、低功耗、输出负电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_002_1f1b42d288e9.png)

2.3 BOOST 拓扑结构

特点非隔离电路、直接反馈、低功耗、输出正电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_003_273a94e51581.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_004_3757efb7e38b.png)

3.3 功率电感

示例如上文图中所示的 L2。可根据电源芯片的规格书合理选择参数。若使用工字电感做功率电感时，电感的位置尽量远离输入端，以免开关频率以辐射的方式耦合到输入端，造成产品的EMC 超标。

3.4 续流二极管

示例如上文图中所示的 D1。目前一些芯片采用同步整流架构，方案里就省去了续流二极管，外围电路更为简洁。

| 参数 | 说明 | |:—-|:—-| | 反向耐压值 | 需要大于最高的直流母线电压值（BUCK 电路和 BUCK-BOOST 电路适用）。

| | 通流能力 | 通流能力需要满足负载的最大输出电流值的 2 倍及以上。| | 反向耐压值 | 反向恢复时间直接影响电源的转换效率，所以需要选择快恢复二极管，且反向恢复时间推荐选择 35ns。|

3.5 反馈二极管

示例如上文图中所示的 D2。与续流二极管需要选择快恢复二极管不同，反馈二极管需要选择慢管，如 1N400x 系列的二极管，但需要保证续流二极管和反馈二极管的正向压降值保持一个水平。

3.6 输出电容

示例如上文图中所示的 C5。用于平滑输出电压值，推荐选用陶瓷电容或低 ESR 的电解电容，可以降低输出电压的纹波。

3.7 反馈电阻

示例如上文图中所示的 R1,R2。可根据修改阻值比调节输出的电压值。一般规格书里都有推荐的阻值或阻值范围，建议在推荐的阻值范围内调整阻值。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_005_19501f37e4e3.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_006_67402e9b4999.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_007_edc217406b17.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_008_4e99cd96a52e.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_009_3ae18465c6e7.png)

电源设计\_文档中心15页.pdf

**如何领取资料**

  

下载链接：https://pan.quark.cn/s/26fdc42e8b6f

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_010_66cc4ebc4f0c.png)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

  

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_011_6834138894d5.png)

  推荐  ![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_013_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_015_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_014_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_016_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_012_ead434f24ea4.png)**

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_017_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[MOS管防护电路解析实测](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539991&idx=1&sn=ff39826322db0f291769cce4a3dce587&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[MOS管三个极必背口诀，让你轻松驾驭这个看似复杂的器件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539807&idx=1&sn=0c9b4b7cec0ba386dac1b221a5a0467b&token=740953471&lang=zh_CN&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539712&idx=1&sn=2a1e320b7aaa2de9da7dd890bae91602&scene=21#wechat_redirect)[TL494制作0-60V/0-20A，BUCK恒流恒压可调电源（电路图解）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539712&idx=1&sn=2a1e320b7aaa2de9da7dd890bae91602&scene=21#wechat_redirect)**  
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\AC_DC_非隔离电源方案在硬件设计开发_images\img_018_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******