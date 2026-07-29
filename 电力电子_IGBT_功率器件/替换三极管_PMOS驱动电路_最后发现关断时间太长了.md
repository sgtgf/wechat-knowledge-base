# 替换三极管，PMOS驱动电路-最后发现关断时间太长了

原创 电路一点通 2024-07-25 08:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/atHX-g-U5\_OitGO00weMiQ](https://mp.weixin.qq.com/s/atHX-g-U5_OitGO00weMiQ)

分享一个小编在网上看到的电路情况。

当用100kHz的频率驱动PMOS时，PMOS G极的电压信号并不是一个脉冲波，PMOS一直处于线性放大的状态，并且无法关断。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\替换三极管_PMOS驱动电路_最后发现关断时间太长了_images\img_000_0eadebadb533.jpg)

于是**将电路修改**，将驱动三极管的信号**换成直流电**，PMOS正常开通，但是这是在完全低频直流电驱动的情况下。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\替换三极管_PMOS驱动电路_最后发现关断时间太长了_images\img_001_1ba3ebb012ed.jpg)

于是将三极管换成NMOS，PMOS依旧没有关断，将驱动脉冲的频率改为10k，**最后发现是PMOS的关断时间太长了。**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\替换三极管_PMOS驱动电路_最后发现关断时间太长了_images\img_002_d82da5c4354a.jpg)

**那为什么PMOS的关断时间会这么长呢？**

当PMOS开通时，结电容的电压需要下降，也就是对电容进行反向充电，在关断时PMOS需要结电容充电，此时是结电容没有快速放电回路，结电容只有通过电阻R12将电荷释放掉之后，门极的电压才能上升，**这就是为什么关断时间长的原因**

也就是说，在设计电路时，刚上电时PMOS的门极必须是高电平，这样可以避免PMOS自己开通。

比如这个电路，在关断时，Q1导通给结电容充电，脉冲V4为高电平时，Q1截止，PMOS的结电容通过电源V3 ，D2 ，R2 以及Q2形成充电回路。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\替换三极管_PMOS驱动电路_最后发现关断时间太长了_images\img_003_7685a4720baa.jpg)

于是，关断延时没有了，但开通速度还是很慢，**那是否可以将R2的数值进一步减小呢？**

如果将R2的数值减小，在稳态时，电阻R2和M1（MOSFET）会流经很大的电流，容易导致稳压管损坏。

**那使用图腾柱驱动呢？**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\替换三极管_PMOS驱动电路_最后发现关断时间太长了_images\img_004_30c14fbf0f1c.jpg)

这个电路开通利用Q2的瞬间导通实现将结电容反向充电，此时的R1电压瞬间变成了10V左右。Q2导通。

在关断瞬间，Q1导通，结电容通过Q1迅速释放电荷，**实现了驱动。  
**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\替换三极管_PMOS驱动电路_最后发现关断时间太长了_images\img_005_f76d26393f9a.png)

虽然实现了PMOS的驱动，但是这里依然有个问题，也就是驱动电压严重的依赖于电源电压，如果将电源电压降低，PMOS的Vgs的压差也会变低，有人知道有什么更好的办法吗？

  

## **一点通推荐**

  

\>①[华为2024届校园招聘【硬件开发/设计工程师】试题-附答案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&token=1574191413&lang=zh_CN&scene=21#wechat_redirect)    

\>②[华为硬件机试新题目-〔2023 版 本〕](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526592&idx=1&sn=adc0e40eb76b8e8d6050f65ab6c9a980&chksm=fcef8ba2cb9802b459e10df35556dbbc61a04a38cfa5d9dec3569813bcb7eb2b7717b04c16e5&scene=21#wechat_redirect)    

\>③[电路识图从入门到精通-PDF（312页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)

\>④[PCB背钻原理+工艺](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522014&idx=3&sn=ed992a66a16c81e50ec88fa4a056d35b&chksm=fcef75bccb98fcaa11eacc0ec42fa1efc4135498e11efa0d5016126e636c6fcd6bd7342faf02&scene=21#wechat_redirect)

\>⑤[学习看懂汽车电路图（彩色学习书）.pdf（184页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522556&idx=2&sn=69299a69ffe13bf8482bcac80daebe1a&chksm=fcef7b9ecb98f288058e57729dbf842dfb214e1f43f470162c214b905ec12a9c7f72b5a080ee&scene=21#wechat_redirect)