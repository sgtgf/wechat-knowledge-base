# Smith Chart：史密斯图圆和阻抗匹配-1


> 原文地址: [https://mp.weixin.qq.com/s/DVPNx8divztwl\_GnjBmvUQ](https://mp.weixin.qq.com/s/DVPNx8divztwl_GnjBmvUQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTtBX2BakUea0ibzg56ufEBI9ZtSES0o8mzelcneftz6AkBgciasjnWAibiaBj3zMFpjKgKQlmHxrAnvg/640?wx_fmt=png&from=appmsg)

_★★★__SMC-1---Base____**★★★**___

_引言：史密斯圆图是一个归一化工具，用于将传输线和天线系统的阻抗可视化为频率的函数，史密斯圆图可从阻抗的角度增加对传输线及其行为方式的理解。在现代计算机中，史密斯圆图不仅用于简化输电线路等量的计算，它还在可视化天线或传输线阻抗方面发挥作用。_

___€1.Smith Chart简述___  

图1-1是史密斯圆图的完整版本，称为immitance史密斯圆图，它的复杂程度是原来的两倍，但实用的程度也是原来的两倍。史密斯圆是在反射系散平面上标绘有归一化输入阻抗（或导纳）等值圆族的计算图，是一款用于电机与电子工程学的图表，主要用于传输线的阻抗匹配上。该图由三个圆系构成，用以在传输线和某些波导问题中利用图解法求解，以避免繁琐的运算。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQibYRqPR09UXOVBNwgbwM2osNQiau4R9RurjORnjfe1icXTperuxps02HXIkmuwlmhmSg4XBzRB9f9w/640?wx_fmt=png&from=appmsg)

图1-1：完整的的史密斯圆图

史密斯圆图以极性形式显示任意阻抗（ZL或负载阻抗）的复反射系数Γ（即S参数里面的S11），反射系数完全由阻抗ZL和“参考”阻抗Z0决定，Z0可以被视为发射端的阻抗，或向天线提供讯号的阻抗，因此，史密斯圆图是一种显示天线阻抗的图形方法，天线阻抗可以是单个点或一系列点，以将阻抗显示为频率的函数。复反射系数Γ对于连接到具有特性阻抗Z0的传输线的阻抗ZL由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSuuycO33ABP7CoytxjvxvAALbNibqoAa18FphJND51uG9ZowGXte0WSAaBBbWgk1VGgoZAWgtnEnA/640?wx_fmt=png&from=appmsg)

我们通常将Z0设为50Ω，不过史密斯圆图可以配合任何值Z0使用。复反射系数Γ的幅度介于0和1之间，因此所有Γ可能值的集合均位于单位圆内：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQxyFHPu0TcU5yHLkUGib3cB2tn7q8yKLld6JBkFTLKvFOwFJLxUibHE0yKWKAdwUewwe1CQZj4ESibA/640?wx_fmt=png&from=appmsg)

图1-2：复反射系数（Complex Reflection Coefficient）必须位于单位圆内的某个位置

在图1-2中，沿实轴和虚轴绘制了复反射系数的所有值集，史密斯圆图的中心是反射系数为零的点，这是史密斯圆图上唯一一个负载阻抗没有反射功率的点。红色圆圈是史密斯圆图的外环，Γ等于1，沿着这条曲线，所有功率都由负载阻抗反射。

示例1：假设Γ\=0.5，根据反射系数方程，可以求解ZL为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSuuycO33ABP7CoytxjvxvAJBXAymjxlwtqOIEd4IQux9w0l1Fud18mzdGPvldsjY7pTHgoAwTQyw/640?wx_fmt=png&from=appmsg)

根据上式，当Z0=50Ω时，反射系数0.5对应于负载阻抗ZL=150Ω，我们可以在史密斯图上绘制Γ1点：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQxyFHPu0TcU5yHLkUGib3cBv2bXbASDIKr4f7xfgZahVIagBulgEibkLTzylDGZbOjicykDZWX5wVfQ/640?wx_fmt=png&from=appmsg)

图1-3：Γ1绘制在史密斯圆图上

因为Γ1是实数，该点位于图1-3中的实轴（x轴），虚数轴值（y轴）位置为0。

示例2：假设Γ2\=-0.3+i0.4，Γ2绘制在图1-4中的史密斯圆图上：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQxyFHPu0TcU5yHLkUGib3cBTnu8PpiandKgp7KQA7WBHS31fYCNzIjIYdSGicT3cjYIPh3BQa5FYBhg/640?wx_fmt=png&from=appmsg)

图1-4：Γ2绘制在史密斯圆图上

当Z0=50Ω时，Γ2对应的负载阻抗ZL=20.27+i\*21.62 \[Ω\]。

示例3：Γ3\=-i，Γ3绘制在图1-5中的史密斯圆图上：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQxyFHPu0TcU5yHLkUGib3cBRFiaGG8iaGf2xLic7URG7ucIuicialReVoO6nIF1V7HUvJibZlFrP667041g/640?wx_fmt=png&from=appmsg)

图1-5：Γ3\=-i绘制在史密斯圆图上

当Z0=50Ω时，Γ3对应于负载阻抗 ZL=-i\*50  \[Ω\]，也就是说，这里的负载阻抗是纯负虚数值，表明是纯粹的容性负载。

___€2.___史密斯图上的VSWR

由于VSWR是Γ的绝对值的函数，所以也可以从史密斯圆图中获取负载的VSWR，VSWR=1是史密斯圆图的中心，VSWR=3是一个以史密斯圆图中心为中心的圆，大小Γ\=0.5。以史密斯圆图原点为中心的圆是恒定的VSWR圆，需要注意的是，史密斯圆图的外边界（Γ\=1） 对应于无穷大的VSWR。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSZySoMQu58jMicgzLRYia9rZkLueFP5tib4p1v1wadSXVKVk3RX4nfPWofVn3N1xxo95QyEVQE5bdRA/640?wx_fmt=png&from=appmsg)

图1-6：VSWR值环

定义归一化负载阻抗：为了使史密斯圆图更通用且独立于传输线的特性阻抗Z0，在不影响反射系数Γ下，将所有的负载阻抗ZL归一化为Z0：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSuuycO33ABP7CoytxjvxvADBBFF5ApIJL6mvibyxo4QJycRQPY1L4YtCoGw8azS9ibKjkb16GD7Q6A/640?wx_fmt=png&from=appmsg)

___€3.___恒定电阻圆

对于给定的归一化负载阻抗ZL，可以确定Γ并将其绘制在史密斯圆图上，假设有如下式给出的归一化负载阻抗：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSuuycO33ABP7CoytxjvxvAiaf2a2135xznDSGSHoq9ooblJR8ohRGKjicibGdqpEag80PianqW7cDGyQ/640?wx_fmt=png&from=appmsg)

其中，Y是任意实数，如果我们将与归一化相对应的曲线绘制在史密斯圆图上，比如绘制z1=1+0\*i，z1=1+10\*i，z1=1-5\*i，z1=1- 0.333\*i，....生成的曲线如图1-7所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQxyFHPu0TcU5yHLkUGib3cBqvDnyD6XcfGON19V6sJowXaYBYvVnVuzqRHEbMQSeymkVNVSOcrApA/640?wx_fmt=png&from=appmsg)

图1-7：史密斯圆图上zL=1的恒定电阻圈

在图1-7中，外侧的黑色圈是史密斯圆图的边界，红色圆圈是一个恒定的电阻圈，这是z1=1+i\*Y 的所有值所在的位置，沿着这条曲线绘制了几个点（DP1，DP2，DP3），z1=1，z1=1+i\*2，zL=1-i\*4，相当于（50+j100）Ω，（50+j0）Ω，（50-j200）Ω

假设我们想知道曲线z2=0.5+i\*Y 在史密斯圆图上的样子，如图1-8所示DP4，z2的实部等于0.5，等效实部阻抗25Ω环。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQxyFHPu0TcU5yHLkUGib3cB1WCnLsMWxshporkMkUPjngbDSE3xHM5g4icf9gY5479DWFD6ibWduBnQ/640?wx_fmt=png&from=appmsg)

图1-8：史密斯圆图上zL=0.5的恒定电阻圈

如图1-9，从DP1到DP7，沿圆绘制了几个点，其中在史密斯图上将1.0的电阻圈标记为深红色，这些圆称为恒定电阻圈，负载阻抗的实部沿每条曲线都是恒定的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQxyFHPu0TcU5yHLkUGib3cBE16VmMUHFISOEAEoL1ibcbyEBbCfqNTNnWL7ynHmJpribPVaX1T6riazw/640?wx_fmt=png&from=appmsg)

图1-9：史密斯图上的恒定电阻圈

___€4.___恒定电抗曲线

将绘制由ZL=R+iY定义的曲线集，其中Y保持恒定，R从0到无大变化，由于R对于天线或无源设备不能为负，因此R≥0。设ZL=R+i，从DP1到DP11，由这组阻抗定义的曲线如图1-10所示，R＜0的部分被舍弃（黑圈之外的部分）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfH6eojNE0TNN6eLgRVYGcbOEae7ASpD0d2u8mRV0s8wibd6bicicXvFEPg/640?wx_fmt=png&from=appmsg)

图1-10：zL=R+i\*1的恒抗曲线

标注了沿曲线的几个点，观察ZL=1+i位于Re\[zL\]=1的圆和Im\[zL\]=1曲线的交点处。类似地，观察ZL=2+i点位于Re\[zL\]=2圆和Im\[zL\]=1曲线的交点处。

一条重要的曲线由Im\[zL\]=0给出，即ZL=R给出的所有阻抗的集合，其中虚部为零，实部（电阻）大于或等于零，结果如图1-11所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQxyFHPu0TcU5yHLkUGib3cBE16VmMUHFISOEAEoL1ibcbyEBbCfqNTNnWL7ynHmJpribPVaX1T6riazw/640?wx_fmt=png&from=appmsg)

图1-11：zL=R的恒抗曲线

Im\[zL\]=0给出的电抗曲线是穿过史密斯圆图的一条直线，沿着这条曲线有3个特殊点：在最左边DP7，其中ZL=0+i0，这是负载短路的点，Γ大小为1，因此所有功率都会被反射；在史密斯圆图的中心，是ZL=1给出的点，在这个位置，Γ为0，因此负载与传输线完全匹配，此时没有功率反射；最右边的点由ZL=无穷大给出，这是开路位置，同样Γ的幅度Γ为1，因此所有功率都反射在这一点上。