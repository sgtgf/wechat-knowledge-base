# 开关电源（DCDC）电路升/降压分析

原创 电路一点通 2025-04-20 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/sPdUfi1z5dj5S-7VmXUG5Q](https://mp.weixin.qq.com/s/sPdUfi1z5dj5S-7VmXUG5Q)

**一、BOOST电路（升压）：**  
下图为Boost电路的最基本拓扑，从左至右包括电源，储能电感L1，开关管Q1，二极管D1，输出滤波电容C1及负载电阻R1。  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_000_9f658b5f0b54.jpg)

工作原理：

开关管导通状态： 

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_001_3a809bb28920.jpg)

 电感中电流成线性增加，电感自感阻碍电流上升，电感将电能转为磁能存储起来，输出电压大小等于储能电压大小，二极管作用：防止电容对地放电。

开关管截止状态： 

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_002_62a751c50089.png)

 电感电流开始慢慢减少，由于自感作用阻碍电流的减小，电感两端左负右正，所以输出端Uo=Ui+UL。输出电压大于输入电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_003_b9001d41abc5.png)

Boost只能用来升压。 

**二、 BUCK电路（降压）：**  
下图为Buck电路的最基本拓扑，从左至右包括电源，开关管Q1，续流二极管D1，储能电感L1，输出滤波电容C1及负载电阻R1。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_004_5a716f52b090.jpg)

输入直流电源Vin，输出直流电压Uo。晶体管Q1起开关作用，可以导通和关断电流，常见的开关管有三极管和mos等。开关管的导通与关断受控制电路输出的驱动脉冲控制。电容C1作为滤波电容，可降低输出电压Uo的脉动。如果BUCK电路是一个稳定的电路，它就会保持的稳定的开关管的通断，开关管导通期间流入电感的电流等于开关管关闭期间流过电感的电流。 

工作原理：

 当开关管Q1驱动为高电平时，开关管导通，续流二极管反向截止，此时电流就要经过电感，然后流向负载R1。电感电压UL=Ui-Uo，电感电流会从最小值上升到最大值。

电流iL流经电感L1向负载R1供电；此时L中的电流逐渐上升，在L1两端产生左端正右端负的自感电势阻碍电流上升，L1将电能转化为磁能储存起来。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_005_69bcbb0b5e41.jpg)

 经过一定时间后，控制电路脉冲为低电平，开关管关断，此时没有电流流向电感，电感电流慢慢减少，这时电感L1两端产生右端正左端负的感应电动势阻碍电流下降，从而使D1正向偏置导通，于是L中的电流经D构成回路，电流值逐渐下降，L中储存的磁能转化为电能释放给负载R1。电感电压UL=-Uo，电感电流会从最大值下降到最小值。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_006_3fa61b7e1417.png)

 经过一定时间后，控制电路脉冲又使开关管导通，重复上述过程。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_007_a8c1d3990976.png)

Buck只能用来降压。

**三、BUCK-BOOST电路（升降压）：**  
下图为Buck电路的最基本拓扑，从左至右包括电源，开关管Q1，储能电感L1，二极管D1，输出滤波电容C1及负载电阻R1。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_008_9b74006cd1fd.png)

Buck-Boost变换器可看作是Buck变换器和Boost点唤起串联而成，合并了开关管，但其输出电压的极性与输入电压相反。

当开关管导通时，输入电流从流过电感直接到地，右端输出主要由电容放电来维持。Uon=Ui-Uq通常情况下忽略Uq的压降,即Uon=Ui。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_009_d0c6f62988a9.png)

 当开关管关闭时，电感电流从地流向负载R和电容C，在流经二极管后回到电感。其过程就是L释放能量和电容充电的一个过程。所以Uoff=Uo-Ud,二极管的压降一般也是忽略不计的,即Uoff=Uo

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_010_f5b370c0c335.png)

由伏秒平衡原理得Ui\*TD=Uo\*(Ts-TD),化简可以得到 

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_011_e2e5fa64092d.png)

 怎么控制输出电压是降压还是升压呢？控制开关管的PWM波的占空比就起了很大的作用。如果占空比大于1/2，升压；反之降压。当占空比D>0.5时，Uo>Uin，实现升压。当占空比D<0.5时，Uo<Uin，实现降压。

**小结：**  
  

-   1.Buck电路——降压斩波器，其输出平均电压、U0小于输入电压Ui，极性相同。BUCK型DC-DC只能降压，降压公式：Vo=Vi\*D。
    
-   2.Boost电路——升压斩波器，其输出平均电压、U0大于输入电压Ui，极性相同。BOOST型DC-DC只能升压，升压公式：Vo=Vi/(1-D)。
    
-   3.Buck－Boost电路——降压或升压斩波器，其输出平均电压U0大于或小于输入电压Ui，极性相反，电感传输。BUCK-BOOST型DC-DC，即可升压也可降压，公式：Vo=(-Vi)\* D/（1-D）
    

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_012_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源（DCDC）电路升_降压分析_images\img_013_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [电子工程师必备-关键技能速成宝典（692页）.pdf](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526066&idx=2&sn=e5f7278a65af2a44acc74823a658798f&chksm=fcef85d0cb980cc694bf887b0096ed184f6ac89ef01949820f9833f562d94d5ab1f376780265&scene=21#wechat_redirect)
    
-   [电子元件认识与极性判断（51页）PPT.文档](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525496&idx=2&sn=d7a2a1bd31adeca8073907cd711b0936&chksm=fcef871acb980e0c6c643c6aab5518703722ab8e6df9d143e8be9da757f31820aa54f00deac3&scene=21#wechat_redirect)
    
-   [PCB高级设计系列资料（215页）pdf.文档](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525428&idx=2&sn=4924a50e7b62e1e35bd50fb8e4d38daa&chksm=fcef8756cb980e40d05e9af34a4250f0318ae46f1e07b7859a5e591ec4beab307074c1a6a4fa&scene=21#wechat_redirect)
    
-   [轻松学电子电路识图，实战技能-282页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256899&idx=2&sn=c5970837439ee7f2bac08e630bb2d444&scene=21#wechat_redirect)  
    
-   [电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)  
    
-   [电工线路安装与调试技能-7日通培训和技术提升\[239页\]](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256997&idx=2&sn=df4245ff1084d8508e8a2552300a9fa1&scene=21#wechat_redirect)  
    

分享💬点赞👍在看❤️