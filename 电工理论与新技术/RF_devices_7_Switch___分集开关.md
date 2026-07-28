# RF devices-7：Switch---分集开关


> 原文地址: [https://mp.weixin.qq.com/s/OGmkpIyPSR\_6TeaT--jbuQ](https://mp.weixin.qq.com/s/OGmkpIyPSR_6TeaT--jbuQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRocMQNXqg6iafWTe8qNXziaraIXRibWwsKcuiaof7cxE0nj7SKk7DhOcunhsrbibFyFEJ5YLSI4rWvhGw/640?wx_fmt=png&from=appmsg)

____**★★★**______SWITCH-2---分集开关______**★★★**____

引言：分集技术通过利用多个独立的信号路径来提高通信系统的可靠性和性能，比如应对多径衰落，而这也是分集开关的由来，分集开关是一种用于射频信号路径选择的开关设备，其主要功能是在多个接收或发射路径之间进行切换，以实现信号的分集接收或发射。分集开关可以根据不同的信号条件和系统需求，选择最佳的信号路径，从而提高信号的质量和稳定性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ8blfDJicuGPz5fP6YPa0ZemZcNyJJRRVGNaAQVOJrIEuvZnb0EphbvTS2efq6oezfYT3iaudLspPQ/640?wx_fmt=png&from=appmsg)

**_图7-1：发射分集开关和接收分集开关_**  

___€1.分集开关___

与前章节的分立式开关相比，分集开关主要用于多天线分集接收系统中，它通过对多个天线接收到的信号进行选择或合并，通常基于信号强度、信噪比等参数进行自适应切换，‍以提高接收信号的质量和可靠性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ8blfDJicuGPz5fP6YPa0ZeLbMKCQ0Q1Y6NeQEzOATD2Dfhwicde5tA9OoWBzoLarqibtribZg4z1PnA/640?wx_fmt=png&from=appmsg)

**_图7-2：分集天线开关切换_**  

当一个天线接收到的信号质量较差时，分集开关会自动切换到另一个信号质量较好的天线，或者将多个天线的信号进行合并处理，以获得更优的接收效果。而分立式开关，是一种具有多个独立输入输出端口的开关，通过控制信号来实现不同端口之间的连接或断开，从而实现信号的切换或路由功能。每个端口都可以独立地与其他端口进行连接或隔离，其工作原理类似于一个多路复用器或解复用器，根据控制逻辑将输入信号切换到相应的输出端口。当然随着技术的发展，分立式开关和分集开关的界限也越来越模糊，例如Qorvo的分集开关RF1628所示，其兼有分立开关的路由功能和分集开关的功能。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSyibOLxKVtxDWJ12MbQ1FeLHuTajevM9MaGc9BHZ3GlFvJBNQez0NjxLNic0cYMEFxFHxic5q7icnODw/640?wx_fmt=png&from=appmsg)

**_图7-3：Qorvo的分集开关RF1628_**

___€2.工作过程___

在接收模式下，分集开关可以根据信号强度、信噪比等参数，选择最佳的接收路径，当一个接收路径的信号质量下降时，分集开关可以自动切换到另一个接收路径，以保证接收信号的质量。在发射模式下，分集开关可以根据系统的需求，选择不同的发射路径，以实现信号的多路径发射，提高发射信号的覆盖范围和可靠性。

______€3.___应用场景___

1#：移动通信系统，在手机、基站等移动通信设备中，分集开关被广泛应用于实现信号的分集接收和发射。通过使用分集技术，可以提高通信系统的抗干扰能力和信号质量，从而提高通信的可靠性和稳定性。

2#：无线局域网（WLAN），在WLAN设备中，分集开关可以用于实现信号的多天线分集接收，提高无线信号的覆盖范围和传输速率。

3#：在卫星通信和雷达系统中，分集开关可以用于实现信号的多路径接收和发射，提高通信的可靠性和稳定性以及雷达的探测能力和抗干扰能力。

______€4.___性能指标___

分集开关工作的频段非常宽，不同频段下，器件的频响也不一样，所以分集开关会给出不同频段下的典型性能参数指标供我们设计参考使用，例如RF1628给出了UMTS（3G）的Low Band、High Band，LTE的Low Band、High Band，甚至还有更细的频率范围。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRocMQNXqg6iafWTe8qNXziar1pWBedPeulNfeGlYH236mzcE59tQrXoF1AAnHQmu89W2tsMicwMSibqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRocMQNXqg6iafWTe8qNXziarblOLANiaLkRbBfSGsjotctMDAYcFkPrpP4933b6iaaEPuVhFwr43xe4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRocMQNXqg6iafWTe8qNXziar81TObYP3VtBic1jDqC0Lr9ovmJb2Mic7pwsXfaOj2ZNRia6uicYFGaw6Fw/640?wx_fmt=png&from=appmsg)

**_图7-4：分集开关RF1628的一些性能参数_**

按照优先级，我们着重关注其插损、隔离度、谐波，谐波是指频率为基频整数倍的信号分量，这些谐波可能会对通信系统等产生影响，例如引起干扰、降低信号质量等。通过测量和分析谐波的功率等参数，可以评估系统的性能和质量，确保其符合相关标准和要求。

插入损耗：插入损耗是指信号通过分集开关时所产生的功率损耗，插入损耗越小，分集开关对信号的影响就越小。

隔离度：隔离度是指分集开关在不同信号路径之间的隔离能力，隔离度越高，不同信号路径之间的干扰就越小。

开关速度：开关速度是指分集开关从一个信号路径切换到另一个信号路径所需的时间，开关速度越快，分集开关对信号的切换就越及时，从而提高系统的性能。

功率容量：功率容量是指分集开关能够承受的最大射频功率，功率容量越大，分集开关就能够应用于更高功率的射频系统中。

通过使用分集开关，可以实现信号的分集接收和发射，提高通信系统的可靠性和性能。在选择分集开关时，需要根据具体的应用场景和系统需求，综合考虑插入损耗、隔离度、开关速度和功率容量等性能指标。