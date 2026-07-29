# DC-DC电源详解（系统设计指标、基本分析、拓朴结构）

原创 电路一点通 2024-12-11 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/VwbohuB65geSb5eSxiG9BA](https://mp.weixin.qq.com/s/VwbohuB65geSb5eSxiG9BA)

  

**1\. DC/DC概述** 

**2\. 电源系统设计指标** 

**3\. 开关电源的基本分析** 

**4\. 开关电源的拓朴结构  
**5\. 小结****

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_000_1624a42dc706.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_001_ef286cf1feb3.png)

**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_002_a8b37a87b291.other)

**二. 理想直流变换器应有的参数性能**  
1\. 输入输出端的电压均为平滑的直流电压，无交流谐波的分量  
2\. 输出阻抗为零  
3\. 快速动态响应，抑制能力强  
4\. 高效率，小型化  
**三. 常用的DC/DC电源方案**  
1\. 线性电源。主要应用于对发热和效率要求不高的应用场合，线性电源的效率通常在35% to 50%之间  
2\. 脉宽调制（PWM）开关电源。在使用时具有比线性电源更高的效率和灵活性  
3\. 高效率的谐振开关电源。由基本的PWM开关电源演变而来，主要应用于高效率和对电磁干扰有特别要求的场

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_003_6fddb73aa413.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_004_940df231da2d.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_005_098a1e984b07.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_006_629985c3f68e.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_007_93ca8c17a337.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_008_96c82ab798b4.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_009_fb7a848a4808.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_010_ca36975c5cbb.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_011_d1232dc70dc1.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_012_f093d0573b0d.png)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电源详解（系统设计指标_基本分析_拓朴结构）_images\img_013_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [大厂纷纷裁员导致失业率达几十年来至高，年轻人要怎么破局？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535307&idx=1&sn=fbff933dac99a365273556c919bfc0e8&scene=21#wechat_redirect)
    
-   [比亚迪《工程师之魂》被群嘲，外企工程师的看法？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535218&idx=1&sn=1caa8739d0ebd4153721ee5254d76065&scene=21#wechat_redirect)   
    
-   [开关电源电路图解，维修更容易判断问题所在](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535018&idx=1&sn=a02b5cfdf8ce56a6aaba2ce71b01a551&scene=21#wechat_redirect)    
    
-   [硬件工程师入门基础元器件与电路原理](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534998&idx=1&sn=af9f184e13e9054d3b107fed3b46ccd4&scene=21#wechat_redirect)    
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分