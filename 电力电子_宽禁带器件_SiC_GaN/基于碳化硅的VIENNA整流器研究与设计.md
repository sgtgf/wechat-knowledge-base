# 基于碳化硅的VIENNA整流器研究与设计


> 原文地址: [https://mp.weixin.qq.com/s/iC-1IktQpGJzZSocpzycyw](https://mp.weixin.qq.com/s/iC-1IktQpGJzZSocpzycyw)

文章来源：电力电子技术

作者：葛洪勇，祝博伟，李海洋，赵许强（中车青岛四方车辆研究所有限公司，山东青岛266031）

摘要：介绍了一种应用于高速动车组充电机的VIENNA整流器，全部采用碳化硅（SiC)功率器件。与传统的硅（Si)不控整流器相比，基于SiC的VIENNA整流器，交流侧谐波含量低、功率因数高；与脉宽调制(PWM)整流器相比，功率开关数量少、桥臂无直通危险。SiC器件相比Si器件，导通电阻小、工作频率高、损耗低。首先简要介绍了VIENNA整流器的基本原理，然后，针对17kW系统的三相输入电感、直流输出电容和控制器等进行了详细设计。最终，搭建了一台17kW样机进行试验验证。

关键词：整流器；碳化硅；功率器件

1\. 引言

目前高速动车组列车的充电机多为AC/DC变换充电机，AC/DC环节多为不控整流、SiICBT器件。虽然列车充电机在输入端的不控整流技术实现成本低，但导致了列车辅助交流供电网侧电流波形严重畸变，功率因数较低，产生大量的无功功率，造成谐波干扰，对交流供电系统和负载带来一系列的危害。随着高速铁路市场对网侧友好、高效率、高功率密度的市场需求，不控整流拓扑和ICBT已不再满足要求，而VIENNA整流器网侧谐波含量低、功率密度高，满足市场的需求。新一代SiC宽禁带功率器件与传统的Si器件相比，具有更低的导通电阻、更高的击穿电压、更高的工作频率等优点，使用SiC功率器件的充电机，系统功耗降低了30%,体积减小了20%,重量减少了15%。

在此设计研究了列车充电机的AC/DC部分，基于全SiC器件的VIENNA整流器，实现AC380V转换为DC700V，提高了输入的功率因数，实现了列车的交流供电网侧友好、高效率、高功率密度。介绍了三相VIENNA整流器的基本原理，针对实际的需求，对于系统的主电路和数字控制器进行了相应的设计。主电路部分主要包括三相输入电感、直流侧电容。基于搭建的系统样机，进行了试验验证。

2\. 三相VIENNA整流器电路结构和原理

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicYj5TwXr0wAbWKwh5I8PZjGicmjPMXXiaFJtRWseicxMyIEby6BwKtHsOg/640?wx_fmt=png&from=appmsg)

三相VIENNA整流器电路拓扑如图1所示，包括输入滤波器、三相不控整流桥、功率开关和直流侧电容。此处不控整流桥为SiC二极管，功率开关为SiCMOSFET，两个SiCMOSFET通过共源极串联组成，器件电压应力小，可靠性高。

VIENNA整流器工作时，桥臂电压UaN,UbN,UcN取决于SiCMOSFET的状态和输入电流ia，ib，ic的方向。以a相为例,当ia为正时,SiC MOSFET导通时,UaN=O;SiC MOSFET关断时,UaN=Uc1。反之,同理。因此，可以通过控制SiCMOSFET的开通和关断，控制相电流的大小，保持相电流为正弦波，维持直流侧输出电压的稳定。

3\. VIENNA整流器工程设计

针对17kW的实际系统需求，对三相VIENNA整流器的主电路和控制器进行了详细的设计。主电路部分主要包括直流侧支撑电容、三相输入电感等。系统的额定输入为三相AC380V，输出电压700V，技术指标如下：三相输入线电压/频率为380V/50Hz，输出电压为700V，额定输出功率P=17kW,开关频率f=40kHz,系统效率η在满载时大于95%，输入电流总谐波畸变率(THD)小于5%。

3.1直流侧电容设计

VIENNA整流器直流母线电容的主要作用有两个：①稳定直流侧电压；②缓冲交流侧与直流侧的能量交换。母线电容的大小，不仅影响输出电压的纹波，且影响系统的动态性能。由于VIENNA整流器拓扑的特性，输出电压中含有六倍频的纹波电压，直流母线电流纹波最大值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7Hics8kY2vVYCW5P3onn17oLibtLtYRjStn9Xq6JZw4iaN7aUO7QY2wNLfhw/640?wx_fmt=png&from=appmsg)

式中：Us为相电压有效值；ls为相电流有效值。

极端情况下，母线电流的交流分量全部由输出电容提供，则输出电容最小值为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicYMiaWJHcbbzC5Owl0OGfeicHjS7HavOuyJBg0rsbr6jZ9eic5DXIX7rXQ/640?wx_fmt=png&from=appmsg)

式中：ω。为工频角频率；Φ为相电压与相应相电流的相移，一般取cosΦ=1;ΔUomax为允许的输出电压纹波最大值，一般取为输出电压的2%。

该设计中输出电压为700V，则纹波电压设计最大值为14V；考虑到电解电容有等效串联电阻(ESR)，故在实际选用电容时，其容量比理论值偏大，为减小ESR，该设计中采用多个电解电容并联。

3.2三相输入电感设计

交流侧电感主要影响两个方面：①交流侧电流的谐波；②系统的动静态性能。电感值的大小与系统的开关频率有关，高开关频率能够减小输入电感的体积，但同时会增加功率器件的开关损耗，降低效率。该设计中开关频率折中取为40kHz。根据交流侧电流的最大允许纹波来确定电感的取值下限，根据动态性能要求来确定电感取值的上限：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicmiabUmCg07FgLfltY7FFkZQuFtBV0UbC2yibeh0icVEMkGOt3kaz8BvGw/640?wx_fmt=png&from=appmsg)

式中：Udcref为母线电压的参考值；Uin为输入相电压；lN为输入相电流的峰值；Ts为开关周期；ΔImax为输入电流的最大纹波值，此次设计中取为输入电流的20%。

3.3控制器设计

3.3.1电流内环设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicT2QRkOz3DsHLqAdZ6Z0pVDjDl0PXFbuNic3kKQdB9j52gib1IxSXbvbQ/640?wx_fmt=png&from=appmsg)

所提控制策略为电压电流双闭环控制，由于状态空间模型中d，q轴之间存在耦合，需要进行解耦，解耦框图如图2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicGRurEerMbAdk7Jwn6ic82sdLRcGUbBdG68eocRBN07dsl2M7S7fl0Uw/640?wx_fmt=png&from=appmsg)

式中：Kip，Kii为电流控制器PI参数；idref，iqref为电流指令值。

以d轴为例，考虑电流采样和PWM延迟，忽略电网电压扰动ed，eq，可得电流环简化结构如图3所示。图中,Kpwm为PWM的增益。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicXlBqESSAsrBiaVCy8oLAF4tCWFZ9lhjR8pSq7TC6YtWPE0xUc7wmDSw/640?wx_fmt=png&from=appmsg)

未补偿前的电流环开环传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicnicrDjyCBYQM34tj6gYjlib66SvZXUDo8QrGwFHu6PH2j7ctorvvnZgA/640?wx_fmt=png&from=appmsg)

电流环开环传递函数的波特图如图4所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HiceW8HiaRfCe1hIqQrbL8D2nRGFiaa66N0EPzGiaQyBZeBl64iaFj7u0EMPQ/640?wx_fmt=png&from=appmsg)

电流内环一般要求有较快的响应速度，可按照典型I型二阶系统设计，以PI调节器零点抵消电流控制对象传递函数的极点，即Ti=L/R，取系统阻尼比ξ=0.707,有：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicvHicObKTNMIYCsvaiafZVrS9eL15CTLoNEv8fQwSic0sgOlxE560afJKQ/640?wx_fmt=png&from=appmsg)

因为VIENNA整流器的开关频率远高于工频，因此，电流内环闭环传递函数可简化为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7Hico67Vq9kbs6Y6YdfTr9690f4axV3wYIibNh07tjxefianFwAdAAK1gQsA/640?wx_fmt=png&from=appmsg)

电流环闭环传递函数的波特图如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicXm6ZBAYrfPO4zEIgY4AgFabEWVBNgK3NKcZ703Xs13uQpjel415GDQ/640?wx_fmt=png&from=appmsg)

3.3.2电压外环设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicYaumAQeV9Qaqf7WcmsBJlCiawpmm0tmKibOjf3UFF7dkhUmqHCSbrTvA/640?wx_fmt=png&from=appmsg)

只考虑电压采样延迟并忽略电网电压扰动和负载扰动，电压环简化结构如图6所示。图中，Kup，Tu为电压环控制器参数。  

未补偿前电压环开环传递函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicfYyQOO45d9w0HRWrTLGkibUmnYJIM2BgKiazA7ZS2lraMNptd6dHZ4icw/640?wx_fmt=png&from=appmsg)

电压环开环传递函数的波特图如图7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7Hicf4mspuqrxibUxwY17IgNXUyIzHq5NygHJgmDkNgZOutTds4DDfuBkLQ/640?wx_fmt=png&from=appmsg)

电压外环无需较快的响应速度，主要考虑抗干扰性，来稳定母线直流电压。按照Ⅱ型系统设计：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicZia8YSwTovm0eDKKUwOPq5lBbMXvRLiciaFticeH4XXfGEeRiaWeialopLgw/640?wx_fmt=png&from=appmsg)

式中：hu为频带宽。

将 hu=tu/(8Ts)=5代入式(9),得到电压环PI参数分别为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HiccOye541e4Eou3Mtg66P1BibxuXYH7RqbI5bXaoOdo2CGTlYdolYpiaicw/640?wx_fmt=png&from=appmsg)

VIENNA整流器一般采用双载波，为便于数字控制器的实现，采用载波反相调制。在调制波中注入3次谐波，减小VIENNA整流器电流谐波含量17\]。

4\. 仿真和试验验证

此处在Matlab/Simulink仿真环境中搭建三相VIENNA整流器模型，进行系统仿真，仿真参数如下：三相输入线电压/频率为380V/50Hz，输出电压为700 V,P=17kW,f=40kHz,三相输入电感为420μH,直流侧输出电容为2100μF。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicnpIp4813plkDHYEP4NNnyOGaEo1bcpyBricoY4htKVBrv6ibJGWuwZlw/640?wx_fmt=png&from=appmsg)

图8a，b中，三相输入电流为正弦波形，正弦性良好；其中a相电流的THD=2.57%，满足小于5%的技术指标。图8c中，电流相位跟踪输入电压相位，相位差为零，实现了单位功率因数。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicCzUljbTMLTz89f9oLnNNFotHt4eAm7VniaPRK0j5xZibYpkGOdEjuQQQ/640?wx_fmt=png&from=appmsg)

图9为输出侧的直流电压波形，可以看出，电压稳定在700V左右，纹波电压峰峰值在4V左右，满足要求。

搭建了一台17kW的三相VIENNA整流器样机，采用TMS320F28335型DSP作为控制器，三相输入电感、直流侧电容参数与仿真保持一致。功率开关器件采用C3M0025065K型SiCMOSFET,二极管整流桥选用C4D20120D型SiC肖特基二极管。

在17kW负载条件下用电能质量分析仪对输入电源品质进行了测量，谐波含量在5%左右，功率因数大于0.99。图10为实际测得的上、下半桥电压Up,Un和输出直流电压Udc波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslVc4mdphw2icZqKbjYiam7HicCRuxCjiaZII4ToP1pBXOmI0mCWwEMaG6j9CZydgfsH6o1ewibicpRObXg/640?wx_fmt=png&from=appmsg)

可见，上、下半桥电压均稳定在350V左右，输出直流电压稳定在700V左右，控制效果良好。

5\. 结论

此处研究设计了一台基于全SiC功率器件的应用于高速动车组充电机的VIENNA整流器，结合17kW系统进行了具体工程设计，主要包括输入侧电感设计、输出侧支撑电容设计和控制器设计。试验结果表明，VIENNA整流器在交流侧实现了单位功率因数，三相输入电流THD满足性能指标，直流侧输出电压稳定，上下半桥电压平衡。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)