# MOS管驱动电流估算

原创 硬件笔记本 2020-02-29 15:08 undefined

> 原文地址: [https://mp.weixin.qq.com/s/QHgmKnIG1syO3dsbXXQTKw](https://mp.weixin.qq.com/s/QHgmKnIG1syO3dsbXXQTKw)

例：FDH45N50F如下参数：

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJ5xhJh442ZiaKcrXTM0I1NDjv5GwQ4TurJBHt6RBvtkncJ4EpEfK3KFu8RvPJbqpCibyrpmRDseicOQ/640?wx_fmt=jpeg)

 有人可能会这样计算：

开通电流

Ion=Qg/Ton=Qg/Td(on)+tr，带入数据得Ion=105nc/(140+500)ns=164mA

  

关断电流

Ioff=Qg/Toff= Qg/Td(off)+tf，带入数据得Ioff=105nc/(215+245)ns=228mA。

于是乎得出这样的结论，驱动电流只需 300mA左右即可。仔细想想这样计算对吗？

这里必须要注意这样一个条件细节，RG=25Ω。所以这个指标没有什么意义。

应该怎么计算才对呢？其实应该是这样的，根据产品的开关速度来决定开关电流。根据I=Q/t，获得了具体MOS管Qg数据，和我们线路的电流能力，就可以获得Ton= Qg/I。比如45N50，它在Vgs=10V，VDS=400V，Id=48A的时候，Qg=105nC。如果用1A的驱动能力去驱动，就可以得到最快105nS的开关速度。

当然这也只能估算出驱动电流的数值，还需进一步测试MOS管的过冲波形。在设计驱动电路的时候，一般在MOS管前面串一个10Ω左右的电阻（根据测试波形调整参数）。

这里要注意的是要用Qg来计算开启关断速度，而不是用栅极电容来计算。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJ5xhJh442ZiaKcrXTM0I1ND2bC8RhPJxNNzBvdHLYSSZ1RPOrvryZibmeQjsiaaunsqbQ0Ssibhca5kg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJ5xhJh442ZiaKcrXTM0I1ND92SnxQaTVGj7pljrmkX2wIiakMHo5pAbwqP1ewjrWwMMVSlvtPBSlTQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJ5xhJh442ZiaKcrXTM0I1NDdib7TiclW94US26QGdcmpTqibS2zDh6XViaSZNqyiatsZiagZgcnRuCic7joA/640?wx_fmt=jpeg)

下面讲讲MOS管开通过程

  

       开始给MOS管Cgs充电，当电压升到 5V时，Id流过一定的电流。继续充电，Id越来越大，但还没完全导通。当Id升到最大电流时，Id不再变化，Cgs也不再变化。

  

       这时输入电压不给Cgs充电，而是给Cgd米勒电容充电，然后MOS管完全导通。

  

       MOS管完全导通之后，输入电压不再经过米勒电容，又继续给Cgs充电直到Vgs等于输入电压10V。

        图中 Vgs输入电压保持不变即Qgd阶段，输入电压不给Cgs充电，而是给Cgd米勒电容充电。这是MOS管固有的转移特性。这期间不变的电压也叫平台电压。

  

        此时，MOS管的电流最大，电阻最大，根据P=I\*I\*R，此时管子消耗的功率最大，发热最严重，所以尽可能让平台电压工作的时间很短。

  

一般来说，耐压等级越高，MOS管的输入电容越大，反向传输电容Crss越小，米勒效应也相应减小。