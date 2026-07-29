# 集成运放--波形变换电路设计（附Multisim资料）

原创 电路一点通 2025-02-28 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/aG8VmbpDq2YaYlZfJs-jyw](https://mp.weixin.qq.com/s/aG8VmbpDq2YaYlZfJs-jyw)

### 实验要求  

#### 一、实验目的

•了解运算放大器的工作原理。

•掌握运算放大器的线性及非线性应用电路的组成及工作原理。

•掌握波形变换电路的设计及测试方法。

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_000_5e46d5a07fa4.png)

（附Multisim）资料     

    **👇**👇**👇   看******  

    **文末**   

#### 二、实验仪器及器件

•信号提供︰直流稳压电源、函数信号发生器。

•测量：万用表、示波器。

•电路连接：电阻和电容、通用型集成运放等

#### 三、实验原理

•1、运算放大器的外特性（简述）

•2、运算放大器的线性应用电路（简述）

•3、运算放大器的非线性应用电路（简述）

  

#### 四、实验设计任务及要求

•设计任务：设计一个将输入的正弦波变换为其他输出波形的电路（要求用集成运放uA741和相应的阻容元件实现）。

•技术指标要求：输入频率为1KHz，峰-峰值为6V的无直流偏置的正弦波，要求输出三种波形，各输出波形的幅度如图所示，误差小于±5%。

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_001_56de23d17c16.png)

  

注意：运放供电电源只能采用对称双电源或单电源；不得采用电压源将输出电压直接抬高。Ps：请思考以上方案的缺陷。

**设计任务**：设计一个将输入的正弦波变换为其他输出波形的电路（要求用集成运放和相应的阻容元件实现）。

**技术指标要求**：输入是频率为1K，峰-峰值为6伏的正弦波，要求输出三种波形，各输出波形的幅度如图所示，误差小于5%。

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_002_09c8abefb556.png)

#### 五、实验步骤及实验数据

1．确定波形变换电路的实现方案及电路中所选择的器件型号和元件参数值，画出电路图并写出理论分析过程；

2．应用Multisim软件对设计进行仿真；

3．用实验室模块和相应设备搭建和调试电路；

4．在实验室检测电路是否满足设计要求；实验报告中加入示波器测试各输出波形截图（可使用示波器Measure功能显示波形最大值和最小值） 

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_003_1ad52db13201.png)

####  六、实验结果分析

方案对比；

尊重事实，对实验中出现的现象给予合理的解释及分析

  

### 仿真分析

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_004_8caa4f459af9.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_005_9ac6483376ce.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_006_9306e5c94d33.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_007_2c563288c0f5.png)

###  实验结果分析

一. 方案对比

         Multisim仿真中，通过二极管来控制方波电压的输出大小和范围，再通过积分电路产生三角波。 其实为了生成特定的波形试了很多二极管构成的双通管和稳压管，再到后面的电容与电阻并联也调节蛮久的，但其波形失真率都能低于5%。

         而在实验中，难免存在器件误差和器件可能有些不充分的缘故，导致在第一个方波输出失真率偏大。后面再为了减少实际电路产生的失真，采用了一个电压跟随器。

        但总的来说，实验与仿真都存在着0-10方波输出时波形偏下移，其原因是由二极管的正向电压降导致，可通过抬高比较器的比较电位实现波形的抬高。

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_008_6d86c79dd142.png)

**思考题**

一级采用双通管将1KHz -3-3V的正弦产生 -6 - 6V的方波，二极通过稳压管控制方波电压的输出大小（截去以下0V），三级通过积分电路产生-6 -6 V的三角波。

  

「集成运放--波形变换电路计」

**如何领取资料**

  

下载链接：https://pan.quark.cn/s/16c3942a9cd0

![](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_009_80110d4e7771.png)

  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_010_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_011_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_013_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_012_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_015_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_014_ead434f24ea4.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)****[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   **[深圳上市公司高管Top10，有人身家超3400亿？看完我酸了](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540115&idx=1&sn=1bc9d69060852e9fa205599a26b9147e&scene=21#wechat_redirect)**
-   **[各种电工电子控制电路365例【文末领取】](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**  
    
-   **[【808页】西门子S7-200 300 400完整培训教程 、变频器培训教材](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254439&idx=2&sn=a5197e1020460d0711cc99af703257ad&scene=21#wechat_redirect)**
    
-   [**【397页】西门子PLC系统及其应用培训ppt**](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254438&idx=2&sn=287d0277c4525dd2c8f6b9c6c7b0da89&scene=21#wechat_redirect)  
    
-   [**图表细说元器件及实用电路362页**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539497&idx=2&sn=2b675f61f20c00929a3e00218819c13a&token=739485273&lang=zh_CN&scene=21#wechat_redirect)
    
-   [**清华大学DeepSeek第一、二弹干货：从入门到精通-赋能职场**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539461&idx=2&sn=fb6044426bf24370f4bdc4a1073eeb1d&scene=21#wechat_redirect)
    
-   **[ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&token=1991019132&lang=zh_CN&scene=21#wechat_redirect)**
    
-   [三菱PLC Q系列 QnACPU编程手册（PID控制指令篇）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254661&idx=2&sn=4190c10cd690736929e4a076ccd3f3db&scene=21#wechat_redirect)
    
-   [电气工程基础知识及识图（第一讲）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254710&idx=2&sn=e844f3f489cdf31366b70d77fe110f07&scene=21#wechat_redirect)
    
-   [学西门子变频器应用深入浅出-254页pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254707&idx=2&sn=395f183db4de32c363c51379d09e25ef&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254771&idx=2&sn=db18ac97d9dad3a4a93dd42d377465b8&scene=21#wechat_redirect)[2025 AI+热门方向](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254771&idx=2&sn=db18ac97d9dad3a4a93dd42d377465b8&scene=21#wechat_redirect)
    
-   [电气系统总线与常用元器件（课件）.ppt](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254804&idx=2&sn=fe95989da467faf5fedac07fc721f929&scene=21#wechat_redirect)
    
-   [PLC编程实用指南（第2版）848页.pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254979&idx=2&sn=3fa37d7e37d6f66be0ff06e69a47206e&scene=21#wechat_redirect)
    

* * *

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\集成运放__波形变换电路设计（附Multisim资料）_images\img_016_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**