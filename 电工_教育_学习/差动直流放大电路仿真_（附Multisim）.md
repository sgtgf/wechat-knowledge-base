# 差动直流放大电路仿真-（附Multisim）

原创 电路一点通 2025-02-25 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/VhurZ1V10yJI\_FfRYohZAQ](https://mp.weixin.qq.com/s/VhurZ1V10yJI_FfRYohZAQ)

### 一、实验步骤

•1）实验前的准备工作；检查三极管、导线；

（附Multisim）资料     

    **👇**👇**👇   看******    

    **文末**   

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_000_9d39d292cb4d.png)

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_001_2c3176ff042e.png)

•2）调制+12V、-12V两路直流电压；

•3）测量Q点；①调零（保证零输入零输出）；②测Q点；完成相关表格；

•4）测量**直流差模电压放大倍数；！将电源地、信号地、电路地相连！**

①双端输入：用模拟电路实验箱的交直流差模信号源I 和II 产生0.1V 和-0.1V的一对差模信号，分别接入Ui1和Ui2，在差分电路射极分别接入恒流源和Re1的两种情况下，分别测量输出电压，完成相关表格；

②单端输入：用交直流差模信号源I 产生+0.2V直流电压，接入Ui1，b2 接地（Ui2 置零），差分电路射极接恒流源，测量输出电压，完成相关表格；

•5）测量**直流共模电压放大倍数**；

将交直流差模信号源I 依次产生+0.1V 和-0.1V 直流电压，接入Ui1，并将b1、b2 相连（共模输入），在差分电路射极分别接入恒流源和Re1的两种情况下，分别测量输出电压，完成相关表格；

•6）测量**交流**信号单端输入、单端输出时**电压放大倍数**；（示波器测量）产生1kHz，Up-p = 0.15V 正弦波，接入Ui1，且b2接地，示波器CH1通道测量单端输入电压，CH2通道测量单端输出电压，完成相关表格；

•7）数据处理：

①完成相关表格，并将测量值与仿真值对比，必要时做误差分析；

②比较双端输入和单端输入时的输出电压，并对数据做出合理解释；

③比较双端输入时射极分别接入恒流源和Re1两种情况下的直流差模电压放大倍数和直流共模电压放大倍数，并对数据给出合理解释。

④比较双端输出和单端输出时的电压放大倍数，并对数据做出合理解释；

•8）完成实验思考题；

•9）完成实验总结及讨论。

  

###  二、仿真

![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_002_a877ec6b9bd5.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_003_7f3224cc9312.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_004_c33204923450.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_005_c29cfd596b15.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_006_be72ddf9e703.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_007_4534dcd3c493.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_008_e1b895a79779.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_009_7a8bd628902f.png)

### 三、数据处理

1\. 静态工作点和直流共模电压放大的实测值与仿真值几乎一样，直流差模双端输入，直流差模单端输入，交流单端输入，单端输出的电压放大相差甚远。原因：

（1）对于差模信号，电压放大倍数Aud与单端输入或双端输入无关，只与输出方式有关。由于实验中晶体管的𝛽和rbe不同，故其差模的放大倍数不同。 

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_010_73289747dac9.png)

 （2） 对于共模信号，共模方式下，电路完全对称、双端输入、双端输出的情况下，共模电压增益约为0。

2.差模单端输入与双端输入几乎一样，原理上对称的双端输入其实可以等效为一个两倍的双端 单侧输入（+0.1~-0.1—>单端+0.2或者-0.2）。在不考虑输入端不对称引起的细微差别外，电路放大能力不变。

3.双端输入下，直流差模电压放大倍数基本接近，但直流共模电压放大倍数变化较大点。恒流源的内阻为无穷大, 与Re1相比也符合大电阻的概念，它相当于T1管和T2管的发射极接了一个阻值为无穷大的电阻,对共模信号的负反馈作用无穷大,因此使电路的Ac=0, KCMR=∞。故共模电压接恒流源的Ac较小些，则KCMR更大些。

4.通过数据对比，单端输出的放大倍数要比双端输出的大一倍，但比双端输出的单端放大要大一点。单端输出后，输出电压应该为原来的1/2。

![](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_011_53bbe18b309a.png)

         由书中上式不难得出单端的要比双端的单端大一点。 

  

### 思考题

 1. 差分直流放大器

优点：稳定静态工作点，对零漂做进一步的抑制，提高共模抑制比。

缺点：差分放大器是以牺牲一个管子的放大倍数为代价来换取低漂。 结构复杂、分析繁琐，特别是其对差模输入和共模输入信号有不 同的分析方法，难以理解，因而一直是模拟电子技术中的难点。

2\. 物理意义：为了综合考察差分放大电路对差模信号的放大能力和对共模信号的 抑制能力。 实际作用：实现电路低漂效果（抑制共模信号能力），稳定静态工作点。

3\. 集成电路中一些关键参数会受温度影响（如𝛽）,模拟出来的电路会产生较大的影响，为了避免温度变化和电压波动引起的零点漂移而引起的信号失真，故大量的模拟运算放大器集成电路中都采用差动直流放大器电路结构。 

**如何领取资料**

  

下载链接：https://pan.quark.cn/s/16c3942a9cd0

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_012_80110d4e7771.png)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_016_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_013_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_015_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_017_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_014_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_018_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)  
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\差动直流放大电路仿真_（附Multisim）_images\img_019_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******