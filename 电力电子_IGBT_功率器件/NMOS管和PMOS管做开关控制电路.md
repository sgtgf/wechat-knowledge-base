# NMOS管和PMOS管做开关控制电路

原创 硬件笔记本 2022-08-08 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/ZAWNdIx8w42imh0CIdKSEw](https://mp.weixin.qq.com/s/ZAWNdIx8w42imh0CIdKSEw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

1 MOS管导通截止原理

![](NMOS管和PMOS管做开关控制电路_images/img_002_f9c619f78d23.png)

  

NMOS管的主回路电流方向为D—>S，导通条件为VGS有一定的压差，如 5V（G电位比S电位高）。

PMOS管的主回路电流方向为S—>D，导通条件为VGS有一定的压差，如 -5V（S电位比G电位高）。

2 MOS管做上管和下管

NMOS当下管，即S极（源极）直接接地，只需控制G极（栅极）电压即可控制NMOS管的导通或截止，因为MOS管导通的条件取决于VGS的压差。

NMOS当上管，D极（漏极）接正电源，而S极的电压不固定，无法确定控制NMOS导通的G极电压，因为S极对地的电压有两种状态，NMOS关截止时为低电平，导通时接近高电平VCC。

![](NMOS管和PMOS管做开关控制电路_images/img_003_c7879da654de.png)

PMOS当上管或下管原理一样。

通常使用PMOS做上管，NMOS做下管。

3 NMOS管应用

使用NMOS当下管，S极直接接地，只需将G极电压固定值为5V即可导通（该5V视MOS管型号而定）

![](NMOS管和PMOS管做开关控制电路_images/img_004_03bef2f71530.png)

  

4 PMOS管应用

使用PMOS当上管，S极直接接电源VCC（5V），只需将G极电压固定值为0V即可导通。

![](NMOS管和PMOS管做开关控制电路_images/img_005_9df55a70ad90.png)

————————————————

  

原文链接：https://blog.csdn.net/qq\_42900996/article/details/119668513

  

后台回复“**加群**”，管理员拉你入技术交流群。