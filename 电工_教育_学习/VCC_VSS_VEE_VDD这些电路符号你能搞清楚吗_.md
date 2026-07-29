# VCC，VSS，VEE，VDD这些电路符号你能搞清楚吗？

原创 硬件笔记本 2021-05-27 07:57 undefined

> 原文地址: [https://mp.weixin.qq.com/s/qXg\_1PGgUKiZ5J-FruDn0g](https://mp.weixin.qq.com/s/qXg_1PGgUKiZ5J-FruDn0g)

一种解释  

  

DC power一般是指带实际电压的源，其他的都是标号。在有些仿真软件中，默认把标号和源相连。

  

VCC：C=circuit，表示电路的意思，即接入电路的电压。

  

VDD：D=device，表示器件的意思，即器件内部的工作电压。

  

VSS：S=series，表示公共连接的意思，通常指电路公共接地端电压。

![](D:\电脑文件\公众号知识库\电工_教育_学习\VCC_VSS_VEE_VDD这些电路符号你能搞清楚吗__images\img_000_360d9c8faad4.jpg)

  

  

另一种解释

  

Vcc和Vdd是器件的电源端。

  

Vcc是双极器件的正，Vdd多半是单级器件的正。下标可以理解为NPN晶体管的集电极C，和场效应管的漏极D。同样你可在电路图中看见Vee和Vss，含义一样。因为主流芯片结构是硅NPN，所以Vcc通常是正。如果用PNP结构，Vcc就为负了。建议选用芯片时一定要看清电气参数。

  

Vcc来源于集电极电源电压，Collector Voltage，一般用于双极型晶体管。PNP管时为负电源电压，有时也标成-Vcc；NPN管时为正电压。

  

Vdd来源于漏极电源电压，Drain Voltage，用于MOS晶体管电路，一般指正电源。因为很少单独用PMOS晶体管，所以在CMOS电路中Vdd经常接在PMOS管的源极上。

  

Vss源极电源电压，在CMOS电路中指负电源，在单电源时指零伏或接地。

  

Vee发射极电源电压，Emitter Voltage，一般用于ECL电路的负电源电压。

  

Vbb基极电源电压，用于双极晶体管的共基电路。

![](D:\电脑文件\公众号知识库\电工_教育_学习\VCC_VSS_VEE_VDD这些电路符号你能搞清楚吗__images\img_001_18067a080b8b.jpg)

  

  

对比说明

  

（1）一般来说VCC=模拟电源，VDD=数字电源，VSS=数字地，VEE=负电源。

  

（2）有些IC既有VDD引脚又有VCC引脚，说明这种器件自身带有电压转换功能。

  

（3）对于数字电路来说，VCC是电路的供电电压，VDD是芯片的工作电压（通常Vcc>Vdd），VSS是接地点。

  

（4）在场效应管（或COMS器件）中，VDD为漏极，VSS为源极，VDD和VSS指的是元件引脚，而不表示供电电压。

  

免责声明：本文转载于网络，版权归原作者所有，侵删。