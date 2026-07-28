# SiC MOSFET短路特性、短路保护分析


> 原文地址: [https://mp.weixin.qq.com/s/ChHCEnoaL8fJ8EJ2DjNJHw](https://mp.weixin.qq.com/s/ChHCEnoaL8fJ8EJ2DjNJHw)

SiC MOSFET在短路情况下表现出独特的特性，需要特定的保护措施来确保其安全可靠运行。‌

SiC MOSFET（碳化硅金属-氧化物-半导体场效应晶体管）相比传统Si MOSFET，具有更高的开关频率、更低的损耗以及更好的热性能，因此在高速开关应用中具有显著优势。然而，高速开关动作可能带来更多的开关震荡、电压和电流应力，以及EMI干扰问题。特别是在短路情况下，由于SiC MOSFET的电流密度大，热量上升快，且短路耐受时间短，容易发生器件损坏甚至整个电气设备的烧毁。因此，对SiC MOSFET的短路特性及保护方法的研究至关重要。

短路特性方面，SiC MOSFET在短路时表现出退饱和特性，能够保证一定的短路时间（约2-3微秒）。其短路能力是导通特性以及可靠性的折中结果。短路保护方法包括电流检测、杂散电感压降检测、门极电荷检测及退饱和电压检测等，这些方法需要适当调节消隐时间及灵敏度以实现有效的保护。

在保护措施方面，研究显示，SiC MOSFET的短路保护面临多方面的挑战，包括芯片面积小、电流密度高导致的短路承受能力较弱，以及短路工况下栅极氧化层可靠性问题。为了确保SiC MOSFET可靠运行在安全工作区内，短路保护电路需要具有更快的响应速度。此外，由于SiC MOSFET的结电容更小、开关速度更高，其独特的正温度系数跨导导致在较高的dI/dt和dV/dt条件下，短路保护电路的快速响应与抗噪声能力难以兼顾。

综上所述，SiC MOSFET在短路情况下的保护不仅需要技术上的创新，还需要对器件特性有深入的理解和精确的控制，以确保其在实际应用中的安全性和可靠性‌。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl7gz39Aa134EBnxkYqLeU3X0liaRia6nG4X1NMIqIFjl4eajj93fpbxUEm0Jj9OqrmqYGZJO5kf9icQ/640?wx_fmt=png&from=appmsg)

**SiC MOSFET的短路保护**

**1.短路故障**

短路故障是导致SiC MOSFET失效的重要原因之一，尽管SiC MOSFET具有较好的导热性能，但与Si器件和SiC MOSFET的短路性能相比，SiC MOSFET的短路保护在以下几个方面更具挑战性。

  

（1）首先，在相同额定电流容量下，SiC MOSFET芯片面积小，电流密度高，这就导致SiC MOSFET短路承受能力较弱；  

  

（2）其次，在短路工况下，SiC MOSFET较弱的界面质量会带来栅极氧化层可靠性问题，由于SiC MOSFET需要更高的正向栅极偏压，栅电场的增高会进一步加剧短路时栅极氧化层退化问题；  

  

（3）为了确保SiC MOSFET可靠运行在安全工作区内，其较弱的短路承受能力就要求短路保护电路具有更快地响应速度。然而，与Si器件相比，SiC MOSFET 的结电容更小、开关速度更高。

  

SiC MOSFET独特的正温度系数跨导导致其开通时的dI/dt和dV/dt 随着结温的升高均增大。在较高的dI/dt和dV/dt 条件下，SiC MOSFET 短路保护电路的快速响应与抗噪声能力难以兼顾。

  

**2.短路故障类型**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl7gz39Aa134EBnxkYqLeU3RM2bIheiavKbsVfLzKd2lBlbm6S9ibiaHvy7V7YnZjcUK8HNkGCYFV7tw/640?wx_fmt=png&from=appmsg "SiC MOSFET 短路保护 电路")

  

由于短路回路电感较小，一类短路故障电流上升快，对器件危害大，保护难度较高。

**3.短路测试方法**

两种常见的短路测试方法

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl7gz39Aa134EBnxkYqLeU3AxsBl04C6W3IpbZ0ofmJ3IA08SqCwr9bkwpeEE8wsHw0HZsxxCU91w/640?wx_fmt=png&from=appmsg)

  

（1）基于双脉冲测试的短路测试方法。

该方法使用“粗短铜排”代替双脉冲测试电路中的负载电感来模拟短路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl7gz39Aa134EBnxkYqLeU3GzduB4tYokjYDtydcPiaumtBjP9Twh7cvKibYzmkEQekQcYdqTTtZUWw/640?wx_fmt=png&from=appmsg "SiC MOSFET 短路保护 电路")

当脉冲发生器向驱动器1发送高电平信号时，打开上桥臂 SiC MOSFET，再向驱动器 2 发送高电平信号，就可以实现 HSF；当脉冲发生器向驱动器 2 发送一个信号使待测 SiC MOSFET 正常开启时，再向短路控制开关 S 1 发送闭 合信号使故障电感 LFault 接入功率回路，就可以实现FUL。

  

（2）基于非线性元件的无损短路测试方法。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl7gz39Aa134EBnxkYqLeU3SpGd5NcuaX6iaJIfibyUu80LibYB6ovs0sPq4y7KfibGCfbajvAFeaCMdQ/640?wx_fmt=png&from=appmsg "SiC MOSFET 短路保护 电路")

不同的 SiC MOSFET 短路测试方法如图所示。该方法是在被测 SiC MOSFET的短路回路中串入非线性元件，如图所示。非线性元件在额定电流时内阻较低，与SiC MOSFET 相比饱和电流更小。  

  

当脉冲发生器通过驱动器1开启该非线性元件时，再通过驱动器2开启待测器件就可以模拟HSF。当短路电流达到该元件的饱和电流时，短路电流就会被 限制。当短路电流持续增大时，该元件就会“熔断”。  

**4.短路失效模式**

目前，SiC MOSFET的短路失效模型主要有栅源级失效和热逃逸失效；

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl7gz39Aa134EBnxkYqLeU3iaCxBRMibuowt8nGhODsBnqKfWeLTCPhXWk7qQ14vzDHRxyo2Mbuz5Hw/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl7gz39Aa134EBnxkYqLeU3kEhDlDLH9bRxKQNSwAiaquhCDmibIYIL0Kb02ewEWiabUHjb3P1zzegug/640?wx_fmt=jpeg&from=appmsg "SiC MOSFET 短路保护 电路")

通过两种失效模式的现象和成因不难看出，短路能量较低时可能会导致SiC MOSFET栅源极失效，而短路能量较高时可能会使 SiC MOSFET发生热逃逸失效。SiC MOSFET 栅-源极失效时不一定会发生热逃逸失效，但是热逃逸失效发生时必定伴随有栅-源极失效。  

  

**5.短路保护技术**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl7gz39Aa134EBnxkYqLeU3OibMuicOq9tO7DliaONbYp47Bb115Z1Cw8tL6iaJwvOt5UWJgnWibIUSyxQ/640?wx_fmt=png&from=appmsg "SiC MOSFET 短路保护 电路")

  

**6.短路关断策略**

（1）大电阻关断。大电阻关断是在检测到短路后，利用大阻值栅电阻来减缓关断电流下降速率从 而实现关断过电压的抑制。

  

然而，大电阻关断在抑制关断过电压的同时也致使关断延迟时间增大，导致 SiC MOSFET 不能及时关断，为此，在关断过程中采用不同栅极电阻关断 SiC MOSFET 短路电流，从而兼顾了SiC MOSFET 短路关断过电压与关断延迟时间，但大电阻关断可能导致 SiC MOSFET因关断损耗过大而发生失效。

  

（2）降栅压关断。降栅压关断是在检测到短路后，先缓慢降低栅极电压，使 SiC MOSFET 维持导通状态。在较低栅极电压下，SiC MOSFET漏极电流会被限制在较低水平，经过一定延迟后，再采用负压关断短路电流。该方法通过缓降栅压抑制短路电流，从而降低短路关断过电压，但是该方法需要多种栅极电压，电路结构实现复杂。

SiC MOSFET在短路情况下表现出独特的特性，需要特定的保护措施来确保其安全可靠运行。‌

文章来源：KIA-Ai

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)