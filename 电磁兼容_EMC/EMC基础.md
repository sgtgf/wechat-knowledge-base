# EMC基础

原创 硬件笔记本 2022-10-08 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/A428XFr89Ao1CHyuPT7sTA](https://mp.weixin.qq.com/s/A428XFr89Ao1CHyuPT7sTA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

传导与辐射

01

电磁干扰(Electromagnetic Interference)，简称EMI，有传导干扰和辐射干扰两种。传导干扰主要是电子设备产生的干扰信号通过导电介质或公共电源线互相产生干扰；辐射干扰是指电子设备产生的干扰信号通过空间耦合把干扰信号传给另一个电网络或电子设备。为了防止一些电子产品产生的电磁干扰影响或破坏其它电子设备的正常工作，各国政府或一些国际组织都相继提出或制定了一些对电子产品产生电磁干扰有关规章或标准，符合这些规章或标准的产品就可称为具有电磁兼容性EMC(Electromagnetic Compatibility)。电磁兼容性EMC 标准不是恒定不变的，而是天天都在改变，这也是各国政府或经济组织，保护自己利益经常采取的手段。

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAYv7k5yFBw0eO3OuvN7ta2moucaicqpVl0FCE4mavtgvJ5wk25KPZaAw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

EMC标准及测试

02

国际标准：

1、国际电工委员为IEC  
2、国际标准华组织ISO  
3、电气电子工程师学会IEEE  
4、欧盟电信标准委员会ETSI  
5、国际无线电通信咨询委员CCIR  
6、国际通讯联盟ITU  
6、国际电工委员会IEC有以下分会进行EMC标准研究  
\-CISPR：国际无线电干扰特别委员会  
\-TC77：电气设备（包括电网）内电磁兼容技术委员会  
\-TC65：工业过程测量和控制

国际标准化组织：  
1、FCC联邦通  
2、VDE德国电气工程师协会  
3、VCCI日本民间干扰  
4、BS英国标准  
5、ABSI美国国家标准  
6、GOSTR俄罗斯政府标准  
7、GB、GB/T中国国家标准

EMI测试：  
1、辐射骚扰电磁场（RE）  
2、骚扰功率（DP）  
3、传导骚扰（CE）  
4、谐波电路（Harmonic）  
5、电压波动及闪烁（Flicker）  
6、瞬态骚扰电源（TDV）

EMS测试：  
1、辐射敏感度试验（RS）  
2、工频次次辐射敏感度试验（PMS）  
3、静电放电抗扰度（ESD）  
4、射频场感应的传导骚扰抗扰度测试（CS）  
5、电压暂降，短时中断和电压变化抗扰度测试（DIP）  
6、浪涌（冲击）抗扰度测试（SURGE）  
7、电快速瞬变脉冲群抗扰度测试（EFT/B）  
8、电力线感应/接触（Power induction/contact）

  

EMC测试结果的评价

03

A级：实验中技术性能指标正常  
B级：试验中性能暂时降低，功能不丧失，实验后能自行恢复  
C级：功能允许丧失，但能自恢复，或操作者干预后能恢复  
R级：除保护元件外，不允许出现因设备（元件）或软件损坏数据丢失而造成不能恢复的功能丧失或性能降低。  
5、电压暂降，短时中断和电压变化抗扰度测试（DIP）  
6、浪涌（冲击）抗扰度测试（SURGE）  
7、电快速瞬变脉冲群抗扰度测试（EFT/B）  
8、电力线感应/接触（Power induction/contact）

  

EMC基础理论

04

－电磁干扰的时域与频域描述 :时域特性

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAJR2sMBG680NIowfwA6aGGqnm0X6Lrcaou0jcdZOB0E9AFpCamJEBFg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
－电磁干扰的时域与频域描述 :频域特性

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DArGGqCZVoSeic46QyXZ1QPBtBB6bWFtIxALG2WJ4Olhh3cnatawNvWdw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
－电磁干扰的时域与频域描述 :周期梯形波的

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DA8gen5V5r1fzia2yYTu92lg47ibomo9icdbiaoiaUzqoXvMB60K49ic0WrgTA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
－电磁干扰的时域与频域描述:宽带噪声

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DADlYzoBc1NYTxjX6N6hiaOu9yBoS3DictLSyiaNbkcDMwu8BgLTicoXCzIQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
－电磁干扰的时域与频域描述:时钟与数据噪声

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAbMzkzZSTQu30icN4CbcuPfHiaKrcu9H8fX5B1oYW1ibPAgDtTibhcmMfOA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
－分贝（dB）的概念  
分贝是电磁兼容中常用的基本单位。  

定义为两个功率的比：

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAnhXbPeOLg0VbWwEgOWdWSLTZIekaNiczpbAwSJsUcQTvbkHTlRm7MNg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

传导干扰耦合形式

05

**1、共阻抗耦合**

\-由两个回路经公共阻抗耦合而产生，干扰量是电流i，或变化的电流di/dt。

  

**2、容性耦合**

\-在干扰源与干扰对称之间存在着耦合的分布电容而产生，干扰量是变化的电场，即变化的电压du/dt。

  

**3、感性耦合**

\-在干扰源与干扰对称之间存在着互感而产生，干扰量是变化的磁场，即变化的电流di/dt。

  

－电场与磁场

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAz9zCnJFjsIIgkwkW7wCADRmXRiaURSv7tkt9SyticypG4uasDeibR0wMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
电场：导体之间的电压产生电场  
\-电场强度单位：V/m  
磁场：导体上的电流产生磁场  

\-磁场强度单位：A/m

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DA4djBhviae3Vxlzjib9JMlQUckibAzMfyt2qlePTsNFJibmoKHWnNlwFeHQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
波阻抗：Zo=E/H  
**1、差模辐射：电流在信号环路中流动产生**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DA16RppAd31PbOtSvPj4mcicyQicXYIfnDW4Fw8ADUESJMwkfzsL4oM0NQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**2、共模辐射：由于导体的电位高于参考电位产生**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAkkzLPKORwicCQJ9q1OBTsTVHAOzKGNqSf19sIaayAt0VA5phcKDic81w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**3、PCB主要产生差模辐射**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAtwNwal7sTgZrsOueoJCzzRAafpmtvdTn3I3DlBhsksibdjuArJxEnOg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**4、线缆主要产生共模辐射**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAUVnkRaK1Rmmc27iaaMv4frbhXK7Tvxu61aC1JOib6NicsYgBFvV4MleCg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**5、差模辐射电场的计算**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DA6vFKDNe97EIJ1Y5YPnapibqG4bDaY3UgHmpRuvVlWjOic9TqUvYtLcqg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

其中 ：  
E:电场强度(V/m)  
f :电流的频率(MHz)  
A:电流的环路面积(cm2)  
I :电流的强度(mA)

r :测试点到电流环路的距离(m)

  

**6、共模辐射电场的计算**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAxQdr8HjQCIG5V5HBB94yTze0oXHSoKjiaEpdPbcSD3rTEjrpMpvBwXw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

其中 ：

E:电场强度(V/m)  
f :电流的频率(MHz)  
L:电缆的长度(m)  
I :电流的强度(mA)

r :测试点到电流环路的距离(m)

  

**7、屏蔽的基本理论和设计要点**

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DABldSbNP8gltB1g7iadwTLNzVjKw363SXTAiaMSMMbGHVYSNA8vMaMXVw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

7.1屏蔽效能计算公式：  
SE(dB)= R(dB)+A(dB)+B(dB)  
R(dB)-reflection loss  
A(dB)-absorption  
B(dB)-re-reflection loss  
7.2屏蔽设计的基本原则：  
a、屏蔽体结构简洁，尽可能减少不必要的孔洞，尽可能不要增加额外的缝隙；  
b、避免开细长孔，通风孔尽量采用圆孔并阵列排放。屏蔽和散热有矛盾时尽可能开小孔，多开孔，避免开大孔；  
c、足够重视电缆的处理措施，电缆的处理往往比屏蔽本身还重要；  
d、屏蔽体的电连续性是影响结构件屏蔽效能最主要的因素，相对而言，一般材料本身屏蔽性能以及材料厚度的影响是微不足道的（低频磁场例外）；

e、注意控制成本；

  

EMC设计

06

  

**EMC屏蔽设计：**

**1、通风孔及开口设计**

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DATB4wbeaaw8HZs3YljRb54yf0d11ia00jJCw8fm1RPzNe4udq8yFSN7w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**2、结构搭接缝屏蔽设计**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAOG1kk3MErwSq9N4aaSbOlO1Aws4abSBIH7L7f6aY7IoooVPWuK5CxQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**3、电缆从屏蔽体内穿出**

如果导体从屏蔽体中穿出去，将对屏蔽体的屏蔽效能产生显著的劣化作用。这种穿透比较典型的是电缆从屏蔽体中穿出。

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAtE5fBNC805ELexqt71uia3Slb8uPZfXLOX2icclICJOcPYnNWnlnfODA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**4、穿出屏蔽体电缆的设计原则：**  
a、采用屏蔽电缆时，屏蔽电缆在出屏蔽体时，采用夹线结构，保证电缆屏蔽层与屏蔽体之间可靠接地，提供足够低的接触阻抗。  
b、采用屏蔽电缆时，用屏蔽连接器转接将信号接出屏蔽体，通过连接器保证电缆屏蔽层的可靠接地。  
c、采用非屏蔽电缆时，采用滤波连接器转接，由于滤波器通高频的特性，保证电缆与屏蔽体之间有足够低的高频阻抗。  
d、采用非屏蔽电缆时，电缆在屏蔽体的内侧（或者外侧）要足够短，使干扰信号不能有效地耦合出去，从而减小了电缆穿透的影响。  
e、电源线通过电源滤波器出屏蔽体，由于滤波器通高频的特性，保证电源线与屏蔽体之间有足够低的高频阻抗。

f、采用光纤出线。由于光纤本身没有金属体，也就不存在电缆穿透的问题。

  

**5、不良接地**

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAvQJKCH1xTzrCgyGZUphKo4DFQ76ZQxPhibvV9icTjjQPX0UNup9RQ2NA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**6、屏蔽材料及应用（导电布、簧片、导电橡胶）**

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DA7yXopoB8RO6nIZickZ4hnkHY9uExL2JIodJ1rBxgZT621Hk6ricUgibWQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**7、截止波导通风板**

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DA1C8RZ5ht3InEibODgGnJVqm7paBiaMKBVzTnZEHVNJj5t7zEXOskVkjw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAaApQwFQfYNLFqcwFg3ymgRmXlBMDd3giaPVGL6VcQ2UlsoGTsvxMDog/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**8、良好接地**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DATRiadf8zQwSlSia18tmIRY1EQFckzNQCs19uibjCGU02I1o5x2G5VHGKQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

EMC接到设计

07

  

**1、接地的概念及目的**  
a、一是为了安全，称为保护接地。电子设备的金属外壳必须接大地，这样可以避免因事故导致金属外壳上出现过高对地电压而危及操作人员和设备的安全。  
b、二是为电流返回其源提供低阻抗通道，即工作接地。

c、防雷接地，为雷击提供电流泄放。

  

**2、接地提供信号回流**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAAR1QMC2hN4ISuFsBuGmQrKQiaaFhdHY7cqlxwzvW1iarBHITlLFVUNfA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**3、单点接地**

适用于工作频率1MHz以下系统

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAK1zVOHiaFAfrB9FCIaiaqqpsdMvYibCSaicNNiay7wO5r5EibDiczgy5RVP4A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DA7a697wdzw2ibWtQzJw2EmZwhTI91fZ4PJq0taZyh1ianHmzCPXnHaGibA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**4、多点接地及混合接地**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAmPgMsicBHhB53ibCF5RVM9gLYqPASIrYdNyMyj3SlOXx5HGFLbticRW2Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

EMC滤波设计

08

**1、滤波**

a、滤波电路是由电感、电容、电阻、铁氧体磁珠和共模线圈构成的频率选择性网络，阻止某段频率范围内的信号沿线传递。

b、 滤波电路种类：反射、吸收。

  

**2、滤波器件**  
a、电容（通用电容、三端电容）  
b、电感（通用电感、共模电感、磁珠）

c、电阻

  

**3、基本的滤波形式**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAjJGibmyhoQD8frDCWwvGKxQRpEAPXFLw8LksQUN2FbqzfNyEMCm5gFw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**4、差模滤波与共模滤波设计**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DA9pUy3pvtsibqXXtcHXMiadN01DPkRjFdmjxUlKFtLuibpV46STRT3rDCg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**5、电容和三端电容特性**

![](https://mmbiz.qpic.cn/mmbiz_jpg/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAX6EWYgGibPjejQsBrUleJ9xwRpxUD1LPQCib9Jqr2Tp0v80HrV5Jibp6w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAD6ydB4iaOn1f9lZgg9E8OiajmglOFjClvbbrAzIwyUTufOl6sTibzkByg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**6、共模扼流圈**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAvWXk3BJOCfXjN8wRicCaGPEicTnicWHejSk9XQCpqJS8ft17xeDfVr3TA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  
**7、铁氧体磁珠**

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAxafE9Q2T3cWN8hvABh4NWC4UFVJtEaV06ZzAdZVezjnibjPagSKGezw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/iayzTbicUDics5SwJ4rbd0ZDn7svSPCP9DAetgEosjlmIpia6ib5TddnMKycL001LTen3TLwvV3nem32YMk7nJcENkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

EMC PCB 设计

09

**1、PCB设计：**  
a、布局：同类电路布在一块、控制最小路径原则、高速电路间不要靠近小面板、电源模块靠近进单盘的位置  
b、分层：高速布线层必须靠近一层地、电源与地相邻、元件面下布一层地、近可能将两个表层布地层、内层比表层缩进20H  
c、布线：3W原则、差分对线等长，靠近走、高速或敏感线不能 跨分割区  
d、接地：同类电路单独分布地，在单板上单点相连  
e、滤波：电源模块、功能电路设计板级虑波电路

f、接口电路设计：接口电路设计滤波电路、实现内外有效隔离

  

**2、布局的基本原则：**  
a、参照原理功能框图，基于信号流向，按照功能模块划分  
b、数字电路与模拟电路、高速电路与低速电路、干扰源与敏感电路分开布局  
c、单板焊接面避免放置敏感器件或强辐射器件  
d、敏感信号、强辐射信号回路面积最小  
e、晶体、晶振、继电器、开关电源等强辐射器件或敏感器件远离单板拉手条、对外接口连接器、敏感器件放置，推荐距离≥1000mil  
f、敏感器件：远离强辐射器件，推荐距离≥1000mil

g、隔离器件、A/D器件：输入、输出互相分开，无耦合通路（如相邻的参考平面），最好跨接于对应的分割区

  

**3、特殊器件布局：**  
a、电源部分（置于电源入口处）  
b、时钟部分（远离开口，靠近负载，布线内层）  
c、电感线圈（远离EMI源）  
d、总线驱动部分（布线内层，远离开口，靠近宿）

e、滤波器件（输入、输出分开，靠近源，引线短）

  

4、滤波电容的布局：BULK电容：  
a、所有分支电源接口电路  
b、功耗大的元器件附近  
c、存在较大电流变化的区域，如电源模块的输入和输出端、风 扇、继电器等

d、PCB电源接口电路

  

**5、去藕电容的布局：**  
a、靠近电源管脚

b、位置、数量适当

  

**6、接口电路的布局的基本原则：**  
接口信号的滤波、防护和隔离等器件靠近接口连接器放置，先防护，后滤波  
接口变压器、光耦等隔离器件做到初次级完全隔离  
变压器与连接器之间的信号网络无交叉  
变压器对应的BOTTOM层区域尽可能没有其它器件放置

接口芯片（网口、E1/T1口、串口等）尽量靠近变压器或连接器放置

  

**7、布线：**

走线短，不同类走线间距宽（信号及其回流线、差分线、屏蔽地线除外），过孔少，无环路，回路面积小，无线头  
有延时要求的走线，其长度符合要求  
无直角，对关键信号线优先采用圆弧倒角  
相邻层信号走线互相垂直或相邻层的关键信号平行布线≤1000MIL  
走线线宽无跳变或满足阻抗一致  
各国产品安全和EMC认证组织  
\-欧美：CE  
\-美国：FCC&UL，NEBS  
\-日本：VCCI  
\-澳大利亚：CE  
\-中国：CCC  
\-台湾：CE  
\-认证申请  
\-提交认证材料（认证标准、产品使用手册等）  
\-产品测试  
\-完成测试报告  
\-颁发认证证书

\-产品发布

  

EMC工程师八个技能

010

1、EMC的基本测试项目以及测试过程掌握；  
2、产品对应EMC的标准掌握；  
3、产品的EMC整改定位思路掌握；  
4、产品的各种认证流程掌握；  
5、产品的硬件硬件知识，对电路（主控、接口）了解；  
6、EMC设计整改元器件（电容、磁珠、滤波器、电感、瞬态抑制器件等）使用掌握；  
7、产品结构屏蔽设计技能掌握；  
8、对EMC设计如何介入产品各个研发阶段流程掌握。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。