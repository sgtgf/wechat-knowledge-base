# 开关电源PCB设计要点

原创 硬件笔记本 2023-03-21 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/JHkxXSH9RFXWh0m78T2Dxw](https://mp.weixin.qq.com/s/JHkxXSH9RFXWh0m78T2Dxw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

PCB设计是开关电源设计非常重要的一步，对电源的电性能、EMC、可靠性、可生产性都有关联。当前开关电源的功率密度越来越高，对PCB布局、布线的要求也越发严格，合理科学的PCB设计让电源开发事半功倍，以下细节供您参考。

  

**一、布局要求**

PCB布局是比较讲究的，不是说随便放上去，挤得下就完事的。一般PCB布局要遵循几点：

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZSXic8URADzpibaHu9uMvgJO7dMN2nzvcNibdaKaIecNQyxXicC4eDNPAWQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmB1dict6YpJGHhYIQajMibvYXWv3HgmyY7S9ASttCgUNeUHK02tf6nlafxW3QzBf2B40uuhLiaRPaQ/640?wx_fmt=png)

 **图1**

3、放置器件时要考虑以后的焊接和维修，两个高度高的元件之间尽量避免放置矮小的元件，如图2所示，这样不利于生产和维护，元件之间最好也不要太密集，但是随着电子技术的发展，现在的开关电源越来越趋于小型化和紧凑化，所以就需要平衡好两者之间的度了，既要方便焊装与维护又要兼顾紧凑。

还有就是要考虑实际的贴片加工能力，按照IPC-A-610E的标准，考虑元件侧面偏移的精度，不然容易造成元件之间连锡，甚至由于元件偏移造成元件距离不够。 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZTB8Glc2fo3RdJl9pyn6PKDD5ic4H2icmET6sE8azwRChwG9d9Pp3OHibw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图2**

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZcpIxYruH5zrMtvDZ7vTR1ZoibLflpZhp5ds3u5eHVks7QqWa4ITaIuA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1) 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZngclrpD41C3edVf7psRGoxbZWoKQFkD4a0XDWPcEO5yzopWQJjQ7Zg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图3**

  

6、高频脉冲电流流过的区域要远离输入、输出端子，使噪声源远离输入、输出口，有利于提高EMC性能。 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZ01Q0dr3V1msz42OhSW0j5m5hdPqyWktUetLrWWPTFEneWaia8NI5Pgg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图4**

  

如图4所示，左图变压器离入口太近，电磁的辐射能量直接作用于输入输出端，因此，EMI测试不通过。改为右边的方式后，变压器远离入口，电磁的辐射能量距输入输出端距离加大，效果改善明显，EMI测试通过。

7、发热元件（如变压器，开关管，整流二极管等）的布局要考虑散热的效果，使得整个电源的散热均匀，对温度敏感的关键元器件（如IC）应远离发热元件，发热较大的器件应与电解电容等影响整机寿命的器件有一定的距离。

8、布板时要注意底面元件的高度。例如对于灌封的DC-DC电源模块来说，因为DC-DC模块本身体积就比较小，如果底面元件的高度四边不平衡，灌封的时候会出现两边引脚高度一边高一边低的现象。 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmB1dict6YpJGHhYIQajMibvNv6pwXHW3JCK11TpQYqbpfcrKC7pR6LclBwlJxFmwUQtQCymEBOv1g/640?wx_fmt=png)

**图5**

  

9、布局的时候要注意控制引脚的抗静电能力，相应的电路元件之间的距离要足够，例如Ctrl引脚（低电平关断），其电路不像输入、输出端那样具有电容滤波，所以抗静电能力是整个模块最弱的，一定要确保有足够的安全间距。

  

**二、走线原则**

1、小信号走线要尽量远离大电流走线，两者不要靠近平行走线，如果无法避免平行的话，也要拉开足够的距离，避免小信号走线受到干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZZyhqvbUeHpY4wTKPtMia5CKEFLLRBauAn0HBGtqOG80G7oXQNSH6NNQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图6**

  

2、关键的小信号走线，如电流取样信号线和光耦反馈的信号线等，尽量减小回路包围的面积。 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZcI5AJwaHPxeT9cV9aBJrqVUmuatz3EBGQ3WLl62eaFpicdUpxmkr63A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图7**

  

3、相邻之间不应有过长的平行线(当然同一电流回路平行走线是可以的)，上下层走线尽量采用交叉用垂直方式，走线不要突然拐角（即：≤90°），直角、锐角在高频电路中会影响电气性能。 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZayAa4gGby3XyDEgca7yeYiaQtD8ERWWPKnYVxEYsnfIY1w07nwIQ1icA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图8**

  

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZD5jeRbMDEicSEvL5PaRb6vPqx3HxJBBKOmzYyPI6u5Hecpib8iaCZxzdw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1) 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZGXl4zAV6cN484RiacVwvUJ0CibDkdlD4w5RAUtHBqQeZczsx8fkMyOEg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图9**

 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmB1dict6YpJGHhYIQajMibvNteiaSRl4iaMNJ5jgKQTec437MbMhdF53uiayyfZMDzbicneNY8zJYl7NA/640?wx_fmt=png)

**图10**

  

5、高频元件（如变压器、电感）底下第一层不要走线，高频元件正对着的底面也最好不要放置元件，如果无法避免，可以采用屏蔽的方式，例如高频元件在Top层，控制电路正对着在Bottom层，注意要在高频元件所在的第一层敷铜进行屏蔽，如图11所示，这样可以避免高频噪声辐射干扰到底面的控制电路。 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmB1dict6YpJGHhYIQajMibv3h7df1cMh5gSnYLqnYtSxLVqJQWq67OCbjAey4oTazVViaURays0MfQ/640?wx_fmt=png)

**图11**

  

6、滤波电容的走线要特别注意,如图12，左图有一部分纹波&噪声会经过走线出去，右图滤波效果会好很多，纹波&噪声经过滤波电容被完全滤掉。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmB1dict6YpJGHhYIQajMibvdKeGQwbfdaxoBPsqGfRH6jYuBbdCx3CRehf9jdJz2k8fiadBV2EwcMA/640?wx_fmt=png)

**图12**

  

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZzRANZN0Nv56OS3KCeY9cnGF4zjzYkYur3IhU23tsmYpeBNvZgWXTNg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1) 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZDNhBZgO8FiaI9pCtRujSCOvy6bYhNJoI6d0iaxPzjXx55UOVVNQuTl3A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图13**

  

8、发热大的元件（如TO-252封装的MOS管）下可以大面积裸铜，用于散热，这样可以提高元件的可靠性。功率走线铜箔较窄处可以裸铜用于加锡以保证大电流的流通。

  

**三、安规距离与工艺要求**

**1、电气间隙：**两相邻导体或一个导体与相邻导电机壳表面的沿空气测量的最短距离。爬电距离：两相邻导体或一个导体与相邻导电机壳表面的沿着绝缘表面测量的最短距离。

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZ4KfONSgicF6C9WsUv0xmxga9kYQUd0G7nkltYjF1ZCLY5WlsZBhDwOA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmB1dict6YpJGHhYIQajMibvIS5WTQSDxjjImIILAYoCw7hicoXAria0dRBgEpO3xBicKc97MAeqbSK7Q/640?wx_fmt=png)

**图14**

  

一般电源模块电压与最小爬电距离的关系可参照下表：

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZ8RkSGGnTFbApn3uNyFFlWSZq8IGbb6dIvNXvL6MZXvFoXxXhPmYbPQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**2、元件到板边的距离要求。**位于电路板边缘的元器件，离电路板边缘一般不少于2mm，对于像10W以下的小型化DC-DC模块，由于元件体积和高度比较小，而且输入输出电压不高，为了满足小型化的要求，也要至少留有0.5mm以上的距离。

大面积铜箔到外框的距离应至少保证0.20mm以上的间距，因在铣外形时容易铣到铜箔上造成铜箔翘起及由其引起焊剂脱落问题。

**3、若走线入圆**焊盘或过孔的宽度较圆焊盘的直径小时，则需加泪滴，加强吸附力，避免焊盘或过孔脱落。 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZicTtjiaHbCI1cnSoibQsw0jwHRuIO3UTEV5cJibYnYxnqoAZwULwgphibWg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图15**

  

4、SMD器件的引脚与大面积铜箔连接时，要进行热隔离处理，不然过回流焊的时候由于散热快，容易造成虚焊或脱焊。 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgmB1dict6YpJGHhYIQajMibvmLicCepYbhEbAlSJ53LxTXAkPnIVoBf4v87MiaNiaGwVbw6FKw3tsQZGQ/640?wx_fmt=png)

**图16**

  

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZKJf7bbDwibia4SiaCvvqISVFeUDPkF7ic5U5L3N796nV5oicnxpwaPr0xrw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1) 

![](https://mmbiz.qpic.cn/mmbiz_png/NAaKDV9nTR9w9X3DxAUTCecIibOWHmHcZpGmiafn1vu2ZzWYMe2NRyKkG4MfXtIV137aQ9sABRaSrcTS5xR07tKQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**图17**

**各个步骤中所需注意的事项**

在任何开关电源设计中，PCB板的物理设计都是最后一个环节，如果设计方法不当，PCB可能会辐射过多的电磁干扰，造成电源工作不稳定，以下针对各个步骤中所需注意的事项进行分析。

**1\. 从原理图到PCB的设计流程**

建立元件参数－>输入原理网表->设计参数设置->手工布局->手工布线->验证设计－>复查->CAM输出。

  

**2\. 参数设置**

相邻导线间距必须能满足电气安全要求，而且为了便于操作和生产，间距也应尽量宽些。最小间距至少要能适合承受的电压，在布线密度较低时，信号线的间距可适当地加大，对高、低电平悬殊的信号线应尽可能地短且加大间距，一般情况下将走线间距设为8mil。焊盘内孔边缘到印制板边的距离要大于1mm，这样可以避免加工时导致焊盘缺损。当与焊盘连接的走线较细时，要将焊盘与走线之间的连接设计成水滴状，这样的好处是焊盘不容易起皮，而是走线与焊盘不易断开。

  

**3\. 元器件布局**

实践证明，即使电路原理图设计正确，印制电路板设计不当，也会对电子设备的可靠性产生不利影响。例如，如果印制板两条细平行线靠得很近，则会形成信号波形的延迟，在传输线的终端形成反射噪声；由于电源、地线的考虑不周到而引起的干扰，会使产品的性能下降，因此，在设计印制电路板的时候，应注意采用正确的方法。每一个开关电源都有四个电流回路：

◆ 电源开关交流回路 

◆ 输出整流交流回路 

◆ 输入信号源电流回路 

◆ 输出负载电流回路输入回路

通过一个近似直流的电流对输入电容充电，滤波电容主要起到一个宽带储能作用；类似地，输出滤波电容也用来储存来自输出整流器的高频能量，同时消除输出负载回路的直流能量。所以，输入和输出滤波电容的接线端十分重要，输入及输出电流回路应分别只从滤波电容的接线端连接到电源；如果在输入/输出回路和电源开关/整流回路之间的连接无法与电容的接线端直接相连，交流能量将由输入或输出滤波电容并辐射到环境中去。

电源开关交流回路和整流器的交流回路包含高幅梯形电流，这些电流中谐波成分很高，其频率远大于开关基频，峰值幅度可高达持续输入/输出直流电流幅度的5倍，过渡时间通常约为50ns。这两个回路最容易产生电磁干扰，因此必须在电源中其它印制线布线之前先布好这些交流回路，每个回路的三种主要的元件滤波电容、电源开关或整流器、电感或变压器应彼此相邻地进行放置，调整元件位置使它们之间的电流路径尽可能短。

  

建立开关电源布局的最好方法与其电气设计相似，最佳设计流程如下： 

1.     放置变压器 

2.     设计电源开关电流回路 

3.     设计输出整流器电流回路 

4.     连接到交流电源电路的控制电路

设计输入电流源回路和输入滤波器 设计输出负载回路和输出滤波器根据电路的功能单元，对电路的全部元器件进行布局时，要符合以下原则： 

● 首先要考虑PCB尺寸大小。PCB尺寸过大时，印制线条长，阻抗增加，抗噪声能力下降，成本也增加；过小则散热不好，且邻近线条易受干扰。电路板的最佳形状为矩形，长宽比为3：2或4：3，位于电路板边缘的元器件，离电路板边缘一般不小于2mm

● 放置器件时要考虑以后的焊接，不要太密集

● 以每个功能电路的核心元件为中心，围绕它来进行布局。元器件应均匀、 整齐、紧凑地排列在PCB上，尽量减少和缩短各元器件之间的引线和连接, 去耦电容尽量靠近器件的VCC

● 在高频下工作的电路，要考虑元器件之间的分布参数。一般电路应尽可能使元器件平行排列。这样，不但美观，而且装焊容易，易于批量生产 

● 按照电路的流程安排各个功能电路单元的位置，使布局便于信号流通，并使信号尽可能保持一致的方向 

● 布局的首要原则是保证布线的布通率，移动器件时注意飞线的连接，把有连线关系的器件放在一起

●尽可能地减小环路面积,以抑制开关电源的辐射干扰

  

**4. 布线**

开关电源中包含有高频信号，PCB上任何印制线都可以起到天线的作用，印制线的长度和宽度会影响其阻抗和感抗，从而影响频率响应。即使是通过直流信号的印制线也会从邻近的印制线耦合到射频信号并造成电路问题(甚至再次辐射出干扰信号)。因此应将所有通过交流电流的印制线设计得尽可能短而宽，这意味着必须将所有连接到印制线和连接到其他电源线的元器件放置得很近。

印制线的长度与其表现出的电感量和阻抗成正比，而宽度则与印制线的电感量和阻抗成反比。长度反映出印制线响应的波长，长度越长，印制线能发送和接收电磁波的频率越低，它就能辐射出更多的射频能量。根据印制线路板电流的大小，尽量加租电源线宽度，减少环路电阻。同时、使电源线、地线的走向和电流的方向一致，这样有助于增强抗噪声能力。接地是开关电源四个电流回路的底层支路，作为电路的公共参考点起着很重要的作用，它是控制干扰的重要方法。因此，在布局中应仔细考虑接地线的放置，将各种接地混合会造成电源工作不稳定。

  

**5. 检查**

布线设计完成后，需认真检查布线设计是否符合设计者所制定的规则，同时也需确认所制定的规则是否符合印制板生产工艺的需求，一般检查线与线、线与元件焊盘、线与贯通孔、元件焊盘与贯通孔、贯通孔与贯通孔之间的距离是否合理，是否满足生产要求。电源线和地线的宽度是否合适，在PCB中是否还有能让地线加宽的地方。注意：有些错误可以忽略，例如有些接插件的Outline的一部分放在了板框外，检查间距时会出错；另外每次修改过走线和过孔之后，都要重新覆铜一次。

复查根据“PCB检查表”，内容包括设计规则，层定义、线宽、间距、焊盘、过孔设置，还要重点复查器件布局的合理性，电源、地线网络的走线，高速时钟网络的走线与屏蔽，去耦电容的摆放和连接等。

  

**6. 设计输出**

输出光绘文件的注意事项：

● 需要输出的层有布线层（底层）、丝印层（包括顶层丝印、底层丝印）、阻焊层（底层阻焊）、钻孔层（底层），另外还要生成钻孔文件（NC Drill）

● 设置丝印层的Layer时，不要选择Part Type，选择顶层（底层）和丝印层的Outline、Text、Line

● 在设置每层的Layer时，将Board Outline选上，设置丝印层的Layer时，不要选择Part Type，选择顶层（底层）和丝印层的Outline、Text、Line

● 生成钻孔文件时，使用PowerPCB的缺省设置，不要作任何改变

当然，以上只是个人总结的一些开关电源PCB设计的经验，还有很多细节上的或其他方面的知识需要注意的，最后我想说的是PCB设计，除了原则要求和经验知识之外，最重要的一点是细心再细心，检查再检查。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。