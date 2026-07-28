# 总结 | PCB电源设计中的7个要点

原创 硬件笔记本 2024-05-26 10:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/VJKEYsqJhFyhCmXqftKDNw](https://mp.weixin.qq.com/s/VJKEYsqJhFyhCmXqftKDNw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

今天主要是关于：****PCB电源设计的7个注意事项****。

# **一、PCB电源设计**

**电源设计**的目的不仅仅是将交流电转换为直流电。电源的功能是****以正确的电压和电流向电路元件提供给电力****。未来电压低至1.8和1.2V器件还是会比较常见。毕竟低电压对电源噪声的容忍度比较低。

电源还需要**电流限制来限制最大电流**。因此电源的重要参数是电压、最大电流、电压纹波和最大电流时的热损耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYYGtMHIHNs6cEa81umsoqSn1uiaQpHETicmdicgD4Cgic2nG4eC7R5Q2P9w/640?wx_fmt=other&tp=webp&wxfrom=13&wx_lazy=1&wx_co=1&random=0.4187432852533841)电子电路中的典型功率流框图

电源电子电路的典型功率流如上图所示，电子电路需要1.8V至12V范围的电压。1.2V、1.8V、3.3V、5V和12V是最常用的电压。

在第一级中，230V/10VAC的输入交流电压被转换为6-12V范围内的隔离直流电压。第二极采用降压开关稳压器，将6-12V电压转换为5V或者3.3V。此外，使用LDO（低压差稳压器）将3.3V转换为1.8V或1.2V。

在开关模式电源（SMPS-开关电源）出现之前，铁芯变压器用于将高压230VAC/110VAC转换为12VAC.二极管桥式整流器进一步将整流为最大约为12\*1.4=16.8VDC。线性稳压器用于将电压降低至所需水平。

**开关电源的使用提高了将电压转换为低电平的效率，减少了电源的PCB占用空间，并减少了纹波。**

# **二、PCB电源的设计**

对于电源设计，工程师需要良好的PCB布局。下面是在PCB电源设计时的7个注意事项：

**1、合适的稳压器**

一般来说，会选择线性稳压器或者开关模式稳压器。线性稳压器提高低噪声输出，但散热较高，需要冷却系统。开关模式稳压器在较宽的电流范围内效率很高，但开关噪声会导致响应出现尖峰。

关于稳压器的更多内容，欢迎阅读以下文章：

还搞不懂稳压电路？一定要看这一文，稳压电路工作原理+电路设计

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYcEq9VokTOTy3hHBGNkSFWuB5zrrCjWf9Fe1eym90kMKC9khIQiclWicQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.16698338772670418&tp=webp)

稳压器

**1）线性稳压器**：

-   ****输入电压高于输出电压****，因为电压压降最小
    
-   会产生比****较大的功率损耗和散热****，因此会降低线性稳压器的效率。
    
-   ****简单****、****便宜****，可以提供异常的****无噪声的电压输出。****
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYAGohAhZ40NXTAgUr72JP67hvMkdZ6YHZkns9NH4EvOTjAPC9fkMiaRQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.017368706874155482&tp=webp)

线性稳压器

如果你选择****线性稳压器****，就需要考虑具有****低压差的稳压器****，并且在进行制造之前进行热分析。

**2）开关稳压器**：通过在电感中临时存储能量，在不同的开关事件以不同的电压释放该能量，将电压转换为另一种电压。

-   使用快速开关MOS管，高效稳压器的输出可以通过改变脉宽（PWM）的占孔比来调整，效率取决于电路的散热，在这种情况下****散热较低****。
    
-   开关稳压器的PWM开关会****在输出中产生噪声或纹波****。开关电流可能会导致其他信号中的噪声串扰。因此开关电源需要与关键信号隔离。
    
-   ****价格较高****，需要连接****较多的无源器件****，但****不容易发热****。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYAGjpic5mOokFKHYynSX7hOiabHMrpOic1mK0qBmppm19NcROuedmIfl0A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1&random=0.8187395331148386&tp=webp)

开关稳压器

如果你****选择开关稳压器，需要考虑电磁兼容性****。（因为开关稳压器会发出EMI噪声，但是没有办法消除EMI，只能通过滤波、减少电路环路、接地层和屏蔽等降低EMI）

**2、PCB电源的热管理**

****电源的性能直接取决于散热****，大多数电子元件在电流通过时都会发热。发出的热量取决于组件的功率水平、特性和阻抗。如面所述，合适的稳压器可以减少电路中的散热。开关稳压器的效率很高，因为散发的热量较少。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYcY5WIuGOXTyeUTFYOBhwbwwNKZFv1ic82ft9ZRdJ6pnQ0aickibFhFA7w/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.45839174124544213&tp=webp)

PCB散热

为了保证设备在环境温度下工作，工程师应该考虑适当的冷却方法。

如果选择线性稳压器，建议使用****散热器****或者其他冷却方法，如果设备的散热量很高，可以考虑使用****风扇****。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYUe7icpEHlF4MjMAgQo00FCWKJoKMNsrFicPZQRSv6hZIAjQicaeMJslVg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.2764434674853433&tp=webp)

PCB散热

整个PCB的散热可能不均匀，具有高额定功率的组件可能会散发大量热量，从而在周围形成热点。可以在组件附近使用****散热孔****。

**3、接地层和电源层，以实现更好的PCB供电**

**接地层和电源层是用于电力传输的低阻抗路径**。****电源需要单独的接地层来分配功率、降低EMI、最大限度低减少串扰并减少电压降。****电源层专用于电力传输到PCB的所需区域。

工程师需要**单独处理接地网络**的各个部分。在多层PCB中，一层或者多层可以专门用于接地层和电源层。此外，还可以通过在2个有源信号之间放置阶地层来减少干扰和串扰，从而有效地用地包围信号走线。

关于PCB设计接地的更多内容，欢迎阅读以下文章：

PCB接地端怎么处理？PCB接地系统详细讲解，14种PCB接地方案总结

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYDmLUiboXapu3TqPWauM0y6ejRibOrqVglTZ00Hrf2fm6lj77xNPMibUGw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.8594632072345725&tp=webp)

  

**4、去耦电容和旁路电容**

当电源分配到整个板上的组件时，不同的有源组件将导致电源轨中的地弹和振铃。在这种情况下，工程师应该要****在电源引脚附近使用去耦和旁路电容****，满足设备电流需求的短尖峰。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYtl1FTJibBxfssFJSVVibmyc9PpicFUrJvLA2gDYibRBMaUz5qicdYSlDUSw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.06629151581920456&tp=webp)

  

**去耦**主要是降低电源和接地之间的阻抗，**去耦电容**充当辅电源，****提供IC所需的电流****。充当本地电荷源以及支持切换。所有去耦电容都必须靠近IC的电源引脚连接，另一端直接连接到到低阻抗接地层。需要使用短走线连接去耦电容和接地过孔，以最大程度地减少此连接的串联附加电感。

**旁路电容******旁路噪声并减少电源总线的波动****，放置在靠近设备或者IC的位置。连接在电源和接地之间，****补偿许多IC同时开关电源和接地层电势的变化****。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYryXSxkKDic3evqEhhdqqYJWCvwXB7arNBM1WV1vV6G5CmxibiaF2WKQpQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.47521206240825964&tp=webp)

去耦电容和旁路电容

**5、EMI滤波**

工程师都希望****电源的EMI水平保持在他们定义的频谱限制以下****。因此，在电源输入点使用**EMI滤波器来降低传传导噪声**。

关于EMI的更多内容，欢迎阅读以下文章：

如何抑制MEI电磁干扰传导？如何选择EMI滤波器？看这一文，秒懂

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYNxQlN11MxT6MQvYbibne4DFanFSxycicZaKWSZP5n8AQ4XvOFicJZ87tA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.872456039313815&tp=webp)

EMI滤波器

**6、电力传输系统的频率响应**

当电源突然加载时，例如从空载到满载，电压输出将趋于短暂下降并恢复到正常电压。

在某些情况下，在在电压稳定到正常之前，输出会振荡一段时间。****如果振荡超出设计眼制，则需要调整输出电容和补偿电容。****

例如，对于LM7805，建议在输出引脚旁边放置一个0.uF的电容。同样，调节器的突然卸载可能会导致过冲和振荡。

为了获得更好的电路设计响应，请确保所选组件在设计限制范围内。无论电路是交流还是直流都有不同的响应。交流和直流电路应分开考虑。

**7、电源完整性 (PI)**

工程师应该要****确保电源设计的电源完整性****。

电源完整性就是输送到电路的电源质量。它衡量系统内功率从电源传输到负载的效率，确保为所有电路和设备提供适当的功率，从而实现电路所需的性能。

噪声较小的电源可以确保更高的电源完整性。电源完整性设计只不过是管理电源噪声。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nJjpKuusmeEXI9Cib8gAicf5rtflz5ybYibn9qIIicwU6zcxoWjBBqRKxZcSzol90jVWzia3vnP8zttfns7cN3wAtw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&random=0.5013238371623814&tp=webp)

电源完整性

以上就是关于****PCB电源设计的7个注意事项****总结。

  

原文链接：

https://www.toutiao.com/article/7254482891286561315/

免责声明：本文来源张工谈DFM，版权归原作者所有，如涉及作品版权问题，请及时与我们联系

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。