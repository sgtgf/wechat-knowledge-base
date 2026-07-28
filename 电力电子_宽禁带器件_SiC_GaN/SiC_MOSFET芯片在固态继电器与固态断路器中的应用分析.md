# SiC MOSFET芯片在固态继电器与固态断路器中的应用分析


> 原文地址: [https://mp.weixin.qq.com/s/oL\_GMCEfcfTrF1S0XGiK0Q](https://mp.weixin.qq.com/s/oL_GMCEfcfTrF1S0XGiK0Q)

### 一、固态继电器（SSR）与固态断路器（SSCB）：定义、作用与要求

#### 1. **固态继电器**

**作用与定义**：一种使用半导体器件（如MOSFET、晶闸管）**完全替代机械触点**，实现电路无触点、无火花通断的电子开关。其核心是通过光耦或变压器等隔离技术，实现控制信号与负载回路的电气隔离和功率切换。

#### 

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9icKh8jqDcfzZ1wc4YkDKsbl293Xgt0EM46SQuuJCsOkS8icCxDsQDqdjw/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

**关键应用领域**：

**①新能源汽车高压系统**：电池包主正/主负继电器、快充继电器、电机控制器预充回路。这是当前最大且增长最快的市场。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9icMSRmic9akC5dIe5icdS5wDPnaWpM3j180TfIqbnc47KyeQqVKgQnTmwQ/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

②高端工业与测试设备：需要高频、长寿命开关的场合，如半导体测试仪、高频加热系统。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9iciaIeV7kiaqonbMAMbRJgo7pkfnyLkpdckq3PkdichG6lw2d50oVPSJCdA/640?wx_fmt=jpeg)

图片来源：网络

③航空航天与军工：对可靠性、抗振动、长寿命要求极高的环境。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9icmG275BtfUB9XOx7KTDicL69CnGBrHmjZaDPwhMrgCTJYBLBzYiaey0jw/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

**④智能电网与储能**：直流微网中的快速投切开关。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9icibqJDgfuaD0sW3jeOqWRcQQWvFJhdNanG9Ib2UfibtRYxxuGIu6icIcfA/640?wx_fmt=jpeg)

图片来源：网络

对功率器件的关键要求：

**低通态电阻**：直接决定导通损耗和温升，影响功率密度。

  

**高阻断电压**：尤其在电动汽车（400V/800V平台）和光伏系统（1500V）中。

  

**快速开关能力**：实现高频操作和精准控制。

  

**高温稳定性**：适应紧凑空间下的高温环境。

#### 2. **固态断路器**

**作用与定义**：一种基于功率半导体和高速检测电路的**无机械运动部件**的电路保护装置。它能在微秒级内检测并切断故障电流，实现“限流分断”。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9ic9vVVlbib17TccQ9NfDSDiaiaflHYqQuOVeKl3Qyu6UShn576rbuPPyebg/640?wx_fmt=jpeg)

图片来源：网络

**关键应用领域**：

**①直流微网与数据中心**：保护敏感的服务器电源和储能系统，防止直流电弧故障。**（典型案例：腾讯/阿里数据中心直流配电柜试点）**

**![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9icHbkALu56s6rBcicZITI9ibQNNEVpBlqEdYzfdcLDiaSmnw6qByjpibnDTQ/640?wx_fmt=jpeg&from=appmsg)**

**图片来源：网络**

②新能源汽车高压配电盒：替代或与熔断器协同，实现可复位、智能的短路保护。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9ichUN4mR6V406Ht7XRicOv8YsCHR0lDDFHS3IpYiabqRBrPTDdOxzYwFRg/640?wx_fmt=jpeg)

图片来源：网络

  

③舰船综合电力系统：特别是中压直流配电系统，要求快速保护以维持电网稳定。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9iccZkk3VMHZF9Pfxx3zFkpQhh2V23yQENDNfez16x8t6yXS4AYibFO9icA/640?wx_fmt=jpeg)

**

图片来源：网络

**

  

**④光伏/储能系统**：用于组串级快速关断和直流侧保护，满足安全法规要求。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9ic4COQbUoZ3fOKjicKaocia4YiablazuGicuMXX3XRtibCx1D0qxeWJk7LUqQ/640?wx_fmt=jpeg)

  

**对功率器件的关键要求**：

**极强的短路耐受与分断能力**：能在承受数倍额定电流的极短时间内安全关断。

  

**超快的开关速度**：分断速度直接决定了能限制的故障电流峰值（I²t）。

  

**低通态损耗**：作为长期串联在电路中的元件，损耗必须极低。

  

**高可靠性**：作为保护“守门员”，自身可靠性必须远超被保护系统。

### 二、SiC器件在SSR与SSCB中的应用优势及方案介绍

SiC MOSFET和SBD（肖特基二极管）凭借其材料特性，为全固态开关与保护方案带来了质的飞跃。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9icyYPQQIHyqS9HtMds8uWgwZibiaMfKW6OmbrxZicYc7qWtnaGeC0CsEmHw/640?wx_fmt=jpeg&from=appmsg)

注：对应的分立器件，均可提供裸芯片供应

#### **核心优势总结**

**1.速度与频率极限**：开关频率可比硅基MOSFET/IGBT高一个数量级，轻松实现纳秒级关断。

  

**2.高压与低损耗的完美结合**：SiC MOSFET在1200V/1700V电压等级下，其比导通电阻远低于硅超结MOSFET，同时没有IGBT的拖尾电流，开关损耗极低。

  

**3.高温工作能力**：结温可达200°C以上，简化热管理，或允许在更高环境温度下运行。

#### **具体方案与案例分析**

**1\. 在固态继电器（SSR）中的应用**

**典型方案**：

**拓扑**：常采用**背对背串联的SiC MOSFET芯片**（两个MOSFET芯片的源极相连）以实现交流负载的双向阻断。对于直流应用，则使用单个MOSFET芯片并联体二极管或额外SBD芯片用于反向续流。

  

**驱动**：专用隔离驱动芯片或隔离变压器驱动，确保高速开关下的信号完整性和共模瞬态抗扰度。

  

**案例：**

**电动汽车电池主继电器**。全球领先的Tier 1供应商（如泰科电子、松下车载系统）已推出基于SiC MOSFET的全固态主接触器方案。

  

**优势**：

零电弧，超长寿命：实现千万次以上的开关循环，远超机械继电器的数万次。

  

**极致速度**：开关时间从机械的10-20ms缩短至毫秒甚至微秒级，实现电池系统的**主动安全管理**（如碰撞后极速切断）。

  

**体积与重量大幅减小**：无电磁线圈和大触点，功率密度显著提升。

  

**静音运行**：无吸合/断开噪音。

**2\. 在固态断路器（SSCB）中的应用**

**典型方案**：

**拓扑**：主功率通路由**多颗SiC MOSFET芯片并联**构成。核心子系统包括：

**①高速电流检测**：采用高带宽、高精度的霍尔传感器或分流电阻+隔离放大器。

  

**②纳秒级保护驱动**：集成有源米勒钳位、退饱和监测功能的驱动IC，能在1-2微秒内响应关断指令。

  

**③能量吸收电路**：MOV、TVS或RCD缓冲电路，用于吸收关断时回路电感产生的巨大尖峰能量。

  

**案例：**

**数据中心48V/400V直流配电**。根据**Omdia**的报告，数据中心追求超高效率和可靠性，传统机械断路器分断慢、易产生电弧。维谛（Vertiv）、华为等厂商正在推广采用SiC SSCB的智能配电单元，实现**预测性维护和精准保护**。

  

**优势**：

**①限流分断**：SiC SSCB能在电流上升初期（微秒内）切断，将故障电流峰值限制在很低的水平，大幅降低热应力和电磁力。

`   `

**②可复位与智能化**：故障清除后可远程或自动复位，无需更换熔丝。集成通信接口（如PMBus），实时上报电流、温度、健康状态。

  

**③适应高压直流**：SiC器件的高压优势使其在400V/800V直流系统中游刃有余，而硅基方案在此电压下损耗和体积难以优化。

**三、发展趋势及技术要求**

#### **发展趋势**

**1.电压等级上探与模块化**：为适应兆瓦级储能、电动船舶等场景，3300V及以上SiC模块将用于中压SSCB。模块化并联设计成为实现千安级大电流SSCB的主流方式。

  

**2.高度集成与“智能功率单元”**：

**①驱动与保护集成**：将SiC MOSFET、栅极驱动、温度/电流传感、保护逻辑集成在一个封装内（如智能功率模块或共封装的“DrMOS”形态），减少寄生参数，提升可靠性。**英飞凌、Wolfspeed**等已推出相关评估板。

  

**②与控制器集成**：未来可能将MCU甚至通信PHY集成，形成完全数字化的“智能开关节点”。  

  

3.从替代到系统重构：SiC SSCB不仅替代断路器，其快速响应特性将重塑系统保护架构。例如，通过多级SSCB的协调配合，实现选择性保护，避免大面积停电。

  

**4.成本下降与市场下沉**：随着衬底产能扩张和良率提升，SiC器件成本正以每年10%-15%的速度下降，将加速其在商用电动车、高端工业等更广阔市场的渗透。

#### **关键技术挑战与要求**

**1.驱动与保护的极致优化**：

**挑战**：充分利用SiC速度优势的同时，必须克服由极快dv/dt/dt引起的**振铃、串扰和电磁干扰**。

  

**要求**：必须使用门极驱动电阻优化、开尔文源极连接、具有极高共模抑制比的隔离驱动方案。  

  

2.短路鲁棒性与可靠性：

**挑战**：SiC MOSFET的短路耐受时间短（2~3µs），对保护电路的**检测速度和精度**提出极限要求。

  

**要求**：需采用**硬件全保护电路**，在驱动IC层级实现无延迟响应，并配合系统级的过流检测冗余。  

  

3.热设计与并联均流：

**挑战**：在紧凑空间内处理高功率密度带来的散热问题，以及多管并联时的动静态均流。

  

**要求**：采用低热阻封装（如DTS、银烧结）、双面冷却技术。在布局上追求极致对称，并考虑门极驱动路径的匹配。  

  

4.标准与认证：

**挑战**：针对SSCB这类新产品，行业标准（如UL 489B - 固态断路器标准）仍在完善中。

  

**要求**：方案开发需与认证机构紧密合作，尤其在**故障条件下的安全性验证**（如承受短路并安全关断）方面需要大量测试数据支撑。

### **总结**

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYj3JPDPX2FoBzFLkjYa9icaPia6MX7KB9nAvibUtNJXicT6Hts10VUxZ0ko9ic3so7doLvDF2MGicY8uw/640?wx_fmt=jpeg)

SiC MOSFET器件是解锁下一代**高可靠、超快速度、高功率密度**固态开关与保护方案的关键。在SSR领域，它正在彻底重新定义“继电器”的性能边界；在SSCB领域，它正从“电路保护者”升级为“**智能能源管理节点**”。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslTy3Iy6IZcTUdSS4RZLtFict8RFIbSylX4QXBUQufy4EibmdOkdujv9iacPoOg00sic74wNPclNRx5aw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTy3Iy6IZcTUdSS4RZLtFiciciaYnveWfYicwqTxDn5crENLvbgCckcBDBrjR37AaRicIC8SK5BwPkKAw/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=35)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTy3Iy6IZcTUdSS4RZLtFichAJIerPoEcl7pbIuJe1yQFxpMCdcC7AvVpyPkAHjFzjTiaw6JPdpJUQ/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=36)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslTy3Iy6IZcTUdSS4RZLtFicr6rAyRqEeP6XiapXmic6BHlFvrxkInQ4fmo9KqURuPVG3FqpibK8xXA3w/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=37)