# EMC-12：噪声处理实例-3---BUCK电路的EMI抑制


> 原文地址: [https://mp.weixin.qq.com/s/cuAcO4dhWoOSEtjyFFYRmQ](https://mp.weixin.qq.com/s/cuAcO4dhWoOSEtjyFFYRmQ)

  

______![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTm6UJ1tliaTZfpTRZjfRI42mOO0DHzia0MHiaovsOybnPozUlxXTiaOrJaXUNwQ9a3Fib1Bjt2sW4Gbwg/640?wx_fmt=png)______

____**____**★★★**____**__EMC-12---电源噪声处理实例__**____**★★★**____**____

______撰稿：Timothy  校稿：Timothy______

引言：传导电磁干扰指通过导体进行传播从而干扰其他系统的电磁干扰，任何导体如导线、电感、电容都是传播传导干扰的通道。对于开关电源，Buck的输入、Boost的输出、Buck-Boost的输入和输出都会产生不连续电流，不连续电流会导致电路产生电压尖峰，电压尖峰通过PCB走线和导线会传导到各个系统从而导致干扰。

## ____€1.传导电磁干扰概述____

电磁干扰的模型可以简单的等效为3个部分：干扰源、传导路径、接收端。DC-DC电路其传播路径为PCB走线及导线，接收为供电端和其他应用电路。在进行传导EMI测试时，干扰源为测试设备DUT，传导路径为导线，接收器为传导干扰测试设备LISN。

传导电磁干扰信号可分为差模信号（DM）和共模信号(CM)两种（传送门：[EMC-3：噪声的传输和放大](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492022&idx=1&sn=6710559a799bd27c4dcbd38d3f55f172&chksm=c336ab29f441223ff9822267f241ede07b9a21afe7c591d1788117e74acdaeb286d133ee02bc&scene=21#wechat_redirect)），在进行EMC提升和设计的时候要对两种信号进行区分并针对不同的信号进行相应的处理，**_图12-1_**为测量传导EMI的图解。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRUkJ3OyH3dauT98wXZMBkAWO6tgZZuIqjCSSJ7z0a1G43GsAwrnmxtrONxTicAgWGcmsXCOTaohCQ/640?wx_fmt=png)

_**图12-1：传导EMI测试图解**_

将V-Common称为V1和V2在EARTH-GND上的共模电压，将V-diff称为V1和V2上的差分电压，所以根据共模电压和差模电压的定义有：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRUkJ3OyH3dauT98wXZMBkAjfe9DtialCwNEztbDda3aR21MJJn0ibcu0GLBXZHlKNCn2QIpktYfKFg/640?wx_fmt=png)

其中：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRUkJ3OyH3dauT98wXZMBkAzsumlO9a5muGt5NemSkibHnRHZtrhrU5dc7O8xnYYn0M34HmwgqjLXQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRUkJ3OyH3dauT98wXZMBkA6mPia7SR7dEa4efibDictceXiaCfOib3ytmY3ypiavwn0dTnozHGhN6P7JCg/640?wx_fmt=png)

差模干扰：存在于L+和L-线之间，电流从Line+进入，流过整流二极管正极，再流经负载，通过热地，到整流二极管，再回到L-，在这条通路上，有高速开关的大功率器件，有反向恢复时间极短的二极管，这些器件产生的高频干扰，都会从整条回路流过，从而被接收机检测到，导致传导超标。

**_图12-2_**为差模干扰引起的传导FALL数据，该测试数据前端超标，为差模干扰引起：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TRenq6opk5ZIUKx1bssUIyYCGViaFicQNn6iaPXuTcKWAw5njn8Qvquh7fo2F6jzm2XoZETPKiaHEltdQ/640?wx_fmt=jpeg)

_**图12-2：差模干扰超标数据**_

共模干扰：共模干扰是因为大地与设备电缆之间存在寄生电容，使得共模干扰有了回路，干扰噪声通过该电容，流向大地，在LISN-线缆-寄生电容-地之间形成共模干扰电流，从而被接收机检测到，从而导致共模干扰，传导超标，**图12-3**为共模干扰引起的传导FALL数据。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TRenq6opk5ZIUKx1bssUIyYyY0mn0eeXT3579WrNta3zxzjnUahVicBcvreydk5cA73ibMr7aNzUXBQ/640?wx_fmt=jpeg)

_**图12-3：共模干扰超标数据**_

____€2.传导电磁干扰测试标准____

常见的EMI标准有欧洲标准（EN），美国标准（FCC），国际标准（CISPR），这些标准对于不同的应用市场有相应的针对性EMI标准，具体情况如**_表12-1_**所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRUkJ3OyH3dauT98wXZMBkAvzUNrqL1b18CMiccLznnsPuKUx6Xj5gyicibxWPhjsOnUIQnatQwficiaVg/640?wx_fmt=png)

_**表12-1：主要产品类别传导EMI标准**_

不同标准对应的传导干扰限值不同，且测试频率范围也不尽相同，具体情况请查看相应标准手册。以最常见的EN55032为例，传导干扰频率测试范围在150K到30MHz，需要注意的是，在2017年3月5日之后，之前使用特别广泛的EN55022被纳入EN55032标准。EN55032分为Class A和Class B两个标准，用于居住环境的产品需要通过更严格的Class B标准，其他则只需通过Class A标准，**_图12-4_**为EN 55032传导EMI辐射限值标准。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRuU6JUbWyic9XqibWRM7U3Dic9KicYvKywl8xibf1chnjMzxJicXbsiaJW2fC0lYx4vr2iad0poufthXCXwQ/640?wx_fmt=png)

_**图12-4：EN 55032传导干扰限值标准**_

____€3.传导电磁干扰的产生____

在开关电源中，开关管周期性的通断会产生周期性的电流突变（di/dt）和电压突变(dv/dt)，周期性的电流变化和电压变化则会导致电磁干扰的产生。**_图12-5_**所示为Buck电路中差模噪声和共模噪声路径，差模噪声电流回路与电源电流相同，因此输出电流和返回电流是反向的，一般认为差模噪声是“电流驱动”噪声，是由电路中的电流变化（di/dt）产生。一般认为共模噪声是“电压驱动”噪声，是由电路中的电压变化（dv/dt）产生。共模噪声电流则是通过寄生电容，从电源线流向机壳等导体，从而形成回路。因此共模噪声的电流在电源线是同向的。（传送门：[EMC-4：开关电源的噪声来源](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492037&idx=1&sn=e2fb144578d3429a84ceb923cc3489d7&chksm=c336ab5af441224cb587a2565222eafa44e3363f63c2049814e1f49b2056dc93b69601028f18&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEDx5kHibibXSdk3XHUkibEvNUujibnJR3CFpicM33jdMl1nPraiauJ3vo1Uvg/640?wx_fmt=png)

_**图12-5：Buck电路中的差模噪声和共模噪声**_

____€4.差模干扰的产生和分析____

差模噪声由电路中的电流变化（di/dt）所产生，**_图12-6_**所示为Buck电路的电流变化，可见在Buck电路中上管电流和下管电流是突变的，这些突变电流便是差模干扰产生的源头，这些干扰电流通过电源线注入LISN，由频谱仪绘制出传导噪声曲线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEdUsaYNn63aDMPxxgv1qtg8icGU2Zaq7dTwnPxT1esW9Qv1Xpxp65a0Q/640?wx_fmt=png)

_**图12-6：Buck电路中的电流变化**_

**_图12-7_**为Buck上管电流的频域分析图，开关电源中的周期性di/dt信号其频域噪声主要集中在传导EMI测试的频率范围。这个噪声是开关电源特性所致，它的产生是无法避免的，但是可以通过加输入电容和输入滤波电路在传播路径上对噪声进行抑制，以下会详细论述。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEQCiay1vUH9mAk9Ghhggp1TEne9grJKSETIoH7EkFzWmHofFu4iblkQQg/640?wx_fmt=png)

_**图12-7：Buck上管电流的频域分析**_

____€5.共模干扰的产生和分析____

共模噪声由电路中的电压变化（dv/dt）所产生，**_图12-8_**所示为Buck电路共模噪声的产生和传播路径。在开关电源中，由于开关管周期性的通断，会在SW点产生周期性电压变化（dv/dt），这个周期性的dv/dt信号会在由寄生电容和机壳、铜皮组成的回路上产生共模电流，共模电流通过寄生电容，再经过机壳、铜皮等流向LISN。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEkRDy9AMJq3gE2CSWt2nNwGaqP67TEu1r7v7p9TQEEH7RVaD35mzRmw/640?wx_fmt=png)

_**图12-8：共模噪声的产生和传播路径**_

**_图12-9_**为SW点电压的频域分析图，干扰噪声以大概-20db/dec的斜率衰减，高幅值干扰噪声主要集中在传导范围频域内。开关电源中SW的dv/dt是难以避免的，因此需要用共模滤波器对共模干扰进行抑制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQjQG74moa6XlFn0zZ11ibyEDViam5ibIBt2KZDicRDrGehD3iczdibMhNwzdsictErGlBV2BWNaxO49pZWQ/640?wx_fmt=png)

_**图12-9：SW电压频域分析**_

____€6.传导电磁干扰的预防和优化____

上面提到电磁干扰模型可以等效为3个部分：干扰源，传导路径，和接收端，传导电磁干扰测试时接收端为LISN，因此主要从干扰源和传导路径两个角度进行传导电磁干扰的预防和优化。（传送门：[EMC-6：如何从后级解决开关电源的噪声](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247492066&idx=1&sn=59107cd2afc939283054334041ab45a6&chksm=c336ab7df441226b7cfb2ec4418a375719e5b3afefabb79c7e2a770e3cbdce6d97c0130c3f5e&scene=21#wechat_redirect)）

## _从干扰源进行优化_

### 1#：设置频率

EMI标准在不同频率的限值不同，可将开关频率设置在干扰限值较高的频率。如EN55032 class A在500KHz以上限值为60dBuV, 在500KHz以下限值为66dBuV，因此可以考虑将开关频率设置在400KHz。

### 2#：用带有抖频功能（也叫展频）的Buck Converter

抖频是指IC通过内部逻辑控制使得开关频率在一定范围内按一定步进进行切换，从而实现将干扰能量进行频域分散，达到降低整体干扰幅度的效果。**_图12-10_**为抖频效果的示意图，抖频功能，其抖频范围为开关频率的±6%，调制率为开关频率的1/512。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRUkJ3OyH3dauT98wXZMBkAlNgBtibO8zxItHKLbS25aY2ZoYmF7wI6m0PxX3bJKibRn2LVocJSyfKw/640?wx_fmt=png)

_**图12-10：展频效果示意图**_

### 3#：优化Layout

使用低ESR电容作为输入电容并尽可能靠近芯片放置，由此来最小化输入电容和上下管组成的高di/dt回路，同时要注意电流返回路径，通过给地铺铜来提供最短路径的电流回路，回路上铺铜不能被切断。

将电感靠近芯片放置，在保证足够电流能力的前提下，使SW点铺铜面积最小化，由此来减少高dv/dt的SW点的电场耦合。

对功率地和信号地单点接地，防止噪声耦合，使用4层板，在中间两层铺地，提供最短电流回路，并对干扰进行屏蔽。

## _从传播路径对干扰进行吸收_

### 1#：使用共模滤波器

针对共模噪声，需要使用共模电感进行抑制，共模电感对共模电流表现为高阻状态，对差模电流则表现为低阻，因此共模电感对共模噪声有很好的抑制作用。

### 2#：使用差模滤波器

对于差模噪声，**_图12-11_**所示为标准的EMI滤波器。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRUkJ3OyH3dauT98wXZMBkAdTsUr0DmpqhPXwaKynm6Y6nf1AARzYEDVa4hbLvmBcDPTfGqGicWCzA/640?wx_fmt=png)

_**图12-11：标准EMI滤波器**_

小结：

对差模干扰：  

1#：增大X电容容值。

2#：增大共模电感感值，利用其漏感，抑制差模噪声。  

对共模干扰：  

1#：增大共模电感感值。

2#： 调整L+-GND，L--GND上的LC滤波器，滤掉共模噪声。  

3#：主板尽可能接地，减小对地阻抗，从而减小线缆与大地的寄生电容。