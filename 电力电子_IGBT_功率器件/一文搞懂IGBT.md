# 一文搞懂IGBT

原创 硬件笔记本 2023-05-01 18:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/V\_cX66\_hl\_8pksjCb3reKQ](https://mp.weixin.qq.com/s/V_cX66_hl_8pksjCb3reKQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**0****1**

  

**IGBT是什么？**

  

IGBT，绝缘栅双极型晶体管，是由（BJT）双极型三极管和绝缘栅型场效应管（MOS）组成的复合全控型电压驱动式功率半导体器件, 兼有（MOSFET）金氧半场效晶体管的高输入阻抗和电力晶体管（GTR）的低导通压降两方面的优点。

  

GTR饱和压降低，载流密度大，但驱动电流较大；（因为Vbe=0.7V,而Ic可以很大（跟PN结材料和厚度有关））MOSFET驱动功率很小，开关速度快，但导通压降大，载流密度小。（因为MOS管有Rds，如果Ids比较大，就会导致Vds很大）

  

IGBT综合了以上两种器件的优点，驱动功率小而饱和压降低。非常适合应用于直流电压为600V及以上的变流系统如交流电机、变频器、开关电源、照明电路、牵引传动等领域。  

  

IGBT最主要的作用就是把高压直流变为交流，以及变频（所以用在电动车上比较多）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmCcPclWyTGSf1gKudLMdMIZiapIj1ZeibeKPMm424MZ5WicsPsjMzFpNcYrTk57EiaXiab3iaic1aRCMibA/640?wx_fmt=png)

  

  

**0****2**

  

**IGBT的工作原理**

  

忽略复杂的半导体物理推导过程，下面是简化后的工作原理。

  

IGBT有N沟道型和P沟道型两种，主流的N沟道IGBT的电路图符号及其等效电路如下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmCcPclWyTGSf1gKudLMdMSIr5GrsVjkA33icibRyzzWCqg3dt0sBCPXgOGbn6hGQwOerMF7mPjiblA/640?wx_fmt=png)

**所以整个过程就很简单：**

  

当栅极G为高电平时，NMOS导通，所以PNP的CE也导通，电流从CE流过。

当栅极G为低电平时，NMOS截止，所以PNP的CE截止，没有电流流过。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmCcPclWyTGSf1gKudLMdMsn0HBkKtwaBSziaPNGJZJGTiakiayAAWta8mpfHRL70wVDpkApSGniciaow/640?wx_fmt=png)

IGBT与MOSFET不同，内部没有寄生的反向二极管，因此在实际使用中(感性负载)需要搭配适当的快恢复二极管。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmCcPclWyTGSf1gKudLMdMpibYTIGJWTnRNCjrEM27qzrGJYo1CQ53594QIKiax5SerNPCSPOvUDxw/640?wx_fmt=png)

  

  

**0****3**

  

**IGBT的优缺点**

  

  

**优点：**

1、具有更高的电压和电流处理能力。

2、极高的输入阻抗。

3、可以使用非常低的电压切换非常高的电流。

4、电压控制装置，即它没有输入电流和低输入损耗。

5、栅极驱动电路简单且便宜，降低了栅极驱动的要求

6、通过施加正电压可以很容易地打开它，通过施加零电压或稍微负电压可以很容易地关闭它。

7、具有非常低的导通电阻。

8、具有高电流密度，使其能够具有更小的芯片尺寸。

9、具有比 BJT 和 MOS 管更高的功率增益。

10、具有比 BJT 更高的开关速度。

11、可以使用低控制电压切换高电流电平。

12、双极性质，增强了传导性。

13、安全可靠。

  

  

**缺点：**

1、开关速度低于 MOS管。

2、因为是单向的，在没有附加电路的情况下无法处理AC波形。

3、不能阻挡更高的反向电压。

4、比 BJT 和 MOS管价格更高。

5、类似于晶闸管的P-N-P-N结构，因此它存在锁存问题。

  

  

**0****4**

  

**IGBT的主要参数**

  

**1、**集电极-发射极额定电压UCES是IGBT在截止状态下集电极与发射极之间能够承受的最大电压，一般UCES小于或等于器件的雪崩击穿电压。

  

**2、**栅极-发射极额定电压UGE是IGBT栅极与发射极之间允许施加的最大电压，通常为20V。栅极的电压信号控制IGBT的导通和关断，其电压不可超过UGE。

  

**3、**集电极额定电流IC是IGBT在饱和导通状态下，允许持续通过的最大电流。

  

**4、**集电极-发射极饱和电压UCE是IGBT在饱和导通状态下，集电极与发射极之间的电压降。该值越小，则管子的功率损耗越小。

  

**5、**开关频率在IGBT的使用说明书中，开关频率是以开通时间tON、下降时间t1和关断时间tOFF给出的，根据这些参数可估算出IGBT的开关频率，一般可达30～40kHz。在变频器中，实际使用的载波频率大多在15kHz以下。

  

  

**0****5**

  

**IGBT的静态特性曲线**

  

IGBT静态特性曲线包括转移特性曲线和输出特性曲线：其中左侧用于表示IC-VGE关系的曲线叫做转移特性曲线，右侧表示IC-VCE关系的曲线叫做输出特性曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/iaLLibsB5S6FNGJZ1Tiadu02BzhsQ8X5u8jZAnuUQ71kqLzKia5FdLzpaLR39vHQwuQetzzj2py6zMc0QGSeNfPqIg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**1、转移特性曲线**

IGBT的转移特性曲线是指输出集电极电流IC与栅极-发射极电压VGE之间的关系曲线。

  

为了便于理解，这里我们可通过分析MOSFET来理解IGBT的转移特性。

  

当VGS=0V时，源极S和漏极D之间相当于存在两个背靠背的pn结，因此不论漏极-源极电压VDS之间加多大或什么极性的电压，总有一个pn结处于反偏状态，漏、源极间没有导电沟道，器件无法导通，漏极电流ID为N+PN+管的漏电流，接近于0。

  

当0<vgs<vgs（th）时< span="">，栅极电压增加，栅极G和衬底p间的绝缘层中产生电场，使得少量电子聚集在栅氧下表面，但由于数量有限，沟道电阻仍然很大，无法形成有效沟道，漏极电流ID仍然约为0。

  

当VGS≥VGS（th）时，栅极G和衬底p间电场增强，可吸引更多的电子，使得衬底P区反型，沟道形成，漏极和源极之间电阻大大降低。此时，如果漏源之间施加一偏置电压，MOSFET会进入导通状态。在大部分漏极电流范围内ID与VGS成线性关系，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgmCcPclWyTGSf1gKudLMdMqVia0LmyKgVPlgcfcAEXrZLwZUHA3O6dPgdxKz8icxLNkJJ1tB5gIt5g/640?wx_fmt=jpeg)

这里MOSFET的栅源电压VGS类似于IGBT的栅射电压VGE，漏极电流ID类似于IGBT的集电极电流IC。IGBT中，当VGE≥VGE（th）时，IGBT表面形成沟道，器件导通。

  

**2、输出特性曲线**

IGBT的输出特性通常表示的是以栅极-发射极电压VGE为参变量时，漏极电流IC和集电极-发射极电压VCE之间的关系曲线。

  

由于IGBT可等效理解为MOSFET和PNP的复合结构，它的输出特性曲线与MOSFET强相关，因此这里我们依旧以MOSFET为例来讲解其输出特性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgmCcPclWyTGSf1gKudLMdMa5qnY5aOOm5xfk0b5aac0w4ZNglxHnNh0IpMdicKAEnZayo1Y5GIJTw/640?wx_fmt=jpeg)

其中当VDS>0且较小时，ID随着VDS的增大而增大，这部分区域在MOSFET中称为可变电阻区，在IGBT中称为非饱和区；

  

当VDS继续增大，ID-VDS的斜率逐渐减小为0时，该部分区域在MOSFET中称为恒流区，在IGBT中称为饱和区；

  

当VDS增加到雪崩击穿时，该区域在MOSFET和IGBT中都称为击穿区。

  

IGBT的栅极-发射极电压VGE类似于MOSFET的栅极-源极电压VGS，集电极电流IC类似于漏极电流ID，集电极-发射极电压VCE类似于漏源电压VDS。

  

MOSFET与IGBT在线性区之间存在差异（红框所标位置）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgmCcPclWyTGSf1gKudLMdMkAgCWDM1p7lVRcerx3iaSuljKgcNr8RgtYtyyk4OMawnMIrHCGM7qbw/640?wx_fmt=jpeg)

这主要是由于IGBT在导通初期，发射极P+/N-结需要约为0.7V的电压降使得该结从零偏转变为正偏所导致的。

  

  

**0****6**

  

**IGBT如何选型**

  

**1、**IGBT额定电压的选择三相380V输入电压经过整流和滤波后，直流母线电压的最大值：在开关工作的条件下，IGBT的额定电压一般要求高于直流母线电压的两倍，根据IGBT规格的电压等级，选择1200V电压等级的IGBT。

  

**2、**IGBT额定电流的选择以30kW变频器为例，负载电流约为79A，由于负载电气启动或加速时，电流过载，一般要求1分钟的时间内，承受1.5倍的过流，择最大负载电流约为119A ，建议选择150A电流等级的IGBT。

  

**3、**IGBT开关参数的选择变频器的开关频率一般小于10kHz，而在实际工作的过程中，IGBT的通态损耗所占比重比较大，建议选择低通态型IGBT。

  

**4、影响IGBT可靠性因素：**

（1）栅电压IGBT工作时，必须有正向栅电压，常用的栅驱动电压值为15～187，最高用到20V， 而棚电压与栅极电阻Rg有很大关系，在设计IGBT驱动电路时， 参考IGBT Datasheet中的额定Rg值，设计合适驱动参数，保证合理正向栅电压。因为IGBT的工作状态与正向棚电压有很大关系，正向栅电压越高，开通损耗越小，正向压降也咯小。

  

在桥式电路和大功率应用情况下，为了避免干扰，在IGBT关断时，栅极加负电压，一般在-5- 15V，保证IGBT的关断，避免Miller效应影响。

  

（2）Miller效应为了降低Miller效应的影响，在IGBT栅驱动电路中采用改进措施：

①开通和关断采用不同栅电阻Rg,ON和Rg,off，确保IGBT的有效开通和关断;

②栅源间加电容c，对Miller效应产生的电压进行能量泄放;

③关断时加负栅压。在实际设计中，采用三者合理组合，对改进Mille r效应的效果更佳。

  

  

**0****7**

  

**IGBT的应用**

  

IGBT最主要的作用就是高压直流转交流，以及变频；

  

**1、新能源汽车**

IGBT是电动汽车及充电桩等设备的核心技术部件，在电动汽车中发挥着至关重要的作用，主要作用于电动车汽车的充电桩、电动控制系统以及车载空调控制系统。  
（1）电动控制系统  
作用于大功率直流/交流(DC/AC)逆变后汽车电机的驱动；  
（2）车载空调控制系统  
作用于小功率直流/交流(DC/AC)的逆变；  
（3）充电桩  
智能充电桩中被作为开关元件使用；

  

**2、智能电网**

智能电网的发电端、输电端、变电端及用电端均需使用IGBT。  
（1）发电端  
风力发电、光伏发电中的整流器和逆变器都需使用IGBT。  
（2）输电端  
特高压直流输电中FACTS柔性输电技术需大量使用IGBT。  
（3）变电端  
IGBT是电力电子变压器的关键器件。  
（4）用电端  
家用白电、 微波炉、LED照明驱动等都对IGBT有大量的需求。

  

**3、轨道交通**

众所周知，交流传动技术是现代轨道交通的核心技术之一，在交流传动系统中牵引变流器是关键部件，而IGBT又是牵引变流器最核心的器件之一，可以说该器件已成为轨道交通车辆牵引变流器和各种辅助变流器的主流电力电子器件。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。