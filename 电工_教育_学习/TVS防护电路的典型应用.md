# TVS防护电路的典型应用

原创 硬件笔记本 2023-07-27 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/ab54gDp9rlqOovPVd\_-jWg](https://mp.weixin.qq.com/s/ab54gDp9rlqOovPVd_-jWg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**TVS瞬态电压抑制二极管原理应用特性**

瞬态抑制二极管(TVS)又叫钳位型二极管，是目前国际上普遍使用的一种高效能电路保护器件，它的外型与普通二极管相同，但却能吸收高达数千瓦的浪涌功率。

  

它的主要特点是在反向应用条件下，当承受一个高能量的大脉冲时，其工作阻抗立即降至极低的导通值，从而允许大电流通过，同时把电压钳制在预定水平，其响应时间仅为10-12毫秒，因此可有效地保护电子线路中的精密元器件。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8V0ZtbE39NPB5PaePnTUxOZUPiagWIHZEWJjJYWYCK3HiaDjwXBVVZ95SQ/640?wx_fmt=png)

  

TVS允许的正向浪涌电流在TA＝250C，T＝10ms条件下，可达50～200A。双向TVS可在正反两个方向吸收瞬时大脉冲功率，并把电压钳制到预定水平， 双向TVS适用于交流电路，单向TVS一般用于直流电路。

  

**可用于防雷击、防过电压、抗干扰、吸收浪涌功率等，是一种理想的保护器件**。耐受能力用瓦特(W)表示。 

  

TVS（Transient Voltage Suppression）是一种限压保护器件，作用与压敏电阻很类似。也是利用器件的非线性特性将过电压钳位到一个较低的电压值实现对后级电路的保护。

  

TVS管的主要参数有：反向击穿电压、最大钳位电压、瞬间功率、结电容、响应时间等。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8VDrElicKSgLpmHwQWzmALNTfyXynSb91WIpYujsicINoWQdS0AZvicQbXA/640?wx_fmt=png)

  

TVS的响应时间可以达到ps级，是限压型浪涌保护器件中最快的。用于电子电路的过电压保护时其响应速度都可满足要求。

  

TVS管的结电容根据制造工艺的不同，大体可分为两种类型，高结电容型TVS一般在几百～几千pF的数量级，低结电容型TVS的结电容一般在几pF～几十pF的数量级。

  

一般分立式TVS的结电容都较高，表贴式TVS管中两种类型都有。在高频信号线路的保护中，应主要选用低结电容的TVS管。

  

TVS管的非线性特性比压敏电阻好，当通过TVS管的过电流增大时，TVS管的钳位电压上升速度比压敏电阻慢，因此可以获得比压敏电阻更理想的残压输出。在很多需要精细保护的电子电路中，应用TVS管是比较好的选择。

  

TVS管的通流容量在限压型浪涌保护器中是最小的，一般用于最末级的精细保护，因其通流量小，一般不用于交流电源线路的保护，直流电源的防雷电路使用TVS管时，一般还需要与压敏电阻等通流容量大的器件配合使用。TVS管便于集成，很适合在单板上使用。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8VIyWVKZnQAMzj8wy6ZXMDpQCHIwsXo7iaFM9DIXPnptLQ5T294UYZtFA/640?wx_fmt=png)

  

TVS具有的另一个优点是可灵活选用单向或双向保护器件，在单极性的信号电路和直流电源电路中，选用单向TVS管，可以获得比较低的残压。

  

TVS的反向击穿电压、通流容量是电路设计时应重点考虑的。在直流回路中，应当有：min(UBR)≥(1.3～1.6)Umax，式中UBR为直流TVS的反向击穿电压，Umax是直流回路中的电压峰值。

  

TVS管主要可用于直流电源、信号线路、天馈线路的防雷保护。

TVS管的失效模式主要是短路。但当通过的过电流太大时，也可能造成TVS管被炸裂而开路。TVS管的使用寿命相对较长。

  
**TVS二极管的应用** 目前已广泛应用于计算机系统、通讯设备、交/直流电源、汽车、电子镇流器、家用电器、仪器仪表（电度表）、RS232/422/423/485、 I/O、LAN、ISDN 、ADSL、USB、MP3、PDAS、GPS、CDMA、GSM、数字照相机的保护、共模/差模保护、RF耦合/IC驱动接收保护、电机电磁波干扰抑制、声频/视频输入、传感器/变速器、工控回路、继电器、接触器噪音的抑制等各个领域。  TVS器件的主要电参数 

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8VciaSJTr0micYcokBfQpCH7VUDYSAlsP1zowO2fdTO9oHbdFnXom2SSjw/640?wx_fmt=png)

  

（1）击穿电压V(BR)   
器件在发生击穿的区域内，在规定的试验电流I(BR)下，测得器件两端的电压称为击穿电压，在此区域内，二极管成为低阻抗的通路。   
  
（2）最大反向脉冲峰值电流IPP   
在反向工作时，在规定的脉冲条件下，器件允许通过的最大脉冲峰值电流。IPP与最大钳位电压VC(MAX)的乘积，就是瞬态脉冲功率的最大值。   
  
使用时应正确选取TVS，使额定瞬态脉冲功率PPR大于被保护器件或线路可能出现的最大瞬态浪涌功率。 **TVS二极管的分类** TVS器件可以按极性分为单极性和双极性两种，按用途可分为各种电路都适用的通用型器件和特殊电路适用的专用型器件。如：各种交流电压保护器、 4~200mA电流环保器、数据线保护器、同轴电缆保护器、电话机保护器等。若按封装及内部结构可分为：轴向引线二极管、双列直插TVS阵列（适用多线保护）、贴片式、组件式和大功率模块式等。 

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8VibEpAE4BuzhuIgia7rRsORhJe90cQP8TgIstgMgVDs4OyE46Zxfm1iacA/640?wx_fmt=png)

  

**TVS二极管的特点** （1）将TVS二极管加在信号及电源线上，能防止微处理器或单片机因瞬间的肪冲，如静电放电效应、交流电源之浪涌及开关电源的噪音所导致的失灵。   
（2）静电放电效应能释放超过10000V、60A以上的脉冲，并能持续10ms；而一般的TTL器件，遇到超过30ms的10V脉冲时，便会导至损坏。利用TVS二极管，可有效吸收会造成器件损坏的脉冲，并能消除由总线之间开关所引起的干扰（Crosstalk）。   
（3）将TVS二极管放置在信号线及接地间，能避免数据及控制总线受到不必要的噪音影响。 **TVS的选用技巧**（1）确定被保护电路的最大直流或连续工作电压、电路的额定标准电压和“高端”容限。 

（2）TVS额定反向关断VWM应大于或等于被保护电路的最大工作电压。若选用的VWM太低，器件可能进入雪崩或因反向漏电流太大影响电路的正常工作。串行连接分电压，并行连接分电流。 

（3）TVS的最大钳位电压VC应小于被保护电路的损坏电压。 

（4）在规定的脉冲持续时间内，TVS的最大峰值脉冲功耗PM必须大于被保护电路内可能出现的峰值脉冲功率。在确定了最大钳位电压后，其峰值脉冲电流应大于瞬态浪涌电流。 

（5）对于数据接口电路的保护，还必须注意选取具有合适电容C的TVS器件。 

（6）根据用途选用TVS的极性及封装结构。交流电路选用双极性TVS较为合理；多线保护选用TVS阵列更为有利。 

（7）温度考虑。瞬态电压抑制器可以在－55℃～+150℃之间工作。如果需要TVS在一个变化的温度工作，由于其反向漏电流ID是随增加而增大；功耗随TVS结温增加而下降，从+25℃～+175℃，大约线性下降50％雨击穿电压VBR随温度的增加按一定的系数增加。因此，必须查阅有关产品资料，考虑温度变化对其特性的影响。   

  

处理瞬时脉冲对元件损害的最好办法是将瞬时电流从感应元件引开。TVS二极管在线路板上与被保护线路并联，当瞬时电压超过电路正常工作电压后，TVS二极管便产生雪崩，提供给瞬时电流一个超低电阻通路，其结果是瞬时电流透过二极管被引开，避开被保护元件，并且在电压恢复正常值之前使被保护回路一直保持截止电压。当瞬时脉冲结束以后，TVS二极管自动回覆高阻状态，整个回路进入正常电压。许多元件在承受多次冲击后，其参数及性能会产生退化，而只要工作在限定范围内，二极管将不会产生损坏或退化。 

  

**从以上过程可以看出，在选择TVS二极管时，必须注意以下几个参数的选择：** 1、最小击穿电压VBR和击穿电流I R 。VBR是TVS最小的击穿电压，在25℃时，低于这个电压TVS是不会产生雪崩的。当TVS流过规定的1mA电流(IR )时，加于TVS两极的电压为其最小击穿电压V BR 。按TVS的VBR与标准值的离散程度，可把VBR分为5％和10％两种。对于5％的VBR来说，V WM =0.85VBR；对于10％的VBR来说，V WM =0.81VBR。为了满足IEC61000-4-2国际标准，TVS二极管必须达到可以处理最小8kV(接触)和15kV(空气)的ESD冲击，部份半导体厂商在自己的产品上使用了更高的抗冲击标准。对于某些有特殊要求的可携设备应用，设计者可以依需要挑选元件。 

2、最大反向漏电流ID和额定反向切断电压VWM。VWM是二极管在正常状态时可承受的电压，此电压应大于或等于被保护电路的正常工作电压，否则二极管会不断截止回路电压；但它又需要尽量与被保护回路的正常工作电压接近，这样才不会在TVS工作以前使整个回路面对过压威胁。当这个额定反向切断电压VWM加于TVS的两极间时它处于反向切断状态，流过它的电流应小于或等于其最大反向漏电流ID。 

  

3、最大钳位电压VC和最大峰值脉冲电流I PP 。当持续时间为20ms的脉冲峰值电流IPP流过TVS时，在其两端出现的最大峰值电压为VC。V C 、IPP反映了TVS的突波抑制能力。VC与VBR之比称为钳位因子，一般在1.2~1.4之间。VC是二极管在截止状态提供的电压，也就是在ESD冲击状态时通过TVS的电压，它不能大于被保护回路的可承受极限电压，否则元件面临被损伤的危险。 

4、Pppm额定脉冲功率，这是基于最大截止电压和此时的峰值脉冲电流。对于手持设备，一般来说500W的TVS就足够了。最大峰值脉冲功耗PM是TVS能承受的最大峰值脉冲功耗值。在特定的最大钳位电压下，功耗PM越大，其突波电流的承受能力越大。在特定的功耗PM下，钳位电压VC越低，其突波电流的承受能力越大。另外，峰值脉冲功耗还与脉冲波形、持续时间和环境温度有关。而且，TVS所能承受的瞬态脉冲是不重覆的，元件规定的脉冲重覆频率(持续时间与间歇时间之比)为0.01％。如果电路内出现重覆性脉冲，应考虑脉冲功率的累积，有可能损坏TVS。 

  
5、电容器量C。电容器量C是由TVS雪崩结截面决定的，是在特定的1MHz频率下测得的。C的大小与TVS的电流承受能力成正比，C太大将使讯号衰减。因此，C是数据介面电路选用TVS的重要参数。电容器对于数据/讯号频率越高的回路，二极管的电容器对电路的干扰越大，形成噪音或衰减讯号强度，因此需要根据回路的特性来决定所选元件的电容器范围。高频回路一般选择电容器应尽量小(如LCTVS、低电容器TVS，电容器不大于3pF)，而对电容器要求不高的回路电容器选择可高于40pF。

  

  

**TVS二极管特性曲线：**  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8VDsfNYsrMXk5uKniaIqEIGhpuicPR6LLIMibDDErNcXh4LAJkaJ81Rd4GA/640?wx_fmt=png)

  

  

**直流电源防护设计**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8V7l1yn8XXAIRjMCxl8zYgYbHvdwksy6Iksu8qfIiaoNJvLvQ64bFib7EA/640?wx_fmt=png)

**室外网口防护电路**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8VTDqpRZFHl228IkkLpnOiazllTvP5SCwIGqia0UjhPGxWWYQESbuyFcNQ/640?wx_fmt=png)

  

注意，TVS管的寄生电容可能影响信号完整性，可以使用压敏电阻放在变压器抽头，作为防护电路，支持更高速率的网口设计。

  

**232防护电路设计**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8V3EXqicCRGlwTQuCLUTDibykprhuRBh3gz1hnPdwRqY37AXlQRDBP1DyQ/640?wx_fmt=png)

**485防护电路设计**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjj05XMibGcPkx9oMr6BcX8VNibXnxCPmy94KpdAwdqXCvZMicILd3M4TicqoYwia0m4Gg3uS590VzKIRQ/640?wx_fmt=png)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。