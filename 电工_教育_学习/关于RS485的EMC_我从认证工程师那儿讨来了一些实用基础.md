# 关于RS485的EMC，我从认证工程师那儿讨来了一些实用基础

原创 王工 硬件笔记本 2025-09-17 08:11 四川

> 原文地址: [https://mp.weixin.qq.com/s/RjexMEjLMp6-p84qPwvGZw](https://mp.weixin.qq.com/s/RjexMEjLMp6-p84qPwvGZw)

# ![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&tp=wxpic&wxfrom=13&wx_lazy=1 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&tp=wxpic&wxfrom=13&wx_lazy=1 "音符")

#   

大家好，我是王工。

最近向公司的认证工程师讨教了一些RS485关于EMC的一些知识，文章内容可能有点枯燥，但对于做工业控制产品类的朋友来说，这些知识都是很有用的。咱们尽可能得把它讲的让大家不那么容易打瞌睡吧。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaANjctV2YKFSIgYZbB3T1sRTsdeRibPiatJzhRFcByWibKWSH8CuHzGd88SyYXg1woCcYMzY9ibhniafg/640?wx_fmt=png&from=appmsg)

RS485接口，作为咱们工业自动化领域的"老将"，它凭借其出色的长距离传输能力（理论上为1200米）和抗干扰性能，在工厂车间、楼宇控制、能源系统等场景中随处可见。但这位"老将"在实际工作中常常会遇到各种"偷袭"——雷击、电源波动、静电放电等产生的瞬变电压，今天我就带大家认识一下这些"敌人"。

  

011

为什么RS485需要特殊保护？

想象一下，在工厂车间里，RS485总线就像一条贯穿全厂的"信息高速公路"。这条路上跑的不是汽车，而是重要的数据传输。但这条"公路"常常会遭遇各种"自然灾害"：

-   **雷击**：就像突如其来的闪电劈在公路上；
    
-   **静电放电**：好比工作人员身上积累的静电突然释放；
    
-   **设备开关**：类似大型机器突然启动产生的电压波动。
    

这些干扰轻则造成数据错误，重则直接损坏设备。为此，国际电工委员会(IEC)制定了一套EMC抗扰度要求——IEC 61000-4系列，专门考验设备的抗干扰能力，自1996年以来，向欧盟出售或在欧盟范围内出售的所有电子设备都必须达到IEC 61000-4-x规范定义的EMC级别。下面我们就重点看看其中最厉害的三大"杀手"。

-   IEC 61000-4-2 静电放电(ESD)
    
-   IEC 61000-4-4 电快速瞬变(EFT)
    
-   IEC 61000-4-5 电涌耐受性
    

  

021

杀手1：静电放电ESD

### 

你有没有冬天摸门把手被电到的经历？这就是静电放电(ESD)。在工业环境中，这种"小火花"可能高达上千伏特！  

IEC，也就是负责制定电气工程和电子工程领域的一个国际标准，IEC 61000规范定义了一组EMC抗扰度要求，其中IEC 61000-4-2 专门讲了静电放电(ESD)。

ESD是指静电荷在不同电位的实体之间的突然传输，由靠近接触或电场感应引起。其特征是在短时间内产生高电流。测试的主要目的是确定系统在工作过程中对系统外部ESD事件的抗扰度。这里面描述了两种耦合测试方法，即所谓接触放电和空气放电。

  

测试方法：

-   接触放电：直接用"电枪"怼着设备打（最高测试为4级：±8kV）；
    
-   空气放电：隔空放电模拟真实场景（最高测试为4级：±15kV）；
    
-   测试期间，数据端口须经受至少10次正极放电和10次负极放电，脉冲之间需要间隔1秒。
    

下图显示了规范所述的8 kV接触放电电流波形。一些关键波形参数包括小于1 ns的上升时间和大约60 ns的脉冲宽度，这说明脉冲总能量约为数十mJ。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgV4icjSFUZibFf6kDzSEH0H5Av3Fdhz6pzye5mL8QVu1ib1JjFFJMlJAtGJViaRd9hZalg6IR0mLQUXQ/640?wx_fmt=png&from=appmsg)

031

杀手2：电快速瞬变(EFT)

### 

想象一下继电器快速开关时产生的干扰，就像一连串高速射来的箭矢。这就是EFT测试要模拟的场景。

### 

其中IEC 61000-4-4 专门讲了电快速瞬变(EFT)测试，想尝试模拟各种复杂条线下各类型的事件产生的干扰。

电快速瞬变测试要求将数个极端快速的瞬变脉冲耦合到信号线上，以代表容性耦合到通信端口的外部开关电路的瞬态干扰，这种干扰可能包括继电器和开关触点抖动，以及切换感性或容性负载引起的瞬变，所有这些在工业环境中非常常见。

  

**测试特点**：

-   输出波形由15 ms的2.5 kHz至5 kHz突发高压瞬变脉冲组成，并以300 ms间隔重复；
    
-   每个脉冲具有5 ns的上升时间和50 ns的持续时间，在波形的上升和下降沿的50%点之间测量；
    
-   单个EFT脉冲的总能量与ESD脉冲相似，单个脉冲的总能量典型值为4 mJ；
    
-   施加于数据端口的电压可以高达2 kV。
    

### 下图显示EFT 50 Ω负载波形。EFT波形用具有50 Ω输出阻抗的发生器在50 Ω阻抗上产生的电压来描述。

![Figure 2](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaGT9oQOfMZJzpoRIPzicxUjUibPSExAR2EfJstMAVeYia8p2XWVlFuouCiauUMZaBvwBwdEs8rhAH3IA/640?wx_fmt=jpeg&from=appmsg)

这些快速突发瞬变通过电容耦合钳耦合到通信线路。EFT通过耦合钳容性耦合到通信线路，而不是直接接触。这同样降低了EFT发生器的低输出阻抗所引起的负载。耦合钳和电缆之间的耦合电容取决于电缆直径、屏蔽和绝缘。

  

041

杀手3：浪涌测试(Surge)

这是三大"杀手"中最凶狠的一个，通常由雷击或大功率设备开关引起，能量是前两者的数千倍！

### 

其中IEC 61000-4-5 专门讲了浪涌测试(Surge)，并定义了用于评估对这些破坏性电涌的抗扰度的波形、测试方法和测试级别。

浪涌由开关或雷电瞬变产生的过压引起。开关瞬变的原因可以是电源系统切换、电源分配系统的负载变化或短路等各种系统故障。雷电瞬变的原因可以是附近的雷击将高电流和电压注入电路中。

  

浪涌测试的特征：

-   电涌脉冲的上升时间为1.25 µs，脉冲宽度为50 µs；
    
-   电涌脉冲能量可以达到90 J，比ESD或EFT脉冲的能量高出3~4个数量级；
    
-   浪涌被认为是最严重的EMC瞬变。ESD与EFT相似，电路保护的设计可以相似，但浪涌则不然，其能量非常高，因此必须以不同方式处理。
    
-   浪涌测试期间，要求器件在测试期间设置为正常工作状态，同时将5个正脉冲和5个负脉冲施加于数据端口，各脉冲间隔最长时间为1分钟。
    
      
    

下图显示1.2/50 µs浪涌波形。

![Figure 3](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaGT9oQOfMZJzpoRIPzicxUjSS7FeYJWbvx2ZIuy3blVj6FFENqI7844krcYUMchZzW3CfB0KAddpg/640?wx_fmt=jpeg&from=appmsg)

下图显示半双工RS485器件的耦合网络。并联电阻总和为40 Ω。对于半双工器件，每个电阻为80 Ω。

![Figure 4](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaGT9oQOfMZJzpoRIPzicxUjDevcsZaJMoCyTVs8GbGYR8V1hD2vkFHIwo2QnmXJGgcd5zUkec0CRA/640?wx_fmt=jpeg&from=appmsg)

  

051

如何判断设备"抗揍"能力？

测试后，设备的表现会被分为四个等级：

标准A、正常工作：测试时完全正常工作，数据零错误。这也是我们的终极目标！

标准B、功能暂时丧失或性能暂时降低，不需要人为干预：测试时可能会出错，但能自动恢复 。多数场合可以接受。

标准C、功能暂时丧失或性能暂时降低，需要人为干预：必须人工重启才能恢复。关键系统不能接受。

标准D、功能丧失，设备永久损坏：测试fail！

以上就是今天分享的内容，希望对你有帮助。

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgLBO7xGZk43wnTAMTiaicw3rIOS0DDzh4htBr4lqcGvqPKFPsuibOc3BWwfkvAaiadtXgg4XmYmA4Erg/640?wx_fmt=jpeg&from=appmsg)

## 

**声明：**

  

声明：参考内容：ADI官网。原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。