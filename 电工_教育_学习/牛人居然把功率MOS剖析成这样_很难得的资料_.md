# 牛人居然把功率MOS剖析成这样，很难得的资料！

原创 硬件笔记本 2023-10-30 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/owkxq6bbYCv56xPjkMlWcA](https://mp.weixin.qq.com/s/owkxq6bbYCv56xPjkMlWcA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**功率MOSFET的正向导通等效电路**

  

（1）：等效电路

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZ2zXAk38wMFeKic50AZ1Wz35PgTlNTLufu1oEvuf2yfd0iclZXc63IZ1w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

（2）：说明：

功率 MOSFET 正向导通时可用一电阻等效，该电阻与温度有关，温度升高，该电阻变大；它还与门极驱动电压的大小有关，驱动电压升高，该电阻变小。详细的关系曲线可从制造商的手册中获得。  

  

**功率MOSFET的反向导通等效电路（1）**

  

（1）：等效电路（门极不加控制）  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZT6EJAEmDic0Bs4bOUarrs3TZ7tnChVY5b7Ce6buReSG9exA0j10IibdQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

（2）：说明：

即内部二极管的等效电路，可用一电压降等效，此二极管为MOSFET 的体二极管，多数情况下，因其特性很差，要避免使用。

  

**功率MOSFET的反向导通等效电路（2）**

  

（1）：等效电路（门极加控制）

  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZVpA2ERr4uC1mbMBAwzWoUZviafx7dKmzI1MZribY3dm8icmE9gDXy1fPg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

（2）：说明：

功率 MOSFET 在门级控制下的反向导通，也可用一电阻等效，该电阻与温度有关，温度升高，该电阻变大；它还与门极驱动电压的大小有关，驱动电压升高，该电阻变小。详细的关系曲线可从制造商的手册中获得。此工作状态称为MOSFET 的同步整流工作，是低压大电流输出开关电源中非常重要的一种工作状态。  

  

**功率MOSFET的正向截止等效电路**

  

  

（1）：等效电路

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZUR020h2z8xiaeQIzQJlnHYxiawj0JJ4OYalTmxjWib9olHeZpfjh7Sqqg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

（2）：说明：

功率 MOSFET 正向截止时可用一电容等效，其容量与所加的正向电压、环境温度等有关，大小可从制造商的手册中获得。  

  

**功率MOSFET的稳态特性总结**

  

（1）：功率MOSFET 稳态时的电流/电压曲线

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZJe5blN0t8ojYGbVrNDTG3xEOGzqT0yt4BGOWCM8BlzAPg98MEWz2qg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

（2）：说明：

功率 MOSFET 正向饱和导通时的稳态工作点：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZzVVuZq6zRl3XGCRl0eWMcsDhLiczHG1u0lvmUDLXIGNcnj1cgwh0kIQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

当门极不加控制时，其反向导通的稳态工作点同二极管。

（3）：稳态特性总结：

\-- 门极与源极间的电压Vgs 控制器件的导通状态；当Vgs<Vth时，器件处于断开状态，Vth一般为 3V；当Vgs>Vth时，器件处于导通状态；器件的通态电阻与Vgs有关，Vgs大，通态电阻小；多数器件的Vgs为 12V-15V ，额定值为+-30V；

  

\-- 器件的漏极电流额定是用它的有效值或平均值来标称的；只要实际的漏极电流有效值没有超过其额定值，保证散热没问题，则器件就是安全的；

\-- 器件的通态电阻呈正温度系数，故原理上很容易并联扩容，但实际并联时，还要考虑驱动的对称性和动态均流问题；

\-- 目前的 Logic-Level的功率 MOSFET，其Vgs只要 5V，便可保证漏源通态电阻很小；

\-- 器件的同步整流工作状态已变得愈来愈广泛，原因是它的通态电阻非常小（目前最小的为2-4 毫欧），在低压大电流输出的DC/DC 中已是最关键的器件；

  

  

**包含寄生参数的功率MOSFET等效电路**

  

  

（1）：等效电路

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZtWKCbzBWlgoTOPpsDS0WwfK5NbyiaKia8VBLHJI0OdVoXgTA3O70Tqicw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

（2）：说明：

实际的功率MOSFET 可用三个结电容，三个沟道电阻，和一个内部二极管及一个理想MOSFET 来等效。三个结电容均与结电压的大小有关，而门极的沟道电阻一般很小，漏极和源极的两个沟道电阻之和即为MOSFET 饱和时的通态电阻。

  

**功率MOSFET的开通和关断过程原理**

  

  

（1）：开通和关断过程实验电路  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZ2VM3Zz6e8xTAu4LJUvxic2XNUuEP4H23g2JZ9KKxC2QfYUfa7UxK1Jw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
（2）：MOSFET 的电压和电流波形：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZEN0mkX1j5iaMcw9BjRcdN642vGiaa7r0050pLj7QLbXKTmUIMyzGibAbA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
（3）：开关过程原理：

开通过程\[ t0 ~ t4 \]：

-   在 t0 前，MOSFET 工作于截止状态，t0 时，MOSFET 被驱动开通；
    
-   \[t0-t1\]区间，MOSFET 的GS 电压经Vgg 对Cgs充电而上升，在t1时刻，到达维持电压Vth，MOSFET 开始导电；
    
-   \[t1-t2\]区间，MOSFET 的DS 电流增加，Millier 电容在该区间内因DS 电容的放电而放电，对GS 电容的充电影响不大；
    
-   \[t2-t3\]区间，至t2 时刻，MOSFET 的DS 电压降至与Vgs 相同的电压，Millier 电容大大增加，外部驱动电压对Millier 电容进行充电，GS 电容的电压不变，Millier 电容上电压增加，而DS电容上的电压继续减小；
    
-   \[t3-t4\]区间，至t3 时刻，MOSFET 的DS 电压降至饱和导通时的电压，Millier 电容变小并和GS 电容一起由外部驱动电压充电，GS 电容的电压上升，至t4 时刻为止。此时GS 电容电压已达稳态，DS 电压也达最小，即稳定的通态压降。
    

  

关断过程\[ t5 ~t9  \]：  

-   在 t5 前，MOSFET 工作于导通状态， t5 时，MOSFET 被驱动关断；
    
-   \[t5-t6\]区间，MOSFET 的Cgs 电压经驱动电路电阻放电而下降，在t6 时刻，MOSFET 的通态电阻微微上升，DS 电压梢稍增加，但DS 电流不变；
    
-   \[t6-t7\]区间，在t6 时刻，MOSFET 的Millier 电容又变得很大，故GS 电容的电压不变，放电电流流过Millier 电容，使DS 电压继续增加；
    
-   \[t7-t8\]区间，至t7 时刻，MOSFET 的DS 电压升至与Vgs 相同的电压，Millier 电容迅速减小，GS 电容开始继续放电，此时DS 电容上的电压迅速上升，DS 电流则迅速下降；
    
-   \[t8-t9\]区间，至t8 时刻，GS 电容已放电至Vth，MOSFET 完全关断；该区间内GS 电容继续放电直至零。
    

  

**因二极管反向恢复引起的MOSFET开关波形**  

  

  

（1）：实验电路  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZIsUPPULeaVs9HFSXQicqqR4ibUodkhqwcOIcMibaMwAUkUJhEbO0OiavIQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
（2）：因二极管反向恢复引起的MOSFET 开关波形：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZzXh0tMTt1NcCohpS8ogKj3Kenoy69VpKP4AV2Om3tGbL9V4MaFGmaQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**功率MOSFET的功率损耗公式**

  

（1）：导通损耗：  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZBmfNSCBj62GdkCAHibE6VHTQqpAH2EdOwXJVvws6v0xXSVAB1icibMvjg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
该公式对控制整流和同步整流均适用

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZ4khLJcHhaKicTbzibg1uX9BeadhJTaT1niaXQrNJqvgKxicafc4Z3cCAaA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
该公式在体二极管导通时适用

（2）：容性开通和感性关断损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZ3XYePtWotiarMUI05HtykjCcLuNynDK4eqiaR92V7sqRkxicvmOTGictwA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZVUb9oUokPMT28XY0kvrqTiaZGmo4d9Dy3SYLSgvRvIX1w8DNpjaq5zA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
为MOSFET 器件与二极管回路中的所有分布电感只和。一般也可将这个损耗看成器件的感性关断损耗。

  

（3）：开关损耗：

开通损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZUne7fFX7icwUFYTnY49Yo1PibybngRwT7t7KPTPE8M43qxLSodBw93Xg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
考虑二极管反向恢复后：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZm5u6cIXOUMlt20LGlXpRWlyEnt0ICtwDzWZO1zyPRglsfIiccJdLA9A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
关断损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZGmxYcwPSUnUWxTS2x35N2lBicoEgg4bd9SWZDJReSOr3yqRFdTNaCwA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
驱动损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZByOThFlhoJ6oBzWNEk1wg22dx35KZJDSWzyRwRGEpCtiabP0YBGKPHA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**功率MOSFET的选择原则与步骤**

  

  

（1）：选择原则

（A）：根据电源规格，合理选择MOSFET 器件（见下表）：

（B）：选择时，如工作电流较大，则在相同的器件额定参数下，

\-- 应尽可能选择正向导通电阻小的 MOSFET；

\-- 应尽可能选择结电容小的 MOSFET。

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZpvEhZ8hYnPDrRjoXWoERWML6lfoccxqo6p3VnZX0pficqrm53KUSsnA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
（2）：选择步骤  

  

（A）：根据电源规格，计算所选变换器中MOSFET 的稳态参数：

-   正向阻断电压最大值；
    
-   最大的正向电流有效值；
    

（B）：从器件商的DATASHEET 中选择合适的MOSFET，可多选一些以便实验时比较；

（C）：从所选的MOSFET 的其它参数，如正向通态电阻，结电容等等，估算其工作时的最大损耗，与其它元器件的损耗一起，估算变换器的效率；

（D）：由实验选择最终的MOSFET 器件。

  

**理想开关的基本要求**

  

（1）：符号

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZibQPg6t4KLo0mZqoX9F30lkQ1WSH756bJgeRlsKfYqLae5p024jqnSw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
（2）：要求

（A）：稳态要求：

合上 K 后

-   开关两端的电压为零；
    
-   开关中的电流有外部电路决定；
    
-   开关电流的方向可正可负；
    
-   开关电流的容量无限。
    

断开 K 后

-   开关两端承受的电压可正可负；
    
-   开关中的电流为零；
    
-   开关两端的电压有外部电路决定；
    
-   开关两端承受的电压容量无限。
    

（B）：动态要求：

K 的开通

-   控制开通的信号功率为零；
    
-   开通过程的时间为零。
    

K 的关断

-   控制关断的信号功率为零；
    
-   关断过程的时间为零。
    

（3）：波形

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZZozTW6PsFd5CO83kiawDlCYjmSFsRtAjUMql9yaZ1PNfa6lpRVnJpBg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  

其中：H：控制高电平；L：控制低电平

-   Ion 可正可负，其值有外部电路定；
    
-   Voff 可正可负，其值有外部电路定。
    

  

**用电子开关实现理想开关的限制**

  

（1）：电子开关的电压和电流方向有限制：

（2）：电子开关的稳态开关特性有限制：

-   导通时有电压降；（正向压降，通态电阻等）
    
-   截止时有漏电流；
    
-   最大的通态电流有限制；
    
-   最大的阻断电压有限制；
    
-   控制信号有功率要求，等等。
    

（3）：电子开关的动态开关特性有限制：

-   开通有一个过程，其长短与控制信号及器件内部结构有关；
    
-   关断有一个过程，其长短与控制信号及器件内部结构有关；
    
-   最高开关频率有限制。
    

  

目前作为开关的电子器件非常多。在开关电源中，用得最多的是二极管、MOSFET、IGBT 等，以及它们的组合。

  

**电子开关的四种结构**

  

  

  

（1）：单象限开关  

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZKexA4ibbHcUPIicNLADzaTH0a0nPmYT73vNoGib2ZF7m48GJrrelj10dQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
（2）：电流双向（双象限）开关

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZ6mm0Eu7OzVwZI25ZV1RfQn9gzrl6iaRVzjLVQvFNScg77a5RnZ4ssibw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
（3）：电压双向（双象限）开关

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZMyCSO6pcOzF2iapMTOUhD3M9t5VibULmJQesQ3IaMb95zicicaGa7IK4pA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)  
（4）：四单象限开关

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZCIawPMvteabQFBjSWiaOK4NVUYmdeMTSCFpAy9p2ic7kg9k4RJ8eAjNQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**开关器件的分类**

  

（1）：按制作材料分类：

-   （Si）功率器件；
    
-   （Ga）功率器件；
    
-   （GaAs）功率器件；
    
-   （SiC）功率器件；
    
-   （GaN）功率器件；--- 下一代
    
-   （Diamond）功率器件；--- 再下一代
    

（2）：按是否可控分类：

-   完全不控器件：如二极管器件；
    
-   可控制开通，但不能控制关断：如普通可控硅器件；
    
-   全控开关器件
    
-   电压型控制器件：如MOSFET，IGBT，IGT/COMFET ，SIT 等；
    
-   电流型控制期间：如GTR，GTO 等
    

（3）：按工作频率分类：

-   低频功率器件：如可控硅，普通二极管等；
    
-   中频功率器件：如GTR，IGBT，IGT/COMFET；
    
-   高频功率器件：如MOSFET，快恢复二极管，萧特基二极管，SIT 等
    

（4）：按额定可实现的最大容量分类：

-   小功率器件：如MOSFET
    
-   中功率器件：如IGBT
    
-   大功率器件：如GTO
    

（5）：按导电载波的粒子分类：

-   多子器件：如MOSFET，萧特基，SIT,JFET 等
    
-   少子器件：如IGBT，GTR，GTO，快恢复，等
    

  

**不同开关器件的比较**

  

（1）：几种可关断器件的功率处理能力比较

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZ19Wgr7pTcdVZRlg4FmaHMtm2DXz7UbOaWKsq2k33gPDwjMqPt7lzAw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

（2）：几种可关断器件的工作特性比较

![](https://mmbiz.qpic.cn/mmbiz_png/3nJjpKuusmd9LYOLz7qEibRm8yQ0rXIJZoVN3W0uODtn1ibOA1QudBxvbmsge7atV5BZkHZIGj0Zl2upj5ePGomg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

上面的数据会随器件的发展而不断变化，仅供参考。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。