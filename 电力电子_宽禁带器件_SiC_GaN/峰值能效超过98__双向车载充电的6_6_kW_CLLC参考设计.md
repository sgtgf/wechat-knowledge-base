# 峰值能效超过98%！双向车载充电的6.6 kW CLLC参考设计


> 原文地址: [https://mp.weixin.qq.com/s/tf2br7NNEkWByjf30v5SXw](https://mp.weixin.qq.com/s/tf2br7NNEkWByjf30v5SXw)

**文章来源：**安森美(onsemi)

随着双碳目标的推进，电动汽车车载充电器(以下简称“OBC”)，正朝双向能量传输的方向发展，其既能从电网获取电能，又可将电能反馈至电网。配置了双向OBC的电动汽车，可用剩余电量为耗尽电量的电动汽车充电，也可在户外充当220 V电源，还可被当作分布式储能站，帮助电网消峰填谷。本文将探讨CLLC拓扑在双向OBC应用中的设计挑战和安森美(onsemi)的6.6 kW CLLC参考设计如何解决这些挑战。

**什么是CLLC拓扑**  

如图1所示，隔离DCDC是构成双向OBC的主要组成部分之一。在200W以上隔离DCDC应用中，包括单向OBC，很多都会用到LLC拓扑，因为它具有能效高、EMI表现好、开发难度低等优势，但这种拓扑只能用于单向能量传输。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmQJqIU4yNkqXNWicBsWZKFtsNCtekTMgqMqU9Z85OpJtPrMVmgp1Jeb1DFd6qZ1oHZhqfFiboIOKibQ/640?wx_fmt=jpeg&from=appmsg)图1：双向OBC框图

大部分的双向OBC中隔离DCDC级都会采用CLLC拓扑。CLLC拓扑(如图2所示)是将LLC拓扑中电池侧的桥式整流二极管换成有源桥，然后再在变压器的电池端串上一个C来确保磁平衡。给电池充电的时候，左侧的桥做主动开关，右侧的桥做同步整流；当电池向外做逆变的时候，右侧的桥做主动开关，左侧的桥做同步整流。CLLC继承了LLC拓扑的特点，采用脉冲频率调节来控制增益，具有同样的软开关特性，因此，能效高，EMI表现好，简单，但存在增益调整范围窄、难以满足宽广的电池电压变化范围的挑战。为此，安森美推出一个6.6 kW CLLC参考设计SEC-6K6W-CLLC-GEVK，它采用宽母线电压范围来应对电池电压变化，峰值能效超过98%，帮助设计人员解决挑战，加快开发。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmQJqIU4yNkqXNWicBsWZKFt2zOgSsgicV0aoU9MbILBpwCTj7pxl0cicnbkEmbhzk8RAic0QicPicgxydA/640?wx_fmt=png&from=appmsg)图2：CLLC拓扑

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmQJqIU4yNkqXNWicBsWZKFtMKArEwz6pCA1ByFn3VNyiczHYibGKSpoVGAdg1NIPTAHOJC2Ppiauicrtg/640?wx_fmt=png&from=appmsg)图3：6.6 kW CLLC参考设计SEC-6K6W-CLLC-GEVK的峰值能效超过98%

**6.6 kW CLLC参考设计SEC-6K6W-CLLC-GEVK**  

安森美的6.6 kW CLLC参考设计SEC-6K6W-CLLC-GEVK包括三个主要部分，如图4：中间那片大板是功率板，所有高压大电流的线路都在这片板上。右上角是控制板，通过接插件和功率板相连，方便大家在不同的控制和功率方案之间做交叉测试。左侧是谐振腔组合，包含了一个集成了谐振电感的变压器和两个谐振电容板。谐振电容由多颗MLCC经串并联组成，以在满足耐压和电流的要求下实现更小体积。谐振腔也是可拆卸的，方便设计人员验证不同的变压器、电感和电容参数。方案中包含了散热器、风扇、辅助电源、保护电路等等。连接电源和负载就可以在满载下做长时间测试。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmQJqIU4yNkqXNWicBsWZKFtjBjkl9ibttZwy9ShWswfJ14QMiaOZbzQoX1J3Wc4tDaNDpzz8x7QicTmw/640?wx_fmt=jpeg&from=appmsg)图4：6.6 kW CLLC参考设计SEC-6K6W-CLLC-GEVK

功率板中，位于母线侧和电池测的两个有源桥分别由四颗1200 V/40毫欧NVHL040N120SC1和四颗900 V/20毫欧NVHL020N090SC1碳化硅(SiC) MOS构成。SiC可比Si实现更高的功率密度、更高的开关频率和极高效的设计。驱动这八颗SiC MOS的是八颗磁隔离大电流驱动器。驱动信号由控制板通过控制接口送出。  

控制接口的所有信号都位于电池侧，电平不超过12 V。电池端的电压、电流通过采样完通过分压、放大后直接送到控制接口。母线侧的电压采样由一颗独立的ADC来完成，数据通过SPI总线再经数字信号隔离器传到控制接口。  

控制板中，我们选用了一颗车规级的LLC控制芯片NCV4390，来做脉冲频率调制 (以下简称“PFM”) 和同步整流控制；用低功耗MCU，来做充电的恒压值设定；用车规级轨到轨运放NCV33204来做恒流充电控制；再配上我们的车规级逻辑器件来做电网到电池和电池到电网方向的判断和转换。  

**电路细节的设计考量**  

如果想要节省成本，可以把1200V和900V SiC MOS换成900V和650V SiC MOS，但需要控制好开关尖峰，最好从降低PCB寄生电感着手，可以通过添加旁路电容实现。  

高电压低Rdson的SiC MOSFET，它的Qg很大，为了在高开关频率下维持高效，必须用大电流的门极驱动器来驱动。另外，我们方案的控制接口位于电池侧，驱动母线侧的MOS必须要隔离，而且要符合安规。虽然驱动电池侧的MOS不需要安规，但是为了统一物料，我们还是选用相同的器件NCV57000，短路保护和故障报告功能是其亮点。  

隔离门极驱动的另一个不错的选择是NCV51561同样带安规隔离，驱动电流更大，一推二，延时更短。虽然没有过流保护，但它的双高禁止功能也能保护到来自信号端的，由于干扰或误操作而造成的炸机风险。  

**选择高压辅助电源的最佳拓扑**  

该6.6 kW CLLC参考设计的辅助电源采用了“反激 + Buck-boost”的拓扑以应对高达750 V的母线电压，如表1，相较其他3种拓扑，这种反激+Buck-boost拓扑在成本、能效、输入电压下限、可靠性、母线电容分压平衡方面都更胜一筹。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmQJqIU4yNkqXNWicBsWZKFtnYoia8uPIPiaYQhMBkVITOhD9tVEJMCP1zA4ZfLbAMpvaPvDDicQIo6Lg/640?wx_fmt=jpeg&from=appmsg)表1：800 V 输入电压下可选的高压辅助电源拓扑

**选择为高边门极驱动供电的最佳方案**  

辅助电源设计当中的另外一个挑战，是多组且隔离的电源轨。该6.6 kW CLLC参考设计总共需要7组电源轨。  

SiC驱动需要负压，且SiC MOS的Vcc容差范围较窄，所以不宜采用自举，否则会带来稳压、时序、功耗、噪声等诸多问题。而如果采用隔离DCDC，会存在PCB占位、成本和噪声干扰等问题。第3种方法是通过变压器绕组来输出所有电压，这是这几种方法里成本最低的一种，但缺点是工艺不好控制，易出错，噪声干扰大。我们的6.6 kW CLLC参考设计采用的脉冲变压器扩展绕组解决了上述3种方法的所有问题，更重要的是它大大缩短了动点引线的长度。  

**双沿跟踪自适应同步整流控制**  

前面提到，在控制板中采用LLC控制器NCV4390来做PFM环路和同步整流控制。NCV4390采用电流模式，环路响应快，不易震荡，自带双沿跟踪同步整流控制功能，在PFM模式和间歇工作模式之间插入了一段PWM工作模式，目的是改善轻载下的能效和电压纹波，而且NCV4390的保护功能也非常强大。值得强调的是，这种双沿跟踪同步整流控制方法已获市场验证是非常靠谱的。  

**总结**  

电动汽车OBC正朝向双向能量传输的方向发展，以配合双碳目标的推进。隔离DCDC是构成双向OBC的主要组成部分之一。大部分的双向OBC中隔离DCDC级都会采用CLLC拓扑。安森美的6.6 kW CLLC参考设计SEC-6K6W-CLLC-GEVK，基于SiC MOS，峰值能效超过98%，还解决了CLLC拓扑在双向OBC应用中的PCB占位、噪声干扰、可靠性和成本等诸多设计挑战，它采用硬件控制器来做PFM控制，帮助设计人员加快开发。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)