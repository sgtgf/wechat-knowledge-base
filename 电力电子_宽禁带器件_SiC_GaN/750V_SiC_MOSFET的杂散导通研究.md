# 750V SiC MOSFET的杂散导通研究


> 原文地址: [https://mp.weixin.qq.com/s/hhvuVEbWBtvLMB6xkjJhTA](https://mp.weixin.qq.com/s/hhvuVEbWBtvLMB6xkjJhTA)

文章来源：APEC2024(Infineon)

作者:Deepak Veereddy presenting on behalf of Nico Fontana, Stefan Lenhardt

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWXic0A80h55ZKpXibibxHoYVEfnqx3r99x1c7oAFUDwKmmtUibVvib4ic3maA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWGp7fodgMiaicgdKdxpZ4czJ2Ge5pstAvDDu1LCuAToic6eXsOIJQ5gkIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWHM6XKIQrsYO5C6uSLjaiczL76h2daftSp2jb9LxJan5NlfDyDwNZiaibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWQXTF72DCsFq7KibVRwuuhPUPZ0o0ggmMDejbxBPz3WbbdzZEXgWdHkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWNRfG2wyAPKBXQffic6FfmRQvaMTpeH9BZgkPHSnwibcIW8fYgWS8ibquQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWJ0LuwiaeCKiaLUoWIboahyCydlDtOhD9TqNgPgofNNS8tMKiak4OaCxAA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWpNbfxMaffXC6Opmn54hR67djIvSvPvh84ngLub6Y7BoGjBjrEuT3iaA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWPVLhxKrHdjqiadu2NOZibicMWcjfcb1BUkS1nrmWOibUnf5zeyg42CMu3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjW702G7wk82FCbt8rtRhQTlLksjZViaVppHjQMVibLS2p7qhhdlUooH5ng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjW0rI6slLuoTibb5XazMVtJd6B8LjAQPnGbibichsQibCxAxkh2fopdo5ibhg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWvibbIKbgTVicQPhYvQ3yHqnZibsNHfFUMic4THQBKxbLkXhBOrT49TiaN3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWz27565U73uaUPatzMpD0f63vKRWQMGC5uj9ad3a0DBowYhPDVrfqkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjW7LdCyrbJdGyXRDQoVgSusyFbGv4ltM8LL6chnFgV0KBmHJibibpXvp2w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWmZxVyNbZYn8icglxoeyR04OvIibzrgPB5u91KPodfec6GiaeLtyMZXGgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWKQNL8xHqJr4t1vxw5nas9Zv3ua4PticK3AU8JJYezD3IGHkDfUvVZQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWgyia1BQU0Q3dncP7UiahTGOlbnUuxOFIkGjROoX8zL8ufXPL3sR6wnSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWGxSCv1sAKRbV6sfO4SD9I1bLKxeOALN8kCeLbKYuYekzTnibWeicGy6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskjxQblyuWS7cXNpwDpSVjWJToT7QH4szGlT3a6MicBqnDUKSBagry0RfPzjHOU1O1RiajlPfCSlIkg/640?wx_fmt=png&from=appmsg)

注：文字与报告无关

### 一、杂散导通的核心产生机理

###   

**米勒电容耦合效应（主导机制）

  

在半桥拓扑中，当高边开关导通时，低边器件漏源电压（VDS）快速上升，通过米勒电容（CGD）形成电容分压器效应：

**

△Vgs = △Vds × Cgd/(Cgs + Cgd)

若栅极关断电阻（RGoff）无法及时泄放电荷，栅极电压（Vgs）可能超过阈值电压（Vgsth），引发误开通。英飞凌测试显示，1200V CoolSiC™在 50V/ns 的 dVDS/dt 下，该效应导致 Q\*rr（反向恢复总电荷）增加 40% 。

**杂散电感感应效应**

换流过程中，源极端子杂散电感（LS）因电流突变产生感应电压：

Vind = -LS × di/dt

当感应负压绝对值超过 Vgsth 时，器件被误导通。此效应在高负载电流换流场景尤为显著。

### 二、关键影响因素量化分析

###   

影响维度

核心参数

作用规律

实验验证

**工况条件**

母线电压

电压越高，△Vgs 越大，风险呈指数级上升

800V 下临界 RGoff 比 400V 时降低 50%

  

dVDS/dt 斜率

斜率每提升 10V/ns，临界 RGoff 需降低 30%

50V/ns 时 RGoff 需≤10Ω（175℃条件）

  

结温（Tj）

每升高 50℃，Vgsth 降低约 0.5V

175℃时寄生导通风险是 25℃的 3 倍

**硬件设计**

栅极关断电阻（RGoff）

电阻增大，电荷泄放减慢，风险线性上升

RGoff=22Ω 时 Q\*rr 增量达 40%（100℃）

  

关断电压（Vgs (off)）

0V 关断可简化设计，负压可提升裕量

0V 关断在 50V/ns 下仍安全（CoolSiC™）

  

封装形式

4 引脚封装比 3 引脚降低源极电感 30%

40A 负载下两种封装抗扰性一致

### 三、杂散导通的表征与测试方法

###   

**临界栅极电阻测试法**

原理：以 Q\*rr 较参考波形（RGoff=0Ω）增加 10% 为临界判据，测定不同工况下的最小 RGoff

设备：半桥评估板（高边为 dv/dt 发生器，低边为测试器件）

典型结果：800V/0A/175℃时，CoolSiC™临界 RGoff 为 8Ω（50V/ns）

**动态特性仿真建模**

关键参数：提取 CGD、CGS 随 VDS 的非线性变化曲线，计入 PCB 寄生电感（典型值 15-50nH）

工具：PSpice/MATLAB，重点模拟换流瞬态 Vgs 波动

### 四、多维度抑制策略体系

###   

#### （一）器件选型优化

####   

优先选择 Cgd/Cgs＞150 的器件（如英飞凌 1200V 系列），△Vgs 可控制在 4V 以内

选用 4 引脚封装降低源极反馈电感，提升抗干扰能力

#### （二）驱动电路设计

####   

**动态米勒钳位技术**

采用 1EDC30I12MH 等驱动芯片，钳位 Vgs≤Vgsth-1V，可降低误触发概率 90%

**栅极电阻动态配置**

RGoff 建议值：1200V 器件通常取 5-15Ω（需匹配 dVDS/dt）

避免 RGoff 过小导致关断过电压（VDS 峰值＞1.2× 额定值）

**负压关断权衡**

负压可提升裕量，但每降低 1V 关断电压，Vgsth 漂移增加 0.1V，建议范围 - 2V~0V

#### （三）布局与拓扑优化

####   

叠层母排设计：将换流回路杂感降至 200nH 以下（如储能变流器中低压模块达 175nH ）

三电平拓扑：开关电压仅为母线电压 1/2，可完全规避容性寄生导通

### 五、典型应用与效果验证

###   

**储能变流器功率单元**

采用对称叠层母排 + 4 电容吸收结构，关断电压尖峰从 1200V 降至 733V（800V 母线）

开关损耗降低 25%（对比传统 IGBT 方案）

**电动汽车 OBC**

结合米勒钳位驱动与 0V 关断设计，在 100kHz 开关频率下无直通故障，可靠性提升 40%

### 六、研究展望

###   

宽温域（-55℃~225℃）Vgsth 漂移对寄生导通的影响机制

多器件并联时的杂散参数匹配策略

氮化铝封装与碳化硅衬底的协同降感技术

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMstnaQiaTkoib9V2GelkRkIK8IPc1LGl8C8Niay8F44iatJouvzUArEyMvA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=13)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMt2TgmZia18AqibiagQmVic5qpsfB5icelOViarfK2bjticOsAbb9qTXib8xMqQ/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskVK7Bp5PFY03daImzpEsicMmcGwwzZmGKuxOauG2AHP5c4WnsEBSuibbJEaZibyXzc1HfrfqicxXRWKg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=15)