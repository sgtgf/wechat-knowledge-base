# MOS管防倒灌电路设计及其过程分析,一目了然

原创 电路一点通 2024-08-17 16:44 广东

> 原文地址: [https://mp.weixin.qq.com/s/-kvMJsWlJ4\_ESklbv-AByw](https://mp.weixin.qq.com/s/-kvMJsWlJ4_ESklbv-AByw)

MOS管防倒灌电路设计如下图所示:在某些应用中,如电池充电电路中, B点是充电器接口, C点是电池接口，为了防止充电器拔掉时,电池电压出现在充电接口。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路设计及其过程分析_一目了然_images\img_000_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******

(Q1、Q2、Q3共同组成防倒灌电路)注意Q3的DS反向接于电路,这样做是防止MOS的体=极管对电路产生的影响(如果Q3按常规方式接在电路中, C点接电源则会在B点出现电压)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路设计及其过程分析_一目了然_images\img_001_c155abbf12b9.png)

**电源自动切换**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路设计及其过程分析_一目了然_images\img_002_5cf0bd363757.png)

  

### **防倒灌电路设计**

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路设计及其过程分析_一目了然_images\img_003_1d233e3b4394.png)

**双MOS组成的防倒灌电路**  
  
电路分析：  
  
正常情况下（无电流倒灌）  ON/OFF接口可以进行IO口控制也可以直接通过VIN控制，

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路设计及其过程分析_一目了然_images\img_004_c3e90c5b3d2f.png)

  
所以这次就以 VIN的有无 来控制  VIN输入电压到三极管，三极管导通（基极电压大于发射极），由于三极管下连的是地，所以 PMOS管的栅极电压为0， Vgs=-Vin 所以导通 所以 两个PMOS管导通。  
  
当输入电压突然没有的时候， Vin没有 所以 三极管Vb=0  Vbe<0，所以不导通，PMOS管栅极和漏极S连在一起所以电压相等 Vgs=0，所以不导通  
  

### **Oring电路介绍**

### Oring电路从其名字就可以知道他的功能，可以理解为单向导电电路。目前Oring电路应用于很多场合，他的作用就是保证各个单体电源互相独立、不出现反灌现象，其中最常见的就是应用于均流电路中。

二极管由于本身具有单向导电性，所以他就是天然的Oring电路。最基本的Oring电路就是在输出端加一个二极管，如图1,根据此单体电源的输出电流和系统中连接在此单体电源输出端口可能出现的最高电压选择二极管。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87leh2tUDyeqRAvD6ohahYQsLmoUicXrpbhiaguue1ticdccjbyDvnRX2oE6nrX5zqMvFnK2fDaA6iaZvHg/640?wx_fmt=png&from=appmsg "MOS管防倒灌电路")

由于二极管的正向压降比较大，当输出电流很大时(如100A),图1中的二极管Oring电路的损耗就非常大(70W左右)，显然不适用于大电流Oring,这时就要应用Mos管的Oring电路，稍微复杂一点，如图2 (最基本的Mos管Oring电路)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87leh2tUDyeqRAvD6ohahYQsLNqUhslYKQJRbPCeAOUOplP1icvRYAhmxA2JolXtJYLTyiaydKDxNc1Cw/640?wx_fmt=jpeg&from=appmsg "MOS管防倒灌电路")

由于Mos管可以看作是一个开关管并一个体二极管， 控制此Mos管当无输出电流时关断开关管、由体二极管去阻断，有输出出电流时使开关管导通，从而可以保证单向导电同时也减少正向导通时发生的损耗。  

图2与图1相比需要一个额外的辅助电压。(在一些情况下可以把Oring电路放在输出负端，同时用输出电压作为辅助电压)。  

此电路的关键因素之一是如何正确、恰当的去控制Mos管的开关。而严格的讲图2中电路一般是不能胜任的，因为Q2的BE结电压与D1的导通压降一般不相等， 如何保证他们的电压相等，从而使Mos管恰当的开关呢，图3就是改进后的电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87leh2tUDyeqRAvD6ohahYQsLzniaOibos2MaeMKE3QhcGyqDbppZ7epk3lWdCnAOw2Rx9rSbpwXJdjOA/640?wx_fmt=png&from=appmsg "MOS管防倒灌电路")

图三中Q2, Q3是同样的管子，这样就可以保证两电压是基本相等，或者选用集成此两个三极管的器件，这样就几乎相等了，从而可以保证可以恰当的开关。此电路也经常见于很多产品中。  

图3是个基本成熟的电路，但是如果考虑管子的高可靠性，又需要加一些额外的电路，图4就是一个经常用的电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87leh2tUDyeqRAvD6ohahYQsLCrrJGLKFDZXtm79GdJ7lvuIygPbmj5GNyLnXaRF2jBRdjRphKiamA1A/640?wx_fmt=png&from=appmsg "MOS管防倒灌电路")![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管防倒灌电路设计及其过程分析_一目了然_images\img_009_2140a6ebb997.other)

图4的电路基本就是一个非常可靠的Oring 电路了，R1,R2 可在具体的电路中折中选择，因为如果取值太大会提高效率，但是当外界有反高压时会反灌进去一些电流，取值太小又会降低效率。为了避专利和其他一些特殊地方的用途，图4的电路经常还要做一些变化。

## **一点通推荐**

[电源自动切换电路设计--MOS管的妙用](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528721&idx=1&sn=14ad654c9819112428d2ec1d5915284d&chksm=fcef9273cb981b658a46160c26747507b2c1cfe08f5186363940e8352c882c22fd474e17cec7&scene=21#wechat_redirect)

[MOS管防倒灌电路,防反接电路优缺点](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=1&sn=0d7dca5822164e7309afc1bb2c4aa18a&chksm=fcef7882cb98f1945a08bf97eed377d8c10c3bc368065654c4188cdd943887d4dfd33a858356&scene=21#wechat_redirect)

[电源电路：PMOS防浪涌抑制电路解析](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=1&sn=f11a61f6dbd968414119bbcf705e9533&chksm=fcef7819cb98f10f16cb042224135fabc6f98e576ae756e6e458366e63762e4ee348e6aa9e19&scene=21#wechat_redirect)

[仿"华为"电路？高压直流模块 DC DC 驱动电路方案对比](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522458&idx=1&sn=4d89ebb4fe737c284fb6bbda923ec59c&chksm=fcef7bf8cb98f2eec625809ed0cf7379cbeda72511e55c0938fd152cbe9faab86f2df9a4aded&scene=21#wechat_redirect)

[学习电路，看动图清晰明了（模拟电路、数字电路不再话下）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523914&idx=1&sn=683bfa2809ae6dd6503e48ec95522f61&chksm=fcef7d28cb98f43e2a3f26119c75aad72560190fc77ffe605d47a2ac7f9356a9e3b40abbe203&scene=21#wechat_redirect)