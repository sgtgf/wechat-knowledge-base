# 施耐德PLC内部拆解，果然厉害

原创 电机新视界 2023-04-06 13:32 上海

> 原文地址: [https://mp.weixin.qq.com/s/8kOdyfpVf\_0xAjqk4B\_Ppw](https://mp.weixin.qq.com/s/8kOdyfpVf_0xAjqk4B_Ppw)

**点击下方**

**关注我们**

**

**来源：今日电机**

由于PLC又常见又可靠，在工业自动化领域中不可或缺，所以现在无论是IT还是OT的人对PLC都充满好奇，为何它能这么“牛”，在很多场合都无可替代？

  

今天，为了揭开PLC的神秘面纱，小编特意拿施耐德电气Modicon M262来做一个内部拆解，看看这个代表最先进技术的PLC究竟有哪些特殊的设计，为何既能做到性能优异又能做得超级稳定可靠的？

  

  

  

**先来说一下Modicon M262这个PLC**

  

  

  

说到PLC，可能有人会问这是谁发明的。其实，PLC就是这个Modicon（莫迪康）公司在50多年前发明的，后来Modicon被施耐德电气收购，成为施耐德电气的PLC品牌。Modicon M262是施耐德电气继M580、M340、M241等大中小型PLC之后发布的一款集逻辑控制和运动控制于一体的PLC，不但性能优异，而且还具有直接上云等物联网的功能，可谓是当前新一代PLC的代表之作。所以看看这样的一个PLC的内部设计也更能让你对PLC有最新的认识。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDN3gR19sr9XL3mrZ06E0MCd1yPXRP8micEP6UPmEEJib3rIWEDyBpZcicrQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

这就是这次要解剖的施耐德电气最新PLC——Modicon M262，和Iphone手机大小类似，兼具逻辑控制和运动控制功能，还具有直接上云等物联网特性。

  

  

  

**再来了解一下PLC的基本组成**

  

  

  

在正式开始解剖之前，先来回顾一下PLC的基本组成。通常PLC由CPU、电源、输入电路、输出电路、存储器和通信接口电路等六大部分组成，原理图如下所示：

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNtt67Iutibo2Pv0xJbnWXc4WfZiaibn5twcxFXp55FBI3LQh3Svjd31uRg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

简单理解，PLC就像一台小型的电脑，CPU负责处理数据，包括逻辑的运算、计时、计数、算数运算和传送、通信联网，对编制的程序进行编译、执行命令，把结果传送到输出端。PLC的内存（存储器）包括两部分，一个是存放系统程序的ROM，这个只读存储器里的内容PLC出厂前已将其固化，用户不能更改，另一个是存放用户程序和工作状态数据的可读写RAM存储器。

  

然后还有输入输出单元以及I/O扩展接口，这些是负责和外部设备连接的。最后还有一个电源模块，将外部的输入电源经过处理后，转化成PLC的CPU、存储器、输入输出接口等内部电路工作所需要的直流电源，例如24V。

  

  

![](https://mmbiz.qpic.cn/mmbiz_gif/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNz6ZhALKRXmGBeG8aBpWPcmLB0gib60a9e12j1a88kVO7uV7zTNMhafg/640?wx_fmt=gif)

**下面，重点来了，**  

**PLC内部究竟有哪些设计，**

**使得它自诞生之日起就受到控制工程师的青睐呢？**

![](https://mmbiz.qpic.cn/mmbiz_gif/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNz6ZhALKRXmGBeG8aBpWPcmLB0gib60a9e12j1a88kVO7uV7zTNMhafg/640?wx_fmt=gif)

  

  

相比其他控制设备，PLC最大的特点是即坚固、简单、可靠、耐用，所以PLC在处理器和内存的选用、PCB板电路排布、电源单元和通信回路设计、以及结构设计等方面都要遵从这些特点。可以说，一个PLC是否能够长期稳定可靠的运行就决定了其品质的好坏。所以，我们主要来看PLC的可靠性方面是怎么设计的。

  

首先，我们把M262翻过来，可以看到底部有4个螺钉，不过是内六角的，常见的一字和十字螺丝刀无法拧开，这也可以避免一些人随意打开PLC。我们用专门的内六角螺丝刀轻松拧开了4个螺钉。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDN8Vf6pO4ryfj8WllqVOnylg2s9WdGL6qSehaqKjYsGowIXpFNcOPcbQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

不过，虽然4个螺钉都拧下来了，但M262的底盖和上盖之间仍然用一圈卡扣紧紧固定在一起。只能用一字螺丝刀一个个顶进去然后用力掰开底盖。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNMBvLKgdFXKyNoyg863jtibL7NMw16ZOCniazEyYn1yiciaWt9bhdskOBBA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

一圈的卡扣都一一松开后，就顺利分开底盖和上盖了。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNkHhzv00rlI8e6H3CUTlqOxy8ROuQN7KgwPDic6SskWD0lXgpUV5icnkA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

打开后盖后，就可以看到M262的主板背面了，采用的绿色的PCB板，做工精良，颜色均匀，表面光滑、平整，没有任何气味。密密麻麻的焊点布置整齐，而且做过专门的固定处理，不像普通商业电脑主板那样都有毛刺，摸上去一点也不剌手。特别值得一提的是，上盖内侧附有一个不锈钢薄板，其上有2个卡扣供轨道安装时使用，这一整张不锈钢板不仅可以防止灰尘等进入PLC，而且可以很好的屏蔽EMI电磁干扰，这一点对PLC稳定性来说十分重要，一会打开上盖会看到同样的设计。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNiapK7scaTdicn9GQVnlfZDY9MR1ZbHwzNlxRWGtuHSh6ubEK97Sp343g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

打开底盖后，就可以直接取下上盖了。取下之后，可以看到PLC上面和两个侧面都同样用一块薄钢板包着，这样，除了用于散热的两个侧面外，PLC的4个面都有屏蔽EMI设计了。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNtxUJv5TWwIT3Jy74rFdc91VDWyWoLAtftlGiciclGfP6zyGLpibfia6kMg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

下面把M262上面的屏蔽钢板拆下来，这块钢板是通过编码器接口边上的两个外六角螺柱和中间两侧的两个内六角螺钉固定的，需要用外六角螺丝刀或者尖嘴钳来拧开。拧开这4个螺钉后，就可以取下屏蔽罩，M262的庐山真面目就全暴露在我们的眼前了。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNcLoTtyN7HMT7ibV4JTDIqiaTX09gW4L3MDiaVZibOjdnaI9S6bYBC9Zspw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

我们可以看到，整个M262设计的十分紧凑、规整。采用了模块化结构，易于实现分布式的配置，共由一块主板和4块立式扩展板组成，5块板通过一个金属框架固定，结构坚固，抗震动冲击性能很强。4块扩展板依次为网络通信模块、输入和SD存储卡模块、电源模块和输入模块。

  

我们可以直接从底部拔出M262的主板。主板上可以看到一个硕大的铝制散热片，下面是这个PLC的CPU，在PLC中当然绝不会使用风扇来散热的。板子四周都有沉金，既能加强了板子的平整度，而且也保证了板子良好的接地。板子的厚度达到了2mm，刚度非常好，双手使劲掰也没有丝毫变形。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNrbRXXBptYmEJHL8XoupmTZNokmSiccdFxlfTkJEtOicduPKIEib6xyz0g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDN7F5HbIEqxRpxyxP2VibnIrQMapNviar32e3Mibkz1Wmm9dE4iabMEaciaaw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

这是M262的输入输出模块电路板，有I/O输入输出，编码器接口以及扩展接口，整个板子和主板一样，设计的十分规整，做工考究。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNLh2DTlic5k6eFibOpCpwpwd98JTWARepKic0ys2HGkRLd5ia7zQkcB9qAw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

这是电源模块。支持24V直流供电，同时带一个常开的看门狗信号。在这块板上最明显的是有2个大电容，而且用了多块发泡胶进行了抗震加固。这是用来做电源滤波的铝电解电容，规格是35V、1500μf。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNfPxjib90wKL7tHYqG7PaUrf0PC6B7tOiaADud74GSwDlf19BricibjeE0w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

这是停止开关和SD卡、mini USB接口模块。在这里最明显的是有一个蓝色的超级电容(supercapacitor)，这是在PLC突然断电的时候给PLC继续供电以保持数据不会丢失和维持时钟用的。以前往往是用电池来作为备用电源的，现在用超级电容更稳健可靠。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aWpUSOEFicFRicZ2iblibC8y52m4GJWKStDNx4q1umNIvEEgAPcmJRbfZSMC0wajfcZxU05H6caWibmXEDLyN9YsNnQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

这是通信网络的电路板，共有3个以太网口，其中最右边的同时支持Sercos实时运动控制总线。在右小角还有一个黑色的PULSE公司HX5008千兆工业级网络滤波器，在其背面是一个千兆网络扩展口。

  

  

  

**最后进行一下总结**

  

  

  

从这次施耐德电气的Modicon M262内部解剖来看，PLC作为工业自动化领域重要的控制设备，无论是内部结构设计、电路板材的做工，还是电子器件的选用都遵循了控制器稳定性和可靠性作为第一重要的原则。再加上PLC可重复编程、免去人工重新布线或重新连接硬件的特性，使得PLC从诞生伊始就成为了离散控制的首选。

  

当然，回到这次拆解的Modicon M262控制器本身，无论是做工还是CPU、存储器等部件的选用都是十分高端和领先的，高性能处理器、大内存、高带宽通信网络、低功耗，这都代表着当前PLC的发展趋势。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tEibvMRb5SGtflb73T1Lz2IJibuLLVvYddsbpxkKAGJL4EqjTb1nwdtp4dLCAmcdicXySick1872uA2w/640?wx_fmt=jpeg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0sfqJ1JicA3UjnxeCgI2rnhVnib826LrxCBmrmSdvAZhshAibDgtDsDxnlJW0IMeoyFv0gfYCK3nPzDw/640?wx_fmt=png)

