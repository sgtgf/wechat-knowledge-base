# PIC单片机与DC-DC转换器电路设计实验

原创 电路一点通 2024-12-18 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/amUyGYnrEWFINcS5WAwiCw](https://mp.weixin.qq.com/s/amUyGYnrEWFINcS5WAwiCw)

**一.实验目的**

1\. 认识电路板设计中的要素：元器件的类型（芯片、电阻、电容、电感、接插件等）、封装、安装方式，以及PCB设计、生产、验证等过程。

2\. 认识原理图schematic中的元件符号、符号库、线、网络标签等；电路布板PCB Layout中的元件封装、封装库、布线、过孔、覆铜、层。

3\. 掌握KiCad下载、安装和工作流程。

4.完成DC-DC转换电路的PCB layout。

5.掌握KiCad的第三方插件安装，能输出BOM文件。

6.掌握输出制造工艺要求的Gerber光绘文件。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_000_678abc58c5d8.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_001_8a5f1d581bee.png)

**👇👇👇更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_002_974df1cceac9.png)

**二.实验资源**

       KiCad5.1.10软件（含Eeschema和Pcbnew工具）

**三.实验步骤**

**1.PIC****单片机电路**

(1) 根据KiCad指导书中的步骤绘制PIC单片机原理图

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_003_7df79fda32eb.png)

(2) 进行连线，覆铜等操作

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_004_0c06088475eb.png)

 (3) 三维视图及物料表

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_005_6313eaba0315.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_006_9890d1dca33c.png)

**2.sim****卡座封装绘制**

        阅读getting started in KiCad.pdf中第8章，KiCad的元件封装库，参照9.2数据手册中相关资料，完成元件7P自弹MICROSIM卡座的封装绘制。

        绘制结果如下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_007_e366cc4011f5.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_008_d77c96233392.png)

**3.DC-DC****转换电路**

(1)原理图绘制，使用给定的封装设置

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_009_f31266ce7594.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_010_070301bd532d.png)

        物料表：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_011_3aab533dc7bb.png)

(2) 按照DC-DC电源PCB布局要点及布局板框和接口图，完成PCB布局布线

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_012_3ebedc879f18.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_013_aff1f3ffa3c7.png)

(3) 生成Gerber文件，(文件见工程压缩包)  
https://github.com/A-Y-1/HNU/tree/main/%E7%94%B5%E5%AD%90%E6%B5%8B%E8%AF%95%E5%B9%B3%E5%8F%B0/%E7%94%B5%E5%AD%90%E6%B5%8B%E8%AF%95%E5%B9%B3%E5%8F%B01

**四.实验总结**

1.通过实验熟悉了KidCad的使用，原理图的绘制，PCB布板的方法，物料表的生成，Gerber文件的生成，覆铜的方法等相关知识。

2.通过实验完整的体验了电路设计及布板的流程，并学习了相关的方法和步骤

3.认识了KidCad的元件库，封装库，和绘制元件符号的方法。

4.完成了DC-DC原理图的绘制，了解了其电路工作原理。并完成了Gerber文件的生成以及通过嘉立创得到了样板，体会了自行设计电路的过程，解决了绘图和布线过程中的问题。

5.布线需要清楚电路原理，并有耐心的进行覆铜，绘制等操作，才能完成合理，可用的电路布板。  
  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PIC单片机与DC_DC转换器电路设计实验_images\img_014_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [4种开关电源开关管(MOS管)驱动电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534374&idx=1&sn=929dc452a7f2f8955b75106d14a6cc0b&chksm=fcefa444cb982d52aec469979f921ab990a640414863a4766e6b5b58972b52afdb9edd80208c&scene=21#wechat_redirect)
    
-   [12V20A开关电源简单拆解看下内部做工](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534369&idx=1&sn=9a0185d0e3cb2972ef70dba234099368&chksm=fcefa443cb982d5567e0e6dd28278e04b6a5ec0283f15833265e066ad5d02f00ee166320e15a&scene=21#wechat_redirect)    
    
-   [峰值检测电路汇总](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534229&idx=2&sn=97b1b1051c11304be65c7ebf70b01515&chksm=fcefa5f7cb982ce106db5801d5348ffa5fc5d0b6b0dcd3cb2c476bbf7bd37b2d9ba88531603d&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534229&idx=2&sn=97b1b1051c11304be65c7ebf70b01515&chksm=fcefa5f7cb982ce106db5801d5348ffa5fc5d0b6b0dcd3cb2c476bbf7bd37b2d9ba88531603d&scene=21#wechat_redirect)[光耦隔离继电器电路讲解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534015&idx=2&sn=2cf0fed040b284e550536abc82f2ebe3&chksm=fcefa6ddcb982fcb03b336ac8cf5ac6010f460576e3a17f9b5f7c6da056711166fdd82ef19cd&scene=21#wechat_redirect)
    
      
    

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分