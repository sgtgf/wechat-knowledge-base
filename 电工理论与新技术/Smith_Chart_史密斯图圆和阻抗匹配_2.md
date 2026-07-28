# Smith Chart：史密斯图圆和阻抗匹配-2


> 原文地址: [https://mp.weixin.qq.com/s/xi9jogasEMDJ25BSSiT6SQ](https://mp.weixin.qq.com/s/xi9jogasEMDJ25BSSiT6SQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSrfKib8AibPT9IcfgAInIag1cY13DiclicD4IFLf7H7j09hyPtJ2K2snDuickvprFkBuWyM59R1wvlL7A/640?wx_fmt=png&from=appmsg)

_★★★__SMC-2---变换____**★★★**___

_本节简述如何使用史密斯圆图评估传输线引起的阻抗变换。阻抗匹配，即信号源内阻与所接传输线的特性阻抗大小相等且相位相同，或传输线的特性阻抗与所接负载阻抗的大小相等且相位相同，分别称为传输线的输入端或输出端处于阻抗匹配状态，简称为阻抗匹配，否则，便称为阻抗失配，有时也直接叫做匹配或失配。（传送门：[Smith Chart：史密斯图圆和阻抗匹配-1](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247497110&idx=2&sn=6a69f7d3c65f10facba2570a048600bd&scene=21#wechat_redirect)）_

___€1.___阻抗变换

假设在传输线的末端有一个阻抗ZL，其特性阻抗由Z0给出，如图2-1所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKffrf8AJyqJibtjibIqrqAuvauPeMFQ8DSwb1FlQPvF4c06ZCRBXMZsewA/640?wx_fmt=png&from=appmsg)

图2-1：传输线末端的负载阻抗图

在图2-1中，源端（源阻抗为ZS）通过长度为L和特性阻抗Z0的传输线连接到一个负载阻抗ZL（例如天线）。要找到距离负载ZL长度为L的输入阻抗Zin，我们可以使用传输线教程中的复杂方程：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQCOnLyPY3eWD0GicWTDmaZrFr57eQ3PyIsrVI0lst4h3DWibXSJVaUSk2icibaBnY64jS7c0tWuXGSKg/640?wx_fmt=png&from=appmsg)

现在的问题：如果有一个负载阻抗ZL，使用史密斯圆图，那么沿传输线L距离的输入阻抗Zin是多少？为了弄清楚这一点，让我们举个例子。设ZL=100Ω，因此归一化负载为ZL=100/50=2.0，在史密斯圆图上绘制Zin=Zin/Z0的几个值，这些值由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQCOnLyPY3eWD0GicWTDmaZrjsz6M2YwJGvE7WcDLw1UFeOYzTaFpcxIcxmXichiblzKjb1WNT2HhBiaQ/640?wx_fmt=png&from=appmsg)

计算出输入阻抗：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQCOnLyPY3eWD0GicWTDmaZrS1wg0UWBNlZa5q8eyibwxYoXCVrLrZBf8pUWEglngib4UIliaibFo5zyiaQ/640?wx_fmt=png&from=appmsg)

阻抗点如图2-2所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfJYCKbVjQeOczb4sPhlXYsY7Wdz0TodoOmibejEn3bvTh0VVWg5nJaYw/640?wx_fmt=png&from=appmsg)

图2-2：上述方程的输入阻抗绘制在史密斯圆图上

在图2-2中，每个点与史密斯圆图中心的距离相同，也就是说，复杂的输入阻抗方程在史密斯圆图上转化为简单的圆周运动，因此只需围绕史密斯圆图以圆周方式移动即可找到负载沿传输线距离L的阻抗。如上所述，再次设ZL=2.0，如果我们画一个以史密斯圆图中心为中心并穿过ZL的圆，那么我们得到图2-3中蓝色给出的圆圈：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfaB7Gyc8on8gAktAeERLvJsVdW6vbt8ybZmQnSUiaQw09qDUhEHo6c3w/640?wx_fmt=png&from=appmsg)

图2-3：恒定的VSWR圆

沿着这个圆绘制了几个点：DP1--->L=0，DP2--->L=λ/8，DP3--->L=2λ/8，DP4--->L=3λ/8。如果沿着图2-1中的传输线移动λ/8，则可以通过在史密斯圆图上顺时针旋转90°来找到所得输入阻抗。同样，如果希望从负载阻抗获得λ/4输入阻抗，则可以通过围绕史密斯圆图顺时针旋转180°来找到所得输入阻抗。因此，输入阻抗（来自方程\[1\]或史密斯圆图）每半波长重复一次，也就是说，沿传输线的半波长对应于史密斯圆图上的完整旋转。

___€2.恒定SWR圆___  

图2-3中穿过ZL的圆称为恒定VSWR或恒定SWR圆，由于这个圆圈以史密斯圆图的中心为中心，Γ沿这条曲线保持恒定，因此VSWR沿这条曲线在任何地方也都是恒定的。例如假设我们知道输入阻抗Z1=0.1（因此Z1=0.1\*50=5）位于图2-4中的位置1，假设Z0=50Ω，负载、ZL和Z2（源端阻抗）的输入阻抗是多少？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKftyzqQia9N2PNeI0Kl2anzPKNOdua9TwibpTvYktuUOqVA9EqbLayuxrw/640?wx_fmt=png&from=appmsg)

图2-4：传输线问题图

使用史密斯圆图，这个问题非常简单，首先绘制Z1的已知值以及恒定的VSWR曲线（史密斯圆图中穿过Z1的圆）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfQgfW0wiagscdsEOl1rvOcibWAclqPfyUOianrqNv7kTicpeJ0s3qdSYN4w/640?wx_fmt=png&from=appmsg)

图2-5：绘制Z1和恒定的VSWR圆

为了确定ZL，我们想在史密斯圆图上向负载移动，记得：

1#：向负载阻抗（天线）移动对应于史密斯圆图上的逆时针运动

2#：向源端移动对应于史密斯圆图上的顺时针旋转

因此要找到ZL，我们要沿逆时针方向移动，请注意，L1=5\*λ/8，由于传输线上λ/2的距离对应于史密斯圆图上的完整旋转，因此这相当于移动 5\*λ/8-λ/2=λ/8。我们可以简单地沿逆时针方向旋转90°（在史密斯圆图上旋转四分之一圈），然后我们读出该阻抗的值，结果为：

ZL=0.198-i\*0.9802 ==>ZL\=9.901-i\*49.0099

同样，要找到Z2，即源端处的阻抗，我们只需顺时针方向移动λ/8（远离天线/负载），结果是旋转90°，如图2-6所示，结果是：

Z2=0.198+i\*0.9802 ==>Z2=9.901+i\*49.0099

相应的史密斯圆图显示仅包含所需的恒定电阻圆和恒定电抗曲线：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKftyY49bGUP5Gq5vsWA7jykzkvHJFSdSVhxrvzav1ATIGRUCGYAU8iaqQ/640?wx_fmt=png&from=appmsg)

图2-6：使用常数驻波比圆得到ZL和Z2

在图2-6中，圆对应的Γ为0.8182，只绘制了Im\[Z\]=0.9802和Im\[Z\]=-0.9802的电抗曲线，因为所有其他的都与这个分析无关。在真正的史密斯圆图上，只需在最接近的电抗曲线之间进行插值即可。同样，我只绘制了Re\[Z\]=0.1（对于Z1阻抗）和Re\[Z\]=0.198（对于ZL和Z2）给出的电阻圈，所有其他曲线在史密斯圆图上都与此问题无关。最后在复杂详细的史密斯圆图上，可以看到沿外周的刻度，如图2-7所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfG8zqhOTwYPS2iacmUsenqJhQ6339uz4fPiby0xyibOrkfTplCDQJAM3xg/640?wx_fmt=png&from=appmsg)

图2-7：完全体的Smith Chart外周刻度

这些数字对应于波长，因此可以在确定由于传输线长度而产生的阻抗时更轻松地确定正确的旋转量，它对于直观地理解天线响应以及帮助可视化阻抗如何因传输线而变化非常有用，更重要的是，它在阻抗匹配中非常有用。