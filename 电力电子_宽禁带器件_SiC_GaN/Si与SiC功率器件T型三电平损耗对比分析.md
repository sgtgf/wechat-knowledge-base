# Si与SiC功率器件T型三电平损耗对比分析


> 原文地址: [https://mp.weixin.qq.com/s/bZuD2HjL7POY5A9GeyAh-w](https://mp.weixin.qq.com/s/bZuD2HjL7POY5A9GeyAh-w)

文章来源：智能电网

作者：崔梅婷1，谢立军2，孟向军3，吕淼3，徐关澄3，张海龙3(1．国网智能电网研究院，北京市昌平区102209；2．中国电力科学研究院，北京市海淀区100192；3．西安许继电力电子技术有限公司，陕西省西安市710075)

摘要：分析载波周期内开通器件与电压、电流之间关系，在此基础上给出Si模块和SiC模块的T型三电平电路损耗计算模型。能够根据器件在额定状态下的特性参数，计算出导通损耗和开关损耗，从而得到电路损耗。并对使用si模块和SiC模块时逆变器损耗、效率进行对比分析，验证该模型的正确性。然后，搭建Si和SiC模块的T型三电平电路实验平台并进行测试。最后，对比理论分析及实验结果，得出使用SiC功率器件可以使电路损耗大幅降低，大大提高光伏逆变器系统的效率的结论。总之，在全球能源互联网的带动下，新能源产业必然焕发生机，助推新一轮工业革命。

关键词：损耗；SiC；T型三电平

0 引言

在全球能源互联网发展过程中，太阳能等清洁能源将成为主要的电力来源。因此，逆变器的效率问题受到更大的关注。秉承“硅进铜退”的理念，多电平拓扑结构增加了半导体功率器件数量，而减少了铜、铁等原材料的成本，逆变器总体成本呈下降趋势。

从实用性和控制复杂性方面考虑，在中高压、大功率领域中选择较多的主电路拓扑是三电 平变换器结构。三电平比两电平拓扑因逆变器输出增加了零电平，功率器件的电压应力减半，输 出脉动电压更接近正弦波，输出电流总谐波畸变率更小，同时可以减小滤波器参数从而降低滤波电感的损耗。

本文首先给出Si模块和SiC模块的T型三电平电路损耗计算模型；然后搭建仿真模型及实验平台，通过理论及实验计算Si模块和SiC模块的电路损耗，以验证该模型的正确性。结果表明：使用SiC功率器件可提高开关频率，减小滤波器件体积，使损耗更低，有效提高了整个系统的效率。

1 损耗计算模型

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPuR8JyKXQ5MibopomcsJHCJsV2icroibywsmnlueKXicNejVolc7vI1RqYQ/640?wx_fmt=png&from=appmsg)

T型三电平电路拓扑如图l所示，因三相对称，只对其中一相分析即可，以A相为例进行分析。假设电压、电流分别为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPczic3Vzvh29jB8rT5h30WhGGT3MVcOmP5qCyIxLCd5iagjNsz9LVFNRw/640?wx_fmt=png&from=appmsg)

式中：U、I为电压电流峰值；φ为电压与电流相位差。

载波周期内开通器件与电压、电流之间关系如图2所示，可以看出，(O，π-φ)区间内T1、T2和D3导通。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPMhUibIT2ic2m1fibqyXQPAqwEchsibfhA1e2fwybfEndw9f2ib4d9HBzVdQ/640?wx_fmt=png&from=appmsg)

采用不同调制方式时，占空比是不一样的。采用正弦脉宽调制时，载波周期内开关管导通占空比如表1所示。其中M为调制比，根据下式计算得到： 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPbeTCdqQlbIaF6JdIibEibJaS15G0DMiaHA8vicLJaPQ1ZhLib1vKK0cqpTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPd5SmjZ2rfYmsmjIbibHZnVGJUJHHeHZ48USlBy2ibQPGyTBhHAHDY1icQ/640?wx_fmt=png&from=appmsg)

1.1  IGBT损耗模型

开关器件的损耗包括导通损耗Pcond和开关损耗Pswo

1.1.1 导通损耗

IGBT端电压Uce和电流Ic之间的关系可近似为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPZiaicuYa1m5icW4XYUOjcn69S6c6wibLxxwZhmofwbwJzVicYibwo6KcHmhw/640?wx_fmt=png&from=appmsg)

式中：Uce0为门槛电压；Rce为Uce-Ic斜率电阻，取10％和90％两点直线的斜率。

同理，由二极管的U-I特性可以得到二极管的斜率电阻rf：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtP3t00hvbaUrQG1hBjJxtFFgKzI4V1icnCGF0oy55BE1DGmtp7fzGQvxQ/640?wx_fmt=png&from=appmsg)

式中Uf0为二极管导通门槛电压。

根据表1，对每个器件在导通区间内积分，即可得到对应的导通损耗。以T1为例，其导通区间为(0，π-φ)，且在该区间的导通占空比为Msin(ωt+φ)，进行积分有

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPDIv7COlOG1Mz5diaSVicOzst7iajgfYUS8YNgj5SJA2wD8IgtWoXS0z0w/640?wx_fmt=png&from=appmsg)

同理可以得到T2、D1、D2的损耗，由互补性可知D3、D4、T3、T4的损耗。

1.1.2 开关损耗

通过产品手册得到测试工况下开关开通损耗Eon和关断损耗Eoff,开关损耗Esw等于两者线性求和。从而计算得到开关损耗Psw。。

1.1.3 损耗计算式

由1.1.1和11.1.2节的计算可得到A相4个IGBT和二极管的损耗。

T1和T4的损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPIjOwntc8JXm4OsQ7uY4icHTc9Idl0L0iaMUibmibkIErVQJe9LsgUtAibEA/640?wx_fmt=png&from=appmsg)

式中：Inom、Unom为产品手册查到的测试电流、电压值；kI、KU、GI为校正系数，如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtP0tpoWKPssU8aWotm2EBngvg8OeYjpDZDJmsFnKeEg3CzERmVSqOD5w/640?wx_fmt=png&from=appmsg)

T2和T3的损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPzxXwtnJGEge8omwLp7ricUdGNicLP8VdzVSh3x1YOvBTuicakCxfqib0Gw/640?wx_fmt=png&from=appmsg)

1.2 MOSFET损耗模型

当前电力电子领域应用的固态主流器件是Si材料IGBT，但是由于制造工艺的限制，SiC材料IGBT短期内无法问世，因此，本文给出SiC材料MOSFET三电平逆变电路损耗计算模型。

1.2.1 导通损耗

以Tl为例，对其进行积分得到

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPBXbzYwGCtbGO1xLB9SCLKWiccmxbDNnVSamxElOQP3K1ibsNglLIxOibw/640?wx_fmt=png&from=appmsg)

式中Rds(on)为斜率电阻。

同理可以得到T2、Dl、D2的损耗，由互补性可知D3、D4、T3、T4的损耗。

1.2.2 开关损耗

测试工况下开关损耗最Esw=Eon+Eoff。

1.2.3 损耗计算式

由1.2.1和1.2.2节的计算可以得到A相4个MOSFET和二极管的损耗。

T1和T4的损耗：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtP8ibsj678sFn9sHQKPDibiaN3ys3qRHSZtQ5IcIXRJOoiaKXOqHCpdWeIvA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPRt5ndlyWq0YuLFBUZZ33qeicuVlItI8Ciaoia8DUWnfUnArc7G9CHRdmQ/640?wx_fmt=png&from=appmsg)

2 Si模块损耗计算

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPB96Qaw5ztNEnicEPtl6QY3c4IcJs1kRjWicE5kEqXCpnBbbiaqZx6ICxw/640?wx_fmt=png&from=appmsg)

为验证损耗计算公式的正确性，选取英飞凌T型三电平模块F3L80R12W1H3-B11，根据1.1节计算公式进行计算，并将损耗计算结果和英飞凌官网仿真结果进行了对比，结果如表3所示。其中仿真条件为：直流母线电压700Vdc，交流输出相电流有效值22A，交流相电压230V，频率50Hz，开关频率16kHz。由表3可见：仿真功率因数分别为1．0和0．8时，其总损耗结果很接近，误差小于6％，精度可以达到工程应用需求。

3 SiC模块损耗计算

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPT3ydmoceVMXr3Yu9aKj6cuyJYnP4bSUrGvz33HczOxwjQ35wlBpJVQ/640?wx_fmt=png&from=appmsg)

选取罗姆的SiC模块BSMl20D12P2C005和二极管SCH2080KE搭建三电平T型模块，根据1.2节计算公式进行计算，表4为SiC功率模块的计算结果，仿真条件与Si功率模块相同。

表3-4中的损耗值为A相功率模块损耗的1／2，三相功率模块总损耗为表中损耗的6倍。

由表4可知，在功率因数为1.0时，SiC比Si模块损耗降低118.08W，占输出功率的0．79％。功率因数为0.8时，SiC比Si模块损耗降低126.42W，占输出功率的0.84％。由表5所示不同频率下SiC模块和Si模块损耗对比结果可以看出，开关频率越高，T型三电平电路使用SiC模块比Si模块提高的效率值也越大。开关频率在20-100kHz之间时，逆变器效率大约可提高1.5％。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPkvVy1elGrhK9fC8kVtAOtKrmeiaZXiaNX9yfKX4D4X50JXSicibcZKro1Q/640?wx_fmt=png&from=appmsg)

4 实验分析

为验证模型有效性，分别搭建了上述Si和SiC模块的三电平电路并进行测试。表6为逆变器的参数配置，表7为测试的损耗和效率结果对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPhHT1zooY8IFawwYv4kIEo1qICmR7icCdE0GIm4rXqbYzN0DOf2hO01w/640?wx_fmt=png&from=appmsg)

表7中可看出，SiC模块逆变器的效率比Si逆变器效率高了1.316％，这个结果和理论计算结果有一些差异，主要是因为SiC逆变器测试时电网电压偏高，其导致逆变器的直流输入电压对应抬高到了740V。图3、4分别为SiC模块逆变器和Si模块逆变器效率测试结果截图。其中：Urms1-Urms3、Irms1-Irms3为交流侧电压及线电流值，Udc4、Idc4为直流侧电压、电流值，PΣA为交流侧功率，P4为直流侧功率。因受IGBT模块自身封装的限制无法单独测试IGBT及其二极管的损耗特性，测试方法为分别测试逆变器的直流侧电压、电流和交流侧电压、电流，从而得到整个逆变器系统的损耗，被测逆变器只分别更改IGBT和SiC MOSFET，逆变器的其他系统参数相同。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsldaBkvI3dt6hQdc9vDEdtPNza2FVOD1jlLfAn1eQDEqJWQshNg2cdDSrHJaGG4BZUpHOdNmYAymg/640?wx_fmt=png&from=appmsg)

可以看出：SiC功率器件的使用可以有效降低半导体功率模块的损耗。

5 结论

准确计算半导体功率器件的损耗对于工程实践中的系统效率估计、系统损耗分析和热设计均有重要意义。本文推导Si和SiC功率器件损耗计算公式，并通过实验验证了损耗模型的准确性。最后通过Si和SiC的损耗对比可以看出：SiC功率器件的使用可以有效降低半导体功率模块的损耗，从而提高整个系统的效率，这必将有益于光伏发电这样的新能源行业以及全球能源互联网建设。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN6icyKvAwYyYJ19zlgAlrKQjE7OxtyuUSdXY7KkpnU5xIHeX0ziaNpFzlA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=13)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN6q3PIJ2Kkx7IOZFiatamsLyXyAgicDibibD5tcVVQ2XRhAnwpWiblSMjJicEw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN63Aia0AzTL0HLoJUq6AHRCQ7pelRZdowqEFCpdr4dgU2LKm7zySgibXWw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=15)