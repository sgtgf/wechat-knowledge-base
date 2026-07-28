# Debug Notes-4：：5G CH1路功率校准异常


> 原文地址: [https://mp.weixin.qq.com/s/1l\_h1\_KwZmYrbvIU3GkvWg](https://mp.weixin.qq.com/s/1l_h1_KwZmYrbvIU3GkvWg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTiah5rXLdlYGdViavjB4pXQic0R6sYypjV4ibiaqyicMJpRQrICSsAQJUbMpPbzVysYum6dxxKzDh48kfA/640?wx_fmt=png)

____**★★★**______Debug Note-4---5G CH1路功率校准异常______**★★★**____

_____撰稿：Timothy_____ 

_____校稿：Timothy_____

引言：在紧凑空间的射频布局布线里面，如何有效规避不同频段之间的互扰极其重要，较差的布局走线会大大降低隔离度，导致信号功率出现衰减，信号失真等等问题。本节分享笔者做的一款产品涉及到无线Wi-Fi，在进行Wi-Fi射频参数校准时出现的一些问题以及解决过程。

€1.现象描述

5G在校准时，会出现以下三种情况：

1#：CH1路功率经常为-999，即检测不到功率。

2#：CH1路功率非常低，比目标功率低了7~8dBm以上。

3#：即使补偿很小的线损时，依旧检测不到功率或功率偏低。

€2.问题分析

针对以上现象，分别做了如下处理：

1#：重新换了新的RF Cable线，校准依旧fail。

2#：更换1分4功分器为1分2功分器，校准Pass的概率增大，但是即使QSPR报了Pass，实际测试时功率依旧有偏低的现象。

3#：高通实验室分析，分别配置了GLUT、PLUT以及ALUT的寄存器依然解决不了问题。

4#：针对Qorvo的QM48859芯片相关电路，Qorvo提供了他们之前有遇到过该类似问题的一些建议。

5#：如图4-1所示，发现由于2.4G和5G的CH1路射频座和走线距离比较近，导致5G的功率泄漏到2.4G链路上面。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEeXf5EvqQnvloHRFawkv8j2WQO7Zyk0icvbicVW1DiaT6CpTcN9j9Wp4qg/640?wx_fmt=png&from=appmsg)

图4-1：2.GHz和5GHz CH1通路Layout

关闭2.4G，只发送5G的功率时，测量2.4G CH1路的射频座，发现多片板都存在5G CH1路功率泄漏到2.4G CH1路的现象（蓝色数据），红色的数据是5G功率有跳变的现象。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEMVndCH8xicWYUibnfK1up426VBkXb9dEBSIAvVc8QHYZSLARhbTQYjvg/640?wx_fmt=png&from=appmsg)

表4-1：2.GHz和5GHz CH1功率泄漏值

根因：功率泄漏导致了5G校准fail，即使校准Pass，但实测功率有跳变的现象。

€3.根因分析

由于2.4G和5G是共用一个Coupler（耦合器），那么如果2.4G链路受到耦合干扰后传送5G的功率信号，会导致5G链路的反馈不准。QM48859的内部框图如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPE4ulPEXhn7UrnQhIzf9h6W1ZksCsibz2m49TOY41NHibMPRzE880lsJIQ/640?wx_fmt=png&from=appmsg)

图4-2：QM48859的内部框图

5G CH0路也是使用QM48859，但CH0路没有问题，因此QM48859内部的2.4和5G隔离度问题不大。但是5G CH0和CH1路最大的不同如图4-3所示：CH0后面加了2.4G和5G的diplexer（双工器），而CH1没有，因此需要重点排查5G CH1路QM48859后面的链路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEoicxQAVOLjAYoibR9zXfdIlJtH0OkxNv0EdAvoPjyQLZWQkdWiblkC1Ig/640?wx_fmt=png&from=appmsg)

图4-3：2.4和5G CH0通路经过双工器

由于2.4G最初没有调试为LPF匹配，如图4-4，该2.4G射频座直连到QM48859 FEM芯片引脚，对5G的隔离度很小只有2dB左右。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPErjO0kRJQnBzuVBbhaiae11MLmKp8jd9E49UgIU9RwtzZpB5rQFOAaicA/640?wx_fmt=png&from=appmsg)

图4-4：2.4G CH1通路相当于直连FEM引脚

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEdGEOOgMZT08kWyOib1JvHfn3yziaiaGs7FwRSmZYOUIN16pZAlGlRYFOQ/640?wx_fmt=png&from=appmsg)

图4-5：测量2.4G CH1白色链路对5G CH1的插损

排查耦合功率的部位，特意测量其中一片板：只发送5G的功率，量测了2.4G FEM直接出来的位置的功率为-5dBm，而射频座子上面的功率为-2dBm。结合图4-5中2.4G CH1链路对5G的插损为2dB左右，可以判定耦合位置大致在2.4G匹配之后到射频座子的整个链路，如图4-6所示，即白色段被5G CH1耦合干扰。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEYfu13HHsNzqucDO9exJmZ9eYaibW2NYFMsEdmUwfANiar6rhYxhTicDwQ/640?wx_fmt=png&from=appmsg)

图4-6：耦合干扰位置

€4.解决方案

在2.4G CH1的FEM后端，调试为LPF滤波器匹配之后，对于5G的隔离度有18~22dB左右，如图4-7所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEH9y6cCqMAKicIvkUCIKXBgRicqMaKqH7hicnhUMKNWAZtkhMhAFgWWBsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEX349YkMNYnictFg5UxxYGBXIjlnmTCP4oviaHiamXLfgWQ0cKngwvslVg/640?wx_fmt=png&from=appmsg)

图4-7：2.4GHz CH1修改为LPF匹配

在2.4G 的FEM后端加了LPF匹配后，泄漏功率减小很多，测试如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQUT4ZBT9JVjOX0z0q0eTPEGKjLPibSccic4iaiajPxmjJz4cfE9BmVic53Llwz2Toic9r6My7UqX1gp9ug/640?wx_fmt=png&from=appmsg)

表4-2：2.GHz和5GHz CH1功率泄露复测值

通过加了对2.4G 链路LPF的低通匹配后，5G校准很容易Pass，并且校准OK后，5G功率也没有发生跳变的情况。

€5.5G功率校准问题小结

1#：规避该问题的措施：

方法一：QM48859 FEM芯片后面加上2.4G和5G的diplexer，来提高隔离度。

方法二：QM48859芯片后面的2.4G调试为LPF匹配，而5G调试为HPF匹配，同时匹配的元器件一定要紧靠QM48859摆放。

注意无论以上哪种方法，都需要注意2.4G和5G的微带线做到完整隔离，即拉开间距和至少一排地过孔隔离。

2#：Wi-Fi校准时还有如下注意点：  

1#：产品电量要充足 ，建议至少50%以上。

2#：功分器隔离度要好。

3#：2.4G CH1 FEM出来的匹配预留位置比较靠近FEM芯片，否则过长的走线根本挡不住5G功率的干扰。