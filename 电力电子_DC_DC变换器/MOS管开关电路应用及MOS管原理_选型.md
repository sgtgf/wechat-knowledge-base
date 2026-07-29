# MOS管开关电路应用及MOS管原理、选型

原创 电路一点通 2025-01-13 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/oTbU34x7MDm-bZXoPj7mpw](https://mp.weixin.qq.com/s/oTbU34x7MDm-bZXoPj7mpw)

### 1、MOS管基本原理及分类  

#### 1.1、MOS管分类

MOS管是金属(metal)、氧化物(oxide)、半导体(semiconductor)场效应晶体管。FET是场效应管。合在一起是金属氧化物半导体场效应管（MOSFET）。  
MOS管分为N沟道和P沟道，又可分为增强型和耗尽型。其分类如下图：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_000_090794e35279.png)

[![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_001_aecd584f24fe.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

其示意图和电路符号如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_002_8d5b1fddaace.png)  
上图是NMOS和PMOS的符号，衬底一般和源极连接起来，连接起来后电路符号如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_003_51aeefb38a62.png)  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_004_f503c8df0357.png)

上图中2个都是虚线，虚线代表是增强型（Vgs=0时，DS无导电沟道），实线是耗尽型（Vgs=0时，DS有导电沟道）。电极 D(Drain) 称为漏极，电极 G(Gate) 称为栅极，电极 S（Source）称为源极。电路符号中的箭头可以理解为一个二极管。例如NMOS,沟道是N,衬底是P型，所以衬底到沟道形成一个二极管，二极管方向就是这个箭头方向。实际上这个箭头的确就是衬底的极性的含义，当它一旦接到源极，就形成了MOS管的寄生二极管了。

在实际应用中，一般都是增强型MOS管居多，因此这里不介绍耗尽型MOS管。  
下面是NMOS和PMOS的结构示意图：

  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_005_f3dca691e1e1.png)  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_006_7cf09eba2e1a.png)

#### 1.2、MOS管导通原理

对于MOS管导通的原理，以NMOS管为例，介绍如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_007_33f5da5ea1a4.png)

#### 1.3、MOS管输出特性曲线

当Vgs大于开启电压时，漏极电流id和漏源电压Vds之间的关系为输出特性曲线。可分为线性区OA，过渡区AB，线性区和过渡区统称为非饱和区。饱和区BC和击穿区CD。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_008_66b6a0ed08cd.png)  
对于不同的Vgs，可以得到以下输出特性曲线：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_009_18e92e5ee1c2.png)

#### 1.4、MOS管的转移特性

当Vds一定时，Vgs可以控制电流Id，叫做转移特性。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_010_25bccfee3f85.png)

4种类型的MOS管的特性曲线和转移特性曲线如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_011_4ba57c02b35d.png)

#### 1.5、MOS管的寄生二极管：

关于MOS管的寄生二极管：  
1、mos管本身自带有寄生二极管，作用是防止VDD过压的情况下，烧坏mos管，因为在过压对MOS管造成破坏之前，二极管先反向击穿，将大电流直接到地，从而避免MOS管被烧坏。

2、防止管子的源极和漏极反接时烧坏MOS管，也可以在电路有反向感生电压时，为反向感生电压提供通路，避免反向感生电压击穿MOS管。  
对于寄生二极管的方向判断，方法如下：

  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_012_8c0707284252.png)  
  

因此，从最开始简单的电路符号，我们把衬底和源极连接起来，再加上寄生二极管的符号，就得到了接近实际应用中的MOS管符号。实际使用的MOS管，一般都是带寄生二极管的，比如我们在立创商城随便搜索一个MOS管，比如直流电机驱动桥上常用的NCE6075，手册上截图如下：

  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_013_6d3107d1503a.png)  
到这里，我们就能看懂手册上MOS管的符号了。下面开始介绍下MOS关常用的2种简单的开关电路。

### 2、NMOS管简单开关电路：

下图是在proteus上进行仿真的NMOS开关电路：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_014_9c861c070886.png)  
因NMOS导通的条件是Vgs电压大于MOS管的开启电压，因此我们直接把NMOS管的S极直接接地，保证S极电压为0V，这样只需要G极电压高于开启电压，MOS管即会导通。  
电阻R2的作用是保证在未接负载时MOS管D极的电压，因为当MOS管导通时，要保证V DS > 0V才可以在漏源极间形成电流。  
而如果把电阻R2去掉，当外负载压降较大时，电源电压经外负载到达MOS管的D极后，D极电压可能就会接近0V，和S极电压相差不多，就无法保证形成漏源电流Ids > 0。  
分析此电路图特性我们发现，此时外负载的正极是直接连接电源正极，外负载的负极处经MOS管作为开关再接回了GND。那能不能电源的正极接到NMOS管的D极上，把MOS管的S极作为输出接到外负载的正极，当MOS管导通时，S极电压等于D极电压等于电源电压，这样貌似也是可行的。但实际是不可行的，理由如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_015_b5a896f3e728.png)  
如上图，我们按照我们的设想搭了一个电路，NMOS的S极接外负载，D极接电源正极。当G极电压为正时，MOS管导通，理论上MOS管的D极和S极电压应该相近，但我们发现此时并非如下。当MOS管导通时，D极电压为5V，S极电压却为0.9V，这是为什么呢？  
这是因为我们把NMOS管的S极作为外负载的正极输出接在了外负载1K电阻上。而外负载肯定是需要压降的，则实际MOS管的S极电压必须高于0V才可以带动外负载。但如果S极电压高于0V，又会导致压差 V gs小于MOS管的开启电压，造成MOS管断开，因此MOS管不能正常工作在一直开启的状态。  
综上，我们得知NMOS管用作开关电路时，必须D极接外负载，S极不要接负载直接接GND，这样才能保证Vgs 大于MOS管的开启电压。并且D极只能接外负载的负极，外负载的正极直接接电源。

因此，也就有了我们常说的：低端驱动(外负载的正极直接接电源正极，负极接MOS管回GND)用NMOS，高端驱动(外负载的正极接MOS管的D极，负极直接接回GND)用PMOS。

### 3、PMOS管简单开关电路：

类似于NMOS开关电路，我们在proteus仿真如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_016_0703370aec29.png)

此时，外负载的GND直接接GND，而外负载的正极接PMOS的D极，相当于在外负载的正极上加了个开关。为了验证我们之前的总结，我们看能不能用PMOS当做外负载负极端的开关。

我们建仿真电路如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_017_7c70d7f827f7.png)

因为PMOS的S极接了外负载的负极，此时无法保证S极电压为电源电压，而是接近了外负载的负极电压0V，因此V gs也就不能保证是PMOS处于导通状态了。

### 4、给MOS管开关电路加软启动

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_018_eb958233a898.png)

如上图所示，在MOS管的GS之间加上电容和电阻，可以上电缓启动，防止上电时的浪涌冲击。

### 5、常用MOS管的型号推荐

因为常用的一般都是增强型MOS管，因此只需要找到增强型NMOS和增强型PMOS两种即可。

#### 5.1、电机驱动MOS管：功率100W

##### 5.1.1:NMOS

MOS管功率一般比较大，对于嵌入式控制的外设，一般是12V电机或者24V电机，对于驱动电机的MOS管，推荐使用NCE6075K，是N沟道增强型MOS管，峰值电流75A，扇热功率可以达到110W。  
参数如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_019_284c29257ae7.png)  
NCE6075K的电路符号如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_020_f1bec60ab690.png)

##### 5.1.2:PMOS:

NCE60P50K，是一个P沟道增强型MOS管，电流可达50A，参数和电路符号如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_021_94a4c441076f.png)  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_022_170a4e72f34d.png)

##### 5.1.3、NCE公司：

NCE是无锡新洁能公司，专业从事半导体功率器件的研发与销售。因为是国内公司，因此其产品价格较友好、稳定，并且其生产的MOS管型号齐全，功率大。如果需要其他的mos管，可以直接到NCE公司官网上去选型。  
其官网地址如下：http://www.ncepower.com/

#### 5.2、小功率MOS管：2W

对于比较小的功率的MOS管，可以选用IRF7106TRPBF。其内部有一个NMOS和一个PMOS，对于小功率使用比较方便，不需要再单独选NMOS和PMOS了。  
电路符号如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_023_8e288d877d0b.png)

__![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\MOS管开关电路应用及MOS管原理_选型_images\img_024_eb22a0e8686a.other)__

  

  

**资料详情**

-   电路[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   [👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    

******进大家庭⭕圈探讨回复:****** ******交流******