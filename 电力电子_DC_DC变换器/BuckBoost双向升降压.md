# BuckBoost双向升降压


> 原文地址: [https://mp.weixin.qq.com/s/qAPQ4bCgVwpWDuKP70e-uQ](https://mp.weixin.qq.com/s/qAPQ4bCgVwpWDuKP70e-uQ)

BuckBoost双向同步升降压电路原理

这是同步控制，之前做的电路里是用肖特基二极管来控制开关的，那个是异步

利用同步就可以把buck和boost拼接在一起，通过控制这四个 MOS 管的开断就能分别实现升压和降压  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6Luyytia9ZicOtQH4VgHLoe7GeibRvD2kibSbIAH4L6XlicyWap99wLXOD1mYYV0xI2pmNxy4RskBGaQUKxgPa4gHWjNekKWV50j5oib0ia4/640?wx_fmt=png&from=appmsg)

## JW3651芯片详解

内部集成了四个低Rds（on）的MOSFET，开启时的D到S的电阻，最大限度地减少了物理尺寸。  
恒流控制用于保护器件在故障条件下不会过冲。内置环路补偿简化了电路和设计。具有欠压锁定、短路保护和热保护功能。

输入电压3.0-21V  
输出电压：0.9V-20V  
工作频率450kHz

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyx5FHouEpichdtcefuCpHOofB0Rj0OwDzz3CiaoEOEg13FbY3SvAWtsyRu2qF6ib6jbLtDbccZnZuyQKNicicNDpsGsoNjFUNjxzia9A/640?wx_fmt=png&from=appmsg)  
反馈点电压是0.9V，所以根据分压选择合适的电阻  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyyqWL7NZ0oHEYhtLoLKPLgnnDO44nbyDMYic4sIEcHrbKPhGAHQvNU31y8uJ6gHQB7yl3X50ypVOv9oXvCP1N00qAtE4FSRLITI/640?wx_fmt=png&from=appmsg)  
电流检测电阻RCS放在输入端或输出端，高进RISET ，如果不需要输入输出电流限制，CSN短接到VCC，CSP短接到GND  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyzYQkBdWNcGk6KHp27rXXKHAMvKWTfzmo4K24cQoG6UmQ3YsricDTJc2fAe4N9n1dEKibe9VTib2eBIic9Mw5mcarvtu5LjslvqNqE/640?wx_fmt=png&from=appmsg)  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyynSUZOnNqNQaNic05WOh5BJsbKt8JVria0GJibKo6EtavWiblwYsaFqAaNm3ww09dmMgWheudEeUbZEnYficqZ4049aVVflfBCM7w0/640?wx_fmt=png&from=appmsg)

次级输出电流限制引脚OLIM  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyz0LuE9tY8KDzkTgLN50FtThuAEShuic2B3491G20ncJiaW8OAnUl9saRLgcmg2XxhXIcYDrwNbH3FyDacRd3kcBIrhneoWDMR54/640?wx_fmt=png&from=appmsg)  
如果输出电流等于IO\_LIM，则输出电流环路开始工作，它会降低输出电压以限制输出功率。当OLIM不使用时，应将其短接到GND。  
超流会掉电  
当输出对地短路时，JW 3651作为 降压转换器 工作，输出电流持续检测并限制在IO\_LIM。当输出短路被消除时，稳压器再次进入正常工作状态。

EN引脚电压低于1.6V。整个稳压器关闭。

封装：  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyzxG9ZHuHyXGZKM5QXCE5Pk6nOHYvTaibj5bB9tMckWsAn8GuLPhEKJnBIGPMtPGnds8UkZaDTb31lItMQfXtMMfzbZZlDnTdYc/640?wx_fmt=png&from=appmsg)  
静电防护范围:  
ESD Susceptibility (Human Body Model) ±2kV

VCC引脚是一个输出5V，其实也是内部降压，用于给内部的MOS管和电路供电  
EN使能引脚，逻辑高：上升最大2.5V，逻辑低：下降最小1.6V

给出了导通电阻  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywmMVRcedWLzAQewWwWTpeRVVmSR4R4pHiatXo16S84MPrdpX2Zicwg9RZufb6W0pYeL3iaryGvl2TZEr1Ihnk5TmETMtuCTPUbKs/640?wx_fmt=png&from=appmsg)  
反馈点的电压为0.9V，范围在0.885-0.915V之间

有输入电流限制保护：

![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyybQJeGPqm5z94sjIg2nVPCRsQaPIpxibV0BZpn57pHgztknUWnHM4ouia7IIRWiaaqacaW8HVDbaR4aaFG5wt3Mz9jtm8bb04Oq4/640?wx_fmt=png&from=appmsg)

温度超过150度会停止工作，低于130度会重新恢复

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyyc6ZBNnzE66QOfzHvl7ttYfkZqTedkBickwLlEQv01QNRMRAlw4Am0eiaibduxmyxUxian0vE8icwiat8VoLzKNFvVicgoAnZVJHAbzw/640?wx_fmt=png&from=appmsg)

BST引脚接的这几个自举电容，原理上应该先想办法给电容充电，这样MOS管导通后，MOS管S脚电位抬高后，电容可以仍然给MOS管的G脚开启电压

原理是相同的，这在后面自己设计一个BuckBoost 控制系统 有借鉴作用：  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyygUcg1WlgWia7DPhuL2WuC4whRTeaDccOWPuFwRibVhpw6OfYCnOia9O4WBteud8RKiaJMNACS2WoiclBBIHYJsM90AXVcuM0QFlibc/640?wx_fmt=png&from=appmsg)

## PCB布线

1.  将输入去耦电容放置在尽可能靠近JW 3651（VIN引脚和PGND）的地方，以消除输入引脚处的噪声。输入电容和GND形成的环路面积必须最小化  
    ![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyzGqdrEplW4Sq3q6dhTHlJ8WIrwicGfjIusa2xt5y5AphXD4iafwxUOnibpTcZVmR6e9ia8OFB1jJAZc8m1EIhLpkOKiaIRPIfJqLJc/640?wx_fmt=png&from=appmsg)
    
2.  将电流检测电阻RCS尽可能靠近电流设置电阻RISET，以获得更好的电流精度，这个走线就是开尔文走线，由于采样电阻的阻值很小，焊料的电阻不能被忽略。开尔文走线可以提高测量精度。  
    ![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywJun1iazdY2OfCvuTvhRlv3Q3nwic0nhT0gcnShD5NcYeHXxzBDzOPODQ1zeE7xKPHxI4ZLazicrnSgDibbumwn1AvNsW0VMV0kuk/640?wx_fmt=png&from=appmsg)
    
3.  将反馈走线尽可能远离电感和噪声电源走线。
    
4.  PCB上的接地层应尽可能大，以便更好地散热
    

## 手册参考设计案例

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywQ4R4HmXD8ZibYTvbw08LCZRjEicsEiaXnOfXpfo9dgvHCN7JGnnEa42nt8jHGliaCdtt9uibW3BAztB5hjibiaBBVDjbqn2FsP264ds/640?wx_fmt=png&from=appmsg)  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyyXHyvLvs62b0uxR1ibj1xIOHRR87O9B8bnjkImEJMppRR7JeichicZHsF8t6IadIgeTB7BxRqQmF4vRXU6FgdA2X0ZMjpOHz4n38/640?wx_fmt=png&from=appmsg)

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywZ99Rso9iazG0VKSLzzxOspurDVM6lROBicjic5neckdPu9r0C41QIJtOTGibVbbOyw8bQiasVeZ6xiaySr0vbvwcLLaia50Jp1gibY4k/640?wx_fmt=png&from=appmsg)

## 热阻的介绍

热阻，英文Thermal Resistance，指的是当有热量在物体上传输时，在物体两端温度差与热源的功率之间的比值，单位是℃/W或者是K/W。

![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyxDAWJl0oEu2yib4aoIFibCUF5S7U7l1y6DHz0PqrelQ5BmxdBwA9iatzx9ibhNpa4TVSNiapHKicZL35E6F7zkTNuh9dbcK8ZZia4wb8/640?wx_fmt=png&from=appmsg)  
其中Θja\*Pd为温升，也可以称之为发热量

在热阻一定的情况下，功耗Pd越小，温度越低。  
在功耗一定的情况下，热阻越小越好，热阻越小代表散热越好。

热量传递有三种形式，热传导，热对流和热辐射，芯片在 Package 内的热量传递主要是以热传导为主。  
热阻θ的定义是两点之间的温度差除以对应流经这两点的功率，是一个有实际意义的物理量  
热阻θJA, θJC是用来评估不同芯片的thermal performance，不同芯片热阻的是通过统一的JESD51标准测得，方便一些系统级的工程师，在做系统级设计时，进行芯片之间的横向比较；  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyxEmA2uyNo8qib1YT4qnEI071JibERFE17zSCLaSdp63O8dIXlufTFQsynT94d8rq2RAvUSFBMm1WuricvYolAylibgLHXkIMCLc3k/640?wx_fmt=png&from=appmsg)  
θja是结到周围环境的热阻，单位是°C/W。θJA取决于IC封装、电路板、空气流通、辐射和系统特性，通常辐射的影响可以忽略。θja专指自然条件下的数值。

θjb是指从结到电路板的热阻，它对结到电路板的热通路进行了量化。通常θJB的测量位置在电路板上靠近封装处。θjb包括来自两个方面的热阻：从IC的结到封装底部参考点的热阻，以及贯穿封装底部的电路板的热阻。

θjc是结到管壳的热阻，管壳可以看作是封装外表面的一个特定点。θjc取决于封装材料(引线 框架 、模塑材料、管芯粘接材料)和特定的封装设计(管芯厚度、裸焊盘、内部散热过孔、所用金属材料的热传导率)。

θJC=（TJ-TC ）/ P  
TJ =结点温度，℃  
TC = 壳温，℃  
P =器件功耗，W

TJ = TC +（θJC\* P）  
所以测得的芯片外壳的热量并不是实际热量，还要加上热阻

定义：θJA=（TJ-TA）/ P  
θJA=结点到环境的热阻，℃ / W  
TJ =结点温度，℃  
TA =环境空气温度，℃  
P =器件功耗，W

所以环境温度下可以估算结点的温度，这个非常重要，可以直接估算芯片工作时的温度

但并不能完全代表，是Θja是一个多变量函数，不能反映芯片焊接在PCB板上的真实情况，和PCB的设计、Chip/Pad的大小有强相关性，随着这些因素的改变，Θja值也会改变，芯片厂家在测试Θja时和我们实际使用情况有较大差别，所以用来计算结温，误差会很大。

![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyzD8qOgZPqOVI8z2JkF5dVZxicnX8yBECRJlnekwTD5oxqaSwZxS9Y41xRASQo2O8K6Pd6HbFtVdXrIjnU7zKLnuLtHGUQ0d9AM/640?wx_fmt=png&from=appmsg)  
热设计和EMC问题一样，最好在前期就解决掉，不然后期整改很麻烦。设计前期考虑结构、PCB堆叠、布局、摆件等，后期考虑散热材料等方式，所以  
![在这里插入图片描述](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyzByAsyalO42SOCXWgsaqbaWY2fXfiaLeiaFf8FO1cYyqVzwBibBRjjictiaIxSpBO5yU159c4CPTpxC8UrqHwyqibVrCnjiaW9ibTKDqo/640?wx_fmt=png&from=appmsg)

## 原理图和 PCB设计

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyx6fcgwxQCu2L5aszFgvQqD9EuFh7Lic2R1mvwHj2yUsdAyxQ5zLPiaUrxjyz7C9icMGQiawSDP5dynwVF0CjTsSv6DFMLc7R2kHBc/640?wx_fmt=png&from=appmsg)  
![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyyUgvbocBvgmwgukSSRibWqeWIYJ4vCiagdsNGribZx1TyxwoOeQPDhSib7XDUaDjFxxBkQTZChQxdJ5p8RYKKjoY4Jrtq9Tt9Cxzs/640?wx_fmt=png&from=appmsg)

## 焊接测试

![请添加图片描述](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuyxB8zX70icSWo48dX21IAugxghXyGaIAIOQwhBCO6RCebXCFUpLmLzqDq9lhDIZYLJY5PncwbcjUWHbF81hRDug6UuBBMKRb28o/640?wx_fmt=jpeg&from=appmsg)

通过不同档位，调整输出电压：3.3V、5V、9V、12V、16V

发现上电瞬间会亮灯，之后电压就会掉到1.5V，开始以为还芯片没有焊好，头一次焊接这种异形焊盘的贴片，所以风枪吹了好几次，板子也吹黄了，之后发现还是这个问题，反馈电压不是0.9V，是一个0.2V左右，芯片的VCC也有5V

后面就猜测很可能是限流设置不对，OLIM设置的15K，电流5A左右，不知为何不起作用，看到手册说可以不限流，拉到GND即可，立刻拆除R3和C10，并且焊盘短路起来，再次测试发现输出正常了。

应该是没设置对，芯片认为过流把输出电压降下来了。不知道内部是什么逻辑。

还有这里有些偷懒，没有放大电容，只放了22uf的，后面测试一下纹波