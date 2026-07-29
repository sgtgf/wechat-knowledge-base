# 半桥LLC谐振变换器设计与仿真-40页ppt

原创 电路一点通 2024-12-27 11:34 中国香港

> 原文地址: [https://mp.weixin.qq.com/s/d-zNe\_fTsh77Wa3xq8GkFw](https://mp.weixin.qq.com/s/d-zNe_fTsh77Wa3xq8GkFw)

**目录：  
**1谐振变换器技术

2 LLC变换器的工作原理

3 Saber仿真结果分析

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_000_0faa6d7bcd88.png)

**👇👇👇更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_001_ac6d85e0e2d9.other)谐振变换器之所以得到重视和研究，是因为在谐振时电流或电压周期性过零，利用这一点实现软开关，可以降低开关损耗，提高功率变换器的效率。

谐振功率变化器有以下三种：SRC（SeriesResonance Circuit）、PRC（Parallel ResonanceCircuit）、SPRC（Series-Parallel Resonance Circuit，又称LLC）。

电路中电感与电容串联，形成一个串联谐振腔。这个谐振腔的阻抗与负载串联，则由于其串联分压作用，增益总是小于1。谐振腔的阻抗与频率有关，在其谐振频率fr下阻抗最小，此时的增益也最大。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_002_90ec265db127.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_003_4c8dfff97bca.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_004_353d2aca6253.png)

**1.3 SPRC（串并联谐振电路）**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_005_eaac0dd3e31b.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_006_172f252fe3a5.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_007_523738636981.png)

**2 LLC变换器的工作原理**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_008_c2c80bb17c11.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_009_011df31ccf5d.png)

**3 Saber仿真结果分析**

**电路参数**

根据LLC谐振变换器的工作原理的分析，我们在实际应用中通常使其工作在区域2（fr1<f<fr2）。用Saber仿真时电路的参数

如下：

输入电压Vin=400V；

输出电压Vo=24V；

输出功率Po=300W；

Lr=68uH；

Cr=46nF；

Lm=408uH；

匝比n=8.3；

Cf=600uF；

负载电阻R=2Ω；

开关频率fs=90KHZ。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_010_aed712ec6663.png)

**4 总结与工作规划**

LLC谐振变化器总结

本次主要针对谐振变换器的技术发展，从SRC，PRC的优缺点中引出工作性能较好的LLC谐振变换器。

根据半桥LLC电路，分析了其工作原理、直流增益特性，并用Saber软件对其进行了仿真验证。

经过仿真，我们可以得出，LLC工作在fr2<f<fr1的区域内，较为容易实现MOSFET的ZVS开通及整流二极管ZCS的关断，这样大大减小了电路中的损耗，提高了LLC变换器的效率，有些LLC变化器的效率甚至可以达到95%，这个效率相当可观了。

  

半桥LLC谐振变换器设计与仿真-40页.ppt

## **一点通推荐**

    
-   [【赠书】FPGA电路原理图绘制,10年硬件开发经验总结  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536667&idx=1&sn=40c12ee20a82800d54eeb7d8b260cb10&scene=21#wechat_redirect)
    
-   [48V转换12V，用最少的元件？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536316&idx=1&sn=5bbbf0b3bc962a90c4ca533a8ef25a8f&scene=21#wechat_redirect)  
      
    

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\半桥LLC谐振变换器设计与仿真_40页ppt_images\img_011_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28