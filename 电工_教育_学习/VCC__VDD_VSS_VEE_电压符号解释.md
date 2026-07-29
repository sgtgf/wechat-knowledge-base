# VCC、 VDD、VSS、VEE 电压符号解释

原创 电路一点通 2024-08-29 11:37 广东

> 原文地址: [https://mp.weixin.qq.com/s/r03CacHI0TGr6DR1iFPWKg](https://mp.weixin.qq.com/s/r03CacHI0TGr6DR1iFPWKg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\VCC__VDD_VSS_VEE_电压符号解释_images\img_000_584a76f477c0.png)

一般在数据手册或者是说原理图中你会看到**VCC、 VDD、VEE、VSS等不同的符号，**那它们有什么区别，并且该怎么记住它们呢。

![](D:\电脑文件\公众号知识库\电工_教育_学习\VCC__VDD_VSS_VEE_电压符号解释_images\img_001_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******

**解释一：**

VCC：电源电压（双极器件）；电源电压（74系列数字电路）；声控载波（Voice Controlled Carrier)   
VDD:电源电压（单极器件）；电源电压（4000系列数字电 路）；漏极电压（场效应管）

VSS:地或电源负极

VEE：负电压供电；场效应管的源极（S）

**解释二：**

（1）实际意思

VCC：C=circuit 表示电路的意思, 即接入电路的电压；  
VDD：D=device 表示器件的意思, 即器件内部的工作电压；  
VSS：S=series 表示公共连接的意思，通常指电路公共接地端电压；  
VEE：负电压供电；  
（2）说明

1、对于数字电路来说，VCC是电路的供电电压,VDD是芯片的工作电压（通常Vcc>Vdd），VSS是接地点。

2、有些IC既有VDD引脚又有VCC引脚，说明这种器件自身带有电压转换功能。

3、在场效应管（或CMOS器件）中，VDD为漏极，VSS为源极，VDD和VSS指的是元件引脚，而不表示供电电压。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\VCC__VDD_VSS_VEE_电压符号解释_images\img_002_8282c8eeb08b.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\VCC__VDD_VSS_VEE_电压符号解释_images\img_003_5b1da7f58499.jpg)

**解释三：**

一般情况下VCC和VDD为电源正，而VEE和VSS为电源负或者地。

VCC表示连接到三极管集电极（C）的电源。

VEE表示连接到三极管发射极（E）的电源。

VDD表示连接到场效应管的漏极（D）的电源。

VSS表示连接到场效应管的源极（S）的电源。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\VCC__VDD_VSS_VEE_电压符号解释_images\img_004_e6e93a200a4b.jpg)

它们是这样得名的： 

VCC、VDD、VEE、VSS是指芯片、分解电路的电源集结点，详细接电源的极性需视器件材料而定。

VCC一般是指直接连接到集成或分解电路内部的三极管C极，VEE是指连接到集成或分解电路内部三极管的E极。

同样，VDD、VSS就是指连接到集成内部、分解电路的场效应管的D和S极。

例如是采用P沟E/DMOS工艺制成的集成，那么它的VDD就应接电源的负，而VSS应接正电源。 

  
**解释四：**

Vcc和Vee出现在双极型晶体管电路中，和集电极(collector)发射极(emitter)有关，所以一正一负。  
Vdd,Vss在MOS电路中出现，和漏级(Drain)，源极(Source)有关，也是一正一负。  
Vcc和Vdd是器件的电源端。Vcc是双极器件的正，Vdd多半是单级器件的正（例如：BJT）。下标可以理解为NPN晶体管的集电极C，和PMOS/NMOS场效应管的漏极D。同样你可在电路图中看见Vee和Vss，含义一样。

因为主流芯片结构是硅NPN所以Vcc通常是正。如果用PNP结构Vcc就为负了。

建议选用芯片时一定要看清电气参数。

VPP：编程/擦除电压。  
单片机中Vpp多数定义为编程电压，有的资料上把Vddf为Flash供电的外部电压

总结：

电路设计以及PCB制作中，经常碰见电源符号：VCC、 VDD、VEE、VSS，他们具有什么样的关系那?  
   
 1、对于数字电路来说，VCC是电路的供电电压,VDD是芯片的工作电压(通常Vcc>Vdd)，VSS是接地点。

2、有些IC既有VDD引脚又有VCC引脚，说明这种器件自身带有电压转换功能。

3、在场效应管(或CMOS器件)中，VDD为漏极，VSS为源极，VDD和VSS指的是元件引脚，而不表示供电电压。

4、一般来说VCC=模拟电源,VDD=数字电源,VSS=数字地,VEE=负电源

  

单极器件指一种载流子导电，如MOS，场效应管，为电压控制电流；

双极器件指两种载流子参与导电，如BJT，其为电流控制电流。

Vcc和Vdd是器件的电源端。Vcc是双极器件的正，Vdd多半是单级器件的正。下标可以理解为NPN晶体管的集电极C，和PMOS or NMOS场效应管的漏极D。同样你可在电路图中看见Vee和Vss，含义一样。因为主流芯片结构是硅NPN所以Vcc通常是正。如果用PNP结构Vcc就为负了。

建议选用芯片时一定要看清电气参数。

       Vcc 来源于集电极电源电压（Collector Voltage）, 一般用于双极型晶体管, PNP 管时为负电源电压, 有时也标成 -Vcc, NPN 管时为正电压.

　　Vdd 来源于漏极电源电压（ Drain Voltage）, 用于 MOS 晶体管电路, 一般指正电源. 因为很少单独用 PMOS 晶体管, 所以在 CMOS 电路中 Vdd 经常接在 PMOS 管的源极上

　　Vss 源极电源电压, 在 CMOS 电路中指负电源, 在单电源时指零伏或接地.

　　Vee 发射极电源电压（Emitter Voltage）, 一般用于 ECL 电路的负电源电压.

　　Vbb 基极电源电压, 用于双极晶体管的共基电路

单解：

　　VDD：电源电压(单极器件);电源电压(4000系列数字电 路);漏极电压(场效应管)

　　VCC：电源电压(双极器件);电源电压(74系列数字电路);声控载波(Voice Controlled Carrier)

　　VSS:：地或电源负极

　　VEE：负电压供电;场效应管的源极(S)

　　VPP：编程/擦除电压。

　　详解：

　　在电子电路中，VCC是电路的供电电压, VDD是芯片的工作电压：

　　VCC：C=circuit 表示电路的意思, 即接入电路的电压， D=device 表示器件的意思, 即器件内部的工作电压，在普通的电子电路中，一般Vcc>Vdd !

　　VSS：S=series 表示公共连接的意思，也就是负极。

　　有些IC 同时有VCC和VDD， 这种器件带有电压转换功能。

![](D:\电脑文件\公众号知识库\电工_教育_学习\VCC__VDD_VSS_VEE_电压符号解释_images\img_005_b0c2cdfb0092.other)

  

## **一点通推荐**

  

-   [**电路识图从入门到精通-PDF（312页）**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [**反激开关电源基本原理和电路拓扑**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [**电子工程师必备-九大系统电路识图宝典.pdf(702页）**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [**【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [**看图学集成电路选用检测与查用100问(pdf 302页）**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)
    
-   [**实 用 电 路 手 册（pdf-661页）-设计参考、维修学习**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)
    
-   [**9天练会电子电路识图.pdf资料（302页），跟着学、跟着练增长经验**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)
    
-   [**常用电子元器件识别与检测（166页）.ppt资料**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [**PCB设计参考:《PADS电路板设计超级手册》.pdf**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
    [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)
    
-   [**华为2024届校园招聘【硬件开发/设计工程师】试题-附答案**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)[**常用电子元器件识别与检测（166页）.ppt资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&token=1742542462&lang=zh_CN&scene=21#wechat_redirect)
    
-   [**光伏逆变器详细介绍(完整版)PPT. 资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526592&idx=2&sn=7feb32c6215f20313aee4de98d328778&chksm=fcef8ba2cb9802b41270bc9fcc2d484d30149ed75288f496091e24c4239e5315cfe48150dea0&scene=21#wechat_redirect)    
    
    
-   [**\[电子电路识图入门\]450页-PDF-图文版**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)[**电源管理指南（85页）-PDF文档**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)[**【华为】防护电路设计规范\_55页.文档资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&chksm=fcef85adcb980cbb95db2e91177eeb03e4dc2dfcddf7021dc2d0d3a2321a91164236e9575840&scene=21#wechat_redirect)
    
-   [**电子工程师必备-关键技能速成宝典（692页）.pdf**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526066&idx=2&sn=e5f7278a65af2a44acc74823a658798f&chksm=fcef85d0cb980cc694bf887b0096ed184f6ac89ef01949820f9833f562d94d5ab1f376780265&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526066&idx=2&sn=e5f7278a65af2a44acc74823a658798f&chksm=fcef85d0cb980cc694bf887b0096ed184f6ac89ef01949820f9833f562d94d5ab1f376780265&scene=21#wechat_redirect)[**开关电源设计指南(216页).PDF资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526059&idx=2&sn=895b85e82c8d767bb6905914061aba0c&chksm=fcef85c9cb980cdf67633e78906081fc53dcb3ee923dd607f671e5ac84a2093b6b2464dbdc5f&scene=21#wechat_redirect)