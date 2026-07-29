# 电源自动切换电路设计--MOS管的妙用

原创 电路一点通 2024-08-15 11:40 广东

> 原文地址: [https://mp.weixin.qq.com/s/RfATW-AEJyaZ8vM2FNuoqw](https://mp.weixin.qq.com/s/RfATW-AEJyaZ8vM2FNuoqw)

关于电源自动切换电路设计的问题，包括二极管与MOS管的作用、无缝自动切换的实现条件以及电路适用的电压范围，并分享了另一个适用于主副输入电压相等的电路。

******进大家庭⭕圈探讨回复:****** ******交流******

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源自动切换电路设计__MOS管的妙用_images\img_000_b730448982bf.jpg)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源自动切换电路设计__MOS管的妙用_images\img_001_b5fee76fc8f6.jpg)

首先是开头提到的那个问题，两个二极管为什么还需要MOS管，**这两个二极管其实很好理解**，其中一个是我们之前提到了是**为了保护VUSB**，防止它给电池充电，还有一个是**为了保护MOS管**。

第二个问题是**这个电路（第一个电路）是否能够实现无缝自动切换？**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源自动切换电路设计__MOS管的妙用_images\img_002_256be736f9ba.jpg)

也就是说在有 VUSB 和 电池同时供电的情况下，**去掉VUSB或者电池其中一个，**负载能否保持正常工作。

这个决定因素有很多，可以通过具体情况进行调整元器件来实现无缝自动切换，比如说MOS管的参数，在MOS管GND处的R2电阻的阻值，阻值越小，MOS管的导通速度越快，**不过要注意，R2是持续耗电的**，当阻值太小，额外的功耗也会损失越多。

此外还有VouT 端滤波电容、Vin 端电容还有负载功耗。

**第三，为什么电压相同的时候不能使用这两个电路呢？**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源自动切换电路设计__MOS管的妙用_images\img_003_5ee2581ba2a0.jpg)

这两个电路只适用于Vbat 必须小于VUSB的情况，而**使用两个MOS管的电路**对VUSB 与 VBat 的压差要求不会那么严格，当然并不是任何电压都适合的。

**当要求****主副输入电压相等，同时输出也是同样的电压，****并且****不能有太大的压降****的****时候****，**针对这个问题在网上看到的另外一个电路，分享给大家：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源自动切换电路设计__MOS管的妙用_images\img_004_f14045be4c8c.jpg)

**Vin1 是主电源，Vin2 是备用电源。**

当Vin1和Vin2 都有电时，就会使用Vin1，只要有Vin1，Q1导通让Q2的G极接地，Q2也导通，Q3的 G极连接 Vin1，S极也是Vin1，随后Q3截止，Vout 来自 Vin1。

也就是说，当Vin1 = 3.3V时，不管Vin2有没有电压，都由Vin1通过Q3输出电压，当Vin1断开的时候，由Vin通过Q2输出电压。由于MOS管的Rds非常小，产生的压降也很小，所以Vout基本等于Vin。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源自动切换电路设计__MOS管的妙用_images\img_005_2140a6ebb997.other)

## **一点通推荐**

[电路中MOS管栅极串联电阻，简直又爱又恨？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=1&sn=9f744ca8989f70df1e01c4c76b97a0c6&chksm=fcef844ecb980d5847f46b77adcd0170dc0f9931995bb3aeff0e78e9282fb38815579d22a743&scene=21#wechat_redirect)   

[电源管理指南（85页）-PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)    

[开关电源入门到精通之—输入滤波电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526135&idx=3&sn=b7011ead58c5106de3183369690f2bf9&chksm=fcef8595cb980c83e7a90ef9d1b611579130d9ba512e78072b0047888928091b65056dfa237a&scene=21#wechat_redirect)    

[【华为】初级电子工程师必备手册（上117页 、下82页）PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525856&idx=2&sn=9d302f4f4d508e08bba6a10567a638cf&chksm=fcef8682cb980f94cac6c9b7f51d1041c17e5896d4c0cb3049417a2a76b9e375324bb5715b56&scene=21#wechat_redirect)