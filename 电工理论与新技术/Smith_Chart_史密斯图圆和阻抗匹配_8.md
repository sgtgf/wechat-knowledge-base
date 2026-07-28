# Smith Chart：史密斯图圆和阻抗匹配-8


> 原文地址: [https://mp.weixin.qq.com/s/N02q2s\_-oABUoM9s-zCZrA](https://mp.weixin.qq.com/s/N02q2s_-oABUoM9s-zCZrA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSrfKib8AibPT9IcfgAInIag1OVoYJuHBObMoeiaicD37gyibGkKlZhbNn1kLFZbn4rPUia4d7X6YqthEzw/640?wx_fmt=png&from=appmsg)

_★★★__SMC-8---Case____**★★★**___

_引言：前面介绍了如何利用传输线段和串联元件或并联元件（电感和电容）进行匹配，正常的“阻抗”史密斯圆图非常适合用于串联元件的匹配，而导纳史密斯圆图则非常适合用于并联元件的匹配。在本节中，_将阻抗史密斯圆图与导纳史密斯圆图结合起来，_探讨串联和并联元件的联合阻抗匹配，这种组合称为_Immittance史密斯圆图。

___€1.___Immittance Smith圆图

如果我们将阻抗史密斯圆图叠加在导纳史密斯圆图之上，我们将得到图8-1的完全体史密斯圆图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSZySoMQu58jMicgzLRYia9rZR4YZ7vtGvjBZsTzvbnagIFy6Ymibfcq1O9TLq6X3Dx51maSibCIWu8ug/640?wx_fmt=png&from=appmsg)

图8-1：Immittance Smith Chart

图8-1的阻抗史密斯圆图看起来非常复杂，但它只是将红色的阻抗史密斯圆图覆盖在蓝色导纳史密斯圆图之上，虽然看起来很混乱，但非常实用。无论想知道并联元件还是串联元件如何影响阻抗，都可以使用阻抗图将其可视化。并联电容、电感和传输线会沿着等电导曲线（红色）移动，从而影响负载阻抗。串联电容和电感会沿着等阻曲线（绿色）移动，从而影响负载或天线阻抗。串联电阻会使阻抗沿着等电抗曲线移动，并联电阻会使阻抗沿着等电纳曲线移动（不常用）。

使用史密斯圆图，可以用一个电容和一个电感来匹配任意阻抗（反射系数小于1）：如果阻抗与Re\[z\]=1等阻圆相交，则可以将其与串联电感或电容匹配。如果阻抗与Re\[y\]=1等导纳圆相交，则可以将其与并联电感或电容匹配。因此，我们将使用一个元件在史密斯图上移动阻抗，使其与Re\[z\]=1圆或Re\[y\]=1圆相交，然后使用第二个元件将其移动到史密斯圆图的中心。

___€2.Case1___

假设天线的阻抗为Z\_A=0.1-i0.2，我们知道串联电感会将该阻抗沿Re\[z\]=0.1圆顺时针方向移动，我们希望沿该圆移动该阻抗，直到它与Re\[y\]=1圆相交。使用图8-1的导纳史密斯圆图，我们需要移动天线导纳。（y\_A=1/Z\_A=2+4i ）沿Re\[z\]=0.1圆，如图8-2所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSZySoMQu58jMicgzLRYia9rZkJ4iciaQHVGGdIAWplnGZWuf9BKmCObfRl0kDtEcbE7PmBv07kGiaTWXA/640?wx_fmt=png&from=appmsg)

图8-2：使用串联电感移动天线阻抗

如果将归一化电抗Z\_L=i0.5 的电感串联添加到Z\_A，则结果为Z\_1=0.1 +i0.3，如图8-2所示。请注意y\_1等于1-3i，处于Re\[y\]=1圆上，现在可以使用并联元件将阻抗Z\_1移动到史密斯圆图的中心，由于y\_1=1-3i，可以使用归一化电纳为3的电容，电容的具体值取决于频率。并联电容使阻抗Z\_1沿着等电导圆移动阻抗，如图8-3所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSZySoMQu58jMicgzLRYia9rZ4hoZ4jFLqKSUtsD8fstRyiaZ2EpgfrPUIgD3B4Fgg3SmFRLaLicPlzZg/640?wx_fmt=png&from=appmsg)

图8-3：完成阻抗匹配

因此通过串联电感和并联电容实现了对阻抗Z\_A的匹配，该匹配网络如图8-4所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSLMsHNtpqyhVrVySu1mXamOHicwDpDJ4Orn7h75ktRhCfFMvBynSYtBgrIGpRX2QicnIFdUm9xxdyQ/640?wx_fmt=png&from=appmsg)

图8-4：阻抗匹配网络示例1

___€3.Case2___

在示例1中，阻抗Z\_A=0.1-i\*0.2的天线与串联电感和并联电容进行匹配，那有什么替代方案来匹配这个阻抗？回想一下，我们通过串联电感将阻抗Z\_A移动到与Re\[y\]=1圆的相交位置，通过观察导纳史密斯圆图，我们也可以用串联电容来实现这一点。使用串联电抗为-i\*0.1的电容，阻抗将转换为Z1=0.1-i\*0.3，相当于y1=1+i\*3，如图图8-5所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSZySoMQu58jMicgzLRYia9rZX6ZsHr2ibTuiavDhbtuicA0UEyNkTTGEP0KFZibiaU86DG16CPmg3TCMFxA/640?wx_fmt=png&from=appmsg)

图8-5：使用串联电容器将zA移动到re\[y\]=1圆

要完成阻抗匹配，我们只需要抵消电纳，也就是说，如果我们并联一个电纳为-i\*3的电感，阻抗将移至史密斯圆图的中心，如图8-6所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSZySoMQu58jMicgzLRYia9rZPmPkmPRpGib7tHROs9dQISCxAQNcQ2LHQury5vCvLQnsQeMed58iaicgw/640?wx_fmt=png&from=appmsg)

图8-6：并联电感可以抵消电纳

该阻抗匹配网络如图8-7所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSLMsHNtpqyhVrVySu1mXamPhqaqgFFr4sSR3vOdZ8DcXTgg8RCy4I0ykzFnYbOSBRUTSvKfNfxow/640?wx_fmt=png&from=appmsg)

图8-7：示例1的阻抗匹配网络

因此，我们使用串联电容和并联电感进行了阻抗匹配，在上一节上，这是使用串联电感和并联电容完成（传送门：[Smith Chart：史密斯图圆和阻抗匹配-7](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247497309&idx=1&sn=eb10aea4a57e5ad72646ab80c30d2b0d&scene=21#wechat_redirect)）。