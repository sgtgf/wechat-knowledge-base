# 基于高压SiCMOSFET模块桥式电路串扰抑制


> 原文地址: [https://mp.weixin.qq.com/s/wpZXIPuFCt-e7yuHXM5x-w](https://mp.weixin.qq.com/s/wpZXIPuFCt-e7yuHXM5x-w)

**文章来源：**电力电子技术

**作者：**郑志豪，任小永，黄帆（南京航空航天大学，江苏省新能源发电与电能变换重点实验室，江苏南京 210016)

**摘要：**碳化硅（SiC）器件开关速度快，在高压条件下串扰现象明显，串扰尖峰容易引起桥臂直通，损坏器件。此处基于桥式电路，考虑了SiC寄生参数的影响，分析了桥臂串扰现象的原因。提出了一种有源箝位的电路，可以有效抑制桥臂串扰尖峰，并且可以减小驱动电阻，减小开关损耗。此处搭建了桥式电路实验平台，通过实验验证了该方案的有效性。在相同电阻条件下可以减小62%串扰尖峰。

**关键词：**碳化硅器件；串扰抑制；桥式电路

**1. 引 言**

SiC MOSFET作为新一代的半导体器件，具有开关速度快、导通电阻小、击穿电场高等电气特性，在高压、高频、高功率密度的电力电子变换器领域中得到了广泛关注。然而其高速开关动作使得器件和线路的寄生参数对开关瞬态的影响不容忽视，在桥式电路中会带来明显的驱动串扰尖峰。正向串扰尖峰超过功率管开通值会引起桥臂直通现象，负向串扰尖峰低于栅源极最小电压阈值会损坏功率管。SiC MOSFET模块器件与单片器件相比，寄生电容容值较大，串扰现象更为严重。因此，抑制串扰现象对于提高桥式电路的可靠性和功率密度具有重要意义。

目前，不少学者对串扰问题展开了多方面的研究。文献在驱动回路中并联两个电容,抑制栅漏极寄生电容充放电对驱动信号的干扰，并且对于不同封装的SiC MOSFET都有良好的效果。文献引入了两个辅助晶体管、两个二极管和逻辑门电路组成的栅极辅助电路，可以在开关瞬态期间主动调节栅极阻抗和栅极电压。文献提出RCD电路与谐振电路结合的驱动方案，RCD电路可以提供负关断电压，谐振电路可以产生短时间的电压脉冲以削弱串扰尖峰。文献在驱动回路添加两个电容、一个电感和若干个二极管组成谐振回路，可通过谐振电路实现正压开通和负压关断，而且可以在MOSFET处于关断状态时实现驱动电平变化，并能抑制正向和负向串扰。

此处基于高压SiC器件分析了桥臂串扰的原因，使用一种有源箝位电路，桥臂另一侧驱动信号作为箝位管开关信号。该电路结构简单，无需软件产生额外控制信号。最后实验验证该方案有效性。

**2\. SiC模块串扰原理分析**

如图1所示，由于器件寄生阻抗，无法直接测得器件内部栅源极信号，令MOSFET内部栅极和源极分别为g'，s',探头可测量栅极和源极分别为g,s。虚线框内为器件等效模型。令上、下桥臂开关管分别为SH，SL。图2给出SH，SL开关波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUaMp7eVOeWYcERppBNMS1aFuRQAUnpjXw0PTBNTQ47ScW8jlf7GMxCg/640?wx_fmt=png&from=appmsg)

\[t1,t2\]SH开通时,漏极电流逐渐增加至负载电流大小，SL续流二极管电流逐渐下降至零。此时，SH和SL两端电压还没有变化。

\[t2,t3\]二极管开始反向恢复,反向恢复电流将会在共源电感上产生一个正向压降。同时由于SL两端电压uds迅速上升，栅漏极寄生电容Cgd和漏源极寄生电容Cds快速充电，如图1所示，部分充电电流经过驱动回路和栅源极寄生电容Cgs，导致栅源极出现正向电压尖峰和振荡。SiC器件开关速度快，Cgs充放电电流可视为脉冲电流，假设脉冲电流峰值为I,则Cgs的充电电流igd为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUraWvtWibyBGllHt9icmp1x1r6h3U3DQ8YcAPDtYNIM4TOMMvFPKlqv5w/640?wx_fmt=png&from=appmsg)

\[t4,t5\]续流二极管反向恢复结束，寄生电容Cgd和Cds充电结束。栅源极电压经过阻尼振荡后处于稳定状态。

\[t5,t6\]SH关断时,在负载电流经过 SL体二极管之前，电压uds从母线电压Udc逐渐下降至零，寄生电容Cgd和Cds逐渐放电，如图3所示。部分放电电流经过Cgs，导致栅源极出现负向电压尖峰和振荡。寄生电容放电电流方向与\[t3,t4\]阶段相反,因此，电压尖峰与之前相反。根据KCL和KVL可得电压尖峰为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU7StxNEqWJvoKwFCHtRwXTpu4NiaFIiczNJyDAuGwqxXCRrEmIeL2YRibw/640?wx_fmt=png&from=appmsg)

\[t6,t7\] SL续流二极管导通，Cgd和Cds放电结束。栅源极电压经过阻尼振荡后处于稳定状态。

**3 串扰抑制方法**

串扰抑制电路基本结构如图4所示，功率管栅源极并联一个电容和一个箝位开关管，下桥臂的箝位开关管VL的驱动信号来自上桥臂的功率管驱动信号，上桥臂的箝位开关管VH的驱动信号来自下桥臂的功率管驱动信号。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAU9WGA0n82cKmibBcjryJbumiciaQ3ZS70YiaQbtkj63RmaHj2JYrfhohNng/640?wx_fmt=png&from=appmsg)

VL和V选择低压小功率、电容寄生参数小的Si MOSFET，并且需要配置驱动电阻，使得VL开通速度比功率管快，关断速度比功率管慢，如图5所示，SH开通前，VL已经导通，SH关断后，VL才会关断，在SH导通期间，VL一直处于开通状态。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUjMvE8yGM3JeNSOSbGoM9y8kS7Tlb83dBgibDtcSLNcnb6mOF46UNNhg/640?wx_fmt=png&from=appmsg)

当SH开通时，会引起SL寄生电容Cgd电压上升，产生栅漏极干扰电流![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUV2k9quMhHng9SYedcNevgWkm7C4mvbjnBcIlibKpPgJZV0XPzbspDZw/640?wx_fmt=png&from=appmsg)、栅源极干扰电流![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUibeXico6EtYySrdEJvJWtZibtibQ0fEyq3uJXZmkz47DdNJsChNm5IK8gA/640?wx_fmt=png&from=appmsg)和驱动干扰电流![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUpg5l86RKnvAWZGRTqpI6D8npXp5RME9vcY9pQQaSR7seqChNRHj3Fw/640?wx_fmt=png&from=appmsg)。因为在SH开通之前，VL就已经开通了，故而下桥臂驱动回路可以等效为图6所示的电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUvuhJCXJabwOpManYGj0niaPwibzZzYWSS2iaPQbkdyib1Bz8E5AoaNticVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUV6IfH6KvvCnsrxsbyia2s8TB2DfiayNnFYQ3S7cIqmhLWeRpiaCibJw2yg/640?wx_fmt=png&from=appmsg)

因此有源箝位电路在下管关断时提供了一个低阻抗的旁路回路，可有效吸收来自Cgd的干扰电流，减小干扰电流对Cgs的影响，从而减小串扰尖峰。该箝位电路简单可靠，无需引入额外的控制信号，不增加控制的复杂度，只需添加一个隔离器，使上管的驱动信号同时驱动下管的箝位管即可。

**4\. 实验验证**

为了验证所提串扰抑制方案的有效性，基于某公司的SiC模块FF6MR12W2M1\_B11搭建了桥式电路实验平台。SiC模块部分参数如下：最大漏源极电压1200V，输入电容Ciss=14.7nF，输出电容Coss=0.88nF，反向传输电容Crss=0.112nF，实验平台由功率板、控制板、负载电感、驱动板及SiC模块组成。桥臂串扰尖峰波形如图7所示，图7a，b为母线电压为900V时下桥臂的驱动信号ugs和上下桥臂漏源极电压uds在不同驱动电阻和不同电容CL条件下的波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUTJO6AOn297fictvWiaBTr3hhwMWj9SgcFvJL1iaoXrsanziaWvFqO9OB7g/640?wx_fmt=png&from=appmsg)

在图7a，b中，位电路明显抑制串扰尖峰，使串扰尖峰处于安全阈值内。图7c，d给出了不同驱动电阻和箝位电容条件下，下桥臂正负串扰尖峰大小。串扰尖峰会随着驱动电阻增大而减小，足够大的驱动电阻则可以确保串扰尖峰始终处于安全阅值内。

使用箝位电路，在不同驱动电阻条件下都可以显著降低串扰尖峰。驱动电阻为2欧时，使用箝位电路，正向尖峰可以减小46%，负向尖峰可以减小62%，并且不影响开关速度。若仅通过增大驱动电阻达到相同的抑制效果，驱动电阻需要增加至8欧以上，代价是降低开关速度。串扰尖峰会随着母线电压升高而增大，在高压条件下，较大的驱动电阻虽然可以在一定程度上降低串扰尖峰，但会降低开关速度，增大开关损耗。箝位电路可以在不增大驱动电阻的情况下，即不增大开关损耗的情况下，减小串扰尖峰。

**5.结论**

此处分析了桥式电路桥臂串扰情况。串扰主要由SiC自身寄生参数引起。然后，提出了一种有源箝位电路，可以有效抑制串扰尖峰。该电路结构简单有效，仅使用硬件电路即可实现，无需引入额外的控制信号。最后搭建了桥式电路，通过实验验证该方案在不同电压和驱动电阻的条件下均能有效抑制串扰尖峰。在同等串扰尖峰值的条件下可以使用更小的驱动电阻，减小开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskecwtZFtP3BgicqOytaNKAUdpic82Y9kiaK8uic6vkhku1ia4VqFHNnNV1a7sRZVwWP2W8EJx1dic3FpVw/640?wx_fmt=png&from=appmsg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)