# PFC电路，图腾柱PFC电路,电感电流的三种模式

原创 电路一点通 2025-04-24 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/6\_tXjS8q4-poG2hWZ0ufzA](https://mp.weixin.qq.com/s/6_tXjS8q4-poG2hWZ0ufzA)

### 目录  

1.  PFC功率因数校正电路
    

1.  传统整流桥式BOOST型PFC电路
    
2.  基本无桥PFC电路
    
3.  改进型双Boost 型PFC 整流电路
    
4.  图腾柱PFC 电路
    
5.  单相图腾柱PFC工作模态
    
6.  电感电流的工作模式
    

### PFC功率因数校正电路

   PFC的主要功能是实现电网侧输入电流和输入电压同频同相，即通过控制逻辑使电路整体呈现阻性状态。

  一般采用BOOST电路拓扑实现PFC功能，因为BOOST电路的功率电感与输入源直接相连，输入电流脉动小，具有优势，而且电路本身具有升压功能。在一些光伏并网逆变器中多采用BOOST电路实现对PV的MPPT功能。

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_000_b62e86580e29.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

#### 传统整流桥式BOOST型PFC电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_001_f9cf5b784246.png)

  电路结构简单，EMI特性比较好，驱动电路也较为简单。前级整流电路和S1开关管，工作时有3个管子工作，电路的导通损耗大，电路体积大，不利于高效率高功率密度实现。

#### 基本无桥PFC电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_002_9d75b3788617.png)

 无桥PFC电路，由两个开关管和两个二极管构成，极大减少开关管数量，减少电路损耗。驱动电路也不复杂。

 在交流输入负半周时候，开关管S2用作高频开关管需要频繁开通关断使得交流输入和输出直流地之间存在高频跳点，电路共模噪声比较大。

#### 改进型双Boost 型PFC 整流电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_003_661232b3c136.png)

  对于无桥PFC的电磁问题，在其基础上增加电感元件，同时增加一组慢速二极管充当工频开关管，确保在整个工频周期交流电源和输出直流地之间不存在高频跳点。但是器件增多，成本加大，电路可靠性降低。

#### 图腾柱PFC 电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_004_024dadd14a7d.png)

  图腾柱PFC在无桥PFC电路基础上更换开关管位置，S1,S2,用作高频桥臂，D1,D2用作低频管。该种拓扑不论正负半周，输入交流源和输出直流地之间不存在高频跳点，极大减小共模干扰。

   而且通态损耗相对较小，效率较高。在混网逆变器中AC-DC是双向运行的，图腾柱PFC电路四个管子都采用全控型器件不使用二极管，正向实现PFC功能，反向实现逆变功能。

#### 单相图腾柱PFC工作模态

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_005_af98fc5c8c5d.png)

前桥臂Q1,Q2高频开关管可选用SiC MOSFET,后桥臂Q3,Q4可用普通Si MOSFET。

SiC MOSFET开关管具有更低的开关损耗和更高的耐压能力。而且导通电阻低，泄露电流也小，关断时侯不存在电流拖尾，相较于Si MOSFET可以适应更高的工作频率。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_006_e4aa8afc7c16.png)

前桥臂高频通断，后桥臂依据网侧电压的正负进行工频互补通断。一个工频周期内，可以分为四个模态

模式一：电网电压正半周，Q4,Q2导通，Q1,Q3关断交流输入流经Q4 和Q2 构成给网侧电感_L_ 充电的蓄能回路，电感电流正向升高，同时母线电容和负载构成回路，电容向负载输出，母线电压处于下降阶段。

模式二：电网电压正半周，Q4,Q1 导通，Q2,Q3 关断。交流输入流经开关管Q4,Q1 和网侧电感_L_ 构成给母线电容C、负载的供电回路，电感电流正向下降，母线电压处于上升阶段。

模式三：电网电压负半周，Q3、Q1 导通，Q2、Q4 关断。交流输入流经Q1、Q3 构成给网侧电感_L_ 充电的蓄能回路，电感电流反向上升，母线电容和负载构成回路，电容向负载输出，母线电压处于下降阶段。

模式四：电网电压负半周，Q2,Q3 导通，Q1,Q4 关断。交流输入流经开关管Q2,Q3 和网侧电感L 构成给母线电容C、负载的供电回路，电感电流反向下降，母线电压处于上升阶段

#### 电感电流的工作模式

依据电感电流是否连续可划分为连续导通模式CCM，临界连续导通模式CRM,断续导通DCM三种模式。不同模式对应的电感电流波形如图所示

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_007_8831f53ff3b9.png)

  

CCM模式：该模式下电感电流纹波较小，同功率等级下，需要功率电感的感量和体积也会相应较大。在单开关周期内电感电流不过零，开关管处于硬开关状态，若使用Si器件作为高频开关管，会存在严重反向恢复问题。对于CCM模式的图腾柱PFC常采用平均电流模式进行控制，开关管工作在定频状态。考虑开关管电流应力，前级滤波参数等因素，该模式通常应用在大功率场合。

CRM模式：电感电流单开管周期内存在过零点，可实现零电流关断，避免使用Si器件带来的反向恢复问题。工作于CRM下的PFC电路功率因数也相对较高，为了保持功率恒定，对应的电感电流峰值增大，对开关管的耐流能力要求较高。开关管处于变频工作状态，引入大量谐波，通常应用于中小功率场合。

DCM模式：该模式下单开关周期内电感电流也存在过零，开关管可以工作在软开关状态，在保证功率传输的情况下，电感电流峰值更大，对开关管的电流应力要求更高，而且还有较大EMI干扰，通常用于小功率场合。

  

## **一点通推荐[👍👍👍](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3409785953525891079&scene=173&subscene=&sessionid=svr_03f04b159f2&enterid=1729216795&from_msgid=2247525041&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**


-   [轻松学电子电路识图，实战技能-282页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256899&idx=2&sn=c5970837439ee7f2bac08e630bb2d444&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)【资料可领取】  
    
-   [电工线路安装与调试技能-7日通培训和技术提升\[239页\]](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256997&idx=2&sn=df4245ff1084d8508e8a2552300a9fa1&scene=21#wechat_redirect)【资料可领取】
    
-   [西门子PLC高级应用实例精解\_第2版-368页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257003&idx=2&sn=c2313e1bec3e59a63fa08faea4ca528d&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)
    
-   [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    
-   [ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&scene=21#wechat_redirect)【资料可领取】
    
-   [高效微逆变器设计（原理图+程序+上位机等）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=2&sn=8fcb9c897e4cc82906451def4a597f1b&scene=21#wechat_redirect)【资料可领取】
    

-   [【华为技术】信号口防雷电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544474&idx=2&sn=f6c0065e381c9fa3275154ad9abedfb0&scene=21#wechat_redirect)【资料可领取】
    
-   [（TL431)开关电源环路设计要点PDF](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544590&idx=2&sn=d00339e654e3fc4a8ef92107e9789d1e&scene=21#wechat_redirect)
    
-   [三菱FX2N PLC应用入门-步进指令梯形图编程PPT](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257151&idx=1&sn=ec4cbb9859570f15968a2e1e18882f6f&scene=21#wechat_redirect)
    
-   [电工实用手册 -532页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257006&idx=2&sn=9f8c8197346caec98132a6f9b66fb918&scene=21#wechat_redirect)
    
    ![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PFC电路_图腾柱PFC电路_电感电流的三种模式_images\img_008_b46e8bcc08e0.jpg)
    
    ******进大家庭⭕圈探讨回复:************交流******
    
      
    

分享💬点赞👍在看❤️