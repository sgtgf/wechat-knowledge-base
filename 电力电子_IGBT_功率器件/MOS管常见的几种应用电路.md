# MOS管常见的几种应用电路

原创 硬件笔记本 2023-07-17 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/7W005-P5NhTxfE8Vw4-G3g](https://mp.weixin.qq.com/s/7W005-P5NhTxfE8Vw4-G3g)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**一、开关和放大器**

  

MOS管最常见的电路可能就是开关和放大器。

  

  

# 1\. 开关电路

  

![](MOS管常见的几种应用电路_images/img_002_309587177b66.png)

G极作为普通开关控制MOS管。

  

  

# 2\. 放大电路

  

![](MOS管常见的几种应用电路_images/img_003_3f32ecc5a508.png)

让MOS管工作在放大区，具体仿真结果可在上节文章看到。

  

  

# **二、时序电路中作为反相器使用**

  

下图示例电路中，芯片1正常工作时，PG端口高电平。

  
如果芯片1、芯片2有时序要求，在芯片1正常工作后，使能芯片2。可以看到芯片2的使能端初始连接VCC为高电平，当芯片1输出高电平后，(关注公众号：硬件笔记本）MOS管导通，芯片2的使能端被拉低为低电平，芯片2开始正常工作。

  

![](MOS管常见的几种应用电路_images/img_004_eef4469982c5.png)

这时MOS管起到的就是反相的作用。

  

  

  

# **三、双向电平转换电路**

  

# 1\. 原理图

  

下面是一个3.3V-5V信号通讯中电平转换电路。

  

![](MOS管常见的几种应用电路_images/img_005_72478f113aff.png)

# 2\. 工作状态分析

  

假设：左边接芯片信号 3.3V，右侧芯片信号5V。  
电路中接入2个NMOS管。  
这里要注意的是，I2C输出状态有低电平、高阻两种状态。

  

# （1）分析SDA，信号从左向右

  

-   当SDA低电平， D1 的 GS 压差73.3V可以导通，VGA\_SDA也是低电平 。
    
-   当SDA高阻抗状态，D1的S引脚有R2上拉到3.3V，MOS管GS截止。由于VGA\_SDA由R5上拉到5伏，这时VGA\_SDA就是5V。
    

  

# （2）分析SDA，信号从右向左

  

-   当VGA\_SDA低电平，由于D1中有体二极管的存在，S初始被R2上拉，当D极是0的时候，S极会被钳在导通电压约0.2V左右，(关注公众号：硬件笔记本）最终I2C\_SDA为低电平；
    
-   当VGA\_SDA高电平，D1的D极高电平 ，而S被R2上拉，这时MOS管不会导通，所以I2C\_SDA输出高电平。  
    SCL信号类似原理。
    
      
    

  

# **四、线或功能**

  

1\. 原理图

  

![](MOS管常见的几种应用电路_images/img_006_b4378fabaf79.png)

# 2\. 工作状态分析

  

上面电路实现的效果是：

  

-   IC1和IC2都输出低电平时，LED熄灭；
    
-   其它情况下，LED都会点亮。
    

  

MOS管在这里实现的仍是开关的功能，但是避免IC1和IC2的端口直接相连造成信息干扰，同时芯片控制端电压比较低，可以驱动较大的负载。  

  

由于IC1和IC2任何一个输出高电平时，都会导通一个MOS管，从而让LED可以点亮。  

  

  

# **五、开关电路**

  

常见的简单电源切换电路如图1所示，但这个电路应用条件是有限制和缺陷的，比如电池电压VBAT不能大于外部电压VIN，常见的电池电压为3.7~4.2V，外部电压为USB的5V时没有问题，但是电池电压为7.2V就不能使用了；(关注公众号：硬件笔记本）肖特基二极管的压降虽然已经较小，但是依旧有零点几伏左右，损失的功耗较多，5V外部电压进来就只变成4V多了；外部电压供电时，会通过P型MOS管的体二极管给电池进行非正规充电，当然这点可以通过将Q4 MOS管左右翻转一下解决。

![](MOS管常见的几种应用电路_images/img_007_fc2ce687edc0.png)

  

图1

  

为了解决上述这些缺陷，项目中有时会使用较为复杂的改进电路，如图2所示。其工作原理简介如下：使用外部电源VIN时，三极管Q7导通，三极管Q6截止，P型MOSFET Q3由于栅极和源极通过电阻R4都接了电池电压VBAT，两者相等，Q3截止，电池电压VBAT无法达到输出端VCC；外部电源VIN接通时，VIN首先通过Q1 MOSFET的寄生二极管到达输出端VCC，同时Q2三极管导通，使Q1 MOSFET的栅极拉低到GND为低电平，所以Q1的栅源极电压小于0且达到导通阈值电平，Q1导通，然后Q1体内的寄生二极管就截止了，(关注公众号：硬件笔记本）外部电源VIN通过Q1达到输出端VCC。此时，Q5 MOSFET的栅源极电压接近相等，Q5和体二极管均截止，防止了外部电源VIN对电池的非正规充电。

当没有外部电源VIN时，三极管Q7截止，三极管Q6导通，Q3 MOSFET的栅极电压为低电平，栅源电压小于0且达到导通阈值电平，Q3导通，然后通过Q5的寄生二极管达到输出端VCC，而Q5的栅极此时为低电平，因此栅源电压也小于0，Q5导通，其寄生二极管截止，电池电压到达输出端VCC。

![](MOS管常见的几种应用电路_images/img_008_43b87c0e7aa2.png)

图2

  

由于电源主通路使用了三个MOSFET，MOSFET在完全导通后其压降远远小于肖特基二极管（只有零点零几伏），因此其导通损耗很低；而三个三极管虽然额外增加了一些功率损耗，但是由于三极管工作在完全饱和状态，在饱和导通压降一定的条件下，导通电流可以通过电阻值设置的相对较小，因此功耗也不会太高。同时该电路无论电池电压是否大于外部电源，都可以使用，通用性相对较为广泛。

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。