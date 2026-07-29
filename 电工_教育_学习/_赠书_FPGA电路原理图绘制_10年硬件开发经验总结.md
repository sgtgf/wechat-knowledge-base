# 【赠书】FPGA电路原理图绘制,10年硬件开发经验总结

原创 电路一点通 2024-12-26 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/qD3DO99idsopFt-FLvBTpA](https://mp.weixin.qq.com/s/qD3DO99idsopFt-FLvBTpA)

**👉FPGA好书赠送👇 --文末参与**

1.Xilinx JTAG配置电路

-   JTAG配置电路  
    一般分为10引脚或者14引脚接口，这里介绍14引脚连接  
    需要注意的是电源需要和FPGA配置bank电压一致。  
    电阻可以选择330欧或者33欧。从xilinx官方手册中给出了JTAG插座的信息，这和网上其他类型的JTAG有些区别，JTAG不同应用的场景，其管脚序号会有所不同，这里介绍的是xilinx的FPGA JTAG管脚顺序。
    
-   官方手册中的JTAG  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_000_2d6a972ee8b8.png)  
      
    
-   FPGA的JTAG连接
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_001_d41ee4d294f9.png)

2\. 不同型号的FPGA原理图绘制

-   由于FPGA管脚非常多，自己动手画很容易绘制错误，所以一般是在pcb封装网站上下载FPGA原理图和封装图。  
    下载FPGA原理图的途径
    

### １.在AD软件上直接下载，推荐使用这种方法，该方法简单方便，且原理图方便使用，这种方法最新版AD软件才有，且需要注册账户。

-   步骤如下：  
    点击 Manufacture Part Search  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_002_780cbd344c78.png)  
    如搜索ARTIX-7系列的X7A100T,然后点击 Download即可下载，然后解压打开对应的工程文件即可  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_003_871449879328.png)
    
      
    

3\. FPGA电源部分电路设计

-   PGA电源设计非常重要，常见的FPGA电源IO有内核电源VCCINT,辅助电源VCCAUX,io电源VCCO,BRAM电源VCCBRAM。  
    以xilinx的FPGA举例，关于电源部分的内容可以参考Spartan-6 FPGA Data Sheet:DC and Switching Characteristics 类似的文件  
    可以从文章中获取不同电源电压大小的要求，上电顺序要求，以及软启动时间设置。需要注意的是，内核电源需要的电流较大一般在2A以上。
    
-   ARTIX-7电源部分的原理图如下：  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_004_13e8e854ff8f.png)
    
-   电源芯片选择的是：LTM4644，能够提供4路0-5V，0-4A的电源。该芯片如何使用见芯片手册，这里TRACK引脚配置软启动时间，RUN引脚控制上电顺序。  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_005_78ca29a85d3f.png)
    
-   电源部分的滤波电容选择  
    电容部分，我主要参考的开发版绘制的。  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_006_8dd259aac0c0.png)
    
      
    

**4.赠书《Xilinx FPGA工程师成长手记》**

资深硬件工程师近10年项目经验总结，理论结合大量图示和多个典型实例，详解XilinxFPGA设计方法与技巧，实例源码来源于实际项目，提供习题、教学PPT

《Xilinx FPGA工程师成长手记》共10章，分为2篇。第1篇Xilinx FPGA基础知识，包括FPGA概述、FPGA的基本理论、FPGA的硬件描述语言和FPGA功能验证；第2篇Xilinx FPGA逻辑设计，包括FPGA的知识产权、FPGA代码封装、FPGA低速接口设计、FPGA高速接口设计、FPGA硬件调试和FPGA开发技巧。

-     
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_007_db76c0d20d52.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_008_eaa4aca26c43.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_009_12dfc77832bd.jpg)

本文会在留言区赠送3本书，留言对FPGA的认识或者想要学习FPGA的目的，截止到12月29日 20:00，评论区的评论点赞前三名（评论下的评论点赞数不算），一人一本。**(**结果公布留言区置顶和交流群**）**

## **一点通推荐**

    
-   [大电流H桥电机驱动电路设计与解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536372&idx=1&sn=9938f3a19fb52cc0a0a6efcd7448d061&scene=21#wechat_redirect)
    
-   [初级工程师PCB设计技巧.ppt课件  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536316&idx=2&sn=9213902cb820d9b143f943826ba6cab5&scene=21#wechat_redirect)
    
-   [【电路设计】优化降压电源硬件方案，稍有不慎会翻车](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536039&idx=1&sn=a5508c56be41289a17e29da15123bc7d&scene=21#wechat_redirect)
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\_赠书_FPGA电路原理图绘制_10年硬件开发经验总结_images\img_010_3d92f9b998df.other)

******进大家庭⭕圈探讨回复:****** ******交流******

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28