# 开、闭环单相桥式SPWM逆变仿真电路

原创 电路一点通 2025-05-19 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/OxncTCiRfk-2uxFl-8IeBw](https://mp.weixin.qq.com/s/OxncTCiRfk-2uxFl-8IeBw)

> 介绍了在MATLAB中搭建单相桥式SPWM逆变电路的两种模式：开环和闭环。开环电路在负载值改变时输出电压波动明显，而闭环控制能有效稳定输出电压，即使在负载突变时也仅有较小的波动

**【仅供参考**】

【2022.11西南交大电力电子仿真】

**目录**

-   1 开环单相桥式SPWM逆变电路搭建及波形记录
    
-   2  闭环单相桥式SPWM逆变电路搭建及波形记录
    

* * *

  

-   ![图片](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_000_ec13ca4e639c.png)
    
    [![图片](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_001_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  

### 1 开环单相桥式SPWM逆变电路搭建及波形记录

        采用单极性调制法，按老师PPT（如下图）所示进行单相桥式SPWM逆变电路的搭建。

![](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_002_a89a52cb3b32.png)

        仿真要求建立直流输入电压330V，交流输出电压有效值220V、频率50Hz，载波频率5kHz的单相桥式SPWM逆变电路。若三角载波的幅值为1V，则根据老师PPT（如下图）可知正弦调制波的幅值应该为1V\*220V\*1.414/330V≈0.9428V。

![](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_003_a2ab1d9e3d49.png)

        搭建仿真电路如图：

![](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_004_8822c1da000f.png)

        通过MATLAB中的８通道Scope示波器模块，可观测到载波uc、调制波uf1、调制波uf2、控制信号uT1、uT2、uT3、uT4的波形如图：

![](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_005_0d964686a53b.png)

        根据仿真结果，测得输出电压周期为20ms，即输出交流电压频率为50Hz；测得输出电压有效值（由输出电压Uo通过RMS模块得到）稳定在217.8Ｖ附近，与理论值相差不超过1%。负载电压、负载电流、输入电流波形如图：

![](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_006_0c97133d417f.jpg)

### 2  闭环单相桥式SPWM逆变电路搭建及波形记录

        通过加入Breaker断路器模块，使负载电阻分别于0.625s与1.875s时并联上20Ohms的电阻，使整体负载值由20Ohms突变为10Ohms；于1.25s断去并联支路，使整体负载值由10Ohms突变为20Ohms。（题目仅要求由20Ohms突变为10Ohms的情况，但本人想测试由10Ohms突变为20Ohms时控制器是否也能使输出电压达到预期效果）即使负载值于0~0.625s、1.25s~1.875s时保持在20Ohms；于0.625s~1.25s、1.875s~2.5s时保持在10Ohms。PI控制器中的KP=0.1、KI=500。

        搭建仿真电路如图：

![](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_007_78ecd49cc154.jpg)

        由可观测知：在开环控制下，负载值为10Ohms时，输出电压有效值稳定在211.2V左右；负载值为20Ohms时，输出电压有效值稳定在217.8V左右。均不能达到预期值。在负载值由20Ohms突变为10Ohms时和由10Ohms突变为20Ohms时，均会产生较大波动，其瞬时偏差电压最大可达11V。

        而对比之下，闭环控制下，负载值不管为10Ohms还是为20Ohms，其输出电压有效值都能稳定在220V，如出现偏差，偏差电压值仅为0.1V。仅在负载值由20Ohms突变为10Ohms时，会产生波动，其持续时间仅为0.02s，波动电压最大瞬时偏差值为6V；而负载值由10Ohms突变为20Ohms时，输出电压有效值几乎没有波动。可见闭环控制下，控制效果良好。

        在闭环控制（左侧）与开环控制（右侧）分别控制下，输出电压、输出电流、输入直流电流与输出电压有效值变化波形对比如下图：

![](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_008_d538044b7af0.png)

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[MOS管驱动电路（串联电阻、二极管）、发热原因和解决办法](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546611&idx=1&sn=6301e7f9220bdb56eb90a9395332d2c8&scene=21#wechat_redirect)**
    
-   **[【H桥电机驱动电路原理】-学习笔记](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546574&idx=1&sn=593d51900ecd6296111c02f2566f5ce8&scene=21#wechat_redirect)**
    
-   **[新能源汽车三电系统详解：电池、电驱与电控](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247520269&idx=1&sn=6b7eb1e609207bbc5e9918e831c0446b&scene=21#wechat_redirect)**
    
-   **[图解电动自行车维修一本通-244页](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247519990&idx=2&sn=be2787724c0294678f0e03d1f8cf9c37&scene=21#wechat_redirect)**
    
-   **[10年变频器电路维修经验与故障实例分析【236页】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257956&idx=1&sn=f5c954ea2009e41f501b8e8cf0cae307&scene=21#wechat_redirect)**
    
-   **[空调器维修从入门到精通全彩精华升级](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257801&idx=1&sn=366901e4e4ff89e9e1a3a71fe0b239ac&scene=21#wechat_redirect)**
    

**![图片](D:\电脑文件\公众号知识库\电力电子_逆变器_整流器\开_闭环单相桥式SPWM逆变仿真电路_images\img_009_b46e8bcc08e0.jpg)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！

分享💬点赞👍在看❤️