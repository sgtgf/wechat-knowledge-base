# 【硬件基础】MOS管H桥驱动电路知识点

原创 电路一点通 2025-05-27 11:50 广东

> 原文地址: [https://mp.weixin.qq.com/s/a1wPX9nQe0gGvBW0E91XKg](https://mp.weixin.qq.com/s/a1wPX9nQe0gGvBW0E91XKg)

> 介绍了电机控制中的单极模式和双极模式，包括各自的优势与缺点，以及PWM信号的应用。特别关注了如何通过自举电路解决上桥臂MOS管驱动的问题，以及STM32在H桥电路设计中的角色

  

-   [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_硬件基础_MOS管H桥驱动电路知识点_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

### 1、单极模式

单极模式：电机电枢驱动电压极性是单一的。

-   优点：启动快，能加速，刹车，能耗制动，能量反馈，调速性能不如双极模式好，但是相差不多，电机特性也比较好。在负载超速时也能提供反向力矩。
    
-   缺点：刹车时，不能减速到0，速度接近0速度时没有制动力。不能突然倒转。动态性能不好，调速静差稍大。
    

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_硬件基础_MOS管H桥驱动电路知识点_images\img_001_51fe200c6499.png)

PWM和PWMN是互补的PWM信号，一般用高级控制定时器的通道和互补通道控制。

在PWM为高电平时：MOS管1和4都导通，MOS管2和3都截止，电流从电源正极，经过MOS管1，从左到右流过电机、然后经过MOS管4流入电源负极。

在PWM为低电平时：MOS管2和4都导通，MOS管1和3都截止，根据楞次定律，存在自感电动势，电流还是从左到右流过电机，经过MOS管4和MOS管2形成电流回路。

### 2、双极模式

双极模式：电枢电压极性是正负交替的。

-   优点：能正反转运行，启动快，调速精度高，动态性能好，调速静差小，调速范围大，能加速，减速，刹车，倒转，能在负载超过设定速度时，提供反向力矩，能克服电机轴承的静态摩擦力，产生非常低的转速。
    
-   缺点：控制电路复杂。在工作期间，4个MOS管都处于工作状态，功率损耗大，电机容易发烫。
    

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_硬件基础_MOS管H桥驱动电路知识点_images\img_002_0ceb9e618934.png)

PWM1和PWM1N、PWM2和PWM2N是PWM互补通道。

使用高级控制定时器通道和互补通道控制双极模式中，PWM1和PWM2周期相同，占空比相同，极性相反，使得对角线上的两个MOS管同时导通，同时关断。

**PS不懂**：这个又是怎么实现反转的？？PWM1高电平是正转，低电平就反转了？？

### 3、高低端MOS管导通条件

使用栅极驱动芯片，通过自举电容，利用电容两端电压不能突变的特性，使VB和VS的的电压差维持在一个VCC值，而VB的值相当于HO高电平时的电压，这样就使高端MOS管Vgs的电压差也是一个VCC值，这样高端MOS管就能导通了。

低端MOS管，根据栅极驱动芯片的引脚特性，LO高电平时的电压就是VCC的电压，低端源极接地，Vgs的电压差也是一个VCC值，这样低端MOS管就能导通了。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_硬件基础_MOS管H桥驱动电路知识点_images\img_003_7c7c6c91e54d.png)

### 4、H桥电路设计

假设图中N-MOS管的Vgs阈值为3V，VCC=24V。

对于下桥臂Q2MOS管可以使用STM32芯片引脚直接控制，因为STM32的PWM高电平是3.3V足够使N-MOS管导通。

上桥臂Q1 MOS管无法直接使用STM32芯片引脚使其导通，因为假设Q1导通，漏极D和源极S电压几乎相等(Rds非常小),即VA=VCC=24V，这样要求Vg>=VA+Vgs=27V。简单来说就是，Vg大于27V，Q1导通，小于27V，Q1截止。所以就需要一个这样的电路：把STM32的3.3VPWM信号升压到27V电压上，这个电路可以用**自举电路**来实现。

上桥臂驱动：自举电路

下桥臂驱动：电平控制

实际电路设计中，一般把Vgs设置为10~20V，因为这样保证MOS管完全导通。

还有一个问题当MOS管完全导通时，MOS管的内阻Rds一般来说就比较小在几毫欧，就相当于一根导线。但是当MOS管不完全导通时，也就是说Vgs小于开启电压时，MOS就处于不完全导通状态，那么MOS管的内阻就比较大，而电机驱动板的电流也比较大。那么MOS的发热就会非常严重，很可能会烧坏芯片。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_硬件基础_MOS管H桥驱动电路知识点_images\img_004_0236a9a0b4fc.png)

### 5、自举电路

芯片在Vcc和VB脚之间接了一个二极管，在VB和VS之间接了一个电容。这便构成了一个自举电路。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_硬件基础_MOS管H桥驱动电路知识点_images\img_005_e5b9a5ed8dc7.png)

作用：由于负载(电机)相对于上桥臂和下桥臂MOS位置不同，而MOS的开启条件为Vgs>Vth，这便会导致想要上桥臂MOS导通，则其栅极对地所需的电压较大。

因为下桥臂MOS源极接地，想要导通只需要令其栅极电压大于开启电压Vth。

而上桥臂MOS源极接到负载，如果上桥臂MOS导通，那么其源极电压将上升到H桥驱动电压也就是MOS的供电电压，此时如果栅极对地电压不变，那么Vgs可能小于Vth，又关断。

因此想要使上桥臂MOS导通，必须想办法使其Vgs始终大于或一段时间内大于Vth(即栅极电压保持大于MOS管的电源电压+Vth)。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[4-20mA 电流转0-3.3/5V/10V/15V电压电路原理图逐步解析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546831&idx=1&sn=46ee74a2e9883f23c17c3a24143756ff&scene=21#wechat_redirect)**
    
-   **[嵌入式-数模电-MOS管经典知识汇总](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546818&idx=1&sn=e496a599445877494ad355b8aede0432&scene=21#wechat_redirect)**
    
-   **[4~20mA 恒流源电路分析及仿真](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546818&idx=3&sn=be5bd90e9515f4c208284df5821013aa&scene=21#wechat_redirect)**
    
-   **[常见电平转换电路设计参考（工作原理、优缺点、注意要点）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546655&idx=1&sn=3399ca199363ba4ccfc54f0abbf38b71&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\_硬件基础_MOS管H桥驱动电路知识点_images\img_006_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️