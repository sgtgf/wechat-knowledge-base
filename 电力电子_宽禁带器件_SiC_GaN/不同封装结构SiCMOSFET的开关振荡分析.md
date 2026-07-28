# 不同封装结构SiCMOSFET的开关振荡分析


> 原文地址: [https://mp.weixin.qq.com/s/QCblT38w6fEjpdAOH6vGFg](https://mp.weixin.qq.com/s/QCblT38w6fEjpdAOH6vGFg)

文章来源：电力电子技术

作者：欧宏1,2，李伟邦1,2，方玉鑫1,2，花清源1,2（1.南瑞集团有限公司（国网电力科学研究院有限公司），江苏南京 211106;2.南京南瑞半导体有限公司，江苏东南京 211100)

摘要：此处分析了不同封装结构碳化硅金属-氧化物半导体场效应晶体管（SiCMOSFET)在开关过程中振荡的产生原因和影响因素。首先建立简化电路模型，准确计算出开关稳态后电压振荡的时域表达式，该电路模型考虑了器件的相关性能参数、器件和电路中的寄生参数。其次通过Matlab软件对模型中的时域表达式进行波形拟合。最后搭建了双脉冲测试平台，实验验证了模型的精确性，也具体量化了不同参数对开关振荡的影响。

关键词：晶体管；开关振荡；寄生参数；电路模型

1\. 引 言

SiCMOSFET相比于SiMOSFET，具有更高的工作结温和更大的功率密度，近年来广泛应用于工业级及车规级领域。由于器件管脚、电路结构中存在寄生参数，在较高的电压变化率和电流变化率的作用下，其在高速开关中容易引起电压过冲及振荡现象，带来电磁干扰(EMI)等问题。

此处基于双脉冲测试平台，以TO247-3L封装和TO247-4L封装的SiCMOSFET为研究对象，首先对其开关过程建立简化电路模型，其次通过电路模型计算出开关振荡的数学表达式，最后通过实验来验证开关振荡模型的精确性，为工程技术人员进行EMI设计时提供理论依据。

2\. 双脉冲测试电路与寄生参数

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQicpAKvryUJqcZM44WxPLFxT4qUSdJojx178WnNWZscdjtKLXMOBSWPA/640?wx_fmt=png&from=appmsg)

图1分别为TO0247-3L和TO247-4L封装结构的SiCMOSFET双脉冲电路，其中,Udc为直流母线电压；Lloop1为母线杂散电感；Ugs为驱动电源；Rgex为驱动电阻；VD为上桥臂二极管，其为负载电感Lload提供续流回路，Cj为其结电容。下桥臂为此处研究的SiCMOSFET,Lg，Ld，Ls为杂散电感；Cgs，Cgd，Cds分别为寄生电容；Rgin为栅极内阻。

可见，T0247-4L封装结构的器件将功率源极和信号源极分开，从而功率回路和驱动回路完成了解耦，其除了能提升开关速度以及降低损耗外，也能防止开关状态下源极杂散电感上感应的电压干扰到驱动回路，造成桥臂串扰现象，在实际应用中优势明显。

3\. 开通阶段振荡分析

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQmWBs6plfUQRUK8nNwRjicyCvFibHDN8jXziaySenr3EcWWgT7HMfjv81A/640?wx_fmt=png&from=appmsg)

图2为开通阶段等效电路,以TO247-3L封装器件为例，由图2a可见，Cds被旁路，结电容Cj承担母线电压Udc，Rds(on)为下桥臂SiC MOSFET完全导通后的电阻。接着对图2a电路进行简化计算，得到图2b，c电路模型。其中Rg=Rgin+Rgex，Ciss=Cgs+Cgd, Lloop2=Lloop1+Ld。

图2b中，虚线框中的阻抗网络为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQxOEMiab4vlnkUdlLkvZa9iaJhNpUKFFcVexdL4Nx5YIc9YFvgIQhwEGA/640?wx_fmt=png&from=appmsg)

最终完全开通后的双脉冲电路被简化为图2c中的LCR串联电路，对其建立2阶微分方程，其中u(t)为电压值为Udc的瞬时开启电压：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQyvlW3F0ZbgOT1XECRRjYZ5U60SsmxFaVXI8QVibuzF4KmCiacBsPM8Hw/640?wx_fmt=png&from=appmsg)

此时LCR电路所引起的振荡将会在Req2上消耗，所以Req2上的振荡即为下桥臂SiCMOSFET开通后Uds的振荡。接着对式(3)进行求解：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQJIYdp4ltGxRiccdrrfVbDZ9Xl4jUATOX6Z73QtHCblRQkIQTQT9CW3w/640?wx_fmt=png&from=appmsg)

式中：t为SiCMOSFET的开通上升时间。

求解得到Cj上的振荡波形为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQTCUeUkro334k316c6k5Asqjia9aHf36icicJ38twv8cWfCU2Ono8IMbjQ/640?wx_fmt=png&from=appmsg)

此时Req2上的振荡波形为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQpk4iaMDxmENSPfsLRh2icic7XlFiaNmI0lczJyYSuV3W6a7kdeicDy9ibztg/640?wx_fmt=png&from=appmsg)

若选用T0247-4L封装的器件,则Lloop2=Lloop1+Ld+Ls1,Req2=Rds(on)。

4\. 关断阶段振荡分析

图3为关断阶段等效电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQFxWoB6N0JY36GflMY1bGC1ibDU41RGILWt4q96PoD38fOReDvicCTgJQ/640?wx_fmt=png&from=appmsg)

以T0247-3L封装器件为例，由图3a可见，下桥臂SiCMOSFET的沟道回路被断路，其虚线框中三角形连接的结电容网络可以转化为图3b中的星形连接网络，其中：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQzXdCjibD5r1JfdOgiaVX9x0AucJicPJZgUyfBNmYnicP5tX9qogHZt4ujQ/640?wx_fmt=png&from=appmsg)

对图3b虚线框中的阻抗网络可以进行简化计算，则得到如下表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQWibVyCIFd0fACr9wpRgsFNicA7E6fcNHeM2hoctQvxjVr9TeZQvTNjrw/640?wx_fmt=png&from=appmsg)

最终完全关断后的双脉冲电路被简化为图3c的LCR串联电路，对其建立2阶微分方程：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQ7AlDqzic3icTrOXoo8WKicMMzQBBQtaiacLas1gj8JBYuwPzfIsZnehn4g/640?wx_fmt=png&from=appmsg)

此时LCR电路所引起的振荡最终会在Req3上消耗，所以等效电容Cd上的振荡即为下桥臂SiC MOSFET关断后Uds的振荡。

接着对式(11)进行求解：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQFTbVEay2H1zDohf1vK3PryQ8xcliaZxLt9N5p1UycAZm6QGK6cpM9wg/640?wx_fmt=png&from=appmsg)

式中：tf为SiC MOSFET的关断下降时间。

求解得到Cd上的振荡波形为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQkpK3OFze2vyWEIB8icXicwSPjS3zA2d9JteJ1iaTdic18cYM9ZCYRkvtlg/640?wx_fmt=png&from=appmsg)

若选用T0247-4L封装的器件，则Lloop2=Lloop1+Ld(不变),且有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQHeCSaPfqtx39lbCWyn2V6bvZ62YLQja0qiae5ib5s2QR4hadiamk1JK3w/640?wx_fmt=png&from=appmsg)

5\. 实验验证

对上面推导出来的开关阶段电压Uds的振荡模型进行验证，通过AnsysQ3D仿真软件对PCB的寄生参数进行提取，确保设计的T0247-3L与T0247-4L测试平台的寄生参数保持一致。选用器件为两款1200V/40mΩ平面栅SiC MOSFET，测试时确保筛选的TO247-3L和TO247-4L器件的静态参数保持一致，以降低器件参数波动对双脉冲测试结果的影响。

双脉冲测试条件为：Udc=800V;lD=40A;Ugs=18V/-5V;Rgex=2.5Ω;Lload=250μH;Tc=25℃。振荡模型中寄生参数均由LCR电桥实测及Ansys Q3D仿真软件提取所得，具体数值如下：Udc=800V；Rgin=1.6Ω;Rgex=2.5Ω; Lg=7nH; Ld=5nH; Ls1=5nH;Ls2=3nH;Uds=0V时,Cgd=1299pF,Cgs=2837pF,Cds=2177 pF;

Uds=800时,Cgd=9pF,Cgs=3035pF,Cds=116pF, Cj=125 pF;Rds(on)=40 mΩ; Lloop1=25nH。最后通过Matlab软件对开通阶段与关断阶段的振荡模型进行求解，得到图4,5。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk1lmK1UiaicuL5ph2gEG2OAQIwj0TEF1yGDzb5aPG5YMUHaXO2wiaMm2pGXeQDToubtY0hM3r2gLqOg/640?wx_fmt=png&from=appmsg)

可见无论是开通阶段还是关断阶段，U实测波形和计算波形在振荡幅值和振荡频率上均具有高度的一致性。T0247-4L封装器件相较于T0247-3L封装器件，开关时间更短，开关损耗也更低，但在关断阶段振荡现象更为严重。

6\. 结论

SiC MOSFET的开关振荡现象由多种电路参数、器件寄生参数综合作用产生，此处分别选取了TO247-3L，TO247-4L封装的器件进行实验验证，由第3，4节中的模型推导公式可以得到，这些参数在开关阶段不同程度地影响着振荡电压的振幅、频率及衰减系数。通过此处的建模思想，可以为优化器件设计、电路布局、降低系统EMI提供一定的理论指导。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)