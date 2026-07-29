# DC-DC电路之BUCK升压电路总结

原创 电路一点通 2025-04-12 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/Q8JtwFEKCiKkbXjLU2n01w](https://mp.weixin.qq.com/s/Q8JtwFEKCiKkbXjLU2n01w)

文章目录  

简述Buck电路

一、我们要什么？

二、我们如何选？

1：伏秒法则

2：电感选型

3：输入滤波电容

4：输出滤波电容

1.工作原理

2.计算过程

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

* * *

## 简述Buck电路

Buck电路是直流转直流的降压电路，通常有两种，异步Buck和同步Buck。  
拓扑如下：

**异步Buck**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_001_8e27febade14.png)

**同步Buck**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_002_81cc1a4ce4ed.png)

-   异步Buck和同步Buck的区别只要在于二极管换成 MOS 管，计算时少了二极管的导通压降（效率更高）其余基本通用。  
    
      
    **我们主要围绕异步Buck电路研究**
    

* * *

## 一、我们要什么？

我们搭建Buck电路需要的是如何选择外围器件的参数，首先我们需要知道我们已知的参数是什么？  
1：输入电压：Vi  
2：输出电压：Vo  
3：输出电流：Vo/R  
3：开关频率：f  
4：我们需要达到的纹波要求：△Vi,△Vo

我们需要计算的是什么？  
电感量：L  
输入滤波电容：Ci  
输出滤波电容：Co

我们要了解的相关问题：  
1：如何计算电感大小？  
2：如何计算电流纹波？  
3：如何计算输入电压纹波？  
4：如何计算输出电压纹波？

## 二、我们如何选？

### 1.工作原理

-   先看一下工作原理，分为两个状态：导通和截止。
    

电感相关公式：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_003_2e326bbd04a0.png)

**导通：**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_004_2e9eb2d23ba0.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_005_1dee59f25103.jpg)

  
**截止：**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_006_7519e8441377.png)  
  

截止时：  
电感续流，产生反电动势，二极管导通压降Vd，二极管阳极接地电压为零，则阴极极电压为-Vd，  
因为输入和输出电压不变则：L \* di(off) / dt(off) = -Vd-Vo，即 di(off) / dt(off) = -(Vo+Vd)/L=常数。

由两种工作状态看出，基本原理就是电容和电感的充放电，明白工作原理接下来好分析。

### 2.计算过程

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_007_7f4f8f4698c7.png)

#### ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_008_40e59c406dbf.png)

**结合 T = Ton + Toff = 1/f 得到**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_009_f5b939e639d5.png)  
如果是同步Buck,把 Vd=0 可得：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_010_f4458ffc19e2.png)

#### 2：电感选型

电感选型时需要考虑：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_011_35f5b64fb58b.png)

* * *

**先看平均电流：**

输出电压不变，则输出滤波电容的电流为零。

即： I L = I o = V 0 / R , 平均电流也即输出电流： I L = I 0 ; 即：IL = Io = V0/R, 平均电流也即输出电流：IL = I0; 即：IL\=Io\=V0/R,平均电流也即输出电流：IL\=I0;

* * *

**再看纹波电流**

前面可知，在开关导通时电感电流增大，在关断时，电感电流减小，纹波电流就等于在开关导通时电感电流增大的值，也等于关断时电感电流减小的值（| di(on) | = | di(off) |）。

由  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_012_36e534da197e.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_013_3632c68b8377.png)  
可得：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_014_63d99cd1780e.png)

_能看出来：电感电流的纹波跟负载电流的大小没有关系_

* * *

**峰值电流**

峰值电流就是电感的平均电流加上纹波电流的一半  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_015_b9fbf52d888c.png)  
电感选型时：  
电感的饱和电流必须大于峰值峰值电流，并且留够余量；  
纹波电流为平均电流的0.2~0.4之间。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_016_4bc2be8850ba.png)

#### 3：输入滤波电容

实际工作中，Buck输入电源的前级供电存在较大电感，没法提供快速变化的电流，也就没办法快速响应Buck电路的电源需求。  
通常将输入电流看成平均输入电流：Ii

**求输入平均电流**  
根据功率求输入平均电流：

P 总 = P 无 + P 有（ P 无 = 二极管消耗， P 有 = 负载） P总 = P无 + P有（P无 = 二极管消耗，P有 = 负载） P总\=P无+P有（P无\=二极管消耗，P有\=负载）  
一个周期中：  
二极管只在开关关断时工作（计算时要考虑到）

-   平均电流等于电感的平均电流：IL=Io；
    
-   电流流过的时间为：T（off）；
    
-   导通压降为 Vd；
    

**归纳为：**

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_017_3cfd73a0f189.png)

* * *

**求输入滤波电容的容量**

输入电压纹波就是输入电容上面的电压变化，其：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_018_5187359de512.png)  
  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_019_619e99715600.png)

**1.求Uq**

分析该节点：  
![![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_020_0f93fc1124e7.png)

基尔霍夫电流定律，节点电流和为 0  
电源输入的电流恒定为 Ii  
输入电容电流的变化量必然等于开关电流的变化量

-   开关断开时，开关电流为 0：
    

电源输入的电流全都流进输入电容，电容被充电，充电电流为输入的平均电流 Ii。

-   开关导通时，电感需要续流：
    

电源输入的电流和输入滤波电容二者共同提供电流，电容此时放电。

-   稳定时：一个周期中，电容的充电和放电的电荷量一定相同。
    

计算充电的时间（好计算）：

-   根据 Q = I \* t，电荷量为 Q = Ii \* Toff
    
-   根据 Q = Uq \* C，得电压增量 Uq=Q/C=Ii\*Toff/C
    

**归纳为：**

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_021_90a8e604ed0e.png)  
**2.求Uesr**

由U = I \* R 来看，想要知道 ESR 造成的纹波大小，我们只需要知道流过电容的电流就好。

电容的电流波形：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_022_d0a9e7710b37.png)

* * *

根据时间点分析：

-   开关导通的前一瞬间：  
    电感一直在放电，所以切换时电感电流最小。  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_023_c8c4a68f6a91.png)
    
-   开关导通的后一瞬间：  
    该点和为零，则此时输入电容的电流为：（ IL - △IL / 2 是Buck电路输出的最大电流）  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_024_e2540fd7069f.png)
    
-   电容的电流由该值，线性增大至：（ IL + △IL / 2 是Buck电路输出的最大电流）  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_025_24effa58eff8.png)
    

* * *

_**由此可知：**_

-   开关断开时，ESR 上面产生的压降是恒定的，为：Ii\*ESR
    
-   开关导通后，ESR 上面产生的最大压降是：-(IL+△IL/2-Ii)\*ESR
    
-   两者相减，得到的就是一个周期内 ESR 引起的纹波大小，也就是：Uesr=(IL+△IL/2)\*ESR  
    **归纳为：**  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_026_9958444dda26.png)
    

根据△Vi=Uesr+Uq可得总纹波公式：  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_027_9c8cfeaf34d5.png)  
可以看出纹波参数和电容本身的参数有关：ESR 和容量 C

**考虑到我们的电容实际使用情况：**

陶瓷电容 ESR 小，容量小，Uq 对纹波起决定作用

所以输入纹波电压可以近似为 Uq，如果我们要限定纹波不能大于△Vi，那么 Uq≤△Vi。

铝电解电容容量大，ESR 大，Uesr 对纹波起决定作用

所以输入纹波电压可以近似 Uesr，如果我们要限定纹波不能大于△Vi，那么 Uesr≤△Vi

根据上面两点，我们就可以去选择合适的电容了。

**陶瓷电容根据容量值去选**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_028_c6d9848a5d51.png)

**铝电解电容根据 ESR 去选**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_029_b080ba95f407.png)

#### 4：输出滤波电容

输出纹波△Vo 同样由电容容量和 ESR 决定  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_030_7270bd56f10e.png)  
**1：电容电荷量变化引起的 Uq**

节点电流和为0；  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_031_3fd4faccef30.png)

节点的电流有 3 个：

-   一个是来自负载，可以看作是恒定的，为 Io=Vo/R
    
-   一个节点是输出滤波电容
    
-   一个节点是电感（最大电流IL+△IL/2,最小电流IL-△IL/2）  
    节点电流和为 0，并且负载的电流恒定，那么电感电流的变化量必然等于电 容电流的变化量  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_032_cbc80fcc4cec.png)  
    电容电流大于 0 时，电容在充电，电容电流小于 0 时，电容在放电。并且图中也可以看到，电  
    容充电和放电时间长度是一样的，都是周期的一半，T/2
    
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_033_102f88723923.png)
    
      
    

**归纳为：**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_034_8153a72a7d74.png)

* * *

**2：电流流过电容的 ESR 造成的压降 Uesr**

电容的充电电流最大是△IL/2  
放电电流最大就是-△IL/2  
_(负号表示电流方向)_

ESR 引起的总的压降是：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_035_1f1ec9de578c.png)

**归纳为：**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_036_65f859a1e0ba.png)

则，已知 Uq 和 Uesr。

可得总的输出电容纹波大小：  
△ V o = U e s r + U q △Vo=Uesr+Uq△Vo\=Uesr+Uq  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_037_0265746bc925.png)

**可以根据以上选择合适的电容了**

* * *

陶瓷电容根据容量值去选：  
陶瓷电容 ESR 小，容量小，Uq 对纹波起决定作用；  
所以可以近似为 Uq，如果我们要限定纹波不能大于△Vo，那么 Uq≤△Vo。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_038_f46332daf2dc.png)  
铝电解电容根据 ESR 去选：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_039_924432ad6e43.png)

引申思考：

-   电感量增大会怎样？
    
-   电容量增大会怎样？
    
-   工作频率的大小会影响什么？
    

* * *

## 

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电路之BUCK升压电路总结_images\img_040_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**