# LDO稳压器电路分析、主要参数

原创 电路一点通 2025-04-14 11:39 广东

> 原文地址: [https://mp.weixin.qq.com/s/jYQuhnr4NuAtgekwydtnWg](https://mp.weixin.qq.com/s/jYQuhnr4NuAtgekwydtnWg)

**一、LDO概述**

在电压转换电路中，LDO和DC-DC电路是最常用的两种方式，本篇主要介绍LDO相关内容。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_000_023abec182d1.png)

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_001_242ed73b831f.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

LDO是线性电源的一种，它可以实现电源电压的转换，不过主要用在降压领域。它的全称是Low Dropout Regulaor，就是低压差线性稳压器，这个低压差就表示它的输入输出电势差不会太大，所以叫低压差。

在理解上可以看作LDO=低压差+线性+稳压器。

那LDO有哪些特点呢？

对于LDO电路，相对与DCDC电路，它具备成本低，噪音低，静态电流小等优点，并且在实际运用中，它需要的外接元件也更少，通常仅仅需要一两个旁路电容就可以了。

**二、LDO工作原理**  
• LDO 稳压器的主要部件是一个功率场效应管（ Power FET ）和一个差分放大器（ Differential Amplifier ）。差分放大器的一端输入由输出电压和 R1 、 R2 电阻决定，另一端输入参考电压。如果输出电压与参考电压有偏差，差分放大器的输出将会反馈调整功率效应管的输出，从而校准稳压器的输出电压。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_002_7fa132b56ebc.png)

**三、LDO电路组成部分**

通过对于上面LDO电路的举例，就可以理解LDO内部有四个部分组成：分别是基准参考电压，误差放大器，分压抽取电路和晶体管调整电路。

基准参考电压：就是正向输入端的电压，也是LDO的输入电压，也称基准电压。

误差放大器：将采集到的电压输入到比较器反向输入端，与正向输入端的基准电压进行比较，再将比较结果放大，如果反向输入端电压增大，则会导致运放的输出端减小。

分压抽取电路：就是电路图中的R1，R2，通过它们对输出电压进行采集

晶体管调整电路：运放放大后的信号会输送到晶体管的基极，从而放大后的信号可以控制晶体管的导通电压，形成一个负反馈调节回路。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_003_df5b2f79f2d7.png)

**四、LDO主要参数**  
     1、压差  
• 压差是 LDO 线性稳压器最重要的参数 。 LDO 线性 稳压器的压差 电压是指 系统能够调节，使输出稳定在期望输出的最小输入电压和输出电压值差。此时，输入电压将是系统能够调整地最小输入电压，比这更小的电压，输入与输出将成线性关系下降。。  
• 德州仪器（ TI ）电 压差定义为输出电压较其标称值跌落 2 ％的输入、输出电压的 差值。其它 的 如美 信（ Maxim ）、圣 邦微电子 (SGMC) 电压差定义为输出电压较其标称值小于 100mV 时的输入、输出电压的 差值。  
2、静态电流  
• 静态电流（或称地电流）是指调整器输入和输出电流之间的差；一个高效率的调整器，其静态电流必须足够小。  
• 静态电流由参考源、采样电阻或误差放大器的偏置电流和调整管的驱动电流组成，它不提供输出 功率 。  
• 静态 电流的大小主要由调整管、电路的拓扑结构和环境温度等因素决定 。  
• 静态电流定义为： ![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_004_fee15024710b.png) 

3、效率  
• LDO 调整器的效率受到静态电流和输入、输出电压的限制，满足下面的公式 ：

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_005_8ee5aeb73d48.png)  
• Dropout 电压和静态电流必须足够小， LDO 才能有比较高的效率，另外，由于 LDO 调整器的功耗 受到输入－输出电压差的影响，所以输入－输出电压差必须减小，效率才能提高。不管输出条件如何，输入－输出电压差是决定调整器效率的主要因素。  
4、待机电流  
 待机电流是指带有使能信号的LDO，当该信号关闭的时候LDO消耗的电流。参考电压和误差放大器同样也处于不供电的状态。可以进一步减小功耗。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_006_a7f152d591cd.png)

5、瞬态响应  
• 瞬态响应是 LDO 调整器的重要参数，它是负载电流阶跃变化时，输出电压允许的最大变化 量 。 瞬态 响应是输出电容（ Co ）、输出电容的等效串联阻抗（ RSR ）、旁路电容 Cb 和最大负载电流（ Io\_max ）的函数，应用中应该确定这个值有多小。  
• Cb 的作用是提高负载瞬态响应能力，也起到了为电路高频旁路的作用 。  
• 为了获得更好的瞬态响应， LDO 需要更宽的带宽，更大的输出 容量、低 ESR 的电容。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_007_4a68532cf7f3.png)

6、线性调整率和负载调整率  
• 线性 调整率 定义了输入变化对输出的影响，即在负载一定的情况下，输出电压变化量和输入电压变化量之 比：

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_008_c6aab45cfa51.png)  
        •输入电压变化的最坏情况发生在电路的上下电过程。

        •负载调整率是指在输入电压不变的条件下，负载发生变化时对输出电压的影响，即输出变化量与负载电流变化量的比值：

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_009_b794da1d8e84.png)

       •输出负载变化的最坏情况发生在负载电流从0增加到最大额定值，或者反过来变化。

7、电源噪声抑制比  
• 电源 噪声抑制比也被叫做纹波抑制 比，是 衡量 LDO 对输入电压电源变动抑制的一种 能力，需要 考虑很宽的频率范围 。  
• 控制环路往往是决定纹波抑制比的主要 因素。大 的输出电容，低 ESR ，追加旁路电容能够改善纹波抑制比 。  
     由于输出电容的ESR或者补偿电阻（CSR）能引起控制环路不稳定，LDO制造商通常会提供ESR取值曲线图。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_010_4f3c2d785ca3.png)

8、精度  
• LDO 调整器的精度是指线路调整率（ ΔV LR ）、负载调整率（ ΔV LDR ）、参考电压漂移（ ΔVo ， ref ）、误差放大器电压漂移（ ΔVo ， a ），外部采样电阻容差（ ΔVo ， r ）和温度系数（ ΔV TC ）的所有影响 。

![](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_011_4e6e286b9066.png)  
• LDO 调整器电路中输出电压的变化主要是由于电压参考源的温度变化、差分放大器的温度变化、采样电阻的容差引起 。  
• 负载 调整率、线性调整率，增益误差的偏移通常只占精度的 1% ～ 3% 。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   [电源限流/限压电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543879&idx=1&sn=4a3a23cfd33d68e8c266658f4883818b&scene=21#wechat_redirect)
    
-   [【电机控制】PMSM无感FOC控制](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247543421&idx=2&sn=3d5c92f9b785d39b6b1708987dd0a6f0&scene=21#wechat_redirect)
    
-   [新能源汽车供应链100强企业名单、地点分布、产业链全景图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247487810&idx=1&sn=3399e9a0daa76bb1543bd23212938f40&chksm=c33e69fef449e0e8493615830f1f48aadab69639b6f4efa1043c97bf42fdf7dc546c4d9bc449&scene=21#wechat_redirect)
    
-   [「汽车节气门清洗」的套路](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488696&idx=3&sn=63c37504eeac31397ca023d2ae6e8221&chksm=c33e6c04f449e5128f129435adce5ca1b06231603ec1fd029371113e53db1050e607b2de1425&scene=21#wechat_redirect)
    
-   [汽车内外饰设计与实战手册 (526页)-专业辅助教材](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488626&idx=2&sn=dac7e68b595c7ca61ccd84d8645cb03b&chksm=c33e6ccef449e5d8da37aebf797f1c1647b2bfd284ee90e5545ce973c36a937fcc12057d96c7&scene=21#wechat_redirect)
    
-   [汽车电器系统分布与零部件组成、结构原理图](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247489359&idx=1&sn=6af1b87f2a9f1e025c5db14ca9e995b7&chksm=c33e6ff3f449e6e54bc87fd9651d8769b5a5d3204ad8e4223339789f69343a32160762b2a79c&scene=21#wechat_redirect)
    
-   [汽车发动机放置方式和驱动形式示意图、构造图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488714&idx=1&sn=fa579c56a8cf5d11d535e3ebc33a261a&chksm=c33e6c76f449e56081172e4a370bfafd2c31a1c23ba7074707a90fa4c049a7ea68b01fcb5eec&token=1056994762&lang=zh_CN&scene=21#wechat_redirect)
    
-   [汽车电路图分析与解析.ppt-（电器培训）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247488446&idx=2&sn=1809e2c1813b1179b83b91488be5ddbc&chksm=c33e6b02f449e214c0030ae04983353df6cbe0b0841c7f41ac5e7e85c04a425ec40229e217ab&scene=21#wechat_redirect)
    
-   [史上最全的汽车标志（品牌LOGO）和车价汇总](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247490308&idx=2&sn=744ae8f2d219bcf2785f30abd0fe34ba&chksm=c33e63b8f449eaae56ed730205e8bee16fb4f25bfc59120de3e2570864ba07a54d6c63022002&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\LDO稳压器电路分析_主要参数_images\img_012_d0741a682fda.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**