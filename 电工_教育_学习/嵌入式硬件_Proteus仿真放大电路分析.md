# 嵌入式硬件：Proteus仿真放大电路分析

原创 电路一点通 2024-10-30 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/cJkoiF-jsjqWfLGfdXW4pA](https://mp.weixin.qq.com/s/cJkoiF-jsjqWfLGfdXW4pA)

## **需求**

在设计放大器电路时，需要用到仿真软件进行辅助。这里采用proteus，如下图简单的同向放大电路。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_000_8153a103086b.png)  

。

**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_001_a8b37a87b291.other)

proteus自带的ANALOG库包括ADI公司几乎所有的放大器元件，很方便我们使用，如下图：  

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_002_b8e04cd8ee6b.png)

## **问题**

## 单电源供电不显示波形问题

在仿真软件中，如果采用单电源进行供电，则按如下电路图：  
![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_003_d9e3350e59f4.png)

这是一个简单的同向放大电路，采用单电源供电，放大倍数为5倍。我们添加的激励源如下：  

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_004_91a9df8ac723.png)

按我们分析，输出端应当是500mv的正弦波。但我们实际运行发现：  
![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_005_fecb030c6bf9.png)

输出端并没有波形，且电压是恒定的0.01V。  
其实这并不是proteus仿真的问题，而是我们采用单电源供电，激励源为100mv，则其波动范围是-100mv到+100mv之间，导致其和放大器反向输入端1.65V差异一直很大，放大器就一直输出0V。  
我们改用双电源给放大器供电即可解决，如下图：  

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_006_d0471e4aa2ec.png)

也可以给激励源添加偏移，如下图：  
![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_007_caf6f8436462.png)  
结果：  
![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_008_fa2e48f85929.png)

###   

******进大家庭⭕圈探讨回复:****** ******交流******  

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式硬件_Proteus仿真放大电路分析_images\img_009_dc9b39eaee8a.other)

### **您可能感兴趣的内容:**

    
-   [负载24V 延时通电电路设计，加一个BJT搞定](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532602&idx=1&sn=3d31e4f37af4f04f41eb037a1ddec541&chksm=fcefa358cb982a4e8a5e2c673e74e0e0d8f351257327174ffab230ed82bb2811f1f41c1bf54b&scene=21#wechat_redirect)
    
-   [MOS管驱动直流电机电路设计基础，轻松理解芯片手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532736&idx=1&sn=529ceb19aed55ad93b91374de0339be3&chksm=fcefa3a2cb982ab489aeba618197ce2f4aa1725878a8645c9be7cfb1169a5753d9840809653e&scene=21#wechat_redirect)
    
-   [多种无线电路原理图（WIFI、SIM卡座和 GPRS 模块）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532793&idx=1&sn=cb368385a09fca56d7ecc4d6abbda62a&chksm=fcefa39bcb982a8d8e412c7c0d6f2f4cbe2180632124d3c5c57fe70f020937f0176f3e3fc70d&scene=21#wechat_redirect)
    
-   [12V转220V逆变器电路，不过就几个元件？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532842&idx=1&sn=407272615eb25f04e990fd42db8f2680&chksm=fcefa248cb982b5e0b07cbbf55147786df8687852e6c7582cfd062d101c269e945701cc6eb14&token=1716441206&lang=zh_CN&scene=21#wechat_redirect)
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分

###