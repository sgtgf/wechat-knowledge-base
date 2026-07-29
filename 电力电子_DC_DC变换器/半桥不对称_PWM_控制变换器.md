# 半桥不对称 PWM 控制变换器

原创 电路一点通 2024-11-15 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/-GRjbJhuBnvgiYqXBRVofQ](https://mp.weixin.qq.com/s/-GRjbJhuBnvgiYqXBRVofQ)

  
不对称脉宽调制半桥 DC/DCZVS变换器通过改变控制策略而不需增加额外的电子元器件，就能保持谐振变换器中的主开关管零电压导通，同时当输入电压和负载在一个很大的范围内变化时，它又可像常规 PWM变换器那样通过恒频 PWM控制调节输出电压。

  

## **一点通推荐**

    
-   [运算放大器设计结构简单：整流滤波、电压比较、增益选择和](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533115&idx=1&sn=14f99585b49f44477f1b62512083575a&chksm=fcefa159cb98284f0737fc32802759eb24a4714526b751cce988e02d0906e7e791a6ac8ba248&scene=21#wechat_redirect)
    
-   [运放设计直流放大器（增益600，输入电阻120k，输出反相）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533098&idx=2&sn=4890b9fb6f8c3b79b7cb1cca24a6b073&chksm=fcefa148cb98285e89aeafcbf3ac00d891c61972630d68841e9591d5e049922e40663aef1104&scene=21#wechat_redirect)
    
-   [利用MOS管实现缓启动电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533086&idx=3&sn=9dbb5b7903cfe08bae2a55a4c9acc88a&chksm=fcefa17ccb98286ad0ede9cda32bbd304d5bdd894ef1a7e4b681ef684e1433cb4dbe9cff014b&scene=21#wechat_redirect)
    
-   [七种MOS管栅极驱动电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532923&idx=3&sn=be526df1e83b9e450ba9816475588c94&chksm=fcefa219cb982b0f48a9fae9a559bb60e29e5e7315fc148b3e53acb6ad0fcded5e1cb17fc580&scene=21#wechat_redirect)
    

**1.工作原理**  
不对称脉宽调制半桥 DC/DCZVS变换器的电路如图 4-19所示。当开关 S1和 S2在不对称脉宽调制控制下工作时，忽略开关转换过程中的死区时间，S1、S2的工作周期分别为 D和 （1-D），它们与两开关管上的寄生二极管 VD1、VD2，寄生电容 C1、C2组成斩波器将输入直流电压转化成双向电压波形，再通过由隔直电容 CB和高频变压器初级漏感 Lr组成的串联谐振电路将不连续电压转换成连续谐振电流，然后经由变压器次级的整流电路和感性滤波电路向负载提供稳定的直流电压。调节占空比 D的大小就可以改变直流输出电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_000_9c42ff3e045a.png)

2.电路分析  
分析电路稳态工作过程时，先做如下假设。

（1）忽略输出二极管的正向压降和电容。  
（2）忽略纹波，电容 CB足够大，认为其电压 UCB近似为常数且等于 DUS。  
（3）激磁电感 LM很大，并且认为激磁电流 IM为一常数。  
（4）滤波电感 Lo远大于谐振电感 Lr，并且认为通过 Lo的电流 Io连续。  
该电路在一个开关周期中有 8种工作模式，控制 S1的占空比 D在 0％ ～  
50％范围内变化，具体分析如下。

t0≤t＜t1：S1和 VD3导通，等效电路如图 4-20所示。由于 Lo和 LM远大于Lr，所以可以认为变压器初级电压是电网整流电压与隔直电容电压之差：  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_001_48ac7ff3defd.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_002_8f3eaa8f19ab.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_003_9cb82dd5993a.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_004_9766ca384183.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_005_5836b16cbb7a.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_006_6c490c604ebd.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_007_7a02b1b75ffe.png)

**以上图文摘自**：**《零起点学开关电源设计——提高篇》296页.pdf  
  
******👇👇👇**更多技术资料👇👇👇**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥不对称_PWM_控制变换器_images\img_008_42331bb209ab.other)

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分