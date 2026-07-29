# MOS管的放大电路分析-运用模电的理论计算验证

原创 电路一点通 2025-02-27 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/\_SOSwQ5IjLAHOGQfsRIn8w](https://mp.weixin.qq.com/s/_SOSwQ5IjLAHOGQfsRIn8w)

在实际应用中，我们经常会使用到功率MOS，这时通常不会将它当成一个开关使用，而是当成一个放大器来使用，那这就需要让其工作在放大状态。

  

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

参考下图中的mos管的特性曲线，右图中的输出特性曲线中有一根红色的分界线，这个线就是区分mos管工作状态的分界线，在红线的左边，mos管工作在可变电阻区，也就是线性区；在红线的右边mos管工作在恒流区，也就是饱和区。当然，还有一个截止区。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_001_2797235bdc8b.png)  
  

本文分析主要运用模电课本中的理论计算验证。  

#### 1.三电阻电路

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_002_25ef42ebb75a.png)  
如上图所示，是在multisim中绘制的放大电路，便于仿真验证。使用的MOS管的型号为2N7000。计算中需要使用的关键参数  
U G S T H = 2 V U\_{GSTH}=2V UGSTH\=2V K = 0.0502 A / V 2 K=0.0502A/V^{2} K\=0.0502A/V2

第一步判断此MOS是否工作在放大状态？那么就需要先分析其静态。分析静态的时候，电容开路，那么就会简化电路如下：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_003_42fe55273807.png)  
MOS管栅极电压用电阻分压可以求得  
U G Q = 12 V ∗ R 3 / ( R 2 + R 3 ) = 2.26 V U\_{GQ}=12V\*R3/(R2+R3)=2.26V UGQ\=12V∗R3/(R2+R3)=2.26V （1）  
这里的源极也就是S极直接接地了，所以可以得到  
U G S Q = U G Q = 2.26 V U\_{GSQ}=U\_{GQ}=2.26V UGSQ\=UGQ\=2.26V （2）  
然后需要借助下面这个公式（3）  
I D Q = K ∗ ( U G S Q − U G S T H ) 2 = 3.49 m A I\_{DQ}=K\*(U\_{GSQ}-U\_{GSTH})^{2}=3.49mA IDQ\=K∗(UGSQ−UGSTH)2\=3.49mA（3）  
（3）式是MOS管转移特性曲线的方程，式中这个K值是个比较关键的点，我们后面分析。  
U D S Q = 12 V − R 1 ∗ I D Q = 5.02 V U\_{DSQ}=12V-R1\*I\_{DQ}=5.02V UDSQ\=12V−R1∗IDQ\=5.02V （4）  
以上这几个公式求出来的值就是MOS管在静态工作时的几个关键参数。  
我们可以先在仿真中验证一下正确性：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_004_1cf9a33304fd.png)  
如上图，我们在电路中串入一个直流电流表测量电路中的 I D Q I\_{DQ} IDQ;并联一个直流电压表测量 U D S Q U\_{DSQ} UDSQ。将两个表测量的值和上面计算出来的值对比发现，结果非常接近，说明计算正确。

接下来是判断MOS管的工作状态：  
在本例中，由上面计算得到的静态参数可以进行下面的计算验证。  
U D S Q > U G S Q − U G S T H U\_{DSQ}>U\_{GSQ}-U\_{GSTH} UDSQ\>UGSQ−UGSTH （5）  
当满足该条件时，MOS管即工作在放大状态，当然，前提条件是  
U G S Q > U G S T H U\_{GSQ}>U\_{GSTH} UGSQ\>UGSTH保证当前MOS处于导通状态。

下面是小信号的动态等效电路分析：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_005_41b3ae813248.png)  
该等效电路是对MOS管模型的等效，等效出一个压控电流源，即 u g s u\_{gs} ugs控制 i d i\_{d} id，也就是图中的  
i d = g m ∗ u g s i\_{d}=g\_{m}\*u\_{gs} id\=gm∗ugs（6）

该等式我们要注意两点：  
①注意等式中使用的字母和下标都是小写，表明这里的值都是纯交流，没有直流信号  
②式中的 g m g\_{m} gm表示跨导，即MOS管的转移特性曲线的斜率。小信号的等效就说明输入信号是一个幅值很小的信号，往往分析的时候就是计算在静态工作点Q处的 g m g\_{m} gm。

g m = 2 ∗ K ∗ I D Q g\_{m}=2\*\\sqrt{K\*I\_{DQ}} gm\=2∗K∗IDQ（7）  
g m = 2 ∗ 0.0502 A / V 2 ∗ 3.49 m A = 26.47 m A / V g\_{m}=2\*\\sqrt{0.0502A/V^{2}\*3.49mA}=26.47mA/V gm\=2∗0.0502A/V2∗3.49mA \=26.47mA/V

至此，计算中需要用到的一些公式参数基本都出现了，接下来开始计算验证。

首先计算一下 i d i\_{d} id  
i d = g m ∗ u g s = 2 ∗ 0.0502 A / V 2 ∗ 3.49 m A ∗ u i i\_{d}=g\_{m}\*u\_{gs}=2\*\\sqrt{0.0502A/V^{2}\*3.49mA}\*u\_{i} id\=gm∗ugs\=2∗0.0502A/V2∗3.49mA ∗ui  
这里我只计算幅值， i d p k = 374.37 u A i\_{\_dpk}=374.37uA idpk\=374.37uA

然后计算信号放大倍数  
A V = u o u i = − 48.126 A\_{V}=\\frac{u\_{o}}{u\_{i}}=-48.126 AV\=uiuo\=−48.126  
则对于输入信号 u i p k = 14.142 m V u\_{ipk}=14.142mV uipk\=14.142mV  
u o p k = − 48.126 ∗ 14.142 m V = − 680.599 m V u\_{\_opk}=-48.126\*14.142mV=-680.599mV uopk\=−48.126∗14.142mV\=−680.599mV

观察仿真波形：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_006_5878f08e6988.png)  
可以看到，这里主要观察了 i d i\_{d} id和 u o u\_{o} uo的值，我们看到这里的两个幅值和计算的幅值相差无几，说明整个分析过程正确。注意波形图中设置的是交流形式，意即没有包含直流信号。如果我们调整为观察交直流信号。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_007_ccf3becbaba4.png)  
u o u\_{o} uo输出信号是经过电容滤波之后的信号，没有直流信号。我们调整观察点到电容前端，就可以观察到直流信号，如下图所示：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_008_0f8893a5f1e1.png)  
  

至此我们简单分析了基于三电阻的MOS管放大电路的计算。分析中涉及到的理论计算均来自模拟电路课本，参考包括杨老师的新概念等。

  
针对计算中给出的 K K K值,在考试中往往会给出该值，所以计算较为方便。但是在实际应用电路中，在某个MOS的datasheet中是不会给出该值的，所以往往会无法计算。结合杨老师在新概念课堂中的建议，可以在对应的转移特性曲线上取一点，找出对应的 u G S u\_{GS} uGS和 i D i\_{D} iD的值，可以求解出一个 K K K值。

  
但是在实际分析电路中可知，针对不同点，求解出的 K K K值相差比较大，因此在实际应用中，会存在一定偏差。

  

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_012_ef7d17c8c639.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_010_ef7d17c8c639.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_009_ef7d17c8c639.png)**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_011_ef7d17c8c639.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_013_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)****[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[运放电路采集电流0~1A、电压0~15V](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=1&sn=f65764a291ece4f5980f06a6480c7e45&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[RS485接口电路设计全面指南：从基础到实践](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539898&idx=1&sn=ab2e7707a308d1103b7415e8ed153577&scene=21#wechat_redirect)**
    
-   [](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**[深圳上市公司高管Top10，有人身家超3400亿？看完我酸了](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540115&idx=1&sn=1bc9d69060852e9fa205599a26b9147e&scene=21#wechat_redirect)**
    
      
    

* * *

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管的放大电路分析_运用模电的理论计算验证_images\img_014_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**