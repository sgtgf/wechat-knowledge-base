# SiC MOSFET 的栅极驱动电压设置与线性模式应用的注意事项


> 原文地址: [https://mp.weixin.qq.com/s/iezehTAF0dw22Wr-U8VCGQ](https://mp.weixin.qq.com/s/iezehTAF0dw22Wr-U8VCGQ)

**文章来源:**罗姆半导体（ROHM）

在进行电气设计时，为了充分发挥SiC MOSFET 的性能，SiC MOSFET的栅极-源极间电压(VGS)的设置非常重要，驱动电压低于推荐值时元件可能会发生故障。本应用笔记将就栅极驱动电压设置的注意事项进行说明。

推荐栅极驱动电压

请根据规格书中记述的推荐值和注释来设置 SiC MOSFET的栅极驱动电压。参考示例 Figure1，本示例中，推荐驱动电压 VGS\_OP的turn-off电压为0V，turn-on时电压为15V～18V，如注释中提到，禁止使用不足10V的turn-on电压。turn-on电压在推荐值以下可能会发生各种各样的故障，详情将在下一节进行说明。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSNQdyLDFTj4QSmMpukOnoot3LJuDCVNKDdtv5X0G1UJ9pZ3tKRW7Q8Q/640?wx_fmt=png&from=appmsg)

栅极驱动电压和导通阻抗

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMS5QZAlM5nITWCFzn9aARuiclaicFib9gI0zm8UpObRE2ibiaw28APYpFuqfw/640?wx_fmt=png&from=appmsg)

Figure 2.为 Si MOSFET 和 SiC MOSFET 的结构图。SiC MOSFET的漂移层电阻比 Si MOSFET 低，而目前的技术水平，由于 SiCMOSFET 沟道部分的载流子迁移率较低，所以沟道电阻比 SiMOSFET 高。因此，栅极电压 VGS越高，导通阻抗越低（随着 VGS的升高，阻值逐渐饱和）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMS7TNporzoqNmXysia96bhEclfy9OicwIciaCXdA1DcmuEwS42KasGiac5Hg/640?wx_fmt=png&from=appmsg)

Figure3为SiCMOSFET SCT4062KWAHR 的RDS(on) vs VGS特性。可以看出，SiC MOSFET 与一般的 Si MOSFET 不同，即使在沟道导通的状态下，导通阻抗也会跟随 VGS值大幅变动。因此，为了降低导通阻抗，充分发挥 SiC MOSFET 的性能，提高 VGS值是极其有效果的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSLCoE9Ihmbg2Xw7IJhJv7QjpZYxPDWDiaubyGwh5h9eXeBR64ojACeFg/640?wx_fmt=png&from=appmsg)

另外，在 VGS较低的区域（本例为10V以下），有工作温度越高，导通阻抗越低的趋势（导通阻抗具有负的温度系数）。因此，如Figure 4，在元件并联的电路中，高温时电流可能会集中在一个元件上，从而导致热失控。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSFeNErpaXic7a2IdK8X8nbYLZjGRvx3ObWrKeG8FUV6ntGCgVUKRSz6A/640?wx_fmt=png&from=appmsg)

另外，如 Figure 5，在多个单元并联的芯片内，电流也可能会集中在部分单元，从而导致热失控。热失控的机理如 Figure 6左侧所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMS1CpFqGnjMWXKtaNE614zvW1P573HdnSCG8wzI3mcOmjcOkcoibdhU3g/640?wx_fmt=png&from=appmsg)

另一方面，在 VGS较高的区域（本例为10V 以上），由于导通阻抗具有正的温度系数，因此电流不会集中在一个元件或部分单元上（如 Figure6右）。

栅极驱动电压较低时的问题点

如下总结了栅极驱动电压低于推荐值时的问题点。

1\. 由于导通阻抗为负的温度系数（Figure 3），所以在并联多个元件的电路及单元的芯片内（Figure 4, 5），高温时电流可能集中在一个元件或部分单元上而发生热失控（Figure 6）。

2\. 由于导通阻抗随着VGS 值变动较大（Figure3），因此会产生较大的损耗，当结温超过绝对最大额定值时会发生故障。

3\. 在该区域，除上述2个因素外，导通阻抗的偏差较大，损耗的偏差也会变大，散热设计也会变得比较困难。

综上所述，请务必使用推荐的栅极驱动电压（VGS）。  

线性模式应用

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSoKfnY8r7zKB17mh2aPzBKITJ9HbCEwV9MD7b0FBZ8icYIwYlibA6gu3w/640?wx_fmt=png&from=appmsg)

以上就开关模式应用的栅极驱动电压进行了说明，而在启动电路（Figure 7）和放电电路（Figure 8）等线性模式应用中，栅极驱动电压需低于推荐值。在这样的电路拓扑中使用 SiC MOSFET进行设计时，必须充分验证实机上是否存在热问题。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnD11K4e8S5y2oLVGc7IBMSAplzxfsic1oVPcMXibgcA8HQiczaJ7ia57SoDV1BFK9IMib5Tqc6sNziaAiag/640?wx_fmt=png&from=appmsg)

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kfcJrmcb2716g3x3ApLFKvEaFCadf8yxp2Qp7P8xwPviaQToWzMPNNhw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kELUCcUWDecF1MWkd0iaPYZGicRawwkSdBpC9NICKWmnlFgIl0GlfjeAA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2koYF23N8tPa3ICcc9mtWqYI49sXCwNnkm4icoJtQgUQ432ZJbw9kgBeg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)