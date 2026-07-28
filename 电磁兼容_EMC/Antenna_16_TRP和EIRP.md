# Antenna-16：TRP和EIRP


> 原文地址: [https://mp.weixin.qq.com/s/BcAlkqvG4PN4zT2jQgyJkw](https://mp.weixin.qq.com/s/BcAlkqvG4PN4zT2jQgyJkw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TStpbLuIPs7OME2uWJDZhxiaMtP47fibR5QlZmabfD30KvPuhc9nAQ5CzpRQpeYSt82V8jdwBZptuFg/640?wx_fmt=png&from=appmsg)

_

__**★★★**____Antenna-16---TRP and EIRP____**★★★**__

_

引言：要了解天线和无线电系统的整体性能，唯一的方法就是测量总辐射功率TRP，当手机获得无线运营商（例如AT&T、Verizon、中国移动、T-Mobile等）认证时，他们不会指定天线效率，而是指定手机整体的TRP值，在实际应用中，这才是最重要的参数，并且它与天线和无线电系统都密切相关。

____€1.总辐射功率（TRP）____

总辐射功率（TRP） 是衡量天线连接到实际无线电设备（或发射机）时辐射功率的指标，TRP是一种主动测量方法，即使用带电发射机通过天线进行发射。在所有可能的角度上计算并求和（因此它是球面或三维测量）得到接收总功率，结果即为总辐射功率。

假设发射机连接到50Ω负载时输出功率为20.0dBm（或100mW），远场总接收功率测量值为17.0dBm（可在暗室中测量，参见辐射方向图测量），由此得到的TRP为17.0dBm。

为什么不能计算出无线电的发射功率，然后减去天线效率来得到总辐射功率？答案是TRP测量实际运行系统中的辐射，它不仅取决于天线，还取决于发射机以及无线电与天线之间的连接。举例来说，考虑收音机在连接到50Ω负载时输出功率为20.0dBm，因为天线的阻抗并非真正的正好50Ω，尤其是在天线需要工作在更宽的频率范围（大带宽）时。

在这种情况下，天线阻抗偏离50Ω导致的功率损失，不仅仅是阻抗失配造成的，而是因为收音机连接到不同阻抗时，其输出功率也会有所不同。极端情况下，如果收音机端子之间出现开路或短路，则输出功率将为零。对于驻波比为3 :1的天线，功率输出通常会波动3dB（范围在17到23dBm之间，对于阻抗不匹配的天线，实际功率可能更高）。

____€2.TRP方程____

将天线的辐射方向图与总辐射功率联系起来，以及与有效各向同性辐射功率（EIRP）的关系，可以以数值方式计算TRP。

假设一个天线的辐射方向图由下式给出R（θ，ф），其中θ和ф是球坐标中的标准变量。R的单位是瓦/球面度（球面度只是一个二维角度单位，球体的表面积等于4\*pi球面度）。总辐射功率是R的球面积分，这意味着我们对θ和ф在每个可能的角度上进行积分：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TStpbLuIPs7OME2uWJDZhxia0iamDQy02gpyA2P528WWKa9PMzvBBNiaVbxmnSapvBydpLWnQHWUziaDA/640?wx_fmt=png&from=appmsg)

在公式\[1\]中，TRP的单位是瓦\[W\]，当在电波暗室中测量总辐射功率时，实际上是在每个角度测量EIRP，然后对整个球面取平均值（球体的表面积是4\*pi），因此我们可以根据EIRP计算TRP：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TStpbLuIPs7OME2uWJDZhxiarUP2P3MAl9sfpgB3E1C3pZzAslT8FrzfJJgPe9xhsGQnPVziaKfUAAA/640?wx_fmt=png&from=appmsg)

为了准确捕捉天线的辐射功率，我们需要测量其垂直和水平（或θ和φ分量） 极化功率，因此我们可以将公式\[2\]分解为线极化功率的形式来重写：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TStpbLuIPs7OME2uWJDZhxiaZe8ibTQPbAVWMbLFtDATra61GwOAwOIE6PBuA4ZgoKZlY4ibvmzGEVEA/640?wx_fmt=png&from=appmsg)

如果想根据一组EIRP的采样值进行数值计算TRP，可以用公式\[4\]中的求和来近似计算：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTmnDTKWaBswMndXLxa5JUwKzhcy1jDUL7BJHJ0H9jFyLFQWPHgtZ43N4iaWriatnzoIicJWzRAkX13g/640?wx_fmt=png&from=appmsg)

在公式\[4\]中，需要注意的是沿θ轴在N个位置对EIRP进行采样，沿ф轴在M个位置对EIRP进行采样（总共N\*M个点的测量）。

____€3.有效全向辐射功率 （EIRP）____

EIRP是有效全向辐射功率，也称为等效全向辐射功率，在天线测量中，在单个方向上（即对于固定的θ和ф）测量的辐射功率称为EIRP。通常情况下，对于天线辐射方向图测量，如果给出一个EIRP值，则该值将是所有测量角度中EIRP的最大值，EIRP也可以理解为完全各向同性天线为达到测量值需要辐射的功率量。  

假设测量任意天线的辐射功率，设在θ\=90°时测得峰值功率θ，ф其值为EIRP=20dBm=-10dB=\[0.1W=100mW\]。然后，一个辐射功率为20dBm的理想各向同性天线，在与我们天线相同的峰值角度下，也会产生相同的测量功率。

EIRP通过下式将无线电发射功率（P\_t）、电缆损耗（可能包括天线失配）L和天线增益（G）相关联起来：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTmnDTKWaBswMndXLxa5JUw1kYtFJsO0gX1LcsPp2xRodrLSEt2sYVltkT0icVSddYmGUrzYft2m6w/640?wx_fmt=png&from=appmsg)

通常电缆损耗L只占dB的一小部分，可以忽略不计。

____€4.有效全向辐射功率 （EIRP）____

如果天线的峰值EIRP和方向性（D）已知，则总辐射功率（TRP）可由以下公式求得：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTmnDTKWaBswMndXLxa5JUw5yJLsVaU15BvSzmTLC5jHibLIKPKgVm0calibkHGrCZgNxasCjEQxDZw/640?wx_fmt=png&from=appmsg)

这样，如果预先知道天线的方向性和峰值角度，则使用上述公式可以大大缩短测量时间。