# 【NVH】旋转电机的噪声和振动2——工业电子手册(美)

原创 Mr 晋 玩转电机设计 2025-02-02 14:58 四川

> 原文地址: [https://mp.weixin.qq.com/s/dzWZ6qwiyNZ2iU9d9TX-hQ](https://mp.weixin.qq.com/s/dzWZ6qwiyNZ2iU9d9TX-hQ)

**vision**：**知识无涯，而工程问题有涯****。****死磕问题，紧跟前沿，总结分享。****助力中国电机引领全球！**

  

**NVH译文系列第2篇**  

原文摘自美国《工业电子手册 功率电子和电机驱动___》第二版__，第9章。_《The Industrial Electronics Handbook  POWER ELECTRONICS AND MOTOR DRIVES 》  
__

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyjnicUyYV1ZSGqbLvWgNLM6qUXxCEgRgbpWg4M8kffX9xy7feltQoGjA/640?wx_fmt=png&from=appmsg)

本篇为原书9.3节的翻译，主要内容是电机气隙中磁密、力波和振型、案例。

### **3交流旋转电机的磁噪声**

### **3.1现象描述**

### **3.1.1 气隙中的磁通密度**

在导线中流动的电流在旋转电机的气隙中产生一个磁场，它作用于定子和转子铁芯。产生三种力：

1.  **切向力**，它产生扭矩和转子旋转。
    
2.  **磁致伸缩力**，对于旋转电机来说可以忽略不计（磁致伸缩是铁磁材料的一种特性，当它们受到磁场作用时会变形；这种现象对变压器来说很重要）。
    
3.  **径向麦克斯韦力**。磁路气隙中磁通的径向分量产生一个力Fm，倾向于吸引定子和转子。单位面积的幅值
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRwPkeH2IwAyDm2hHzYEBE7GbcYgT7ZSf89RWkgqcfyNMPKnicLhfUYHA/640?wx_fmt=png&from=appmsg)b为定子内表面的一个给定点处的磁通量密度，  
μ0为真空磁导率（4×π×10−7 H/m）。  
这些磁力主要作用于定子产生变形和振动。由于转子具有较大的刚度，因此其变形较小；此外，它的表面最小。然后，转子的振动不会被考虑用来估计磁噪声。气隙中的磁通密度包含一个基波分量和谐波，

-    线圈有限个槽中分布，影响磁动势（m.m.f.）波形；这些谐波被称为空间谐波；
    
-   由于槽使气隙的厚度变化，导致磁阻变化；
    
-    转子的偏心，导致气隙厚度的最小值变化；由于径向力、制造或轴承老化。
    
-   钢片的磁饱和，特别在齿肩上。
    
-   由于电源（变速驱动器）而引起的电流谐波；
    

因此，为了设计一个静音的电机，必须最小化磁通密度谐波。

### **3.1.2 力波**

让我们考虑一个p极对电机。磁通密度b可以表示为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRS75xFfk7uGyVJickrEtyxY6W4CyFhQ8bp694iaANcPGd2fhhSVAlEciaQ/640?wx_fmt=png&from=appmsg)

谐波bh，其极对数为hp，可以写成

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRjHEgDuWA5wzKXTQQRqBjhSBic7Zj9L1hu4A8OGhQiaz1mHv8bib4BoiaZA/640?wx_fmt=png&from=appmsg)

幅度bh，角频率ωh（频率fh）和相位角ψh是h的复函数，对于给定的h，ωh可以取多个值。气隙中任何一点相对于固定定子参考的相对角度表示为α。结合（9.1）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRyYVRiattfcltDeJmDkVz2fohUT5XD5qMsKsibDwRr0L8HJYUd5jLp7WA/640?wx_fmt=png&from=appmsg)

为了表达fmM，我们引入一个具有h'p极对的磁通密度分量，这使得可以区分不同的项。它变成

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRMv982gEIaDVVMcfLzXERgMGy8n7rkicAvZEjiaiaTcjwzvbkp4NHvrSpQ/640?wx_fmt=png&from=appmsg)

考虑到第二项（双乘积），h'和h必须取所有值，但h不能等于h'。可以推导出

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRKV8OXo08gQf60YVHd0nicGoCPvt7JD8rrTwLl0Nqxj74ClOhaXQu2eA/640?wx_fmt=png&from=appmsg)

首先，一个平方项产生恒定压力。fˆhM：fˆhM=bˆh2/4µ0.这个量不产生噪声，因为只有非稳态压力分量会产生磁噪声。让我们注意到fmM这样的成分，其具有以下一般形式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRSRP20T5GQcib68oKlGN22xPia39gewJwnFibRgxhibQaicLcs5pbW1Xwiasg/640?wx_fmt=png&from=appmsg)

其中

m力的极对数，称为空间阶数  
fm是力频率  
ωm\=22πfm是相应的角频率

fˆmM是力分量幅值（N/m2）  
ψm是一个空间角度力波（确切地说是压力波）以ωm/m的角速度旋转。它们在位于定子外部区域的特定点上产生振动，然后产生引起噪声的可变空气压力。  

公式9.6显示了两种力分量fmM：bˆh2和乘积bˆbˆ’。

第一项的角频率为相应的磁场角频率的两倍。

第二项的角频率是各分量角频率的和与差的结果。磁噪声一般主要由第二项引起。

### **3.2 变形模式**

参数m（阶数）需要认真考虑，因为它会影响定子的机械响应。

-   **m=0**，定子和转子之间的吸引力沿气隙均匀分布。如图9.9所示，在频率fm下，定子的振动沿其周长均匀：静止的定子用实线表示，当吸引力最大时，用虚线表示。
    
-   **m=1**是特殊的，因为定子和转子之间的吸引力在一个点最大，在相对点最小。转子偏心，如图9.10所示。最大吸引力点以角速度ωm旋转，产生一个非常危险的噪声和振动不平衡质量。这种偏心导致气隙厚度和磁通密度变化。这种情况很少见。
    
-   对于 **m≥2**，转子和定子之间的最大吸引力点导致具有2m极的定子变形，其旋转角速度为ωm/m。图9.11显示了m=2和4时的变形。变形幅值与m4成反比。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFR12vSnwpWm5FNShyXicJwgL6WU67oZ1Nv3SVSOXLkBZaFKHw3OlaRrNg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRQ0rPyYGLP0uKJtlANMcS9SN6BSLicSQI4HKqBAIV8LBicelexP2ypDcw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRlTtZKZibiaER0eBa4FG2ibSgL19YWe3Zdcn7Dp48k3tHN00giaClWt7H4w/640?wx_fmt=png&from=appmsg)

### **3.3 示例**

### **9.3.3.1 15kW感应电机**

让我们考虑一个50赫兹电网供电的15千瓦感应电机。对于这个例子，仅考虑两个分量来定义b（9.2）：

-   第一个对应于h=1定义的基波：b^h=0.7T,fh=50 Hz。
    
-   第二个描述一个磁通密度谐波，如h′=−1：b^h′=0.005T（0.71%的b^h），fh′=3370 Hz。
    

恒定压力取数值：f^hM=97,500 N/m2，f^h′M=5 N/m2。  
方程9.5和9.6导出表9.1中给出的数值，这些数值描述了非稳态力分量（不考虑相角）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRBlXPMp4UPgD4xY4eAvtoVv3tsW9bdWQZHwcJ9xuHnGvdZqFTIu00vg/640?wx_fmt=png&from=appmsg)

5N/m2的fˆmM分量可以忽略。100Hz频率的力具有高幅度，可以产生振动，但因为其频率对人类耳朵来说较低，所以不会产生太多噪音。最后两个项的1400N/m2幅度会产生噪音，因为它们的幅度足够大、频率可听且模数（0和6）较低。考虑由b^h产生的恒定压力fhM（97,500 N/m2）。由于所考虑的电机具有0.118 m的内半径和0.16 m的铁芯长度，定子内表面积为0.1186 m2；结果是11,560 N的径向力作用于定子。由于额定速度为950 rpm，额定扭矩约为150 N，产生切向力接近1270 N。因此，径向力远大于切向力，允许转子旋转。

### **3.3.2PWM逆变器供电同步电机**

考虑一个三相，p=4的同步电机，工作频率为50 Hz，PWM频率fw=3 kHz。目的是定义涉及5900、6000和6100噪声线的m值（见图9.12）。定子电流分析显示主要的5950和6050 Hz三相谐波电流，分别为顺时针和逆时针系统（此类逆变器的经典结果）。每个产生四个密度波，其中最重要的分量对应于基波项，因此是一个四极对波。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRNMNkdAicZzfFP7OXmEJukrOmhxmavSYfhvqTMWhmaHgbu0kal0bibo6w/640?wx_fmt=png&from=appmsg)

图9.12 使用3 kHz PWM逆变器供电的电机在1 m处的声压级（dBA）。

让我们引入，如对h′所做的那样，一个类似的量，记为h′′。让我们仅使用以下定义的三个分量来定义b：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFR1m1I4IoLOOFia4icCCqciagsUwm8iasnq8QaSzcH73m4kNqwiccPXicmVOXA/640?wx_fmt=png&from=appmsg)

可以推断恒定压力：f^mM=97,500 N/m2,f^h′M=f^h′′M=9.75 N/m2。

由平方项产生的f^mM量具有以下特征：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRxIQ7zh0RFZTG1cBicZticOk9gakBbJSqnVb1icKia8svVznam6pT9BamCg/640?wx_fmt=png&from=appmsg)

由双积推导出的f^mM分量一起列在表9.2中。可以看出，5900和6100 Hz的压力波是0阶。6000 Hz分量是一个m=8阶；它通过添加两个压力波获得。观察到的噪声线可能由表9.2中的压力波产生。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFR2SHHFPZ1DafEoIkUJSzsOvPJHRWOOlwp9dUL4btmUAOq5ia7xicG5c1g/640?wx_fmt=png&from=appmsg)

表9.2 使用PWM逆变器供电的电机的压力波

* * *

  

  

_原文：_

__《The Industrial Electronics Handbook  POWER ELECTRONICS AND MOTOR DRIVES 》_，__第二版__，第9章  
_

* * *

**欢迎留言讨论！**

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿分享！

  

长按图片，识别二维码，关注我哟

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwnM0Q7kianI9ClktRZuNyJs53Q2Irp5aup8son3fVl5riaoG8hUfkTasQTtiblqczsqHpDOibG7Qx6Qg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)